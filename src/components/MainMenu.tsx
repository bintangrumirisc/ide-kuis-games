import { GameScreen } from '../types';

interface MainMenuProps {
  onSelectGame: (screen: GameScreen) => void;
}

export function MainMenu({ onSelectGame }: MainMenuProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-30">🍎</div>
        <div className="absolute top-20 right-20 text-5xl animate-bounce opacity-30" style={{animationDelay: '0.5s'}}>🥦</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce opacity-30" style={{animationDelay: '1s'}}>🐟</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-bounce opacity-30" style={{animationDelay: '1.5s'}}>🥛</div>
        <div className="absolute top-1/2 left-5 text-4xl animate-bounce opacity-20" style={{animationDelay: '0.7s'}}>🍊</div>
        <div className="absolute top-1/3 right-5 text-4xl animate-bounce opacity-20" style={{animationDelay: '1.2s'}}>🥕</div>
      </div>

      {/* Logo & Title */}
      <div className="relative z-10 text-center mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 border-2 border-white/30 shadow-xl">
          <span className="text-5xl">🛡️</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
          BPOM <span className="text-green-300">Food Safety</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-200 font-semibold mb-1">Game Edukasi Keamanan Pangan</h2>
        <p className="text-blue-300 text-sm md:text-base max-w-md mx-auto">
          Belajar keamanan pangan dengan cara yang menyenangkan! 🎮
        </p>
        <div className="mt-3 inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
          <span className="text-xs text-blue-200">Badan Pengawas Obat dan Makanan Republik Indonesia</span>
        </div>
      </div>

      {/* Game Selection */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl px-4">
        {/* Game 1 */}
        <button
          onClick={() => onSelectGame('sortir')}
          className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer"
        >
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🧺</div>
          <h3 className="text-xl font-bold text-white mb-2">Sortir Makanan</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            Pilah makanan yang aman dan tidak aman! Geser ke keranjang yang benar.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="bg-orange-500/30 text-orange-200 text-xs px-3 py-1 rounded-full">🎯 Sortir</span>
            <span className="bg-orange-500/30 text-orange-200 text-xs px-3 py-1 rounded-full">⏱️ 60 detik</span>
          </div>
        </button>

        {/* Game 2 */}
        <button
          onClick={() => onSelectGame('quiz')}
          className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
        >
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">📋</div>
          <h3 className="text-xl font-bold text-white mb-2">Kuis Pangan</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            Uji pengetahuanmu tentang keamanan pangan dengan kuis interaktif!
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="bg-purple-500/30 text-purple-200 text-xs px-3 py-1 rounded-full">🧠 Kuis</span>
            <span className="bg-purple-500/30 text-purple-200 text-xs px-3 py-1 rounded-full">📝 12 Soal</span>
          </div>
        </button>

        {/* Game 3 */}
        <button
          onClick={() => onSelectGame('tangkap')}
          className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer"
        >
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🎯</div>
          <h3 className="text-xl font-bold text-white mb-2">Tangkap Makanan</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            Tangkap makanan sehat yang jatuh dan hindari makanan berbahaya!
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="bg-green-500/30 text-green-200 text-xs px-3 py-1 rounded-full">🏃 Aksi</span>
            <span className="bg-green-500/30 text-green-200 text-xs px-3 py-1 rounded-full">⏱️ 45 detik</span>
          </div>
        </button>
      </div>

      {/* Footer info */}
      <div className="relative z-10 mt-8 text-center">
        <p className="text-blue-300/60 text-xs">
          © 2024 Game Edukasi BPOM | Keamanan Pangan untuk Semua 🇮🇩
        </p>
      </div>
    </div>
  );
}
