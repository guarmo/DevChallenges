const mongoose = require("mongoose");

const ShoppingListSchema = new mongoose.Schema({
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
});

module.exports = ShoppingList = mongoose.model(
  "shoppingList",
  ShoppingListSchema
);
