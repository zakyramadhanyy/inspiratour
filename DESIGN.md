# DESIGN.md — INSPIRATOUR
## Modern Travel Editorial · Premium Adventure · Playful Minimalism

Dokumen ini mendefinisikan bahasa visual untuk website travel Inspiratour. Gunakan screenshot referensi sebagai inspirasi kualitas visual, bukan sebagai template layout.

---

## 01. IDENTITY

### Product
Inspiratour adalah website travel yang membantu pengguna mengenal destinasi, memahami pengalaman perjalanan, dan menemukan trip yang sesuai dengan minat mereka.

### Visual personality
- **Professional:** terpercaya, terorganisir, dan informatif.
- **Playful:** terasa hidup, optimistis, dan mengundang eksplorasi.
- **Adventurous:** membangkitkan rasa ingin tahu dan keinginan untuk bepergian.
- **Editorial:** mengutamakan fotografi, tipografi yang kuat, dan komposisi yang terkurasi.
- **Approachable premium:** terlihat berkualitas tanpa terasa kaku atau eksklusif.

### Core direction
Gabungkan nuansa outdoor editorial, travel photography yang imersif, dan UI modern yang bersih. Website harus membuat destinasi menjadi daya tarik utama, sementara interface membantu pengguna memahami informasi dan mengambil keputusan.

**Prinsip utama:** destination-first, brand-consistent, easy to explore.

### Reference interpretation
Ambil kualitas visual berikut dari screenshot:
- Fotografi alam dan aktivitas perjalanan yang besar, autentik, dan atmosferik.
- Kontras antara gambar yang ekspresif dan area konten yang bersih.
- Tipografi editorial dengan headline yang tegas.
- Aksen warna cerah yang digunakan secara hemat.
- Komponen modern dengan sudut membulat dan detail interaksi yang halus.
- Komposisi yang terasa dinamis, tetapi tetap rapi dan mudah dipahami.

Jangan menyalin susunan section, urutan konten, komposisi hero, maupun bentuk layout screenshot secara literal.

---

## 02. COLOR PALETTE

### Color philosophy
Gunakan warna yang terasa natural, hangat, dan segar. Warna alam menjadi fondasi suasana travel; warna aksen memberi energi dan membantu elemen penting lebih mudah ditemukan.

**Penting:** jika Inspiratour sudah memiliki warna brand resmi di website atau source code, pertahankan warna tersebut sebagai warna utama. Token di bawah adalah arahan peran visual dan warna pendukung, bukan alasan untuk mengganti identitas brand.

### Suggested supporting palette

| Token | Color | Hex | Usage |
|---|---|---|---|
| Warm Canvas | <span style="color:#F6F4EC">■</span> Warm off-white | `#F6F4EC` | Background utama untuk area editorial yang hangat |
| Pure Surface | <span style="color:#FFFFFF">■</span> White | `#FFFFFF` | Card, form, dan area yang membutuhkan kontras bersih |
| Ink | <span style="color:#1B1D19">■</span> Deep charcoal | `#1B1D19` | Headline, body text, dan elemen utama |
| Muted Text | <span style="color:#777B73">■</span> Soft gray | `#777B73` | Metadata, caption, dan deskripsi sekunder |
| Nature Green | <span style="color:#244B39">■</span> Forest green | `#244B39` | Supporting color untuk elemen bertema alam atau surface gelap |
| Fresh Accent | <span style="color:#D8E94A">■</span> Fresh lime | `#D8E94A` | Highlight, badge, atau aksen CTA bila sesuai dengan brand |
| Soft Border | <span style="color:#E5E3DA">■</span> Warm gray | `#E5E3DA` | Border, divider, dan pemisah konten |

### Color usage rules
- Gunakan warna brand resmi Inspiratour untuk primary CTA, active state, dan identitas utama.
- Warm Canvas dan White menjadi pilihan surface; jangan membuat semua section berwarna.
- Ink digunakan untuk teks utama agar keterbacaan tetap tinggi.
- Muted Text hanya untuk informasi sekunder, bukan teks penting.
- Nature Green dapat memperkuat nuansa outdoor, terutama pada elemen pendukung atau area gelap.
- Fresh Accent digunakan sedikit dan terarah. Jangan menjadikan lime sebagai warna dominan jika tidak sesuai dengan brand resmi.
- Jangan mencampur banyak warna aksen sekaligus. Pilih satu aksen dominan yang paling selaras dengan brand.
- Pastikan kontras teks dan background memenuhi aksesibilitas.

### Photography color direction
- Natural greens, earthy tones, warm sunlight, ocean blues, dan warna destinasi yang autentik.
- Hindari saturasi berlebihan, filter ekstrem, serta color grading yang membuat foto terlihat tidak natural.
- Gunakan overlay gelap hanya ketika teks ditempatkan di atas foto dan membutuhkan kontras.

---

## 03. TYPOGRAPHY

### Font family
Gunakan **satu keluarga font utama** untuk seluruh interface.

