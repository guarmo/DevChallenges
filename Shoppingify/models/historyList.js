const mongoose = require("mongoose");

const HistoryListSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Shopping list",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  items: {
    type: Array,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  cancelled: {
    type: Boolean,
    default: false,
  },
});

module.exports = HistoryList = mongoose.model("historyList", HistoryListSchema);
