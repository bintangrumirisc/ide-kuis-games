import { useState, useEffect } from 'react';
import { quizQuestions } from '../data/questions';
import { GameResult, QuizQuestion } from '../types';

interface QuizGameProps {
  onFinish: (result: GameResult) => void;
  onBack: () => void;
}

export function QuizGame({ onFinish, onBack }: QuizGameProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
  }, []);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);

    const correct = index === questions[currentIndex].correctIndex;
    if (correct) {
      setScore(s => s + 10);
      setCorrectAnswers(c => c + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      const finalScore = score;
      onFinish({
        game: 'Kuis Pangan',
        score: finalScore,
        maxScore: questions.length * 10,
        message: finalScore >= questions.length * 8
          ? '🌟 Luar biasa! Kamu sangat paham keamanan pangan!'
          : finalScore >= questions.length * 5
          ? '👍 Bagus! Pengetahuanmu tentang pangan cukup baik!'
          : '📚 Ayo pelajari lagi tentang keamanan pangan!'
      });
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-800 flex flex-col items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-lg w-full text-center border border-white/20">
          <div className="text-7xl mb-4">📋</div>
          <h2 className="text-3xl font-bold text-white mb-4">Kuis Keamanan Pangan</h2>
          <div className="bg-white/10 rounded-xl p-4 mb-6 text-left">
            <h3 className="text-purple-200 font-bold mb-2">📋 Cara Bermain:</h3>
            <ul className="text-purple-100 text-sm space-y-2">
              <li>📝 Jawab <strong>10 pertanyaan</strong> tentang keamanan pangan</li>
              <li>🎯 Pilih jawaban yang paling benar</li>
              <li>💡 Setiap jawaban disertai <strong>penjelasan edukatif</strong></li>
              <li>⭐ Setiap jawaban benar mendapat <strong>10 poin</strong></li>
            </ul>
          </div>
          <button
            onClick={() => setGameStarted(true)}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-xl px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg cursor-pointer"
          >
            🎮 Mulai Kuis!
          </button>
          <button
            onClick={onBack}
            className="block mx-auto mt-4 text-purple-300 hover:text-white transition-colors cursor-pointer"
          >
            ← Kembali ke Menu
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-800 flex flex-col items-center p-4">
      {/* Header */}
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="text-purple-200 hover:text-white transition-colors cursor-pointer text-sm">
            ← Menu
          </button>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-yellow-300 font-bold">⭐ {score}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-white font-bold">✅ {correctAnswers}/{questions.length}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full bg-white/10 rounded-full h-2 mb-2">
          <div
            className="bg-gradient-to-r from-purple-400 to-indigo-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
        <p className="text-purple-200 text-xs text-center mb-6">
          Soal {currentIndex + 1} dari {questions.length}
        </p>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-2xl flex-1">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center text-lg font-bold text-purple-200 shrink-0">
              {currentIndex + 1}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white leading-snug">{currentQuestion.question}</h3>
          </div>

          {/* Options */}
          <div className="space-y-3 mt-6">
            {currentQuestion.options.map((option, index) => {
              let btnClass = 'bg-white/5 border-white/20 hover:bg-white/15 text-white';
              if (selectedAnswer !== null) {
                if (index === currentQuestion.correctIndex) {
                  btnClass = 'bg-green-500/30 border-green-400 text-green-100';
                } else if (index === selectedAnswer && index !== currentQuestion.correctIndex) {
                  btnClass = 'bg-red-500/30 border-red-400 text-red-100';
                } else {
                  btnClass = 'bg-white/5 border-white/10 text-white/50';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${btnClass} ${
                    selectedAnswer === null ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold shrink-0">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-sm md:text-base">{option}</span>
                    {selectedAnswer !== null && index === currentQuestion.correctIndex && (
                      <span className="ml-auto text-lg">✅</span>
                    )}
                    {selectedAnswer === index && index !== currentQuestion.correctIndex && (
                      <span className="ml-auto text-lg">❌</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-5 border border-blue-400/30 mb-4 animate-fade-in">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="text-blue-200 font-bold mb-1">Penjelasan:</h4>
                <p className="text-blue-100 text-sm leading-relaxed">{currentQuestion.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        {selectedAnswer !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg cursor-pointer active:scale-[0.98]"
          >
            {currentIndex + 1 >= questions.length ? '🏁 Lihat Hasil' : '➡️ Soal Berikutnya'}
          </button>
        )}
      </div>
    </div>
  );
}
