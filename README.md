## Dokumentasi API

### Pendahuluan

Dokumentasi ini menjelaskan endpoint API yang tersedia untuk aplikasi web LapanganKu. API ini menyediakan endpoint untuk mengelola pengguna dan ulasan, memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus data ulasan.

### Endpoint

#### Endpoint Pengguna

##### POST `/register`

**Deskripsi:** Mendaftarkan pengguna baru.

**Request Body:**

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response Body:**

```json
{
  "message": "Sukses Mendaftar"
}
```

##### POST `/login`

**Deskripsi:** Meloginkan pengguna dan mengembalikan token autentikasi.

**Request Body:**

```json
{
  "email": "string",
  "password": "string"
}
```

**Response Body:**

```json
{
  "token": "string"
}
```

#### Endpoint Ulasan

##### GET `/review`

**Deskripsi:** Mengambil semua data ulasan.

**Response Body:**

```json
[
  {
    "id": "integer",
    "name": "string",
    "rate": "integer",
    "address": "string",
    "review": "string",
    "authorId": "integer",
    "image": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "Author": {
      "id": "integer",
      "name": "string",
      "email": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  }
]
```

##### GET `/review/:id`

**Deskripsi:** Mengambil data ulasan berdasarkan ID.

**Response Body:**

```json
{
  "message": "Sukses Membaca Ulasan Pengguna",
  "reviewed": [
    {
      "id": "integer",
      "name": "string",
      "rate": "integer",
      "address": "string",
      "review": "string",
      "authorId": "integer",
      "image": "string",
      "createdAt": "string",
      "updatedAt": "string",
      "Author": {
        "id": "integer",
        "name": "string",
        "email": "string",
        "createdAt": "string",
        "updatedAt": "string"
      }
    }
  ]
}
```

##### POST `/review`

**Deskripsi:** Membuat ulasan baru.

**Request Body:**

```json
{
  "name": "string",
  "rate": "integer",
  "address": "string",
  "review": "string",
  "authorId": "integer",
  "image": "string"
}
```

**Response Body:**

```json
{
  "message": "Sukses Membuat Ulasan"
}
```

##### DELETE `/review/:id`

**Deskripsi:** Menghapus ulasan berdasarkan ID.

**Response Body:**

```json
{
  "message": "Sukses Menghapus Ulasan dengan id 10"
}
```

##### PUT `/review/:id`

**Deskripsi:** Memperbarui ulasan berdasarkan ID.

**Request Body:** (Gunakan Form Data)

```
{
  "name": "string",
  "rate": "integer",
  "address": "string",
  "review": "string",
  "authorId": "integer",
  "image": "file"
}
```

**Response Body:**

```json
{
  "message": "Sukses Memperbarui Ulasan"
}
```

##### POST `/review/gemini`

**Deskripsi:** Merekomendasikan stadion berdasarkan kriteria pengguna menggunakan Gemini AI.

**Request Body:**

```json
{
  "harga": "string", // Rentang harga (misalnya, "100 juta")
  "lokasi": "string" // Lokasi (misalnya, "Jakarta")
}
```

**Response Body:**

```json
{
  "message": "Sukses Mendapatkan Rekomendasi Stadion",
  "recommended": [
    {
      "id": "integer",
      "name": "string",
      "rate": "integer",
      "address": "string",
      "review": "string",
      "authorId": "integer",
      "image": "string",
      "createdAt": "string",
      "updatedAt": "string",
      "Author": {
        "id": "integer",
        "name": "string",
        "email": "string",
        "createdAt": "string",
        "updatedAt": "string"
      }
    }
  ]
}
```

### Middleware

**Autentikasi:** Middleware memastikan bahwa pengguna telah masuk sebelum mengakses endpoint yang dilindungi.

**Otorisasi:** Middleware memastikan bahwa hanya pengguna yang dapat memanipulasi data yang menjadi milik mereka.

**Penanganan Kesalahan:** Middleware menangani kesalahan yang terjadi selama proses permintaan.

### Catatan

- Semua endpoint memerlukan autentikasi.
- Semua tanggal dalam format ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ).
- Semua respons mencakup bidang `message` yang menunjukkan hasil operasi.
- Unggah file untuk pembaruan gambar dalam PUT `/review/:id` harus dilakukan melalui Form Data.

Dokumentasi ini memberikan gambaran umum tentang API Travel Talk. Untuk informasi lebih detail, lihat komentar kode dan kode sumber.
