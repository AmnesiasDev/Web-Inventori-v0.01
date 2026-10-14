# StockFlow Pro

Aplikasi inventori statis siap deploy ke Vercel.

## Akun demo
- Admin: `Gabriel` / `StockFlow123`
- Petugas: `Petugas` / `Gudang123`
- Manager: `Manager` / `Laporan123`

## Fitur
Dashboard dan grafik, master barang, satuan dan lokasi, detail riwayat, transaksi dengan referensi, supplier/tujuan dan catatan, stock opname, laporan CSV, audit log, role pengguna, pencarian dan filter, notifikasi stok, serta pembatasan login tiga kali.

## Deploy
Upload ke GitHub lalu import ke Vercel. Framework preset: Other. Tidak memerlukan build command.

> Data dan autentikasi masih memakai browser storage. Untuk produksi, gunakan backend/database dan autentikasi server-side.

## Audit keamanan kode
- Password demo tidak lagi disimpan sebagai teks polos, tetapi sebagai SHA-256. Ini hanya hardening frontend, bukan autentikasi produksi.
- Pembacaan localStorage/sessionStorage memakai parser aman agar data rusak tidak mematikan aplikasi.
- Session pengguna divalidasi terhadap daftar akun yang dikenal.
- Referensi form tidak lagi bergantung pada implicit global dari ID HTML.
- Content Security Policy dasar telah ditambahkan.

Untuk keamanan nyata, pindahkan login, role, dan database ke backend seperti Supabase.
