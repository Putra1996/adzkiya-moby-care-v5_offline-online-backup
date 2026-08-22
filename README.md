# Adzkiya Mom Baby Care — Ledger Edition

Aplikasi kwitansi, rekapan, dan reservasi (HTML statis). **Bisa di-host di GitHub Pages** (tanpa Netlify).

## Deploy di GitHub Pages (disarankan)

### Cara A — dari pengaturan repo (paling sederhana)

1. Buka repo di GitHub: `Putra1996/adzkiya-moby-care-v5_offline-online-backup`
2. **Settings → Pages**
3. **Source:** Deploy from a branch
4. **Branch:** `arena/01a0208b-adzkiya-moby-care-v5-offline-o`
5. **Folder:** `/ (root)`
6. Save. Tunggu 1–2 menit.
7. URL: `https://putra1996.github.io/adzkiya-moby-care-v5_offline-online-backup/`

### Cara B — GitHub Actions (otomatis tiap push)

1. **Settings → Pages → Source:** GitHub Actions
2. Push ke branch di atas. Workflow `Deploy GitHub Pages` akan jalan.
3. Buka tab **Actions** jika ingin melihat status deploy.

File `.nojekyll` sudah ada agar GitHub tidak memblokir file statis.

## Fitur

- Mode pasien (reservasi tanggal/jam tanpa batas) & mode admin (password `Adzkiya2025`)
- Edit kwitansi, biaya transport, cetak PDF, rekapan, Excel
- Backup / restore JSON & Google Drive
- Terima / hapus reservasi

## Deploy Netlify (opsional)

Jika kuota Netlify masih ada: publish directory `.` tanpa build, atau drag folder berisi `index.html`.
