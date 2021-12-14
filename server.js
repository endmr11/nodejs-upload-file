var express = require("express");
var multer = require("multer");
var app = express();
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
var upload = multer({ storage: storage }).single("dosyam");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/resimYukle", function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Yükleme Hatası.");
    }
    res.end("Yükleme Başarılı!");
  });
});

app.listen(3000, function () {
  console.log("Çalışılan Port: 3000");
});
