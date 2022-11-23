var express = require("express");

app = express();

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
app.get("/a", function (req, res) {
  const data = {
    name: "apurbo",
    age: 27,
  };
  res.status(200).json(data);
  //   res.append("name ", "Apurbo Roy");
  //   res.append("age ", "26");
  //   res.append("city ", "Dhaka");

  //   res.status(201).end("This is Header");
});

app.listen(8000, function () {
  console.log("Server Run Successfully");
});
