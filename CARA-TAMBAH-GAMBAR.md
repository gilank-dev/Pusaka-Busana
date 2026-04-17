# 📸 CARA TAMBAH GAMBAR LOKAL - PANDUAN LENGKAP

## 📋 SITUASI KAMU SEKARANG

✅ **Kamu sudah punya gambar asli** pakaian adat
🎯 **Target:** Pakai gambar tersebut di website

---

## 🚀 LANGKAH SINGKAT (5 STEP)

1. **Convert** gambar ke WebP
2. **Rename** sesuai format
3. **Simpan** di `assets/images/`
4. **Update** `image-mapping.js`
5. **Test** di browser

---

## 📝 STEP 1: CONVERT KE WEBP

### Cara Online (Paling Gampang):

**Buka:** https://squoosh.app

1. Drag & drop gambar kamu
2. Panel kanan → Pilih **WebP**
3. Quality: **75**
4. Klik **Compress** → Download

### Cara Batch (Banyak Sekaligus):

**Download:** https://www.xnview.com/en/xnconvert/

1. Install XnConvert
2. Add semua gambar
3. Output → Format: **WebP**, Quality: **75**
4. Klik **Convert** → Selesai!

---

## 📝 STEP 2: RENAME FILE

**Format penamaan (WAJIB!):**

```
[id-pakaian].webp
```

**Contoh:**
```
✅ ulos-sumut.webp
✅ kebaya-jawa-tengah.webp
✅ batik-solo.webp
✅ baju-bodo-sulsel.webp
❌ IMG_2024.jpg (JANGAN!)
❌ Foto Ulos.png (JANGAN!)
```

### Daftar Lengkap 107 ID File:

<details>
<summary><strong>Klik untuk lihat semua ID (107 items)</strong></summary>

**SUMATERA (15):**
```
ulos-sumut.webp
baju-kurung-sumbar.webp
aesan-gede-sumsel.webp
baju-ulee-balang-nad.webp
songket-riau.webp
teluk-belanga-riau.webp
songket-jambi.webp
kain-tapis-lampung.webp
baju-kiambang-sumbar.webp
baju-batabue-sumbar.webp
pakaian-melayu-bengkulu.webp
pakaian-adat-kepri.webp
pakaian-bangka-belitung.webp
pakaian-sumatera-barat-upacara.webp
kain-songket-sumut.webp
```

**JAWA (22):**
```
kebaya-jawa-tengah.webp
batik-solo.webp
beskap-jawa.webp
kebaya-kartini.webp
batik-pekalongan.webp
batik-semarang.webp
kebaya-encim.webp
batik-yogyakarta.webp
kesatrian-yogya.webp
batik-banyumas.webp
kebaya-sunda.webp
batik-cirebon.webp
batik-garutan.webp
batik-tasikmalaya.webp
batik-indramayu.webp
kebaya-betawi.webp
batik-banten.webp
pangsi-betawi.webp
batik-madura.webp
mantenan-surabaya.webp
batik-tulungagung.webp
batik-malang.webp
```

**KALIMANTAN (10):**
```
king-baba-kalbar.webp
king-inoi-kalbar.webp
taa-kalteng.webp
babukung-kalteng.webp
kustin-tengkulung-kalsel.webp
taluk-balanga-kalsel.webp
pakaian-dayak-benuaq-kaltim.webp
pakaian-banjar-kaltara.webp
dayak-lundayeh-kaltara.webp
batik-borneo-kaltim.webp
```

**SULAWESI (15):**
```
baju-bodo-sulsel.webp
jas-tutup-sulsel.webp
baju-ngoembe-sulteng.webp
baju-ndege-sulteng.webp
baju-mosolo-sulut.webp
laku-tepu-sulut.webp
baju-adat-sultenggara.webp
baju-tolombawa-sultra.webp
lipa-sultra.webp
baju-bara-palopo.webp
sewwitu-toraja.webp
toga-toraja.webp
pakaian-mandar-sulbar.webp
pattuqduq-towaine-sulbar.webp
bantu-sulteng.webp
```

**BALI & NUSA TENGGARA (15):**
```
kebaya-bali.webp
kamen-bali.webp
songket-lombok.webp
lambung-ntb.webp
pesta-ntb.webp
tenun-sumba-ntt.webp
tenun-flores.webp
tenun-rote.webp
tenun-alor.webp
kebaya-ntt.webp
tenun-timor.webp
songket-bali.webp
udeng-bali.webp
tenun-ende-ntt.webp
songket-sumbawa.webp
```

**MALUKU (8):**
```
baju-cele-maluku.webp
baju-kimun-maluku.webp
mantera-putih-maluku.webp
pakaian-adat-malut.webp
mantera-merah-maluku.webp
baju-manila-maluku.webp
pakaian-kep-arsiter-malut.webp
pakaian-bacan-malut.webp
```