Prioritas pemilihan:
1. Pertahankan font brand yang sudah digunakan Inspiratour.
2. Jika belum ada font yang konsisten, gunakan satu keluarga sans-serif modern dengan karakter bersih, humanist, dan mudah dibaca.

Jangan mencampur beberapa keluarga font hanya untuk meniru screenshot.

### Typographic character
- Clean and contemporary.
- Confident but friendly.
- Editorial, bukan dekoratif.
- Headline kuat dan mudah dipindai.
- Body text nyaman dibaca.

### Weight
| Weight | Usage |
|---|---|
| 400 Regular | Body text, deskripsi, angka besar |
| 500 Medium | Navigation, label, dan metadata penting |
| 600 Semibold | Card title dan section heading |
| 700 Bold | Headline yang benar-benar membutuhkan penekanan |

**Angka besar wajib menggunakan weight 400 / Regular.** Hindari angka tebal yang terasa seperti dashboard finansial.

### Type scale
| Role | Desktop guideline |
|---|---:|
| Display / Hero | 64–88 px |
| H1 / Page title | 48–64 px |
| H2 / Section title | 32–44 px |
| H3 / Card title | 20–28 px |
| Body | 15–17 px |
| Caption | 12–14 px |
| Navigation | 13–15 px |

Sesuaikan skala secara responsif. Gunakan line-height rapat untuk headline dan lebih longgar untuk paragraf. Hindari penggunaan uppercase panjang pada body text.

---

## 04. COMPONENTS

### Cards
Karakter card: clean, tactile, modern, dan tidak terlalu dekoratif.

- Radius guideline: 16–24 px.
- Gunakan surface putih atau warm neutral.
- Border tipis atau shadow sangat halus.
- Padding konsisten dan proporsional.
- Image card dapat menggunakan foto sebagai elemen dominan.
- Informasi di dalam card harus memiliki hierarki yang jelas.
- Variasikan ukuran card hanya jika kebutuhan kontennya berbeda.

Jangan membuat semua card identik atau menambahkan shadow tebal pada setiap komponen.

### Image cards
- Foto menjadi fokus utama.
- Gunakan crop yang menjaga subjek dan konteks destinasi.
- Radius konsisten dengan sistem card.
- Label dan caption singkat.
- Overlay hanya jika diperlukan untuk keterbacaan.
- Hover dapat memberi image zoom yang sangat halus.

### Buttons
**Primary**
- Gunakan warna primary brand Inspiratour.
- Kontras tinggi dan label aksi yang jelas.
- Bentuk rounded atau pill, sesuai karakter brand.
- Tinggi dan padding nyaman untuk disentuh.

**Secondary**
- Neutral atau transparent surface.
- Border halus.
- Tidak bersaing secara visual dengan primary CTA.

**Icon button**
- Bentuk circular atau rounded-square.
- Ikon sederhana dan mudah dikenali.
- Sediakan hover, focus, active, dan disabled state.

Transition interaksi umumnya 180–280 ms.

### Badges & tags
- Compact pill shape.
- Warna lembut dan kontras teks yang cukup.
- Gunakan untuk kategori, tipe pengalaman, status, atau metadata yang berguna.
- Hindari badge dekoratif yang tidak menambah informasi.

### Charts
Chart bukan elemen wajib pada website travel. Gunakan hanya jika data memang membantu pengguna memahami sesuatu, misalnya tren, perbandingan, atau ringkasan informasi.

- Minimal gridlines.
- Label dan angka mudah dibaca.
- Satu warna brand untuk data utama.
- Warna netral untuk data pembanding.
- Animasi singkat dan tidak mengganggu.
- Jangan membuat chart dekoratif tanpa makna.

### Meters & progress
- Track rounded.
- Active state memakai warna brand.
- Inactive track memakai neutral tone.
- Tampilkan angka atau label jika membantu pemahaman.
- Hindari meter jika informasi dapat disampaikan lebih sederhana.

### Navigation & form controls
- Navigasi ringkas dan mudah dipahami.
- Active state terlihat jelas.
- Dropdown, input, dan date selector konsisten dengan radius serta spacing komponen.
- Focus state harus jelas.
- Touch target mobile nyaman digunakan.

---

## 05. DENSITY & SPACING

### Density: 2/3 — Balanced, spacious, informative
Tampilan harus terasa lapang, tetapi tidak kosong. Berikan ruang untuk fotografi dan headline tanpa membuat pengguna harus scroll terlalu jauh untuk menemukan informasi penting.

- Kelompokkan informasi yang saling berkaitan.
- Hindari paragraf panjang tanpa pemisah.
- Jaga keseimbangan antara foto, teks, dan komponen.
- Gunakan whitespace untuk membentuk hierarki.
- Jangan menambahkan card atau dekorasi hanya untuk mengisi ruang.

### Spacing scale
Gunakan basis 8 px:

| Token | Value |
|---|---:|
| XS | 8 px |
| SM | 16 px |
| MD | 24 px |
| LG | 32 px |
| XL | 48 px |
| 2XL | 64 px |
| 3XL | 96 px |

