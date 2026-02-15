// --- DATA ---
const sortirFoods = [
  { id: 1, name: 'Nasi Goreng Segar', emoji: '🍛', safe: true, reason: 'Makanan dimasak dengan baik dan disajikan segar.' },
  { id: 2, name: 'Buah Apel Segar', emoji: '🍎', safe: true, reason: 'Buah segar mengandung vitamin dan mineral penting.' },
  { id: 3, name: 'Susu Pasteurisasi', emoji: '🥛', safe: true, reason: 'Susu telah melalui proses pasteurisasi untuk membunuh bakteri.' },
  { id: 4, name: 'Makanan Berjamur', emoji: '🍞', safe: false, reason: 'Jamur pada makanan menghasilkan mikotoksin yang berbahaya!' },
  { id: 5, name: 'Ikan Segar', emoji: '🐟', safe: true, reason: 'Ikan segar kaya protein dan omega-3.' },
  { id: 6, name: 'Makanan Kadaluarsa', emoji: '🥫', safe: false, reason: 'Makanan kadaluarsa bisa mengandung bakteri berbahaya!' },
  { id: 7, name: 'Sayur Organik', emoji: '🥦', safe: true, reason: 'Sayur organik minim residu pestisida.' },
  { id: 8, name: 'Jajanan Tanpa Label', emoji: '🍬', safe: false, reason: 'Makanan tanpa label tidak terjamin keamanannya!' },
  { id: 9, name: 'Telur Matang', emoji: '🥚', safe: true, reason: 'Telur yang dimasak matang aman dari Salmonella.' },
  { id: 10, name: 'Daging Mentah Bau', emoji: '🥩', safe: false, reason: 'Daging berbau menandakan kontaminasi bakteri!' },
  { id: 11, name: 'Air Mineral Kemasan', emoji: '💧', safe: true, reason: 'Air mineral kemasan terdaftar BPOM aman dikonsumsi.' },
  { id: 12, name: 'Minuman Warna Mencolok', emoji: '🧃', safe: false, reason: 'Pewarna berlebihan bisa berbahaya bagi kesehatan!' },
  { id: 13, name: 'Tempe Segar', emoji: '🫘', safe: true, reason: 'Tempe adalah sumber protein nabati yang sehat.' },
  { id: 14, name: 'Makanan Lalat Hinggap', emoji: '🪰', safe: false, reason: 'Lalat membawa bakteri penyebab penyakit!' },
  { id: 15, name: 'Roti Gandum', emoji: '🍞', safe: true, reason: 'Roti gandum utuh kaya serat dan nutrisi.' },
  { id: 16, name: 'Sosis Berubah Warna', emoji: '🌭', safe: false, reason: 'Perubahan warna pada sosis menandakan kerusakan!' },
  { id: 17, name: 'Yogurt Segar', emoji: '🥣', safe: true, reason: 'Yogurt mengandung probiotik baik untuk pencernaan.' },
  { id: 18, name: 'Minyak Goreng Hitam', emoji: '🫗', safe: false, reason: 'Minyak goreng bekas berulang mengandung karsinogen!' },
];

const catchFoodsData = [
  { name: 'Apel', emoji: '🍎', safe: true },
  { name: 'Pisang', emoji: '🍌', safe: true },
  { name: 'Brokoli', emoji: '🥦', safe: true },
  { name: 'Wortel', emoji: '🥕', safe: true },
  { name: 'Ikan', emoji: '🐟', safe: true },
  { name: 'Susu', emoji: '🥛', safe: true },
  { name: 'Telur', emoji: '🥚', safe: true },
  { name: 'Nasi', emoji: '🍚', safe: true },
  { name: 'Tempe', emoji: '🫘', safe: true },
  { name: 'Jeruk', emoji: '🍊', safe: true },
  { name: 'Makanan Busuk', emoji: '🦠', safe: false },
  { name: 'Jajanan Ilegal', emoji: '⚠️', safe: false },
  { name: 'Racun', emoji: '☠️', safe: false },
  { name: 'Berjamur', emoji: '🍄', safe: false },
  { name: 'Kadaluarsa', emoji: '💀', safe: false },
  { name: 'Tanpa Izin', emoji: '🚫', safe: false },
];

