# Adzkiya Mom Baby Care — Ledger Edition

Aplikasi kwitansi & rekapan offline/online (HTML statis). Siap di-deploy ke **Netlify**.

## Fitur (semua dipertahankan)

- Form pasien, diskon, kategori layanan IBU / BAYI / ANAK / MOM AND NEW BORN
- Tema warna & mode gelap/terang
- Upload logo klinik (watermark)
- Total live, cetak PDF kwitansi (jsPDF)
- Simpan rekapan ke `localStorage`, hapus per item / semua
- Cetak ulang kwitansi dari rekapan
- Export Excel (XML Spreadsheet)
- Backup / restore JSON offline
- Backup / restore Google Drive (Google Apps Script)

## Deploy Netlify

1. Push repositori ini ke GitHub.
2. Di [Netlify](https://app.netlify.com): **Add new site → Import an existing project**.
3. Build command: kosong / `echo skip`. Publish directory: `.` (root).
4. Atau drag-and-drop folder ini ke [Netlify Drop](https://app.netlify.com/drop).

Tidak ada Node build. File utama: `index.html`.
