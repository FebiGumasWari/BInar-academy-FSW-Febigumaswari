proyek HTTP Server dan Express js dengan instruksi instalasi dan daftar endpoint yang tersedia:

PROYEK CHALLANGE 3 TENTANG HTTP SERVER 

## Instalasi

1. Clone Repositori

   Clone repositori ini ke direktori lokal Anda menggunakan perintah berikut:

   
   https://github.com/FebiGumasWari/BInar-academy-FSW-Febigumaswari.git
   

2. Install Dependensi

   Masuk ke direktori proyek yang telah Anda clone, dan jalankan perintah berikut untuk menginstal dependensi yang diperlukan:

   
   npm install
   npm install -save express
   npm install -save uuid
   npm install -save nodemon


3. Menjalankan Aplikasi

   Setelah menginstal dependensi dan mengkonfigurasi proyek, Anda dapat menjalankan aplikasi dengan perintah:

   npm run start 
   npm run Dev

   Aplikasi akan berjalan di `http://localhost:8000` atau port lain yang telah Anda konfigurasi.

## Endpoint

Berikut adalah daftar endpoint yang tersedia dalam proyek ini:

1. **GET `/`**
   - Deskripsi: Endpoint ini digunakan untuk melakukan ping ke aplikasi dan memeriksa apakah aplikasi berjalan dengan baik.
   - Contoh Penggunaan: `http://localhost:8000/`

2. **GET `/cars`**
   - Deskripsi: Endpoint ini digunakan untuk mendapatkan daftar mobil yang tersedia.
   - Contoh Penggunaan: `http://localhost:8000/cars`

3. **GET `/cars/:id`**
   - Deskripsi: Endpoint ini digunakan untuk mendapatkan data mobil berdasarkan ID.
   - Contoh Penggunaan: `http://localhost:8000/cars/1`

4. **POST `/cars`**
   - Deskripsi: Endpoint ini digunakan untuk menambahkan data mobil baru.
   - Contoh Penggunaan: `http://localhost:8000/cars`
     note: ID tidak wajib di masukan data karena sudah genarator menggunakan UUID

5. **PUT `/cars/:id`**
   - Deskripsi: Endpoint ini digunakan untuk mengupdate data mobil berdasarkan ID.
   - Contoh Penggunaan: `http://localhost:8000/cars/1`
     note: id, image, capacity, rentPerDay,description, availableAt wajib sekali dimasukan data untuk update data

6. DELETE `/cars/:id`
   - Deskripsi: Endpoint ini digunakan untuk menghapus data mobil berdasarkan ID.
   - Contoh Penggunaan: `http://localhost:8000/cars/1`


Dengan mengikuti langkah-langkah di atas, Anda dapat menginstal dan menjalankan web ini.