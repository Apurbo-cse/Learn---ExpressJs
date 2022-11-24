var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.post("/about", function (req, res) {
  res.send("About Page");
});

app.put("/contact", function (req, res) {
  res.send("Contact Page");
});

app.delete("/faq", function (req, res) {
  res.send("Contact Page");
});

// Response Status
app.get("/401", function (req, res) {
  res.status(401).end("Unauthorized...");
});

app.get("/201", function (req, res) {
  res.status(201).end();
});

// JSON Response
app.get("/json", function (req, res) {
  let MyJSONArray = [
    {
      name: "Apurbo Roy",
      city: "Dhaka",
      occupation: "Engr",
    },
    {
      name: "Akash Roy",
      city: "Bombey",
      occupation: "Dr.",
    },
    {
      name: "Shruti Barman",
      city: "Rangpur",
      occupation: "Student",
    },
  ];
  res.json(MyJSONArray);
});

// File Download
app.get("/file", function (req, res) {
  res.download("./uploads/abc.png");
});

// Response Redirect
app.get("/bd", function (req, res) {
  res.redirect("http://localhost:8000/ind");
});
app.get("/ind", function (req, res) {
  res.send("This is India");
});

// Header Response
// app.get("/a", function (req, res) {
//     res.append("name ", "Apurbo Roy");
//     res.append("age ", "26");
//     res.append("city ", "Dhaka");

//     res.status(201).end("This is Header");
// });

// Response Cookie
app.get("/cookie", function (req, res) {
  res.cookie("name", "Apurbo");
  res.cookie("city", "Dhaka");
  res.cookie("age", "27");
  res.end("Cookie set success ");
});

// Response Cookie data Clear
app.get("/cookie-clear", function (req, res) {
  res.clearCookie("name", "Apurbo");
  res.clearCookie("city", "Dhaka");
  res.clearCookie("age", "27");
  res.end("Cookie clear success ");
});

// Simple Get Request
app.get("/get", function (req, res) {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;

  res.end(firstName + " " + lastName);
});

// Simple Header Request
app.get("/header", function (req, res) {
  let firstName = req.header("firstName");
  let lastName = req.header("lastName");
  res.end(firstName + " " + lastName);
});

// Simple Post Request
app.post("/post", function (req, res) {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  res.send(firstName + " " + lastName);
});

// Simple Post Request
app.post("/post-header", function (req, res) {
  let userName = req.header("userName");
  let password = req.header("password");
  res.send("User Name :" + userName + " Password :" + password);
});

// Body Parser
app.post("/body-parser", function (req, res) {
  let JSONData = req.body;
  
  // let JSONString = JSON.stringify(JSONData);
  // res.send(JSONString);

  let name = JSONData["name"];
  let city = JSONData["city"];
  res.send(name + " "+city);
  
});

app.listen(8000, function () {
  console.log("Server Run Successfully");
});
