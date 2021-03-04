const express = require("express");
const router = express.Router();

const ShoppingList = require("../models/shoppingList");

// @route     GET api/shoppingList
// @desc      Get shopping list
// @access    Public
router.get("/", async (req, res) => {
  try {
    let shoppingList = await ShoppingList.find();

    if (shoppingList.length === 0) {
      const newSL = new ShoppingList({
        name: "Shopping list",
        items: [],
      });

      await newSL.save();
      let shoppingList = await ShoppingList.find();
      res.json(shoppingList);
    } else {
      res.json(shoppingList);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     PUT api/shoppingList/:id
// @desc      Save shopping list
// @access    Public
router.put("/:id", async (req, res) => {
  try {
    const { name, items } = req.body;

    const newShoppingList = await ShoppingList.findByIdAndUpdate(
      req.params.id,
      { name, items: [...items] }
    );

    res.json(newShoppingList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     DELETE api/shoppingList/:id
// @desc      Delete shopping list
// @access    Public
router.delete("/:id", async (req, res) => {
  try {
    await ShoppingList.findByIdAndRemove(req.params.id);

    res.json("deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
