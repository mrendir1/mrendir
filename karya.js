/* =========================================================
   DATA WEBSITE PORTOFOLIO — Muhammad Rendi Ramdani
   Edit file ini untuk menambah/mengubah keahlian & karya.

   KARYA: satu baris = satu karya
   ['Kategori', 'Judul', 'Keterangan singkat', 'nama-file-gambar']
   - Kategori harus salah satu dari: 'Video & Animasi', 'Social Media',
     'Print & Event', 'Fotografi'
   - Gambar disimpan di folder assets/ sebagai .jpg (rasio 16:9),
     tulis namanya TANPA .jpg
   - Karya paling atas tampil paling depan
   ========================================================= */

const skills =[
 ['Video Editing','Video promosi, corporate, campaign, dan konten pendek untuk media sosial.','Premiere Pro · After Effects · CapCut Pro'],
 ['Motion Graphic','Animasi teks, transisi, dan elemen visual yang membuat pesan lebih hidup.','After Effects'],
 ['Desain Grafis','Feed media sosial, flyer, brosur, banner, logo, dan materi promosi.','Photoshop · Illustrator · Affinity · Canva'],
 ['Art Animasi 2D/3D','Video animasi edukasi, karakter, dan ilustrasi 3D untuk materi pembelajaran.','Moho · Blender'],
 ['Social Media Content','Content planning, copywriting, dan analisis performa konten.','Instagram · TikTok · YouTube · Facebook'],
 ['Fotografi & Videografi','Dokumentasi event, acara resmi, produk, dan kegiatan untuk konten media sosial.','Kamera DSLR · Lightroom · Premiere Pro'],
 ['Website & Landing Page','Website, landing page kampanye digital, dan LMS interaktif untuk pembelajaran.','WordPress · Figma']];
const works =[
 ['Video & Animasi','Animasi Edukasi','Animasi pembelajaran bahasa Jepang untuk LMS — suasana kantor, taman sakura, dan format mobile — dibuat dengan Moho dan Blender.','anim-kantor'],
 ['Video & Animasi','Video Promosi & Company Profile','Thumbnail video kegiatan, company profile, dan dokumentasi — Premiere Pro, After Effects, CapCut Pro.','video'],
 ['Social Media','Social Media Video','Video pendek untuk Instagram dan TikTok ISO Jepang — konsep, editing, hingga unggah.','sosmed'],
 ['Social Media','Instagram Feed 1080×1350','Desain promosi program, info lowongan magang, dan konten edukasi.','feed-1350'],
 ['Social Media','Instagram Feed 1080×1080','Seri konten edukasi dan kampanye pendaftaran siswa.','feed-1080'],
 ['Social Media','Holiday Greeting Story','Ucapan hari besar format story 1080×1920 dengan identitas brand yang konsisten.','story'],
 ['Print & Event','Flyer A5','Seri flyer program pemagangan, kelas migran, dan pendaftaran.','flyer-a5'],
 ['Fotografi','Karya Fotografer','Dokumentasi kegiatan, acara resmi, dan momen peserta program ISO Jepang.','fotografi'],
 ['Social Media','Traffic Social Media','Hasil kelola Instagram & TikTok ISO Jepang — 1 video tembus 10 juta penonton dan 3,3 juta tayangan Instagram dalam setahun.','traffic']];

/* =========================================================
   HALAMAN DETAIL KARYA
   Kunci = nama-file karya di atas (kolom ke-4).
   - judul  : headline besar di halaman detail
   - isi    : penjelasan singkat (1–3 kalimat)
   - info   : label kecil [['Label','Isi'], ...] (boleh dikosongkan)
   - gambar : daftar file di assets/ TANPA .jpg, tampil 2 kolom
              (desktop) / 1 kolom (HP). Klik gambar = diperbesar.
   - tata:'foto' : mode foto — foto potret tampil 2 per baris,
              foto landscape (beri akhiran |L) 1 baris penuh.
   Karya yang belum punya detail tetap bisa dibuka (tampil
   gambar sampulnya saja).
   ========================================================= */
