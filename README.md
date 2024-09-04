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
"email": "cecep@mail.com",
"password": 12345,
}
Review Endpoints
GET/review
Deskripsi: Membaca semua data review keseluruhan.
Result Body:
{
"name": "string",
"rate": 1200000,
"address": "Jl. Merdeka No. 1, Jakarta",
"review": "Pelayanan yang sangat memuaskan dengan fasilitas lengkap.",
"authorId": 1,
"image": "http://res.cloudinary.com/dcisb7ayn/image/upload/v1722919617/jnebe0ydduvbu4kgtsdl.jpg",
}
GET/review/:id
Deskripsi: Membaca semua data review by id.
Result Body:
{
"message": "Success read Review with id 20",
"reviewed": {
"id": 20,
"name": "Hotel Elok",
"rate": 850000,
"address": "Jl. Elok No. 21, Ambon",
"review": "Harga terjangkau dengan fasilitas memadai.",
"authorId": 5,
"image": "http://res.cloudinary.com/dcisb7ayn/image/upload/v1722920344/l0pugne7n6c2wgoy2a0f.jpg",
"createdAt": "2024-08-06T07:23:18.408Z",
"updatedAt": "2024-08-06T07:23:18.408Z",
"Author": {
"id": 5,
"name": "cece",
"email": "cece@mail.com",
"password": "$2a$10$GIBy6ixzUrGiWJ8e6P69aeYn6UlX/IPAIn4cV.qRygP0Mh7OPvRpG",
"createdAt": "2024-08-06T07:23:18.397Z",
"updatedAt": "2024-08-06T07:23:18.397Z"
}
}
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
"message": "Success Delete Review with id 22"
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
Deskripsi: Rekomendasi hotel by gemini AI
Request Body
{
"harga": "1 juta",
"lokasi": "Tangerang Selatan"
}

Middleware
authentication: Middleware untuk memastikan user telah login sebelum mengakses endpoint yang dilindungi.
authorization: Middleware untuk memastikan hanya dapat memanipulasi data miliknya saja.
errorHandler: Middleware untuk menangani kesalahan yang terjadi selama proses request.