const quizQuestions = [
  { id: 1, question: 'Apa kepanjangan dari BPOM?', options: ['Badan Pengawas Obat dan Makanan', 'Badan Pengelola Obat dan Makanan', 'Biro Pengawas Obat dan Minuman', 'Badan Pengatur Obat dan Makanan'], correctIndex: 0, explanation: 'BPOM adalah Badan Pengawas Obat dan Makanan yang bertugas mengawasi peredaran obat dan makanan di Indonesia.' },
  { id: 2, question: 'Apa yang harus dicek pertama kali saat membeli makanan kemasan?', options: ['Harga produk', 'Warna kemasan', 'Tanggal kadaluarsa dan nomor izin edar', 'Ukuran kemasan'], correctIndex: 2, explanation: 'Selalu cek tanggal kadaluarsa dan nomor izin edar (BPOM RI MD/ML) untuk memastikan keamanan produk.' },
  { id: 3, question: 'Kode registrasi BPOM untuk makanan dalam negeri adalah...', options: ['ML', 'MD', 'SP', 'SH'], correctIndex: 1, explanation: 'MD (Makanan Dalam negeri) adalah kode registrasi BPOM untuk produk makanan yang diproduksi di Indonesia.' },
  { id: 4, question: 'Berapa suhu yang aman untuk menyimpan makanan di kulkas?', options: ['10-15°C', '0-5°C', '15-20°C', '-10 hingga -5°C'], correctIndex: 1, explanation: 'Suhu 0-5°C adalah suhu ideal kulkas untuk menghambat pertumbuhan bakteri pada makanan.' },
  { id: 5, question: 'Apa tanda makanan yang sudah tidak layak konsumsi?', options: ['Kemasan masih utuh', 'Warna dan bau berubah', 'Masih dalam tanggal kadaluarsa', 'Tekstur masih normal'], correctIndex: 1, explanation: 'Perubahan warna, bau, dan tekstur adalah tanda makanan sudah rusak dan tidak layak konsumsi.' },
  { id: 6, question: 'Bahan Tambahan Pangan (BTP) yang DILARANG digunakan adalah...', options: ['Gula pasir', 'Garam', 'Boraks dan Formalin', 'MSG'], correctIndex: 2, explanation: 'Boraks dan Formalin adalah bahan berbahaya yang DILARANG digunakan sebagai bahan tambahan pangan.' },
  { id: 7, question: 'Cara mencuci tangan yang benar untuk keamanan pangan adalah...', options: ['Cukup bilas dengan air', 'Dengan sabun selama minimal 20 detik', 'Menggunakan tisu basah saja', 'Tidak perlu mencuci tangan'], correctIndex: 1, explanation: 'Mencuci tangan dengan sabun minimal 20 detik efektif membunuh bakteri penyebab penyakit bawaan makanan.' },
  { id: 8, question: 'Label halal pada makanan di Indonesia dikeluarkan oleh...', options: ['BPOM', 'Kementerian Kesehatan', 'BPJPH (Badan Penyelenggara Jaminan Produk Halal)', 'Dinas Perdagangan'], correctIndex: 2, explanation: 'BPJPH di bawah Kementerian Agama bertanggung jawab atas sertifikasi dan label halal di Indonesia.' },
  { id: 9, question: 'Apa itu "5 Kunci Keamanan Pangan" menurut WHO?', options: ['Beli, Masak, Makan, Cuci, Buang', 'Jaga Kebersihan, Pisahkan, Masak dengan Benar, Jaga Suhu, Gunakan Air Bersih', 'Cuci, Potong, Goreng, Rebus, Sajikan', 'Beli, Simpan, Masak, Sajikan, Makan'], correctIndex: 1, explanation: '5 Kunci Keamanan Pangan WHO: Jaga Kebersihan, Pisahkan Bahan Mentah & Matang, Masak dengan Benar, Jaga Suhu Aman, Gunakan Air & Bahan Baku yang Aman.' },
  { id: 10, question: 'Makanan yang mengandung pewarna tekstil Rhodamin B biasanya berwarna...', options: ['Hijau terang', 'Biru gelap', 'Merah menyala/mencolok', 'Kuning pucat'], correctIndex: 2, explanation: 'Rhodamin B memberikan warna merah mencolok dan sangat berbahaya karena bersifat karsinogenik (pemicu kanker).' },
];

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

