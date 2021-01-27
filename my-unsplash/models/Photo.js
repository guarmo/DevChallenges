const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Photo = mongoose.model("photo", PhotoSchema);
