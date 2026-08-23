# Adzkiya Mom Baby Care — Ledger Edition

Aplikasi kwitansi, rekapan, dan reservasi (HTML statis). **Bisa di-host di GitHub Pages** (tanpa Netlify).

## Deploy di GitHub Pages (aktif)

Pages sudah diatur **Source: Deploy from a branch → `main` → `/ (root)`**, jadi setiap push/merge ke `main` langsung ter-deploy otomatis (tanpa workflow tambahan).

- **URL live:** `https://putra1996.github.io/adzkiya-moby-care-v5_offline-online-backup/`
- File `.nojekyll` sudah ada agar file statis tidak diproses Jekyll.

### Cara deploy

1. Push perubahan ke `main` (atau merge PR ke `main`).
2. Tunggu 1–2 menit. Pantau status di tab **Actions → "Pages build and deployment"**.
3. Buka URL live (pakai hard refresh Ctrl/Cmd+Shift+R kalau masih dapat versi lama).

### Jika ingin deploy dari branch lain

**Settings → Pages → Source:** Deploy from a branch → pilih branch + **Folder:** `/ (root)` → Save.

## Fitur

- Mode pasien (reservasi tanggal/jam tanpa batas) & mode admin (password `Adzkiya2025`)
- Edit kwitansi, biaya transport, cetak PDF, rekapan, Excel
- Backup / restore JSON & Google Drive
- Terima / hapus reservasi

## Deploy Netlify (opsional)

Jika kuota Netlify masih ada: publish directory `.` tanpa build, atau drag folder berisi `index.html`.