Gunakan jarak kecil untuk elemen yang berhubungan dan jarak besar untuk memisahkan kelompok konten.

---

## 06. MOTION & PARALLAX

### Motion character
Motion harus terasa smooth, natural, cinematic, dan purposeful. Gerakan mendukung pengalaman menjelajahi destinasi, bukan menjadi atraksi yang mengganggu.

### Section-to-section image parallax
Terapkan **image parallax saat pengguna berpindah dari satu section ke section berikutnya**.

Arahan:
- Gunakan gambar sebagai layer visual yang bergerak lebih lambat daripada scroll halaman.
- Gerakan gambar harus terasa subtle dan memberi kedalaman.
- Gunakan parallax pada section yang memiliki foto atau visual destinasi, bukan pada semua elemen.
- Pertahankan focal point foto agar subjek utama tidak keluar dari frame.
- Gunakan `overflow: hidden` pada container gambar bila diperlukan.
- Pastikan teks dan informasi tetap stabil serta mudah dibaca.
- Hindari parallax berlebihan yang membuat pengguna kehilangan orientasi.
- Jangan membuat efek parallax menghambat scroll atau interaksi.

### Suggested motion values
| Motion | Guideline |
|---|---|
| Micro interaction | 150–200 ms |
| Hover transition | 180–280 ms |
| Element reveal | 350–600 ms |
| Section image parallax | Subtle scroll-linked movement |
| Image hover zoom | Scale sekitar 1.02–1.05 |

Gunakan easing yang natural. Jika menggunakan GSAP ScrollTrigger, pastikan trigger dan scrub tidak menyebabkan layout jump. Jangan memaksa smooth scrolling jika mengganggu aksesibilitas atau native scroll.

### Accessibility & performance
- Hormati `prefers-reduced-motion`.
- Pada perangkat dengan kemampuan terbatas, kurangi atau nonaktifkan parallax.
- Hindari animasi yang memicu layout shift.
- Prioritaskan transform dan opacity untuk animasi.
- Pastikan gambar memiliki ukuran dan loading strategy yang sesuai.

---

## 07. DESIGN DIALS

### ENERGY — 2/3
Enerjik dan mengundang eksplorasi, tetapi tetap profesional.

- Fotografi destinasi yang ekspresif.
- Aksen warna yang terkontrol.
- Headline yang percaya diri.
- Detail playful dalam dosis kecil.

### RHYTHM — 2/3
Komposisi editorial yang seimbang.

- Variasi skala headline dan gambar.
- Pergantian area visual dan area informasi.
- Whitespace sebagai jeda.
- Hindari pola komponen yang monoton.

### MOTION — 2/3
Halus dan sinematik.

- Subtle image parallax antar-section.
- Gentle image reveal.
- Smooth hover transitions.
- Stagger ringan bila relevan.
- Motion selalu memiliki tujuan.

---

## 08. RESPONSIVE PRINCIPLES

### Desktop
- Beri ruang untuk fotografi dan headline.
- Jaga komposisi tetap seimbang.
- Manfaatkan parallax secara halus jika performa mendukung.

### Tablet
- Sesuaikan rasio gambar dan lebar konten.
- Kurangi jarak yang terlalu besar.
- Jaga keterbacaan dan hierarki.

### Mobile
- Prioritaskan native scrolling dan kemudahan navigasi.
- Kurangi atau nonaktifkan parallax yang berat.
- Pastikan teks tidak menutupi subjek utama foto.
- Gunakan touch target yang nyaman.
- Hindari layout desktop yang hanya diperkecil.

---

## 09. STRICT DESIGN RULES

**DO**
- Pertahankan identitas dan warna brand Inspiratour yang sudah ada.
- Gunakan screenshot hanya sebagai referensi bahasa visual.
- Jadikan destinasi dan pengalaman perjalanan sebagai fokus visual.
- Jaga konsistensi komponen, typography, dan spacing.
- Gunakan motion untuk memperkuat storytelling perjalanan.

**DON'T**
- Jangan menyalin layout atau urutan section dari screenshot.
- Jangan menyalin konten, logo, atau identitas brand referensi.
- Jangan mengganti warna brand resmi tanpa alasan.
- Jangan memakai banyak font family.
- Jangan menggunakan gradient, shadow, atau animasi secara berlebihan.
- Jangan menambahkan chart atau meter yang tidak relevan.
- Jangan mengorbankan keterbacaan demi efek visual.

---

## FINAL ART DIRECTION

**INSPIRATOUR — A More Inspiring Way to Explore**

Bangun pengalaman travel yang profesional, playful, dan penuh karakter melalui fotografi destinasi yang kuat, tipografi editorial, interface modern, warna yang natural, serta transisi image parallax yang halus antar-section.

Hasil akhirnya harus terasa seperti brand travel yang terpercaya dan berpengalaman, sekaligus membangkitkan rasa penasaran untuk menjelajahi tempat baru.

**Use the visual language. Do not copy the reference layout.**
