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
 ['Fotografi','Karya Fotografer','Dokumentasi kegiatan, acara resmi, dan momen peserta program ISO Jepang.','fotografi']];

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
 'anim-kantor': {
  judul: 'Animasi Edukasi Bahasa Jepang',
  isi: 'Scene animasi untuk materi pembelajaran bahasa Jepang di LMS, dari storyboard hingga render — termasuk versi yang dioptimalkan untuk ditonton di ponsel.',
  info: [['Klien','ISO Jepang'],['Tools','Moho · Blender']],
  gambar: ['anim-kantor','anim-sakura','anim-mobile']
 },
 'flyer-a5': {
  judul: 'Flyer A5 — Program Kerja & Magang ke Jepang',
  isi: 'Seri flyer cetak dan digital untuk program SSW (Tokutei Ginou), Visa Gijinkoku, pemagangan, dan Kelas Migran ISO Jepang. Setiap desain menonjolkan informasi yang paling dicari calon peserta — bidang kerja, perkiraan gaji, persyaratan, lokasi penempatan, dan QR pendaftaran — agar mudah dipahami dalam sekali lihat.',
  info: [['Klien','ISO Jepang'],['Jenis','Flyer A5 & feed promosi'],['Jumlah','10 desain']],
  gambar: ['flyer-a5-01','flyer-a5-02','flyer-a5-03','flyer-a5-04','flyer-a5-05','flyer-a5-06','flyer-a5-07','flyer-a5-08','flyer-a5-09','flyer-a5-10']
 }
 ,'fotografi': {
  judul: 'Karya Fotografer — Best Moment',
  isi: 'Dokumentasi foto acara resmi, kunjungan, dan kegiatan peserta program kerja ke Jepang. Fokus pada ekspresi dan momen penting — sambutan, penyerahan bantuan, foto bersama, hingga suasana seleksi peserta.',
  info: [['Klien','ISO Jepang'],['Jenis','Event & dokumentasi'],['Jumlah','13 foto']],
  tata: 'foto',
  gambar: ['foto-01|L','foto-02','foto-03','foto-04|L','foto-05','foto-06','foto-07|L','foto-08','foto-09','foto-10|L','foto-11|L','foto-12|L','foto-13|L']
 }
};
