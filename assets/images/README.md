# 📸 FOLDER GAMBAR - PUSAKA BUSANA

## ✅ Status Folder

Folder `assets/images/` sudah siap untuk menyimpan gambar lokal pakaian adat Indonesia.

---

## 🚀 Cara Cepat Setup Gambar

### Opsi 1: Download Otomatis (Recommended)

**Gunakan PowerShell Script:**

1. Klik kanan pada file `DOWNLOAD-SCRIPT.ps1`
2. Pilih **"Run with PowerShell"**
3. Script akan download ~30 gambar dari Wikimedia Commons
4. Tunggu sampai selesai

**Keuntungan:**
- ✅ Download otomatis
- ✅ Nama file sudah benar
- ✅ Tidak perlu manual satu-satu

---

### Opsi 2: Download Manual

**Ikuti panduan lengkap di:**
📄 `SETUP-GAMBAR.md` ← Baca file ini untuk panduan lengkap!

---

## 📁 Struktur File di Folder Ini

```
assets/images/
├── README.md                    ← File ini
├── SETUP-GAMBAR.md              ← Panduan lengkap setup gambar
├── DOWNLOAD-SCRIPT.ps1          ← Script download otomatis
├── ulos-sumut.webp              ← Contoh gambar lokal (opsional)
├── kebaya-jawa-tengah.webp      ← Contoh gambar lokal (opsional)
└── ... (gambar lainnya)
```

---

## 🎯 Langkah Singkat (Setelah Download Gambar)

### 1️⃣ Download Gambar
- Otomatis: Jalankan `DOWNLOAD-SCRIPT.ps1`
- Manual: Download dari Wikimedia Commons (lihat `SETUP-GAMBAR.md`)

### 2️⃣ Convert ke WebP (Opsional tapi Recommended)
- Online: https://squoosh.app
- Desktop: XnConvert (https://www.xnview.com/en/xnconvert/)

### 3️⃣ Update image-mapping.js
Buka file `assets/data/image-mapping.js`, ganti:

**SEBELUM:**
```javascript
"ulos-sumut": "https://upload.wikimedia.org/...",
```

**SESUDAH:**
```javascript
"ulos-sumut": "assets/images/ulos-sumut.webp",
```

### 4️⃣ Test di Browser
- Buka `index.html`
- Ctrl + F5 (hard refresh)
- Cek gambar muncul

---

## 📊 Format Gambar yang Disarankan

| Format | Ukuran | Kapan Pakai |
|--------|--------|-------------|
| **WebP (Q75)** | ~25KB | ✅ **RECOMMENDED** |
| JPG (Q75) | ~35KB | ✅ Good fallback |
| PNG | ~150KB | ❌ Jangan untuk foto |

**Target:** < 50KB per gambar

---

## 🔗 Quick Links

- **Panduan Lengkap:** `SETUP-GAMBAR.md`
- **Script Download:** `DOWNLOAD-SCRIPT.ps1`
- **Convert Online:** https://squoosh.app
- **Convert Batch:** https://www.xnview.com/en/xnconvert/
- **Sumber Gambar:** https://commons.wikimedia.org/wiki/Category:Traditional_clothing_of_Indonesia

---

## ❓ Butuh Bantuan?

Baca file `SETUP-GAMBAR.md` untuk:
- ✅ Panduan step-by-step lengkap
- ✅ Daftar semua gambar yang perlu didownload
- ✅ FAQ lengkap
- ✅ Tips & tricks

---

**Happy Setting Gambar! 🚀**