// --- GLOBAL STATE ---
let currentState = {
    screen: 'menu',
    lastGame: 'menu',
    result: null // { game: string, score: number, maxScore: number, message: string }
};

const app = document.getElementById('app');

// --- RENDER FUNCTIONS ---

function render() {
    app.innerHTML = ''; // Clear content
    
    switch (currentState.screen) {
        case 'menu':
            renderMainMenu();
            break;
        case 'sortir':
            renderSortirGame();
            break;
        case 'quiz':
            renderQuizGame();
            break;
        case 'tangkap':
            renderCatchGame();
            break;
        case 'result':
            renderResultScreen();
            break;
        default:
            renderMainMenu();
    }
}

function handleSelectGame(screen) {
    currentState.screen = screen;
    currentState.lastGame = screen;
    render();
}

function handleFinish(result) {
    currentState.result = result;
    currentState.screen = 'result';
    render();
}

function handleBack() {
    currentState.screen = 'menu';
    render();
}

function handlePlayAgain() {
    currentState.screen = currentState.lastGame;
    render();
}

// --- MAIN MENU ---
function renderMainMenu() {
    app.innerHTML = `
    <div class="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-10 left-10 text-6xl animate-bounce opacity-30">🍎</div>
            <div class="absolute top-20 right-20 text-5xl animate-bounce opacity-30" style="animation-delay: 0.5s">🥦</div>
            <div class="absolute bottom-20 left-20 text-5xl animate-bounce opacity-30" style="animation-delay: 1s">🐟</div>
        </div>

        <div class="relative z-10 text-center mb-8">
            <div class="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 border-2 border-white/30 shadow-xl">
                <span class="text-5xl">🛡️</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
                BPOM <span class="text-green-300">Food Safety</span>
            </h1>
            <h2 class="text-xl md:text-2xl text-blue-200 font-semibold mb-1">Game Edukasi Keamanan Pangan</h2>
            <div class="mt-3 inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
                <span class="text-xs text-blue-200">Badan Pengawas Obat dan Makanan Republik Indonesia</span>
            </div>
        </div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl px-4">
            <button onclick="handleSelectGame('sortir')" class="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">🧺</div>
                <h3 class="text-xl font-bold text-white mb-2">Sortir Makanan</h3>
                <p class="text-blue-200 text-sm mb-3">Pilah makanan aman & tidak aman!</p>
                <div class="flex items-center justify-center gap-2">
                    <span class="bg-orange-500/30 text-orange-200 text-xs px-3 py-1 rounded-full">⏱️ 60 detik</span>
                </div>
            </button>

            <button onclick="handleSelectGame('quiz')" class="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">📋</div>
                <h3 class="text-xl font-bold text-white mb-2">Kuis Pangan</h3>
                <p class="text-blue-200 text-sm mb-3">Uji pengetahuan keamanan pangan!</p>
                <div class="flex items-center justify-center gap-2">
                    <span class="bg-purple-500/30 text-purple-200 text-xs px-3 py-1 rounded-full">📝 10 Soal</span>
                </div>
            </button>

             <button onclick="handleSelectGame('tangkap')" class="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">🎯</div>
                <h3 class="text-xl font-bold text-white mb-2">Tangkap Makanan</h3>
                <p class="text-blue-200 text-sm mb-3">Tangkap yang sehat, hindari bahaya!</p>
                <div class="flex items-center justify-center gap-2">
                    <span class="bg-green-500/30 text-green-200 text-xs px-3 py-1 rounded-full">⏱️ 45 detik</span>
                </div>
            </button>
        </div>
    </div>`;
}

