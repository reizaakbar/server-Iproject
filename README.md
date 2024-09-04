API Documentation
Pendahuluan
Ini adalah dokumentasi API untuk aplikasi web Travel Talk. Aplikasi ini memiliki berbagai endpoint untuk manajemen user dan review.

Endpoints
User Endpoints
POST /register
Deskripsi: Mendaftarkan user baru.
Request Body:
{
"name": "string",
"email": "string",
"password": "string",
}
POST /login
Deskripsi: Login untuk mendapatkan token autentikasi.
Request Body:
{
"email": "rey@mail.com",
"password": 12345,
}
Review Endpoints
GET/review
Deskripsi: Membaca semua data review keseluruhan.
Result Body:
{
"name": "Stadion Utama Gelora Bung Karno",
"rate": 150000000,
"address": "Jalan Pintu Satu Senayan, Gelora, Tanah Abang, Jakarta Pusat, DKI Jakarta 10270",
"review": "Stadion ikonik dengan fasilitas lengkap untuk acara besar",
"authorId": 1,
"image": "http://res.cloudinary.com/dcisb7ayn/image/upload/v1722919617/jnebe0ydduvbu4kgtsdl.jpg",
}
GET/review/:id
Deskripsi: Membaca semua data review by id.
Result Body:
{
"message": "Success Read User Reviews",
"reviewed": [
{
"id": 1,
"name": "Stadion Utama Gelora Bung Karno",
"rate": 150000000,
"address": "Jalan Pintu Satu Senayan, Gelora, Tanah Abang, Jakarta Pusat, DKI Jakarta 10270",
"review": " Stadion ikonik dengan fasilitas lengkap untuk acara besar",
"authorId": 1,
"image": "http://res.cloudinary.com/dcisb7ayn/image/upload/v1722919617/jnebe0ydduvbu4kgtsdl.jpg",
"createdAt": "2024-09-04T09:28:46.897Z",
"updatedAt": "2024-09-04T09:28:46.897Z",
"Author": {
"id": 1,
"name": "rey",
"email": "rey@mail.com",
"password": "$2a$10$a.iflSOzp9dF4Lld1KkbUOFQv9RXmKVdKUsvWyyw8/oC.1LjTKKeG",
"createdAt": "2024-09-04T09:28:46.560Z",
"updatedAt": "2024-09-04T09:28:46.560Z"
}
},
{
"id": 5,
"name": "Stadion Kanjuruhan",
"rate": 80000000,
"address": "Jl. Lestari No. 8, Semarang",
"review": "Kapasitas besar, fasilitas standar nasional, harga sewa lebih terjangkau.",
"authorId": 1,
"image": "http://res.cloudinary.com/dcisb7ayn/image/upload/v1722919929/ps2ubrjpisp40tvcjiey.jpg",
"createdAt": "2024-09-04T09:28:46.897Z",
"updatedAt": "2024-09-04T09:28:46.897Z",
"Author": {
"id": 1,
"name": "rey",
"email": "rey@mail.com",
"password": "$2a$10$a.iflSOzp9dF4Lld1KkbUOFQv9RXmKVdKUsvWyyw8/oC.1LjTKKeG",
"createdAt": "2024-09-04T09:28:46.560Z",
"updatedAt": "2024-09-04T09:28:46.560Z"
}
}
]
}

POST/review
Deskripsi: Menambahkan review.
Request Body
{
"name": "string",
"rate": "interger",
"address": "string",
"review": "string",
"authorId": "interger",
"image": "string",
}
DELETE/review/:id
Deskripsi: Delete review berdasarkan Id
Result
{
"message": "Success Delete Review with id 10"
}
PUT/review/:id
Deskripsi: Edit review berdasarkan id
Request Body : Gunakan Form Data
{
"name": "text",
"rate": "text",
"address": "text",
"review": "text",
"authorId": "text",
"image": "file",
}
POST/review/gemini
Deskripsi: Rekomendasi stadion by gemini AI
Request Body
{
"harga": "100 juta",
"lokasi": "Jakarta"
}

Middleware
authentication: Middleware untuk memastikan user telah login sebelum mengakses endpoint yang dilindungi.
authorization: Middleware untuk memastikan hanya dapat memanipulasi data miliknya saja.
errorHandler: Middleware untuk menangani kesalahan yang terjadi selama proses request.