**PAPUA (8):**
```
koteka-papua.webp
rok-rumbai-papua.webp
honai-papua-pakaian.webp
tugu-papua.webp
ewer-papuabarat.webp
yokal-papua.webp
sigi-papuabarat.webp
pakaian-biak-papua.webp
```

**LAINNYA (14):**
```
batik-lasem.webp
batik-kudus.webp
tenun-lampung.webp
pakaian-adat-dki.webp
kebaya-modern-jawa.webp
batik-tuban.webp
tenun-gresik.webp
pakaian-dayak-ot-danum.webp
tenun-ntt-kisbanta.webp
pakaian-mee-papua.webp
baju-lanong-sultra.webp
batik-probolinggo.webp
pakaian-yapun-papua.webp
tenun-selayar.webp
```

</details>

---

## 📝 STEP 3: SIMPAN DI FOLDER

Copy semua file `.webp` yang sudah di-rename ke:

```
assets/images/
```

---

## 📝 STEP 4: UPDATE IMAGE-MAPPING.JS

Buka file: `assets/data/image-mapping.js`

**GANTI URL dengan path lokal:**

**SEBELUM:**
```javascript
const imageMapping = {
  "ulos-sumut": "https://upload.wikimedia.org/wikipedia/commons/thumb/...",
  "kebaya-jawa-tengah": "https://upload.wikimedia.org/wikipedia/commons/thumb/...",
  // ... semua URL Wikimedia
};
```

**SESUDAH:**
```javascript
const imageMapping = {
  "ulos-sumut": "assets/images/ulos-sumut.webp",
  "kebaya-jawa-tengah": "assets/images/kebaya-jawa-tengah.webp",
  "batik-solo": "assets/images/batik-solo.webp",
  // ... lanjutkan untuk semua gambar
};
```

**Contoh lengkap 1 item:**
```javascript
// Hanya ganti bagian URL-nya saja
"ulos-sumut": "assets/images/ulos-sumut.webp",  // ✅ Path lokal
```

---

## 📝 STEP 5: TEST DI BROWSER

1. Buka `index.html`
2. Tekan **Ctrl + F5** (hard refresh)
3. Lihat apakah gambar muncul
4. Tekan **F12** → Tab **Network** → Cek ukuran gambar
5. Pastikan loading < 2 detik ✅

---

## 📊 PERBANDINGAN UKURAN FILE

| Format | Ukuran (per gambar) | Total 107 gambar | Loading |
|--------|---------------------|------------------|---------|
| **PNG (tanpa kompres)** | ~150KB | ~16MB | ❌ 5-10 detik |
| **PNG (TinyPNG)** | ~50KB | ~5.3MB | ⚡ 2-3 detik |
| **JPG (Quality 75)** | ~35KB | ~3.7MB | ⚡ 1-2 detik |
| **WebP (Quality 75)** | ~25KB | ~2.7MB | ✅ < 1 detik |

**🏆 Rekomendasi:** Pakai **WebP**!

---

## 🛠️ CHECKLIST

- [ ] Convert gambar ke WebP (Squoosh.app)
- [ ] Rename sesuai format (`id-pakaian.webp`)
- [ ] Simpan di `assets/images/`
- [ ] Update `image-mapping.js` (ganti URL → path lokal)
- [ ] Test di browser (Ctrl + F5)
- [ ] Cek Network tab (F12) → loading < 2 detik

---

## 📁 STRUKTUR FOLDER

```
Blog Pakaian Adat Daerah/
├── assets/
│   ├── images/
│   │   ├── ulos-sumut.webp              ← Gambar kamu
│   │   ├── kebaya-jawa-tengah.webp      ← Gambar kamu
│   │   ├── batik-solo.webp              ← Gambar kamu
│   │   └── ... (107 gambar)
│   ├── data/
│   │   ├── clothing-data.js             ← Data pakaian
│   │   └── image-mapping.js             ← UPDATE FILE INI!
│   ├── css/style.css
│   └── js/main.js
└── index.html
```

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

### Q: WebP atau JPG?
```
WebP ✅:
- Lebih ringan 25-35%
- Support Chrome, Firefox, Edge, Safari 14+

JPG:
- Lebih compatible
- Ukuran lebih besar

🏆 Rekomendasi: WebP
```

### Q: Berapa lama untuk 107 gambar?
```
- Convert WebP (Squoosh manual): 2-3 jam
- Convert WebP (XnConvert batch): 15 menit
- Rename file: 30 menit
- Update image-mapping.js: 30 menit

Total: ~1-2 jam
```

---

## 🔗 TOOLS REKOMENDASI

| Tujuan | Tool | URL |
|--------|------|-----|
| Convert 1 gambar | Squoosh | https://squoosh.app |
| Convert banyak gambar | XnConvert | https://www.xnview.com/en/xnconvert/ |
| Kompres JPG/PNG | TinyPNG | https://tinypng.com |
| Resize gambar | Bulk Resize | https://bulkresizephotos.com |

---

**Selamat mencoba! 🚀**
