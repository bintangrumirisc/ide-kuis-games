import { useState, useEffect, useCallback, useRef } from 'react';
import { catchFoods } from '../data/foods';
import { FallingFood, GameResult } from '../types';

interface CatchGameProps {
  onFinish: (result: GameResult) => void;
  onBack: () => void;
}

export function CatchGame({ onFinish, onBack }: CatchGameProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerX, setPlayerX] = useState(50);
  const [foods, setFoods] = useState<FallingFood[]>([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(45);
  const [combo, setCombo] = useState(0);
  const [effects, setEffects] = useState<{ id: number; x: number; y: number; text: string; color: string }[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const foodIdRef = useRef(0);
  const effectIdRef = useRef(0);
  const animationRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);
  const foodsRef = useRef<FallingFood[]>([]);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const comboRef = useRef(0);
  const playerXRef = useRef(50);
  const gameOverRef = useRef(false);

  // Sync refs
  useEffect(() => { foodsRef.current = foods; }, [foods]);
  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { livesRef.current = lives; }, [lives]);
  useEffect(() => { comboRef.current = combo; }, [combo]);
  useEffect(() => { playerXRef.current = playerX; }, [playerX]);
  useEffect(() => { gameOverRef.current = gameOver; }, [gameOver]);

  const addEffect = useCallback((x: number, y: number, text: string, color: string) => {
    const id = effectIdRef.current++;
    setEffects(prev => [...prev, { id, x, y, text, color }]);
    setTimeout(() => setEffects(prev => prev.filter(e => e.id !== id)), 800);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent | React.TouchEvent) => {
    if (!gameAreaRef.current || !gameStarted) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    let clientX: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.max(5, Math.min(95, x)));
  }, [gameStarted]);

  // Keyboard controls
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setPlayerX(prev => Math.max(5, prev - 5));
      if (e.key === 'ArrowRight') setPlayerX(prev => Math.min(95, prev + 5));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = (timestamp: number) => {
      if (gameOverRef.current) return;

      // Spawn food
      if (timestamp - lastSpawnRef.current > 800) {
        lastSpawnRef.current = timestamp;
        const randomFood = catchFoods[Math.floor(Math.random() * catchFoods.length)];
        const newFood: FallingFood = {
          id: foodIdRef.current++,
          name: randomFood.name,
          emoji: randomFood.emoji,
          safe: randomFood.safe,
          x: Math.random() * 80 + 10,
          y: -5,
          speed: 0.8 + Math.random() * 0.6,
        };
        setFoods(prev => [...prev, newFood]);
      }

      // Move foods
      setFoods(prev => {
        const updated = prev.map(f => ({ ...f, y: f.y + f.speed }));
        const active: FallingFood[] = [];
        for (const food of updated) {
          // Check catch
          if (food.y >= 82 && food.y <= 95 && Math.abs(food.x - playerXRef.current) < 12) {
            if (food.safe) {
              const bonus = comboRef.current * 2;
              setScore(s => s + 10 + bonus);
              setCombo(c => c + 1);
              addEffect(food.x, food.y, `+${10 + bonus}`, 'text-green-400');
            } else {
              setLives(l => {
                const newLives = l - 1;
                if (newLives <= 0) {
                  setGameOver(true);
                }
                return newLives;
              });
              setCombo(0);
              addEffect(food.x, food.y, '-1 ❤️', 'text-red-400');
            }
          } else if (food.y > 100) {
            if (food.safe) {
              setCombo(0);
            }
            // Remove
          } else {
            active.push(food);
          }
        }
        return active;
      });

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationRef.current);
  }, [gameStarted, gameOver, addEffect]);

  // Timer
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [gameStarted, gameOver, timeLeft]);

  // Game over effect
  useEffect(() => {
    if (gameOver && gameStarted) {
      cancelAnimationFrame(animationRef.current);
      setTimeout(() => {
        onFinish({
          game: 'Tangkap Makanan',
          score: scoreRef.current,
          maxScore: 200,
          message: scoreRef.current >= 150
            ? '🌟 Luar biasa! Refleksmu tajam dan kamu tahu makanan sehat!'
            : scoreRef.current >= 80
            ? '👍 Bagus! Kamu cukup baik mengenali makanan sehat!'
            : '📚 Terus berlatih mengenali makanan yang aman!'
        });
      }, 1000);
    }
  }, [gameOver, gameStarted, onFinish]);

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-teal-800 flex flex-col items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-lg w-full text-center border border-white/20">
          <div className="text-7xl mb-4">🎯</div>
          <h2 className="text-3xl font-bold text-white mb-4">Tangkap Makanan Sehat</h2>
          <div className="bg-white/10 rounded-xl p-4 mb-6 text-left">
            <h3 className="text-green-200 font-bold mb-2">📋 Cara Bermain:</h3>
            <ul className="text-green-100 text-sm space-y-2">
              <li>🏃 Gerakkan keranjang dengan <strong>mouse/sentuh layar</strong></li>
              <li>⌨️ Atau gunakan tombol <strong>← →</strong> pada keyboard</li>
              <li>✅ <strong>Tangkap</strong> makanan sehat (🍎🥦🐟)</li>
              <li>❌ <strong>Hindari</strong> makanan berbahaya (🦠☠️⚠️)</li>
              <li>❤️ Kamu punya <strong>3 nyawa</strong></li>
              <li>🔥 Combo tangkapan = bonus poin!</li>
            </ul>
          </div>
          <button
            onClick={() => setGameStarted(true)}
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-xl px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg cursor-pointer"
          >
            🎮 Mulai Bermain!
          </button>
          <button
            onClick={onBack}
            className="block mx-auto mt-4 text-green-300 hover:text-white transition-colors cursor-pointer"
          >
            ← Kembali ke Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-teal-800 flex flex-col items-center p-4">
      {/* Header */}
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-3">
          <button onClick={onBack} className="text-green-200 hover:text-white transition-colors cursor-pointer text-sm">
            ← Menu
          </button>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
              <span className="text-yellow-300 font-bold text-sm">⭐ {score}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
              <span className="text-red-300 font-bold text-sm">{'❤️'.repeat(lives)}{'🖤'.repeat(3 - lives)}</span>
            </div>
            <div className={`bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20 ${timeLeft <= 10 ? 'animate-pulse border-red-400' : ''}`}>
              <span className={`font-bold text-sm ${timeLeft <= 10 ? 'text-red-300' : 'text-white'}`}>⏱️ {timeLeft}s</span>
            </div>
          </div>
        </div>
        {combo > 1 && (
          <div className="text-center mb-2">
            <span className="bg-yellow-500/30 text-yellow-200 text-sm px-4 py-1 rounded-full animate-pulse font-bold">
              🔥 Combo x{combo}!
            </span>
          </div>
        )}
      </div>

      {/* Game Area */}
      <div
        ref={gameAreaRef}
        className="w-full max-w-lg flex-1 bg-gradient-to-b from-sky-400/20 via-sky-300/10 to-green-500/20 rounded-2xl border border-white/20 relative overflow-hidden cursor-none select-none min-h-[400px] md:min-h-[500px] touch-none"
        onPointerMove={handlePointerMove}
        onTouchMove={handlePointerMove as unknown as React.TouchEventHandler}
      >
        {/* Sky decoration */}
        <div className="absolute top-3 left-5 text-2xl opacity-40">☁️</div>
        <div className="absolute top-8 right-10 text-xl opacity-30">☁️</div>
        <div className="absolute top-2 right-3 text-lg opacity-20">⭐</div>

        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-800/50 to-transparent" />

        {/* Falling foods */}
        {foods.map(food => (
          <div
            key={food.id}
            className="absolute transition-none"
            style={{
              left: `${food.x}%`,
              top: `${food.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span className={`text-3xl md:text-4xl ${food.safe ? '' : 'animate-pulse'}`}>
              {food.emoji}
            </span>
          </div>
        ))}

        {/* Effects */}
        {effects.map(effect => (
          <div
            key={effect.id}
            className={`absolute ${effect.color} font-bold text-lg pointer-events-none animate-bounce`}
            style={{
              left: `${effect.x}%`,
              top: `${effect.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {effect.text}
          </div>
        ))}

        {/* Player basket */}
        <div
          className="absolute bottom-2 transition-all duration-75"
          style={{
            left: `${playerX}%`,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="text-5xl md:text-6xl">🧺</div>
        </div>

        {/* Game Over overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="text-6xl mb-3">{timeLeft <= 0 ? '⏰' : '💔'}</div>
              <h3 className="text-2xl font-bold text-white">
                {timeLeft <= 0 ? 'Waktu Habis!' : 'Game Over!'}
              </h3>
              <p className="text-green-200 mt-2">Skor: {score}</p>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="w-full max-w-lg mt-3 flex items-center justify-center gap-4">
        <span className="text-green-200 text-xs flex items-center gap-1">✅ Tangkap: 🍎🥦🐟🥛</span>
        <span className="text-red-200 text-xs flex items-center gap-1">❌ Hindari: 🦠☠️⚠️💀</span>
      </div>
    </div>
  );
}
