var express = require("express");
var app = express();

// app.use(function (req, res, next) {
//   console.log("I am Middleware");
//   next();
// });

app.get("/", function (req, res) {
  res.send("This is home page");
});

app.get("/contact", function (req, res) {
  res.send("This is contact page");
});

app.use("/about", function (req, res, next) {
  console.log("I am About Route level Middleware");
  next();
});

app.get("/about", function (req, res) {
  res.send("This is about page");
});

app.listen(5000);
