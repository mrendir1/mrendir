/* =========================================================
   DATA WEBSITE PORTOFOLIO — Muhammad Rendi Ramdani
   Edit file ini untuk menambah/mengubah keahlian & karya.

   KARYA: satu baris = satu karya
   ['Kategori', 'Judul', 'Keterangan singkat', 'nama-file-gambar']
   - Kategori harus salah satu dari: 'Video & Animasi', 'Social Media',
     'Web & Campaign', 'Print & Event'
   - Gambar disimpan di folder assets/ sebagai .jpg (rasio 16:9),
     tulis namanya TANPA .jpg
   - Karya paling atas tampil paling depan
   ========================================================= */

const skills =[
 ['Video Editing','Video promosi, corporate, campaign, dan konten pendek untuk media sosial.','Premiere Pro · After Effects · CapCut Pro'],
 ['Motion Graphic','Animasi teks, transisi, dan elemen visual yang membuat pesan lebih hidup.','After Effects'],
 ['Desain Grafis','Feed media sosial, flyer, brosur, banner, logo, dan materi promosi.','Photoshop · Illustrator · Affinity · Canva'],
 ['Animasi 2D/3D','Video animasi edukasi dan ilustrasi 3D untuk materi pembelajaran.','Moho · Blender'],
 ['Social Media Content','Content planning, copywriting, dan analisis performa konten.','Instagram · TikTok · YouTube · Facebook'],
 ['Fotografi & Website','Foto & video produk dan event, serta landing page dan LMS.','Lightroom · WordPress · Figma']];
const works =[
 ['Video & Animasi','Video Promosi & Company Profile','Thumbnail video kegiatan, company profile, dan dokumentasi — Premiere Pro, After Effects, CapCut Pro.','video'],
 ['Video & Animasi','Animasi Edukasi — Suasana Kantor','Animasi pembelajaran bahasa Jepang untuk LMS, dibuat dengan Moho dan Blender.','anim-kantor'],
 ['Video & Animasi','Animasi Edukasi — Taman Sakura','Scene animasi untuk materi belajar siswa, dari storyboard hingga render.','anim-sakura'],
 ['Video & Animasi','Animasi Edukasi — Format Mobile','Materi animasi interaktif yang dioptimalkan untuk ditonton di ponsel.','anim-mobile'],
 ['Social Media','Social Media Design','Pengelolaan konten Instagram dan TikTok ISO Jepang — desain feed, story, dan video pendek.','sosmed'],
 ['Social Media','Instagram Feed 1080×1350','Desain promosi program, info lowongan magang, dan konten edukasi.','feed-1350'],
 ['Social Media','Instagram Feed 1080×1080','Seri konten edukasi dan kampanye pendaftaran siswa.','feed-1080'],
 ['Social Media','Holiday Greeting Story 1080×1920','Ucapan hari besar dengan identitas brand yang konsisten.','story'],
 ['Web & Campaign','Campaign Landing Page','Landing page program kelas online bahasa Jepang gratis untuk kampanye digital — WordPress.','landing'],
 ['Print & Event','Flyer & Brosur','Materi cetak untuk lomba konten kreatif dan program kerja & magang ke Jepang.','flyer'],
 ['Print & Event','Flyer A5','Seri flyer program pemagangan, kelas migran, dan pendaftaran.','flyer-a5'],
 ['Print & Event','X-Banner "Goes to Japan"','Desain banner berdiri untuk event dan pameran.','xbanner'],
 ['Print & Event','Backdrop Booth Event','Backdrop booth "Raih Kesempatan Magang & Bekerja di Jepang".','backdrop'],
 ['Print & Event','Roll Banner Job Fair','Roll banner untuk job fair nasional dan promosi kelas online.','roll-banner']];

/* =========================================================
   HALAMAN DETAIL KARYA
   Kunci = nama-file karya di atas (kolom ke-4).
   - judul  : headline besar di halaman detail
   - isi    : penjelasan singkat (1–3 kalimat)
   - info   : label kecil [['Label','Isi'], ...] (boleh dikosongkan)
   - gambar : daftar file di assets/ TANPA .jpg, tampil 2 kolom
              (desktop) / 1 kolom (HP). Klik gambar = diperbesar.
   Karya yang belum punya detail tetap bisa dibuka (tampil
   gambar sampulnya saja).
   ========================================================= */
const detail = {
 'flyer-a5': {
  judul: 'Flyer A5 — Program Kerja & Magang ke Jepang',
  isi: 'Seri flyer cetak dan digital untuk program SSW (Tokutei Ginou), Visa Gijinkoku, pemagangan, dan Kelas Migran ISO Jepang. Setiap desain menonjolkan informasi yang paling dicari calon peserta — bidang kerja, perkiraan gaji, persyaratan, lokasi penempatan, dan QR pendaftaran — agar mudah dipahami dalam sekali lihat.',
  info: [['Klien','ISO Jepang'],['Jenis','Flyer A5 & feed promosi'],['Jumlah','10 desain']],
  gambar: ['flyer-a5-01','flyer-a5-02','flyer-a5-03','flyer-a5-04','flyer-a5-05','flyer-a5-06','flyer-a5-07','flyer-a5-08','flyer-a5-09','flyer-a5-10']
 }
};
