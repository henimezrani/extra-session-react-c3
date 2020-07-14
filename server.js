// server side of our application
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const User = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/extra-love", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db is successfully connected");
});

app.set("views", path.join(__dirname, "./client/dist"));
app.use(express.static(path.join(__dirname, "./client/dist")));

app.listen(3000, () => {
  console.log("server is running on port http://localhost:3000");
});

app.get("/all", (req, res) => {
  User.find().then((data) => {
    res.send(data);
  });
});

app.post("/new", (req, res) => {
  User.create(req.body).then((result) => {
    res.send(result);
  });
});

app.get("/one/:id", (req, res) => {
  User.find({ _id: req.params.id }).then((result) => {
    res.send(result);
  });
});

app.delete("/one/:id", (req, res) => {
  User.findOneAndRemove({ _id: req.params.id }).then((result) => {
    res.send(result);
  });
});

app.put("/one/:id", (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then((result) => {
    res.send(result);
  });
});
