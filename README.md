# PUSAKA BUSANA — Galeri Digital Pakaian Adat Indonesia

> *"Setiap helai benang menyimpan cerita, setiap motif menyimpan doa."*

Website galeri digital yang mendokumentasikan kekayaan budaya Indonesia melalui pakaian adat tradisional dari berbagai daerah di Nusantara.

## 📋 Fitur

- ✅ **100+ Pakaian Adat** dari 34 provinsi Indonesia
- ✅ **Search & Filter** berdasarkan nama, provinsi, pulau, dan acara
- ✅ **Infinite Scroll** — Load 20 item pertama, load more saat scroll
- ✅ **Lazy Loading** gambar untuk performa optimal
- ✅ **Responsive Design** — Desktop, tablet, dan mobile
- ✅ **Classic & Elegant UI** — Clean, minimalis, profesional
- ✅ **Highlight Search** — Text yang dicari akan di-highlight
- ✅ **SEO Optimized** — Meta tags lengkap untuk search engine

## 🚀 Deploy ke GitHub Pages

### Langkah 1: Buat Repository
1. Buka [GitHub](https://github.com)
2. Klik **New Repository**
3. Nama repository: `pusaka-busana`
4. Visibility: **Public**
5. Klik **Create repository**

### Langkah 2: Upload File
**Opsi A: Via Git (Recommended)**
```bash
# Clone repository
git clone https://github.com/username/pusaka-busana.git
cd pusaka-busana

# Copy semua file project ke folder ini
# Lalu commit dan push
git add .
git commit -m "Initial commit: PUSAKA BUSANA website"
git push origin main
```

**Opsi B: Via Web Upload**
1. Buka repository yang sudah dibuat
2. Klik **uploading an existing file**
3. Drag & drop semua file dari project ini
4. Commit changes

### Langkah 3: Aktifkan GitHub Pages
1. Buka **Settings** repository
2. Scroll ke bagian **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** → **/(root)**
5. Klik **Save**
6. Tunggu 2-5 menit, website akan live di:
   ```
   https://username.github.io/pusaka-busana/
   ```

## 📁 Struktur File

```
pusaka-busana/
├── index.html                    # Halaman utama
├── assets/
│   ├── css/
│   │   └── style.css            # Semua styling
│   ├── js/
│   │   └── main.js              # JavaScript utama
│   ├── data/
│   │   └── clothing-data.js     # Data 100+ pakaian adat
│   └── images/                  # (Opsional) Gambar lokal
├── README.md                    # Dokumentasi ini
└── .gitignore                   # Git ignore rules
```

## 🎨 Kustomisasi

### Mengganti Warna
Edit file `assets/css/style.css`, bagian `:root`:
```css
:root {
  --color-accent: #C41E3A;  /* Ganti warna aksen */
  --color-bg: #FFFFFF;      /* Ganti background */
}
```

### Menambah Data Pakaian Adat
Edit file `assets/data/clothing-data.js`, tambahkan object baru:
```javascript
{
  id: "unik-id",
  name: "Nama Pakaian",
  province: "Provinsi",
  island: "Pulau",
  ethnic: "Suku",
  gender: "pria/wanita/unisex",
  occasions: ["pernikahan", "upacara"],
  description: "Deskripsi singkat...",
  symbolism: { warna: "makna" },
  imageUrl: "https://url-gambar.com",
  imageCredit: "Kredit foto",
  sources: [{ name: "Sumber", url: "https://sumber.com", verified: true }],
  keywords: ["keyword1", "keyword2"]
}
```

### Mengganti Gambar
Ganti URL `imageUrl` di setiap data dengan URL gambar asli. Disarankan:
- Rasio 16:9
- Ukuran maksimal 400x225px
- Format WebP atau JPG untuk performa

## 📊 Performa

Target Lighthouse Score:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

Tips optimisasi:
- Gunakan gambar dengan ukuran sesuai kebutuhan
- Aktifkan compression di server
- Manfaatkan browser caching

## 🔧 Teknologi

- **HTML5** — Semantic markup
- **CSS3** — Modern styling dengan CSS Variables
- **Vanilla JavaScript** — No framework, pure JS
- **Google Fonts** — Merriweather & Inter

## 📝 Sumber Data & Gambar

**Data pakaian adat:**
- Kemdikbud — Kebudayaan Indonesia
- Wikipedia Indonesia — [Daftar Busana Tradisional](https://id.wikipedia.org/wiki/Daftar_busana_tradisional_Indonesia)
- Dinas Kebudayaan Provinsi

**Gambar (107 item):**
- **Wikimedia Commons** — [Traditional Clothing of Indonesia](https://commons.wikimedia.org/wiki/Category:Traditional_clothing_of_Indonesia)
- **Wikimedia Commons** — [Batik](https://commons.wikimedia.org/wiki/Category:Batik)
- **Wikimedia Commons** — [Kebaya](https://commons.wikimedia.org/wiki/Category:Kebaya)
- **Wikimedia Commons** — [Weaving in Indonesia](https://commons.wikimedia.org/wiki/Category:Weaving_in_Indonesia)
- **Wikimedia Commons** — [Textiles of Indonesia](https://commons.wikimedia.org/wiki/Category:Textiles_of_Indonesia)

Semua gambar berlisensi **bebas (Creative Commons)** dan dapat digunakan secara legal.

## 👥 Kontribusi

Jika ingin menambahkan data atau memperbaiki website:

1. **Fork** repository ini
2. Buat **branch** fitur (`git checkout -b fitur/tambah-data`)
3. **Commit** perubahan (`git commit -m "Tambah data pakaian adat X"`)
4. **Push** ke branch (`git push origin fitur/tambah-data`)
5. Buat **Pull Request**

## 📞 Kontak

Untuk pertanyaan atau saran, silakan:
- Buat **Issue** di GitHub
- Email: (sesuaikan dengan kontak Anda)

## 📄 Lisensi

Project ini dibuat untuk tujuan edukasi dan pelestarian budaya. Silakan digunakan dan dikembangkan secara bebas.

## 🙏 Terima Kasih

- **Kemdikbud** — Data dan dokumentasi budaya
- **Dinas Kebudayaan Provinsi** — Referensi dan validasi data
- **Kontributor** — Semua yang terlibat dalam pengembangan

---

> *"Merawat warisan, mengenali jati diri."*

**Dibuat dengan ❤️ untuk pelestarian budaya Indonesia**
