//jshint esversion:6

const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var weight = Number(req.body.weight);
  var Height = Number(req.body.Height);
  var result = weight / (Height * Height);
  res.send("Your BMI is " + result);
});

app.listen(port, () => {
  console.log(`Server is working on Port: ${port}`);
});
