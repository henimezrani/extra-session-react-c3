const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  age: Number,
  method: String
});

const user = new mongoose.model("User", userSchema);

module.exports = user;