// --- SORTIR GAME ---
function renderSortirGame() {
    let foods = [...sortirFoods].sort(() => Math.random() - 0.5);
    let currentIndex = 0;
    let score = 0;
    let streak = 0;
    let timeLeft = 60;
    let feedback = null;
    let timerId = null;

    // Helper to update UI
    const updateUI = () => {
        if (timeLeft <= 0 || currentIndex >= foods.length) {
            clearInterval(timerId);
            finishGame();
            return;
        }

        const currentFood = foods[currentIndex];
        
        app.innerHTML = `
        <div class="min-h-screen w-full bg-gradient-to-br from-orange-900 via-orange-800 to-yellow-800 flex flex-col items-center p-4">
            <div class="w-full max-w-lg mb-4">
                <div class="flex items-center justify-between mb-4">
                    <button id="backBtn" class="text-orange-200 hover:text-white transition-colors cursor-pointer text-sm">← Menu</button>
                    <div class="flex items-center gap-4">
                        <div class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                            <span class="text-yellow-300 font-bold">⭐ ${score}</span>
                        </div>
                        <div class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 ${timeLeft <= 10 ? 'animate-pulse border-red-400' : ''}">
                            <span class="font-bold ${timeLeft <= 10 ? 'text-red-300' : 'text-white'}">⏱️ ${timeLeft}s</span>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div class="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full transition-all duration-300" style="width: ${(currentIndex / foods.length) * 100}%"></div>
                </div>
                <p class="text-orange-200 text-xs text-center">Streak: 🔥 ${streak}</p>
            </div>

            <div class="flex-1 flex items-center justify-center w-full max-w-lg relative">
                <div class="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl text-center w-full transition-transform duration-300" id="gameCard">
                    <div class="text-8xl mb-4 animate-bounce">${currentFood.emoji}</div>
                    <h3 class="text-2xl font-bold text-white mb-2">${currentFood.name}</h3>
                    <p class="text-orange-200 text-sm mb-6">Apakah makanan ini aman dikonsumsi?</p>
                </div>
                
                ${feedback ? `
                <div class="absolute inset-0 rounded-3xl flex items-center justify-center backdrop-blur-sm animate-fade-in z-20 ${feedback.correct ? 'bg-green-500/90' : 'bg-red-500/90'}">
                    <div class="text-center p-6">
                        <div class="text-5xl mb-3">${feedback.correct ? '✅' : '❌'}</div>
                        <h4 class="text-xl font-bold text-white mb-2">${feedback.correct ? 'Benar!' : 'Salah!'}</h4>
                        <p class="text-white/90 text-sm">${feedback.reason}</p>
                    </div>
                </div>
                ` : ''}
            </div>

            <div class="w-full max-w-lg flex gap-4 mt-6 mb-4 relative z-10">
                <button id="btnUnsafe" class="flex-1 bg-gradient-to-br from-red-500 to-red-700 text-white font-bold text-lg py-5 rounded-2xl shadow-lg active:scale-95 transition-transform" ${feedback ? 'disabled' : ''}>
                    <span class="text-2xl block mb-1">❌</span>BAHAYA
                </button>
                <button id="btnSafe" class="flex-1 bg-gradient-to-br from-green-500 to-green-700 text-white font-bold text-lg py-5 rounded-2xl shadow-lg active:scale-95 transition-transform" ${feedback ? 'disabled' : ''}>
                    <span class="text-2xl block mb-1">✅</span>AMAN
                </button>
            </div>
        </div>`;

        // Re-attach listeners because innerHTML wipes them
        document.getElementById('backBtn').onclick = () => { clearInterval(timerId); handleBack(); };
        document.getElementById('btnUnsafe').onclick = () => handleChoice(false);
        document.getElementById('btnSafe').onclick = () => handleChoice(true);
    };

    const handleChoice = (chooseSafe) => {
        const food = foods[currentIndex];
        const correct = food.safe === chooseSafe;
        
        // Visual swipe effect (simple rotation)
        const card = document.getElementById('gameCard');
        card.style.transform = chooseSafe ? 'translateX(50px) rotate(10deg)' : 'translateX(-50px) rotate(-10deg)';
        card.style.opacity = '0.5';

        if (correct) {
            score += 10 + (streak * 2);
            streak++;
        } else {
            streak = 0;
        }

        feedback = { correct, reason: food.reason };
        updateUI();

        setTimeout(() => {
            feedback = null;
            currentIndex++;
            if (currentIndex >= foods.length) {
                clearInterval(timerId);
                finishGame();
            } else {
                updateUI();
            }
        }, 1500);
    };

    const finishGame = () => {
        handleFinish({
            game: 'Sortir Makanan',
            score,
            maxScore: foods.length * 10,
            message: score >= foods.length * 7 ? '🌟 Luar biasa! Kamu ahli keamanan pangan!' : '📚 Ayo belajar lagi!'
        });
    };

    // Start Timer
    timerId = setInterval(() => {
        timeLeft--;
        updateUI();
    }, 1000);

    // Initial Render
    updateUI();
}

