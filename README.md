# StockFlow Inventory

Web inventori statis berbasis HTML, CSS, dan JavaScript. Tidak memerlukan build command atau framework.

## Struktur

- `index.html`: struktur halaman
- `style.css`: tampilan dan responsive layout
- `script.js`: logika barang, transaksi, localStorage, dan ekspor CSV

## Menjalankan lokal

Cukup buka `index.html` di browser. Agar perilakunya sama seperti hosting, bisa juga dijalankan melalui ekstensi Live Server di VS Code.

## Deploy ke Vercel

1. Upload folder ini ke GitHub, atau impor folder/project melalui Vercel.
2. Pilih preset **Other** bila diminta.
3. Build Command dikosongkan.
4. Output Directory dikosongkan atau gunakan root project.
5. Deploy.

## Penyimpanan data

Data disimpan pada `localStorage` browser. Artinya data tidak tersinkron antarperangkat dan dapat hilang jika penyimpanan situs dibersihkan. Untuk penggunaan multi-user diperlukan backend dan database.

## Pembaruan UI

Dashboard menggunakan tampilan modern, responsive, kartu statistik berwarna, hero greeting, sidebar modern, tabel, modal, dan profil administrator.
