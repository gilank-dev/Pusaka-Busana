# PowerShell Script untuk Download Gambar dari Wikimedia Commons
# Simpan script ini di folder assets/images/
# Cara pakai: Klik kanan → "Run with PowerShell"

$ErrorActionPreference = 'Continue'

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  DOWNLOAD GAMBAR PUSAKA BUSANA" -ForegroundColor Cyan
Write-Host "  Dari Wikimedia Commons" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Create download directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
if (-not (Test-Path $scriptDir)) {
    New-Item -ItemType Directory -Path $scriptDir -Force
}

Set-Location $scriptDir

# Daftar URL gambar dari Wikimedia Commons (langsung ke file asli)
$images = @{
    # SUMATERA
    "ulos-sumut.jpg" = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Batak_Ulos_as_Fashion.jpg"
    "baju-kurung-sumbar.jpg" = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Traditional_minang_costumes.jpg"
    "aesan-gede-sumsel.jpg" = "https://upload.wikimedia.org/wikipedia/commons/2/2a/My_Wedding.jpg"
    
    # JAWA
    "kebaya-jawa-tengah.jpg" = "https://upload.wikimedia.org/wikipedia/commons/9/97/Baju_kebaya.JPG"
    "batik-solo.jpg" = "https://upload.wikimedia.org/wikipedia/commons/1/16/Batik_Artisan_Applying_Wax_with_Canting_in_Trusmi_Cirebon_Indonesia.jpg"
    "batik-pekalongan.jpg" = "https://upload.wikimedia.org/wikipedia/commons/4/42/Batik_Jawa_Hokokai_Pekalongan_Tulis.jpg"
    "batik-yogyakarta.jpg" = "https://upload.wikimedia.org/wikipedia/commons/6/60/Batik_Truntum.jpg"
    "batik-cirebon.jpg" = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Batik_Mega_Mendung.jpg"
    "kebaya-betawi.jpg" = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Kebaya_Kerancang_Betawi_20240622_121528.jpg"
    "pangsi-betawi.jpg" = "https://upload.wikimedia.org/wikipedia/commons/4/45/Baju_Sadariah_Betawi_20240622_121422.jpg"
    "batik-madura.jpg" = "https://upload.wikimedia.org/wikipedia/commons/4/4b/Batik_Madura.jpg"
    
    # SULAWESI
    "baju-bodo-sulsel.jpg" = "https://upload.wikimedia.org/wikipedia/commons/5/54/Baju_Bodo.jpg"
    "jas-tutup-sulsel.jpg" = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Pakaian_Adat_Suku_Bugis_-_Makassar.jpg"
    
    # KALIMANTAN
    "dayak-kalimantan.jpg" = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Children_in_traditional_costumes%2C_East_Kalimantan%2C_Indonesia.jpg"
    
    # BALI & NTT
    "tenun-sumba-ntt.jpg" = "https://upload.wikimedia.org/wikipedia/commons/1/12/Traditional_clothes_The_women_on_the_eastern_Indonesian_island_of_Sumba.jpg"
    "tenun-rote.jpg" = "https://upload.wikimedia.org/wikipedia/commons/a/a1/Salah_satu_pakaian_adat_Timur%2C_Indonesia.jpg"
    
    # PAPUA
    "honai-papua.jpg" = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Menjahit_Baju_Berbahan_Kulit_Kayu.JPG"
    
    # LAINNYA
    "batik-lasem.jpg" = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Batik_Lasem.jpg"
}

$totalImages = $images.Count
$currentImage = 0

Write-Host "Total gambar yang akan didownload: $totalImages" -ForegroundColor Yellow
Write-Host ""

foreach ($image in $images.GetEnumerator()) {
    $currentImage++
    $fileName = $image.Key
    $url = $image.Value
    $filePath = Join-Path $scriptDir $fileName
    
    Write-Host "[$currentImage/$totalImages] Downloading: $fileName" -ForegroundColor Green
    
    try {
        # Check if file already exists
        if (Test-Path $filePath) {
            Write-Host "  ⚠ File sudah ada, skip download" -ForegroundColor Yellow
            continue
        }
        
        # Download file
        Invoke-WebRequest -Uri $url -OutFile $filePath -UseBasicParsing
        
        # Verify download
        if (Test-Path $filePath) {
            $fileSize = (Get-Item $filePath).Length
            $fileSizeKB = [math]::Round($fileSize / 1KB, 2)
            Write-Host "  ✓ Success ($fileSizeKB KB)" -ForegroundColor Cyan
        } else {
            Write-Host "  ✗ Failed" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "  ✗ Error: $_" -ForegroundColor Red
    }
    
    # Small delay to avoid rate limiting
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  DOWNLOAD SELESAI!" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Langkah selanjutnya:" -ForegroundColor Yellow
Write-Host "1. Convert gambar ke WebP menggunakan:" -ForegroundColor White
Write-Host "   - Online: https://squoosh.app" -ForegroundColor White
Write-Host "   - Desktop: XnConvert (https://www.xnview.com/en/xnconvert/)" -ForegroundColor White
Write-Host ""
Write-Host "2. Rename file sesuai format: [id-pakaian].webp" -ForegroundColor White
Write-Host ""
Write-Host "3. Update file image-mapping.js" -ForegroundColor White
Write-Host "   Ganti URL dengan: assets/images/[nama-file].webp" -ForegroundColor White
Write-Host ""
Write-Host "Folder gambar: $scriptDir" -ForegroundColor Cyan
Write-Host ""
Write-Host "Tekan Enter untuk keluar..." -ForegroundColor Gray
Read-Host