// --- QUIZ GAME ---
function renderQuizGame() {
    let questions = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    let currentIndex = 0;
    let score = 0;
    let correctAnswers = 0;
    let selectedAnswer = null; // index
    let showExplanation = false;

    const updateUI = () => {
        if (currentIndex >= questions.length) {
            handleFinish({
                game: 'Kuis Pangan',
                score,
                maxScore: questions.length * 10,
                message: score >= 80 ? '🌟 Luar biasa!' : '👍 Bagus!'
            });
            return;
        }

        const q = questions[currentIndex];

        app.innerHTML = `
        <div class="min-h-screen w-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-800 flex flex-col items-center p-4">
            <div class="w-full max-w-2xl mb-4">
                <div class="flex items-center justify-between mb-4">
                    <button id="backBtn" class="text-purple-200 hover:text-white text-sm">← Menu</button>
                    <div class="flex items-center gap-4">
                        <div class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                            <span class="text-yellow-300 font-bold">⭐ ${score}</span>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div class="bg-gradient-to-r from-purple-400 to-indigo-400 h-2 rounded-full transition-all duration-300" style="width: ${((currentIndex + 1) / questions.length) * 100}%"></div>
                </div>
                <p class="text-purple-200 text-xs text-center mb-4">Soal ${currentIndex + 1} dari ${questions.length}</p>
            </div>

            <div class="w-full max-w-2xl flex-1 overflow-y-auto">
                <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl mb-4">
                    <h3 class="text-lg md:text-xl font-bold text-white leading-snug mb-6">${q.question}</h3>
                    
                    <div class="space-y-3">
                        ${q.options.map((opt, idx) => {
                            let btnClass = 'bg-white/5 border-white/20 hover:bg-white/15 text-white';
                            if (selectedAnswer !== null) {
                                if (idx === q.correctIndex) btnClass = 'bg-green-500/30 border-green-400 text-green-100';
                                else if (idx === selectedAnswer) btnClass = 'bg-red-500/30 border-red-400 text-red-100';
                                else btnClass = 'bg-white/5 border-white/10 text-white/50';
                            }
                            return `
                            <button class="optBtn w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${btnClass}" data-idx="${idx}" ${selectedAnswer !== null ? 'disabled' : ''}>
                                <div class="flex items-center gap-3">
                                    <span class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm">${String.fromCharCode(65 + idx)}</span>
                                    <span>${opt}</span>
                                    ${selectedAnswer !== null && idx === q.correctIndex ? '<span class="ml-auto">✅</span>' : ''}
                                    ${selectedAnswer === idx && idx !== q.correctIndex ? '<span class="ml-auto">❌</span>' : ''}
                                </div>
                            </button>
                            `;
                        }).join('')}
                    </div>
                </div>

                ${showExplanation ? `
                <div class="bg-blue-500/20 backdrop-blur-md rounded-2xl p-5 border border-blue-400/30 mb-4 animate-fade-in">
                    <div class="flex items-start gap-3">
                        <span class="text-2xl">💡</span>
                        <div>
                            <h4 class="text-blue-200 font-bold mb-1">Penjelasan:</h4>
                            <p class="text-blue-100 text-sm leading-relaxed">${q.explanation}</p>
                        </div>
                    </div>
                </div>
                <button id="nextBtn" class="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg mb-8">
                    ${currentIndex + 1 >= questions.length ? 'Lihat Hasil' : 'Soal Berikutnya'}
                </button>
                ` : ''}
            </div>
        </div>
        `;

        document.getElementById('backBtn').onclick = handleBack;
        document.querySelectorAll('.optBtn').forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.dataset.idx);
                handleAnswer(idx);
            };
        });
        if (document.getElementById('nextBtn')) {
            document.getElementById('nextBtn').onclick = () => {
                currentIndex++;
                selectedAnswer = null;
                showExplanation = false;
                updateUI();
            };
        }
    };

    const handleAnswer = (index) => {
        selectedAnswer = index;
        showExplanation = true;
        if (index === questions[currentIndex].correctIndex) {
            score += 10;
            correctAnswers++;
        }
        updateUI();
    };

    updateUI();
}

