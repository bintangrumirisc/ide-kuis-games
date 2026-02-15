import { GameResult } from '../types';

interface ResultScreenProps {
  result: GameResult;
  onPlayAgain: () => void;
  onMenu: () => void;
}

export function ResultScreen({ result, onPlayAgain, onMenu }: ResultScreenProps) {
  const percentage = Math.round((result.score / result.maxScore) * 100);
  const stars = percentage >= 80 ? 3 : percentage >= 50 ? 2 : percentage >= 20 ? 1 : 0;

  const tips = [
    '💡 Selalu periksa tanggal kadaluarsa sebelum membeli makanan.',
    '💡 Cek nomor registrasi BPOM (MD/ML) pada kemasan.',
    '💡 Cuci tangan dengan sabun minimal 20 detik sebelum makan.',
    '💡 Simpan makanan di suhu yang tepat (kulkas 0-5°C).',
    '💡 Jangan konsumsi makanan yang berubah warna/bau.',
    '💡 Hindari makanan dengan pewarna mencolok yang tidak wajar.',
    '💡 Pisahkan bahan makanan mentah dan matang.',
    '💡 Masak makanan hingga matang sempurna.',
    '💡 Laporkan produk mencurigakan ke BPOM melalui halo.bpom.go.id.',
    '💡 Beli makanan dari penjual yang terjamin kebersihannya.',
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 flex flex-col items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-lg w-full text-center border border-white/20 shadow-2xl">
        {/* Trophy */}
        <div className="relative inline-block mb-4">
          <div className="text-7xl">
            {stars >= 3 ? '🏆' : stars >= 2 ? '🥈' : stars >= 1 ? '🥉' : '🎖️'}
          </div>
          {percentage >= 80 && (
            <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
          )}
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">Hasil Permainan</h2>
        <p className="text-blue-200 mb-6">{result.game}</p>

        {/* Stars */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2, 3].map(i => (
            <span key={i} className={`text-4xl transition-all duration-500 ${i <= stars ? 'scale-100 opacity-100' : 'scale-75 opacity-30'}`}>
              {i <= stars ? '⭐' : '☆'}
            </span>
          ))}
        </div>

        {/* Score */}
        <div className="bg-white/10 rounded-2xl p-6 mb-6">
          <div className="text-5xl font-extrabold text-yellow-300 mb-1">{result.score}</div>
          <div className="text-blue-200 text-sm mb-3">dari {result.maxScore} poin</div>
          
          {/* Progress bar */}
          <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
            <div
              className={`h-4 rounded-full transition-all duration-1000 ${
                percentage >= 80 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                percentage >= 50 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                'bg-gradient-to-r from-red-400 to-pink-400'
              }`}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
          <p className="text-white font-bold mt-2">{percentage}%</p>
        </div>

        {/* Message */}
        <div className="bg-white/10 rounded-xl p-4 mb-6">
          <p className="text-white text-lg font-semibold">{result.message}</p>
        </div>

        {/* Tip */}
        <div className="bg-blue-500/20 rounded-xl p-4 mb-6 border border-blue-400/30">
          <p className="text-blue-200 text-sm font-semibold mb-1">Tips Keamanan Pangan:</p>
          <p className="text-blue-100 text-sm">{randomTip}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={onPlayAgain}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform shadow-lg cursor-pointer"
          >
            🔄 Main Lagi
          </button>
          <button
            onClick={onMenu}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform shadow-lg cursor-pointer"
          >
            🏠 Menu Utama
          </button>
        </div>

        {/* BPOM Footer */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-blue-300/50 text-xs">
            🛡️ Game Edukasi Keamanan Pangan | BPOM RI
          </p>
          <p className="text-blue-300/40 text-xs mt-1">
            Info lebih lanjut: www.pom.go.id | Halo BPOM: 1500-533
          </p>
        </div>
      </div>
    </div>
  );
}
