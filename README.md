Catatan GIT

| No. | Perintah Git                    | Fungsi                                                 | Kegunaan Utama                                                         |
| --- | ------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| 1   | `git clone <url>`               | Menyalin repo dari remote ke lokal                     | Awal kerja, mengambil project dari GitHub/GitLab                       |
| 2   | `git status`                    | Melihat status file (modified, staged, untracked)      | Mengecek apa saja yang berubah sebelum commit                          |
| 3   | `git add <file>`                | Menambahkan file ke staging area                       | Menyiapkan file untuk commit                                           |
| 4   | `git add .`                     | Menambahkan semua perubahan ke staging area            | Menyiapkan seluruh file untuk commit                                   |
| 5   | `git commit -m "pesan"`         | Menyimpan snapshot perubahan ke lokal repo             | Merekam riwayat perubahan lokal                                        |
| 6   | `git push origin <branch>`      | Mengirim commit dari lokal ke remote repo              | Mengunggah perubahan ke server Git                                     |
| 7   | `git pull origin <branch>`      | Mengambil dan menggabungkan update dari remote         | Sinkronisasi lokal dengan versi terbaru dari remote                    |
| 8   | `git fetch`                     | Mengambil perubahan dari remote tanpa merge            | Mengecek pembaruan remote tanpa langsung menggabungkan                 |
| 9   | `git merge <branch>`            | Menggabungkan branch ke branch aktif                   | Menyatukan dua branch, biasanya saat selesai kerja di fitur            |
| 10  | `git branch`                    | Melihat daftar branch lokal                            | Navigasi dan manajemen branch                                          |
| 11  | `git branch <nama>`             | Membuat branch baru                                    | Memulai fitur baru                                                     |
| 12  | `git checkout <branch>`         | Pindah ke branch lain                                  | Bekerja di branch berbeda                                              |
| 13  | `git checkout -b <nama>`        | Buat dan langsung pindah ke branch baru                | Memulai fitur dengan cepat                                             |
| 14  | `git log`                       | Menampilkan riwayat commit                             | Menelusuri perubahan sebelumnya                                        |
| 15  | `git diff`                      | Melihat perubahan belum di-commit                      | Mengecek isi perubahan sebelum commit                                  |
| 16  | `git stash`                     | Simpan sementara perubahan yang belum di-commit        | Mengalihkan pekerjaan tanpa kehilangan progress                        |
| 17  | `git stash apply`               | Mengambil kembali perubahan yang disimpan di stash     | Melanjutkan pekerjaan yang sempat disimpan                             |
| 18  | `git remote -v`                 | Melihat daftar remote dan URL-nya                      | Mengetahui remote mana yang sedang digunakan                           |
| 19  | `git reset --hard`              | Menghapus semua perubahan dan kembali ke kondisi awal  | Mengembalikan repo lokal ke kondisi terakhir di-commit (berhati-hati!) |
| 20  | `git clean -f`                  | Menghapus file yang tidak dilacak (untracked files)    | Membersihkan folder dari file sampah atau build                        |
| 21  | `git revert <hash>`             | Membuat commit baru yang membatalkan commit sebelumnya | Membatalkan commit tanpa merusak riwayat (aman digunakan di tim)       |
| 22  | `git reflog`                    | Melihat riwayat HEAD (termasuk commit yang di-reset)   | Memulihkan commit yang terhapus atau hilang                            |
| 23  | `git show <hash>`               | Menampilkan detail commit tertentu                     | Melihat isi dan perubahan dalam commit spesifik                        |
| 24  | `git config`                    | Mengatur konfigurasi Git (nama, email, editor)         | Setelan user Git (nama, email, tool)                                   |
| 25  | `git init`                      | Membuat repo Git lokal dari folder biasa               | Awal proyek lokal sebelum push ke remote                               |
| 26  | `git tag <versi>`               | Menandai titik penting dalam riwayat proyek            | Menandai rilis (misal: v1.0.0) untuk deployment                        |
| 27  | `git blame <file>`              | Menampilkan siapa yang terakhir mengubah tiap baris    | Audit file, lihat siapa dan kapan baris diubah                         |
| 28  | `git cherry-pick <hash>`        | Memasukkan satu commit ke branch aktif                 | Ambil commit spesifik dari branch lain                                 |
| 29  | `git rev-parse --show-toplevel` | Menampilkan folder root Git repo                       | Cek lokasi folder utama repo lokal                                     |

