# 🖼️ CARA PAKAI WEBP - PANDUAN LENGKAP

## 📌 Apa Itu WebP?

**WebP** adalah format gambar modern dari **Google** yang:
- ✅ **25-35% lebih kecil** dari JPG (kualitas sama)
- ✅ **Lebih kecil 26%** dari PNG
- ✅ Support transparansi (seperti PNG)
- ✅ Support animasi (seperti GIF)
- ✅ Dipakai oleh Google Chrome, Firefox, Edge, Safari (iOS 14+)

---

## 🚀 CARA 1: Convert Online (PALING GAMPANG)

### A. Pakai Squoosh.app (RECOMMENDED)

**URL:** https://squoosh.app

**Langkah-langkah:**

1. **Buka** https://squoosh.app
2. **Drag & drop** gambar JPG/PNG ke halaman
3. Di panel kanan, pilih: **WebP**
4. Set **Quality: 75** (balance terbaik)
5. **Preview** hasil (kiri: original, kanan: WebP)
6. Klik **Compress** → Download

**Contoh Hasil:**
```
Original: foto.jpg (200KB)
WebP Q75: foto.webp (60KB)  ← 70% lebih kecil!
```

---

### B. Pakai CloudConvert

**URL:** https://cloudconvert.com/jpg-to-webp

**Langkah-langkah:**

1. Buka https://cloudconvert.com/jpg-to-webp
2. Klik **"Select File"** → Pilih gambar
3. (Opsional) Klik ⚙️ → Set quality **75%**
4. Klik **"Convert"**
5. Tunggu proses → Klik **"Download"**

**Kelebihan:**
- ✅ Bisa convert banyak file sekaligus (batch)
- ✅ Tidak perlu install software

---

### C. Pakai Convertio

**URL:** https://convertio.co/jpg-webp/

Sama seperti CloudConvert, bisa convert banyak file sekaligus.

---

## 💻 CARA 2: Convert di Komputer (OFFLINE)

### A. Windows - Pakai Paint (Bawaan)

**Windows 11 (sudah support WebP native):**

1. Buka gambar di **Paint**
2. **File** → **Save as** → Pilih **WebP**
3. Set nama file → **Save**

**Jika Paint tidak ada opsi WebP:**
- Install **WebP Codec** dari Microsoft Store
- Atau upgrade ke Windows 11

---

### B. Pakai IrfanView (Gratis, Ringan)

**Download:** https://www.irfanview.com

**Install:**
1. Download & install IrfanView
2. Download **WebP Plugin** dari site yang sama
3. Install plugin

**Convert:**
1. Buka gambar di IrfanView
2. **File** → **Save as** → Pilih **WebP**
3. Set quality **75** → **Save**

**Batch Convert (Banyak File):**
1. **File** → **Batch Conversion**
2. Add semua gambar JPG/PNG
3. Output format: **WebP**
4. Klik **Start Batch** → Selesai!

---

### C. Pakai XnConvert (Gratis, Batch)

**Download:** https://www.xnview.com/en/xnconvert/

**Langkah:**
1. Install XnConvert
2. **Tab Input** → Add semua gambar
3. **Tab Output** → Format: **WebP**, Quality: **75**
4. Klik **Convert** → Semua file ter-convert otomatis!

**Kelebihan:**
- ✅ Convert 100+ gambar sekaligus
- ✅ Bisa resize + compress dalam 1 klik
- ✅ Cross-platform (Windows, Mac, Linux)

---

## 📱 CARA 3: Convert di HP (Android/iOS)

### Android:

**App: "Image Converter"**
1. Download dari Play Store
2. Pilih gambar JPG/PNG
3. Output: **WebP**
4. Convert → Save

**App: "Photo Compressor"**
1. Compress dulu ke JPG kecil
2. Convert ke WebP via online tool

### iOS (iPhone):

**App: "Image2Go"**
1. Pilih foto
2. Convert ke WebP
3. Share/Save

**Atau pakai Online Tool:**
1. Buka Safari → https://squoosh.app
2. Upload foto dari gallery
3. Convert ke WebP → Download

---

## 🛠️ CARA 4: Pakai Command Line (UNTUK ADVANCED)

### Install cwebp (Google WebP Tools)

