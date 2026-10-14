# StockFlow Visual

Versi ringan dengan login visual, foto inventori terkompresi WebP, dekorasi produk, dashboard modern, grafik Canvas tanpa library, dropdown notifikasi, role, transaksi, laporan CSV, dan audit log.

## Akun demo
- Gabriel / StockFlow123
- Petugas / Gudang123
- Manager / Laporan123

## Optimasi
- Foto login memakai WebP terkompresi.
- Tidak memakai framework, CDN, font eksternal, atau library grafik.
- Animasi hanya CSS ringan.
- Grafik menggunakan Canvas API.

Deploy langsung ke Vercel tanpa build command.


## Audit perbaikan
- Migrasi data dari versi sebelumnya.
- Session role divalidasi.
- Data storage rusak memakai fallback aman.
- Validasi tambah/edit barang dan transaksi diperketat.
- Stok awal dicatat sebagai transaksi.
- CSV dilindungi dari spreadsheet formula injection.
- Login mencegah double-submit dan mereset batas percobaan setelah berhasil.
- Notifikasi mendukung status aria dan tombol Escape.