const detail = {
 'traffic': {
  judul: 'Traffic Social Media — ISO Jepang',
  isi: 'Hasil pengelolaan konten Instagram dan TikTok ISO Jepang: perencanaan konten, produksi dan editing video, desain, sampai unggah dan evaluasi performa.',
  info: [['Akun','@isojepang · @isojepangofficial'],['Peran','Konten, editing, desain, posting']],
  tata: 'stats',
  blok: [
   {judul:'Instagram @isojepang', sub:'Periode Nov 2024 – Nov 2025 (1 tahun) · Meta Business Suite', angka:[['3,3 JT','Tayangan'],['7 JT','Akun dijangkau'],['145,4 RB','Interaksi konten'],['52,4 RB','Pengikut'],['1.060','Total postingan']]},
   {judul:'TikTok @isojepangofficial', sub:'Data publik akun', angka:[['29 RB','Pengikut'],['950,4 RB','Total suka'],['10 JT','Penonton video terpopuler']]}
  ],
  tiktok: '7461947235048131847',
  tiktokJudul: 'Tips Lolos Wawancara Kerja Jepang · diunggah 20 Jan 2025',
  bedah: [
   ['Hasilnya','10 juta penonton, 541 ribu suka, 38,5 ribu disimpan, 12 ribu dibagikan, dan 2.406 komentar dari satu video berdurasi 2 menit 6 detik.'],
   ['Topik tepat sasaran','Membahas hal yang paling dicari calon peserta — cara lolos wawancara kerja ke Jepang — sehingga penonton merasa video ini "untuk saya".'],
   ['Tokoh nyata, bukan iklan','Menampilkan peserta asli dengan nomor seleksi di dada, dibuka dengan sapaan langsung ke kamera. Terasa jujur dan dekat.'],
   ['Banyak disimpan dan dibagikan','Rasio simpan dan bagikan yang tinggi menandakan isinya dianggap berguna, sehingga algoritma terus menyebarkannya.'],
   ['Ajakan yang jelas','Caption mengajak mengikuti seri tips berikutnya dan mencantumkan kontak, mengubah penonton menjadi pengikut dan calon pendaftar.']
  ]
 },
 'anim-kantor': {
  judul: 'Animasi Edukasi Bahasa Jepang',
  isi: 'Seri video animasi untuk kurikulum bahasa Jepang ISO Jepang berbasis buku Irodori — 54 bab yang dipakai di kelas online (LMS) agar siswa belajar lebih interaktif. Dikerjakan dari suara karakter, gambar, animasi, sampai editing akhir.',
  info: [['Klien','ISO Jepang'],['Durasi','±1–1,5 tahun'],['Hasil','54 bab animasi']],
  cerita: [
   ['Tujuan','Membuat kurikulum pembelajaran siswa lebih interaktif. Video animasi ini menjadi materi utama kelas online di LMS ISO Jepang.'],
   ['Peran saya','Mengerjakan hampir seluruh proses: rekam suara untuk karakter AI Sensei, menggambar karakter dan latar, menganimasikan gerakan, hingga editing akhir.'],
   ['Tools','Moho Animation · Adobe Illustrator · Affinity Designer · Adobe Premiere Pro · Adobe Podcast'],
   ['Hasil','Selesai seluruhnya: Irodori A1-1, A2-1, dan A2-2, masing-masing 18 bab — total 54 bab animasi.'],
   ['Tantangan','Saya memulai tanpa latar belakang animasi maupun menggambar. Saya belajar dari nol sampai bisa menggambar karakter sendiri dan menggerakkannya frame demi frame, lalu konsisten menyelesaikan 54 bab dalam ±1,5 tahun.']
  ],
  tata: 'foto',
  gambar: ['animasi-01|L','animasi-02|L','animasi-03','animasi-04','animasi-05','animasi-06','animasi-07|L']
 },
 'flyer-a5': {
  judul: 'Flyer A5 — Program Kerja & Magang ke Jepang',
  isi: 'Seri flyer cetak dan digital untuk program pemagangan, SSW (Tokutei Ginou), Kelas Migran, Goes to School, Lomba Konten Kreatif, rekrutmen pengajar, hingga Job Fair Nasional APPI. Setiap desain menonjolkan informasi yang paling dicari calon peserta — bidang kerja, perkiraan gaji, persyaratan, lokasi penempatan, dan QR pendaftaran — agar mudah dipahami dalam sekali lihat.',
  info: [['Klien','ISO Jepang'],['Jenis','Flyer A5 & feed promosi'],['Jumlah','12 desain']],
  gambar: ['flyer-a5-01','flyer-a5-12','flyer-a5-02','flyer-a5-03','flyer-a5-04','flyer-a5-05','flyer-a5-06','flyer-a5-07','flyer-a5-08','flyer-a5-09','flyer-a5-10','flyer-a5-11']
 }
 ,'fotografi': {
  judul: 'Karya Fotografer — Best Moment',
  isi: 'Dokumentasi foto acara resmi, kunjungan, dan kegiatan peserta program kerja ke Jepang. Fokus pada ekspresi dan momen penting — sambutan, penyerahan bantuan, foto bersama, hingga suasana seleksi peserta.',
  info: [['Klien','ISO Jepang'],['Jenis','Event & dokumentasi'],['Jumlah','13 foto']],
  tata: 'foto',
  gambar: ['foto-01|L','foto-02','foto-03','foto-04|L','foto-05','foto-06','foto-07|L','foto-08','foto-09','foto-10|L','foto-11|L','foto-12|L','foto-13|L']
 }
 ,'story': {
  judul: 'Holiday Greeting Story',
  isi: 'Seri ucapan hari besar format story 1080×1920 untuk ISO Jepang, LPPR Indonesia, dan PT Multi Lintas Buana Raya — mulai dari HUT RI, Isra Mi\'raj, Idul Fitri, Idul Adha, Natal, Imlek, Hari Kartini, hingga Hari Buruh. Setiap desain menyesuaikan suasana perayaannya tanpa meninggalkan identitas brand.',
  info: [['Klien','ISO Jepang · LPPR · Multi LBR'],['Format','Story 1080×1920'],['Jumlah','10 desain']],
  tata: 'story',
  gambar: ['story-01','story-02','story-03','story-04','story-05','story-06','story-07','story-08','story-09','story-10']
 }
 ,'feed-1350': {
  judul: 'Instagram Feed 1080×1350',
  isi: 'Konten feed Instagram untuk ISO Jepang, LPPR Indonesia, AIKO Indonesia, dan PT Multi Lintas Buana Raya — promosi kelas online gratis, info beasiswa pendidikan, konten edukasi Mitos vs Fakta, ucapan resmi, hingga kartu ucapan Tahun Baru 2026 berbahasa Jepang untuk mitra di Jepang.',
  info: [['Klien','ISO Jepang · LPPR · AIKO · Multi LBR'],['Format','Feed 1080×1350'],['Jumlah','12 desain']],
  tata: 'feed',
  gambar: ['feed1350-03','feed1350-04','feed1350-05','feed1350-06','feed1350-11','feed1350-12','feed1350-01','feed1350-02','feed1350-07','feed1350-08','feed1350-09','feed1350-10']
 }
};

