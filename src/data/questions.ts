import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Apa kepanjangan dari BPOM?',
    options: [
      'Badan Pengawas Obat dan Makanan',
      'Badan Pengelola Obat dan Makanan',
      'Biro Pengawas Obat dan Minuman',
      'Badan Pengatur Obat dan Makanan'
    ],
    correctIndex: 0,
    explanation: 'BPOM adalah Badan Pengawas Obat dan Makanan yang bertugas mengawasi peredaran obat dan makanan di Indonesia.'
  },
  {
    id: 2,
    question: 'Apa yang harus dicek pertama kali saat membeli makanan kemasan?',
    options: [
      'Harga produk',
      'Warna kemasan',
      'Tanggal kadaluarsa dan nomor izin edar',
      'Ukuran kemasan'
    ],
    correctIndex: 2,
    explanation: 'Selalu cek tanggal kadaluarsa dan nomor izin edar (BPOM RI MD/ML) untuk memastikan keamanan produk.'
  },
  {
    id: 3,
    question: 'Kode registrasi BPOM untuk makanan dalam negeri adalah...',
    options: [
      'ML',
      'MD',
      'SP',
      'SH'
    ],
    correctIndex: 1,
    explanation: 'MD (Makanan Dalam negeri) adalah kode registrasi BPOM untuk produk makanan yang diproduksi di Indonesia.'
  },
  {
    id: 4,
    question: 'Berapa suhu yang aman untuk menyimpan makanan di kulkas?',
    options: [
      '10-15°C',
      '0-5°C',
      '15-20°C',
      '-10 hingga -5°C'
    ],
    correctIndex: 1,
    explanation: 'Suhu 0-5°C adalah suhu ideal kulkas untuk menghambat pertumbuhan bakteri pada makanan.'
  },
  {
    id: 5,
    question: 'Apa tanda makanan yang sudah tidak layak konsumsi?',
    options: [
      'Kemasan masih utuh',
      'Warna dan bau berubah',
      'Masih dalam tanggal kadaluarsa',
      'Tekstur masih normal'
    ],
    correctIndex: 1,
    explanation: 'Perubahan warna, bau, dan tekstur adalah tanda makanan sudah rusak dan tidak layak konsumsi.'
  },
  {
    id: 6,
    question: 'Bahan Tambahan Pangan (BTP) yang DILARANG digunakan adalah...',
    options: [
      'Gula pasir',
      'Garam',
      'Boraks dan Formalin',
      'MSG'
    ],
    correctIndex: 2,
    explanation: 'Boraks dan Formalin adalah bahan berbahaya yang DILARANG digunakan sebagai bahan tambahan pangan.'
  },
  {
    id: 7,
    question: 'Cara mencuci tangan yang benar untuk keamanan pangan adalah...',
    options: [
      'Cukup bilas dengan air',
      'Dengan sabun selama minimal 20 detik',
      'Menggunakan tisu basah saja',
      'Tidak perlu mencuci tangan'
    ],
    correctIndex: 1,
    explanation: 'Mencuci tangan dengan sabun minimal 20 detik efektif membunuh bakteri penyebab penyakit bawaan makanan.'
  },
  {
    id: 8,
    question: 'Label halal pada makanan di Indonesia dikeluarkan oleh...',
    options: [
      'BPOM',
      'Kementerian Kesehatan',
      'BPJPH (Badan Penyelenggara Jaminan Produk Halal)',
      'Dinas Perdagangan'
    ],
    correctIndex: 2,
    explanation: 'BPJPH di bawah Kementerian Agama bertanggung jawab atas sertifikasi dan label halal di Indonesia.'
  },
  {
    id: 9,
    question: 'Apa itu "5 Kunci Keamanan Pangan" menurut WHO?',
    options: [
      'Beli, Masak, Makan, Cuci, Buang',
      'Jaga Kebersihan, Pisahkan, Masak dengan Benar, Jaga Suhu, Gunakan Air Bersih',
      'Cuci, Potong, Goreng, Rebus, Sajikan',
      'Beli, Simpan, Masak, Sajikan, Makan'
    ],
    correctIndex: 1,
    explanation: '5 Kunci Keamanan Pangan WHO: Jaga Kebersihan, Pisahkan Bahan Mentah & Matang, Masak dengan Benar, Jaga Suhu Aman, Gunakan Air & Bahan Baku yang Aman.'
  },
  {
    id: 10,
    question: 'Makanan yang mengandung pewarna tekstil Rhodamin B biasanya berwarna...',
    options: [
      'Hijau terang',
      'Biru gelap',
      'Merah menyala/mencolok',
      'Kuning pucat'
    ],
    correctIndex: 2,
    explanation: 'Rhodamin B memberikan warna merah mencolok dan sangat berbahaya karena bersifat karsinogenik (pemicu kanker).'
  },
  {
    id: 11,
    question: 'Berapa lama waktu maksimal makanan matang boleh berada di suhu ruang?',
    options: [
      '1 jam',
      '2 jam',
      '6 jam',
      '12 jam'
    ],
    correctIndex: 1,
    explanation: 'Makanan matang tidak boleh berada di suhu ruang lebih dari 2 jam karena bakteri berkembang cepat di suhu 5-60°C (zona bahaya).'
  },
  {
    id: 12,
    question: 'Apa fungsi nomor PIRT pada produk makanan?',
    options: [
      'Menunjukkan harga produk',
      'Izin produksi makanan rumah tangga',
      'Sertifikat halal',
      'Standar kemasan'
    ],
    correctIndex: 1,
    explanation: 'PIRT (Pangan Industri Rumah Tangga) adalah izin produksi untuk usaha makanan skala rumah tangga yang dikeluarkan oleh Dinas Kesehatan.'
  },
];
