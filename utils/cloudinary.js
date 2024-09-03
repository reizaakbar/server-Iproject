const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: "dg7mic8zj",
  api_key: "716194785367285",
  api_secret: "8Ybk3sfnaf_LnOBKgtacIWs5aXU",
});

module.exports = cloudinary;