// --- CATCH GAME ---
function renderCatchGame() {
    // Initial UI Setup
    app.innerHTML = `
    <div class="min-h-screen w-full bg-gradient-to-br from-green-900 via-green-800 to-teal-800 flex flex-col items-center p-4 overflow-hidden touch-none" id="gameArea">
        <div class="w-full max-w-lg flex items-center justify-between mb-2 z-20 relative">
            <button id="backBtn" class="text-green-200 text-sm">← Menu</button>
            <div class="flex gap-3">
                <span class="text-yellow-300 font-bold" id="scoreDisplay">⭐ 0</span>
                <span class="text-red-300 font-bold" id="livesDisplay">❤️❤️❤️</span>
                <span class="text-white font-bold" id="timeDisplay">⏱️ 45s</span>
            </div>
        </div>
        
        <div class="w-full max-w-lg flex-1 bg-gradient-to-b from-sky-400/20 via-sky-300/10 to-green-500/20 rounded-2xl border border-white/20 relative overflow-hidden" id="world">
            <div id="player" class="absolute bottom-2 text-6xl transition-transform duration-75" style="left: 50%; transform: translateX(-50%);">🧺</div>
        </div>
        
        <div class="mt-2 text-center text-green-200 text-xs z-20">Gerakkan keranjang dengan sentuh/mouse</div>
    </div>
    `;

    // Variables
    let gameActive = true;
    let score = 0;
    let lives = 3;
    let timeLeft = 45;
    let combo = 0;
    let playerX = 50; // percentage
    let foods = []; // {el, x, y, speed, safe, id}
    let lastSpawn = 0;
    let animationId;
    let timerId;

    const world = document.getElementById('world');
    const playerEl = document.getElementById('player');
    const scoreEl = document.getElementById('scoreDisplay');
    const livesEl = document.getElementById('livesDisplay');
    const timeEl = document.getElementById('timeDisplay');

    // Controls
    const movePlayer = (xPercent) => {
        playerX = Math.max(5, Math.min(95, xPercent));
        playerEl.style.left = `${playerX}%`;
    };

    const handleInput = (e) => {
        if (!gameActive) return;
        const rect = world.getBoundingClientRect();
        let clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = ((clientX - rect.left) / rect.width) * 100;
        movePlayer(x);
    };

    window.addEventListener('mousemove', handleInput);
    window.addEventListener('touchmove', handleInput);
    
    // Cleanup function
    const cleanup = () => {
        gameActive = false;
        cancelAnimationFrame(animationId);
        clearInterval(timerId);
        window.removeEventListener('mousemove', handleInput);
        window.removeEventListener('touchmove', handleInput);
    };

    document.getElementById('backBtn').onclick = () => {
        cleanup();
        handleBack();
    };

    // Timer
    timerId = setInterval(() => {
        timeLeft--;
        timeEl.innerText = `⏱️ ${timeLeft}s`;
        if (timeLeft <= 0) endGame();
    }, 1000);

    // Game Loop
    const gameLoop = (timestamp) => {
        if (!gameActive) return;

        // Spawn
        if (timestamp - lastSpawn > 800) {
            spawnFood();
            lastSpawn = timestamp;
        }

        // Move & Collide
        foods.forEach((food, index) => {
            food.y += food.speed;
            food.el.style.top = `${food.y}%`;

            // Collision with Player (Basket is around 82-95% height)
            if (food.y >= 82 && food.y <= 95 && Math.abs(food.x - playerX) < 12) {
                // Caught
                handleCatch(food);
                food.el.remove();
                foods.splice(index, 1);
            } else if (food.y > 100) {
                // Missed
                if (food.safe) combo = 0; // Reset combo if missed healthy food
                food.el.remove();
                foods.splice(index, 1);
            }
        });

        animationId = requestAnimationFrame(gameLoop);
    };

    const spawnFood = () => {
        const data = catchFoodsData[Math.floor(Math.random() * catchFoodsData.length)];
        const el = document.createElement('div');
        el.innerText = data.emoji;
        el.className = 'absolute text-4xl';
        const x = Math.random() * 80 + 10;
        el.style.left = `${x}%`;
        el.style.top = '-10%';
        world.appendChild(el);

        foods.push({
            el,
            x,
            y: -10,
            speed: 0.5 + Math.random() * 0.5,
            safe: data.safe,
            val: data.safe ? 10 : -1
        });
    };

    const handleCatch = (food) => {
        const effect = document.createElement('div');
        effect.className = 'absolute font-bold text-lg animate-float-up pointer-events-none';
        effect.style.left = `${food.x}%`;
        effect.style.top = '80%';
        
        if (food.safe) {
            const points = 10 + (combo * 2);
            score += points;
            combo++;
            effect.innerText = `+${points}`;
            effect.classList.add('text-green-300');
        } else {
            lives--;
            combo = 0;
            effect.innerText = '💔';
            effect.classList.add('text-red-500');
            world.classList.add('animate-shake');
            setTimeout(() => world.classList.remove('animate-shake'), 300);
        }

        world.appendChild(effect);
        setTimeout(() => effect.remove(), 800);

        scoreEl.innerText = `⭐ ${score}`;
        livesEl.innerText = '❤️'.repeat(Math.max(0, lives)) + '🖤'.repeat(3 - Math.max(0, lives));

        if (lives <= 0) endGame();
    };

    const endGame = () => {
        cleanup();
        handleFinish({
            game: 'Tangkap Makanan',
            score,
            maxScore: 200, // Estimasi
            message: score >= 100 ? 'Hebat! Refleks bagus!' : 'Terus berlatih!'
        });
    };

    animationId = requestAnimationFrame(gameLoop);
}

