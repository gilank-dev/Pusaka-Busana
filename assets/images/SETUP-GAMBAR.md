# 📥 PANDUAN DOWNLOAD & SETUP GAMBAR LOKAL

## 🎯 STATUS: SIAP UNTUK GAMBAR LOKAL

Website PUSAKA BUSANA sudah terkonfigurasi untuk menggunakan gambar lokal.
Folder `assets/images/` sudah dibuat dan siap digunakan.

---

## 📋 LANGKAH-LANGKAH (STEP BY STEP)

### ✅ STEP 1: Download Gambar dari Wikimedia Commons

**URL Sumber:**
- Ulos: https://commons.wikimedia.org/wiki/File:Batak_Ulos_as_Fashion.jpg
- Baju Kurung Minang: https://commons.wikimedia.org/wiki/File:Traditional_minang_costumes.jpg
- Kebaya: https://commons.wikimedia.org/wiki/File:Baju_kebaya.JPG
- Batik: https://commons.wikimedia.org/wiki/Category:Batik
- Songket: https://commons.wikimedia.org/wiki/Category:Songket

**Cara Download:**
1. Buka URL gambar di atas
2. Klik kanan pada gambar → **"Save image as..."**
3. Pilih folder `assets/images/`
4. Rename sesuai format di bawah

---

### ✅ STEP 2: Rename File Gambar

**Format Penamaan (WAJIB):**
```
[id-pakaian].webp
```

**Contoh:**
- `ulos-sumut.webp`
- `kebaya-jawa-tengah.webp`
- `batik-solo.webp`
- `baju-bodo-sulsel.webp`

---

### ✅ STEP 3: Convert ke WebP (Opsional tapi Recommended)

**Cara Online (Gampang):**
1. Buka https://squoosh.app
2. Drag & drop gambar JPG/PNG
3. Panel kanan → Pilih **WebP**
4. Quality: **75**
5. Download → Simpan di `assets/images/`

**Cara Batch (Banyak Sekaligus):**
1. Download XnConvert: https://www.xnview.com/en/xnconvert/
2. Add semua gambar
3. Output → Format: **WebP**, Quality: **75**
4. Convert → Selesai!

---

### ✅ STEP 4: Update image-mapping.js

Buka file: `assets/data/image-mapping.js`

**GANTI URL dengan path lokal:**

**SEBELUM (URL Wikimedia):**
```javascript
"ulos-sumut": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Batak_Ulos_as_Fashion.jpg/400px-Batak_Ulos_as_Fashion.jpg",
```

**SESUDAH (Path Lokal):**
```javascript
"ulos-sumut": "assets/images/ulos-sumut.webp",
```

**Lakukan untuk semua gambar yang sudah kamu download!**

---

### ✅ STEP 5: Test di Browser

1. Buka `index.html` di browser
2. Tekan **Ctrl + F5** (hard refresh)
3. Lihat apakah gambar muncul
4. Tekan **F12** → Tab **Network** → Cek ukuran gambar
5. Pastikan loading cepat (< 2 detik) ✅

---

## 📊 DAFTAR GAMBAR YANG PERLU DIDOWNLOAD

### SUMATERA (15 gambar):
```
✅ ulos-sumut.webp          → Batak Ulos
✅ baju-kurung-sumbar.webp  → Traditional Minang Costumes
✅ aesan-gede-sumsel.webp   → Wedding Palembang
✅ baju-ulee-balang-nad.webp → Aceh Traditional
✅ songket-riau.webp
✅ teluk-belanga-riau.webp
✅ songket-jambi.webp
✅ kain-tapis-lampung.webp
✅ baju-kiambang-sumbar.webp
✅ baju-batabue-sumbar.webp
✅ pakaian-melayu-bengkulu.webp
✅ pakaian-adat-kepri.webp
✅ pakaian-bangka-belitung.webp
✅ pakaian-sumatera-barat-upacara.webp
✅ kain-songket-sumut.webp
```

### JAWA (22 gambar):
```
✅ kebaya-jawa-tengah.webp  → Baju Kebaya
✅ batik-solo.webp          → Batik Artisan/Canting
✅ beskap-jawa.webp
✅ kebaya-kartini.webp      → Baju Kebaya
✅ batik-pekalongan.webp    → Batik Jawa Hokokai
✅ batik-semarang.webp
✅ kebaya-encim.webp        → Batik Encim
✅ batik-yogyakarta.webp    → Batik Truntum
✅ kesatrian-yogya.webp
✅ batik-banyumas.webp
✅ kebaya-sunda.webp        → Baju Kebaya
✅ batik-cirebon.webp       → Batik Mega Mendung
✅ batik-garutan.webp
✅ batik-tasikmalaya.webp
✅ batik-indramayu.webp
✅ kebaya-betawi.webp       → Kebaya Kerancang Betawi
✅ batik-banten.webp
✅ pangsi-betawi.webp       → Baju Sadariah Betawi
✅ batik-madura.webp        → Batik Madura
✅ mantenan-surabaya.webp
✅ batik-tulungagung.webp
✅ batik-malang.webp
```

### KALIMANTAN (10 gambar):
```
✅ king-baba-kalbar.webp
✅ king-inoi-kalbar.webp
✅ taa-kalteng.webp
✅ babukung-kalteng.webp
✅ kustin-tengkulung-kalsel.webp
✅ taluk-balanga-kalsel.webp
✅ pakaian-dayak-benuaq-kaltim.webp
✅ pakaian-banjar-kaltara.webp
✅ dayak-lundayeh-kaltara.webp
✅ batik-borneo-kaltim.webp
```

