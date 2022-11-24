var express = require("express");
var multer = require("multer");
var multer = multer();
var app = express();

app.use(multer.array());
app.use(express.static("public"));

// Multer
app.post("/", function (req, res) {
  let ReqBody = req.body;
  res.send(JSON.stringify(ReqBody));
});

app.listen(8000, function () {
  console.log("Server Run Successfully");
});