/* =========================================================
   JASA FREELANCE (halaman #jasa)
   [ 'Nama layanan', 'Penjelasan singkat', 'Contoh hasil', 'Harga' ]
   Harga boleh dikosongkan '' → tampil "Harga sesuai kebutuhan".
   ========================================================= */
const jasa = [
 ['Video Editing','Editing video promosi, company profile, event, dan konten pendek dengan subtitle, musik, dan color grading.','Reels/TikTok · YouTube · Video event',''],
 ['Motion Graphic','Animasi teks, logo, dan infografis bergerak untuk iklan, opening video, atau penjelasan produk.','Logo animation · Explainer · Lower third',''],
 ['Desain Grafis','Feed Instagram, story, flyer, banner, poster, dan materi cetak yang rapi dan sesuai identitas brand.','Feed & story · Flyer · X-banner',''],
 ['Animasi 2D/3D','Video animasi edukasi atau promosi dengan karakter, dari storyboard sampai render.','Animasi edukasi · Karakter · Scene 3D',''],
 ['Fotografi & Videografi','Dokumentasi acara, foto produk, dan pengambilan video untuk konten media sosial.','Event · Produk · Behind the scene',''],
 ['Kelola Konten Media Sosial','Perencanaan konten, desain, copywriting, dan jadwal unggah untuk Instagram dan TikTok.','Content plan · Desain · Caption','']
];

