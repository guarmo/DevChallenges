const mongoose = require("mongoose");

const SearchedSchema = new mongoose.Schema([
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
]);

module.exports = Searched = mongoose.model("searched", SearchedSchema);
