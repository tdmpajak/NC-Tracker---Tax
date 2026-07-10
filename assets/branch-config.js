// =====================================================================
// KONFIGURASI CABANG & PASSWORD
// =====================================================================
// PENTING UNTUK DIKETAHUI (baca ini sebelum mengubah/mempercayakan data sensitif ke sini):
// Website ini adalah situs statis (GitHub Pages) tanpa server rahasia di baliknya.
// Artinya SEMUA isi file ini -- termasuk daftar password di bawah -- BISA DILIHAT
// oleh siapa pun yang membuka "View Page Source" atau tab Network/Sources di
// DevTools browser (tekan F12). Ini BUKAN penyimpanan rahasia yang aman.
//
// Password di sini berfungsi sebagai:
// 1) Gerbang password sebelum bisa membuka/mengunduh link PDF di tabel tracking
//    (PDF itu sendiri TIDAK dienkripsi/dikunci -- ini murni gerbang di sisi website).
// 2) Gerbang akses sederhana ke form kirim berkas (menyaring orang iseng yang
//    kebetulan tahu link web-nya, BUKAN pengaman tingkat lanjut).
//
// Untuk keamanan yang sesungguhnya (kalau ke depannya dibutuhkan), password
// semacam ini idealnya disimpan & diproses di server (mis. Apps Script) yang
// tidak bisa dilihat publik -- bukan di file JS yang dikirim ke browser semua orang.
// =====================================================================

const BRANCH_PASSWORDS = {
  'DLR': 'P@ssw0rd1',
  'DLY': 'P@ssw0rd2',
  'DLP': 'P@ssw0rd3',
  'DMP': 'P@ssw0rd4',
  'DLA': 'P@ssw0rd5',
  'DLQ': 'P@ssw0rd6',
  'DLO': 'P@ssw0rd7',
  'DMR': 'P@ssw0rd8',
  'DLF': 'P@ssw0rd9',
  'DLH': 'P@ssw0rd10',
  'DLB': 'P@ssw0rd11',
  'DLV': 'P@ssw0rd12',
  'DLE': 'P@ssw0rd13',
  'DLJ': 'P@ssw0rd14',
  'DMN': 'P@ssw0rd15',
  'DLS': 'P@ssw0rd16',
  'DLX': 'P@ssw0rd17',
  'DLZ': 'P@ssw0rd18',
  'DLI': 'P@ssw0rd19',
  'DMM': 'P@ssw0rd20',
  'DLK': 'P@ssw0rd21',
  'DLU': 'P@ssw0rd22',
  'DLG': 'P@ssw0rd23',
  'DLW': 'P@ssw0rd24',
  'DLN': 'P@ssw0rd25',
  'DLM': 'P@ssw0rd26',
  'DLT': 'P@ssw0rd27',
  'DLD': 'P@ssw0rd28',
  'DMK': 'P@ssw0rd29',
  'MML': 'P@ssw0rd30',
  'MMM': 'P@ssw0rd31',
  'MMT': 'P@ssw0rd32',
};

// Urutan cabang di dropdown, mengikuti urutan asli yang diberikan
const BRANCH_LIST = [
  'DLR','DLY','DLP','DMP','DLA','DLQ','DLO','DMR','DLF','DLH','DLB','DLV','DLE','DLJ','DMN',
  'DLS','DLX','DLZ','DLI','DMM','DLK','DLU','DLG','DLW','DLN','DLM','DLT','DLD','DMK','MML','MMM','MMT'
];

// Password untuk mengakses/mengirim berkas di index.html
const SUBMIT_GATE_PASSWORD = 'pajak123';
