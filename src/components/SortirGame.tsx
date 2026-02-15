import { useState, useEffect, useCallback } from 'react';
import { sortirFoods } from '../data/foods';
import { FoodItem, GameResult } from '../types';

interface SortirGameProps {
  onFinish: (result: GameResult) => void;
  onBack: () => void;
}

export function SortirGame({ onFinish, onBack }: SortirGameProps) {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [feedback, setFeedback] = useState<{ correct: boolean; reason: string } | null>(null);
  const [streak, setStreak] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [swipeDir, setSwipeDir] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    const shuffled = [...sortirFoods].sort(() => Math.random() - 0.5);
    setFoods(shuffled);
  }, []);

  useEffect(() => {
    if (!gameStarted) return;
    if (timeLeft <= 0) {
      onFinish({
        game: 'Sortir Makanan',
        score,
        maxScore: foods.length * 10,
        message: score >= foods.length * 7
          ? '🌟 Luar biasa! Kamu ahli keamanan pangan!'
          : score >= foods.length * 4
          ? '👍 Bagus! Terus belajar tentang keamanan pangan!'
          : '📚 Ayo belajar lagi tentang makanan yang aman!'
      });
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, gameStarted, score, foods.length, onFinish]);

  const handleChoice = useCallback((chooseSafe: boolean) => {
    if (currentIndex >= foods.length || feedback) return;
    const food = foods[currentIndex];
    const correct = food.safe === chooseSafe;

    setSwipeDir(chooseSafe ? 'right' : 'left');

    if (correct) {
      setScore(s => s + 10 + streak * 2);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }

    setFeedback({ correct, reason: food.reason });
    setAnswered(a => a + 1);

    setTimeout(() => {
      setFeedback(null);
      setSwipeDir(null);
      if (currentIndex + 1 >= foods.length) {
        onFinish({
          game: 'Sortir Makanan',
          score: correct ? score + 10 + streak * 2 : score,
          maxScore: foods.length * 10,
          message: (correct ? score + 10 : score) >= foods.length * 7
            ? '🌟 Luar biasa! Kamu ahli keamanan pangan!'
            : (correct ? score + 10 : score) >= foods.length * 4
            ? '👍 Bagus! Terus belajar tentang keamanan pangan!'
            : '📚 Ayo belajar lagi tentang makanan yang aman!'
        });
      } else {
        setCurrentIndex(i => i + 1);
      }
    }, 1500);
  }, [currentIndex, foods, feedback, score, streak, onFinish]);

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-yellow-800 flex flex-col items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-lg w-full text-center border border-white/20">
          <div className="text-7xl mb-4">🧺</div>
          <h2 className="text-3xl font-bold text-white mb-4">Sortir Makanan</h2>
          <div className="bg-white/10 rounded-xl p-4 mb-6 text-left">
            <h3 className="text-orange-200 font-bold mb-2">📋 Cara Bermain:</h3>
            <ul className="text-orange-100 text-sm space-y-2">
              <li>🟢 Tekan <strong>"AMAN ✅"</strong> jika makanan aman dikonsumsi</li>
              <li>🔴 Tekan <strong>"BAHAYA ❌"</strong> jika makanan tidak aman</li>
              <li>⏱️ Kamu punya <strong>60 detik</strong> untuk menyelesaikan semua</li>
              <li>🔥 Jawaban benar berturut-turut = bonus poin!</li>
            </ul>
          </div>
          <button
            onClick={() => setGameStarted(true)}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-xl px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg cursor-pointer"
          >
            🎮 Mulai Bermain!
          </button>
          <button
            onClick={onBack}
            className="block mx-auto mt-4 text-orange-300 hover:text-white transition-colors cursor-pointer"
          >
            ← Kembali ke Menu
          </button>
        </div>
      </div>
    );
  }

  const currentFood = foods[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-yellow-800 flex flex-col items-center p-4">
      {/* Header */}
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="text-orange-200 hover:text-white transition-colors cursor-pointer text-sm">
            ← Menu
          </button>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-yellow-300 font-bold">⭐ {score}</span>
            </div>
            <div className={`bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 ${timeLeft <= 10 ? 'animate-pulse border-red-400' : ''}`}>
              <span className={`font-bold ${timeLeft <= 10 ? 'text-red-300' : 'text-white'}`}>⏱️ {timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full bg-white/10 rounded-full h-2 mb-2">
          <div
            className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(answered / foods.length) * 100}%` }}
          />
        </div>
        <p className="text-orange-200 text-xs text-center mb-4">
          {answered} / {foods.length} makanan | Streak: 🔥 {streak}
        </p>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center w-full max-w-lg">
        <div className={`relative w-full transition-all duration-300 ${
          swipeDir === 'left' ? '-translate-x-full rotate-[-20deg] opacity-0' :
          swipeDir === 'right' ? 'translate-x-full rotate-[20deg] opacity-0' : ''
        }`}>
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl text-center">
            <div className="text-8xl mb-4 animate-bounce">{currentFood?.emoji}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{currentFood?.name}</h3>
            <p className="text-orange-200 text-sm mb-6">Apakah makanan ini aman dikonsumsi?</p>

            {/* Feedback overlay */}
            {feedback && (
              <div className={`absolute inset-0 rounded-3xl flex items-center justify-center ${
                feedback.correct ? 'bg-green-500/90' : 'bg-red-500/90'
              } backdrop-blur-sm`}>
                <div className="text-center p-6">
                  <div className="text-5xl mb-3">{feedback.correct ? '✅' : '❌'}</div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {feedback.correct ? 'Benar!' : 'Salah!'}
                  </h4>
                  <p className="text-white/90 text-sm">{feedback.reason}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-lg flex gap-4 mt-6 mb-4">
        <button
          onClick={() => handleChoice(false)}
          disabled={!!feedback}
          className="flex-1 bg-gradient-to-br from-red-500 to-red-700 text-white font-bold text-lg py-5 rounded-2xl hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:hover:scale-100 cursor-pointer active:scale-95"
        >
          <span className="text-2xl block mb-1">❌</span>
          BAHAYA
        </button>
        <button
          onClick={() => handleChoice(true)}
          disabled={!!feedback}
          className="flex-1 bg-gradient-to-br from-green-500 to-green-700 text-white font-bold text-lg py-5 rounded-2xl hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:hover:scale-100 cursor-pointer active:scale-95"
        >
          <span className="text-2xl block mb-1">✅</span>
          AMAN
        </button>
      </div>
    </div>
  );
}