**Windows:**
```bash
# Download dari: https://developers.google.com/speed/webp/download
# Extract ke folder
# Tambahkan ke PATH
```

**Mac:**
```bash
brew install webp
```

**Linux:**
```bash
sudo apt-get install webp
```

### Convert 1 File:
```bash
cwebp -q 75 input.jpg -o output.webp
```

### Convert Semua File di Folder (Windows):
```bash
for %i in (*.jpg) do cwebp -q 75 "%i" -o "assets\images\%~ni.webp"
```

### Convert Semua File (Mac/Linux):
```bash
for i in *.jpg; do cwebp -q 75 "$i" -o "assets/images/${i%.jpg}.webp"; done
```

---

## 📋 CHECKLIST CONVERT KE WEBP

- [ ] Siapkan gambar JPG/PNG
- [ ] Pilih tool convert (Squoosh / IrfanView / XnConvert)
- [ ] Set quality **75** (balance terbaik)
- [ ] Convert ke WebP
- [ ] Cek ukuran file (harus < 50KB)
- [ ] Rename sesuai format (`ulos-sumut.webp`)
- [ ] Simpan di `assets/images/`
- [ ] Test di browser

---

## 📊 PERBANDINGAN HASIL

### Contoh Real (Gambar Batik):

| Format | Ukuran | % |
|--------|--------|---|
| **Original JPG** | 245KB | 100% |
| JPG (TinyPNG) | 98KB | 40% |
| **WebP (Q75)** | **68KB** | **28%** ✅ |
| WebP (Q50) | 42KB | 17% |

### Contoh Real (Foto Pakaian Adat):

| Format | Ukuran | % |
|--------|--------|---|
| **Original PNG** | 1.2MB | 100% |
| PNG (TinyPNG) | 420KB | 35% |
| **WebP (Q75)** | **280KB** | **23%** ✅ |
| WebP (Q50) | 180KB | 15% |

---

## 🎯 SETTING QUALITY WEBP

| Quality | Ukuran | Kualitas | Kapan Pakai |
|---------|--------|----------|-------------|
| **90-100** | Besar | Perfect | Foto produk, portfolio |
| **75-85** | Sedang | Bagus | **Website (RECOMMENDED)** |
| **50-70** | Kecil | OK | Thumbnail, preview |
| **< 50** | Sangat kecil | Buruk | ❌ Jangan dipakai |

**🏆 Rekomendasi untuk PUSAKA BUSANA:**
- **Quality: 75** (balance terbaik)
- **Ukuran target:** 20-50KB per gambar
- **Resolusi:** 400x225px (16:9)

---

## 🔧 CARA UPDATE WEBSITE SETELAH CONVERT

### Langkah 1: Simpan WebP di Folder

```
assets/images/
├── ulos-sumut.webp
├── kebaya-jawa-tengah.webp
├── batik-solo.webp
└── ... (107 file)
```

### Langkah 2: Update image-mapping.js

Buka: `assets/data/image-mapping.js`

**GANTI URL dengan Path Lokal:**

```javascript
const imageMapping = {
  // ❌ SEBELUM (URL Wikimedia):
  "ulos-sumut": "https://upload.wikimedia.org/wikipedia/commons/thumb/...",
  
  // ✅ SESUDAH (Path Lokal WebP):
  "ulos-sumut": "assets/images/ulos-sumut.webp",
  
  // Ulangi untuk semua gambar...
};
```

### Langkah 3: Test di Browser

1. Buka `index.html`
2. **Ctrl + F5** (hard refresh)
3. **F12** → **Network tab** → Cek ukuran gambar
4. Pastikan loading cepat (< 2 detik)

---

## ❓ FAQ - WEBP

### Q1: Apakah semua browser support WebP?

**Jawaban:**
- ✅ **Chrome** (versi 23+, 2012)
- ✅ **Firefox** (versi 65+, 2019)
- ✅ **Edge** (versi 18+, 2018)
- ✅ **Safari** (versi 14+, 2020)
- ✅ **Opera** (versi 11.1+, 2011)

**Catatan:** Safari versi lama (iOS < 14) tidak support WebP. 
**Solusi:** Website sudah punya fallback ke placeholder SVG.

---

### Q2: WebP atau JPG lebih baik untuk website?