// --- RESULT SCREEN ---
function renderResultScreen() {
    const { score, maxScore, message, game } = currentState.result;
    const percentage = Math.min(100, Math.round((score / maxScore) * 100));
    const stars = percentage >= 80 ? 3 : percentage >= 50 ? 2 : percentage >= 20 ? 1 : 0;
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    app.innerHTML = `
    <div class="min-h-screen w-full bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 flex flex-col items-center justify-center p-4">
        <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-lg w-full text-center border border-white/20 shadow-2xl animate-fade-in">
            <div class="text-7xl mb-4 relative inline-block">
                ${stars >= 3 ? '🏆' : stars >= 2 ? '🥈' : stars >= 1 ? '🥉' : '🎖️'}
                ${percentage >= 80 ? '<div class="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>' : ''}
            </div>

            <h2 class="text-3xl font-bold text-white mb-2">Hasil Permainan</h2>
            <p class="text-blue-200 mb-6">${game}</p>

            <div class="flex items-center justify-center gap-2 mb-6 text-4xl text-yellow-400">
                <span>${stars >= 1 ? '⭐' : '☆'}</span>
                <span>${stars >= 2 ? '⭐' : '☆'}</span>
                <span>${stars >= 3 ? '⭐' : '☆'}</span>
            </div>

            <div class="bg-white/10 rounded-2xl p-6 mb-6">
                <div class="text-5xl font-extrabold text-yellow-300 mb-1">${score}</div>
                <div class="text-blue-200 text-sm mb-3">dari ${maxScore} poin</div>
                <div class="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                    <div class="h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400" style="width: ${percentage}%"></div>
                </div>
            </div>

            <div class="bg-white/10 rounded-xl p-4 mb-6">
                <p class="text-white text-lg font-semibold">${message}</p>
            </div>

            <div class="bg-blue-500/20 rounded-xl p-4 mb-6 border border-blue-400/30 text-left">
                <p class="text-blue-200 text-sm font-semibold mb-1">Tips Keamanan Pangan:</p>
                <p class="text-blue-100 text-sm">${randomTip}</p>
            </div>

            <div class="flex gap-3">
                <button onclick="handlePlayAgain()" class="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform shadow-lg cursor-pointer">🔄 Main Lagi</button>
                <button onclick="handleBack()" class="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform shadow-lg cursor-pointer">🏠 Menu</button>
            </div>
        </div>
    </div>`;
}

// Start App
render();