### SULAWESI (15 gambar):
```
✅ baju-bodo-sulsel.webp    → Baju Bodo
✅ jas-tutup-sulsel.webp    → Pakaian Adat Bugis Makassar
✅ baju-ngoembe-sulteng.webp
✅ baju-ndege-sulteng.webp
✅ baju-mosolo-sulut.webp
✅ laku-tepu-sulut.webp
✅ baju-adat-sultenggara.webp
✅ baju-tolombawa-sultra.webp
✅ lipa-sultra.webp
✅ baju-bara-palopo.webp
✅ sewwitu-toraja.webp
✅ toga-toraja.webp
✅ pakaian-mandar-sulbar.webp
✅ pattuqduq-towaine-sulbar.webp
✅ bantu-sulteng.webp
```

### BALI & NUSA TENGGARA (15 gambar):
```
✅ kebaya-bali.webp
✅ kamen-bali.webp
✅ songket-lombok.webp
✅ lambung-ntb.webp
✅ pesta-ntb.webp
✅ tenun-sumba-ntt.webp     → Traditional Clothes Sumba
✅ tenun-flores.webp
✅ tenun-rote.webp
✅ tenun-alor.webp
✅ kebaya-ntt.webp
✅ tenun-timor.webp
✅ songket-bali.webp
✅ udeng-bali.webp
✅ tenun-ende-ntt.webp
✅ songket-sumbawa.webp
```

### MALUKU (8 gambar):
```
✅ baju-cele-maluku.webp
✅ baju-kimun-maluku.webp
✅ mantera-putih-maluku.webp
✅ pakaian-adat-malut.webp
✅ mantera-merah-maluku.webp
✅ baju-manila-maluku.webp
✅ pakaian-kep-arsiter-malut.webp
✅ pakaian-bacan-malut.webp
```

### PAPUA (8 gambar):
```
✅ koteka-papua.webp
✅ rok-rumbai-papua.webp
✅ honai-papua-pakaian.webp → Menjahit Baju Kulit Kayu
✅ tugu-papua.webp
✅ ewer-papuabarat.webp
✅ yokal-papua.webp
✅ sigi-papuabarat.webp
✅ pakaian-biak-papua.webp
```

### LAINNYA (14 gambar):
```
✅ batik-lasem.webp
✅ batik-kudus.webp
✅ tenun-lampung.webp
✅ pakaian-adat-dki.webp
✅ kebaya-modern-jawa.webp
✅ batik-tuban.webp
✅ tenun-gresik.webp
✅ pakaian-dayak-ot-danum.webp
✅ tenun-ntt-kisbanta.webp
✅ pakaian-mee-papua.webp
✅ baju-lanong-sultra.webp
✅ batik-probolinggo.webp
✅ pakaian-yapun-papua.webp
✅ tenun-selayar.webp
```

---

## 🛠️ TOOLS REKOMENDASI

| Tujuan | Tool | URL |
|--------|------|-----|
| Convert 1 gambar | Squoosh | https://squoosh.app |
| Convert banyak gambar | XnConvert | https://www.xnview.com/en/xnconvert/ |
| Kompres JPG/PNG | TinyPNG | https://tinypng.com |
| Resize gambar | Bulk Resize | https://bulkresizephotos.com |

---

## 📊 TARGET UKURAN FILE

| Format | Ukuran (per gambar) | Total 107 gambar | Loading |
|--------|---------------------|------------------|---------|
| **PNG (tanpa kompres)** | ~150KB | ~16MB | ❌ 5-10 detik |
| **PNG (TinyPNG)** | ~50KB | ~5.3MB | ⚡ 2-3 detik |
| **JPG (Quality 75)** | ~35KB | ~3.7MB | ⚡ 1-2 detik |
| **WebP (Quality 75)** | ~25KB | ~2.7MB | ✅ < 1 detik |

**🏆 Rekomendasi:** Pakai **WebP**!

---

## ❓ FAQ

### Q: Gambar tidak muncul?
```
Cek:
1. Path benar? → "assets/images/nama-file.webp"
2. File ada di folder?
3. Nama file sama persis? (case-sensitive!)
4. Browser sudah Ctrl + F5?
```

### Q: Website lambat?
```
Solusi:
1. Kompres gambar di Squoosh.app
2. Target: < 50KB per gambar
3. Pakai WebP (lebih ringan 25-35%)
```

### Q: Berapa lama untuk setup semua gambar?
```
- Download 107 gambar: 30 menit
- Convert ke WebP (batch): 15 menit
- Rename file: 30 menit
- Update image-mapping.js: 30 menit

Total: ~2 jam
```

---

## ✅ CHECKLIST

- [ ] Download gambar dari Wikimedia Commons
- [ ] Convert ke WebP (opsional tapi recommended)
- [ ] Rename sesuai format (`id-pakaian.webp`)
- [ ] Simpan di folder `assets/images/`
- [ ] Update `image-mapping.js` (ganti URL → path lokal)
- [ ] Test di browser (Ctrl + F5)
- [ ] Cek Network tab (F12) → loading < 2 detik

---

**Selamat mencoba! 🚀**