**Jawaban:**
- **WebP** lebih ringan 25-35% → Website lebih cepat
- **JPG** lebih compatible → Support semua browser

**🏆 Rekomendasi:** Pakai **WebP** untuk performa optimal. Website ini sudah punya fallback otomatis.

---

### Q3: Bagaimana kalau browser tidak support WebP?

**Jawaban:**
Website ini sudah punya **fallback otomatis**:
```javascript
onerror="this.src='placeholder-svg'"
```

Jika WebP gagal load → otomatis tampil placeholder SVG.

---

### Q4: Berapa lama waktu convert 107 gambar ke WebP?

**Jawaban:**

| Cara | Waktu | Tools |
|------|-------|-------|
| **Squoosh (manual)** | 2-3 jam | Online |
| **XnConvert (batch)** | 10-15 menit | Desktop |
| **Command line** | 5 menit | Terminal |

**🏆 Rekomendasi:** Pakai **XnConvert** untuk batch convert 107 gambar sekaligus!

---

### Q5: Apakah WebP support transparansi?

**Jawaban:**
✅ **Ya!** WebP support alpha channel (transparansi) seperti PNG, dengan ukuran file 26% lebih kecil.

---

## 🎓 TIPS & TRICKS

### 💡 Tips 1: Batch Convert dengan XnConvert

1. Download: https://www.xnview.com/en/xnconvert/
2. Install
3. **Tab Input** → Add folder dengan 107 gambar
4. **Tab Actions** → Add action **Resize** → 400x225px
5. **Tab Output** → Format: **WebP**, Quality: **75**
6. Klik **Convert** → Semua gambar otomatis converted!

### 💡 Tips 2: Compress WebP Lebih Lanjut

Setelah convert ke WebP, bisa compress lagi dengan:
- **cwebp lossless:** `cwebp -lossless input.webp -o output.webp`
- **Online:** https://squoosh.app (convert WebP → WebP lagi)

### 💡 Tips 3: Cek Hasil Convert

Selalu cek hasil convert:
1. Buka file WebP di browser
2. Zoom in → Cek apakah ada artifact/blur
3. Jika terlalu blur → naikkan quality ke 80-85
4. Jika masih bagus → bisa turun ke quality 65-70 (lebih kecil)

---

## 📚 SUMBER & TOOLS

| Tool | URL | Fungsi |
|------|-----|--------|
| **Squoosh** | https://squoosh.app | Convert online (1 file) |
| **CloudConvert** | https://cloudconvert.com/jpg-to-webp | Convert online (batch) |
| **Convertio** | https://convertio.co/jpg-webp/ | Convert online (batch) |
| **TinyPNG** | https://tinypng.com | Kompres JPG/PNG |
| **XnConvert** | https://www.xnview.com/en/xnconvert/ | Batch convert desktop |
| **IrfanView** | https://www.irfanview.com | Viewer + converter |
| **cwebp CLI** | https://developers.google.com/speed/webp | Command line tool |
| **WebP.js** | https://github.com/nicjansma/webpjs | JavaScript fallback |

---

## 🚀 WORKFLOW REKOMENDASI (UNTUK PUSAKA BUSANA)

### Langkah Lengkap (Total: ~30 menit):

1. **Download 107 gambar** dari Wikimedia Commons
   - URL: https://commons.wikimedia.org/wiki/Category:Traditional_clothing_of_Indonesia
   - Klik kanan → Save Image As → JPG

2. **Install XnConvert**
   - Download: https://www.xnview.com/en/xnconvert/
   - Install (2 menit)

3. **Batch Convert + Resize + Compress**
   - Buka XnConvert
   - Add semua gambar JPG
   - Action: Resize → 400x225px
   - Output: WebP, Quality 75
   - Convert (5 menit)

4. **Rename File** (opsional, bisa script)
   - Format: `ulos-sumut.webp`, `kebaya-jawa.webp`, dll
   - Bisa pakai tool rename batch

5. **Simpan di assets/images/**

6. **Update image-mapping.js**
   - Ganti semua URL dengan path lokal

7. **Test di Browser**
   - Ctrl + F5
   - F12 → Network → Cek size & loading time

8. **✅ DONE!** Website sekarang super cepat!

---

**Selamat mencoba! 🚀**
