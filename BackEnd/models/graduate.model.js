const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  personalEmail: {
    type: String,
    required: true,
  },
  dfEmail: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: false,
  },
  nationality: {
    type: String,
    required: false,
  },
  personality: {
    type: String,
    required: false,
  },
  imagePath: {
    type: String,
    required: false,
  },
});


const User = mongoose.model(`Graduate`, userSchema);

module.exports = User;
