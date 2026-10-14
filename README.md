# StockFlow Pro Merged

Project utama beserta dropdown notifikasi stok sudah digabung.

## Akun demo
- Admin: Gabriel / StockFlow123
- Petugas: Petugas / Gudang123
- Manager: Manager / Laporan123

## Dropdown notifikasi
Klik ikon lonceng untuk melihat stok habis dan menipis. Klik item untuk membuka detail barang. Dropdown dapat ditutup dengan klik di luar atau Escape.

## Deploy
Upload seluruh file ke GitHub lalu import ke Vercel. Tidak memerlukan build command.

> Autentikasi dan data masih berbasis browser storage. Gunakan backend untuk produksi.


## Perbaikan audit terbaru
- Migrasi otomatis data dari key versi sebelumnya agar upgrade tidak menghilangkan data.
- Session role divalidasi ulang terhadap akun yang dikenal.
- Data storage rusak tidak menghentikan aplikasi.
- Validasi produk, transaksi, stock opname, dan referensi diperketat.
- Stok awal kini tercatat sebagai transaksi.
- Percobaan login direset benar setelah login berhasil.
- Ekspor CSV dilindungi dari formula injection.
- Dropdown notifikasi menangani badge kosong dan kebutuhan restock secara benar.
- Handler dialog tidak lagi bergantung pada implicit browser globals.
