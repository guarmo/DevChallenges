const express = require("express");
const router = express.Router();

const Item = require("../models/Items");

// @route     GET api/items
// @desc      Get all items
// @access    Public
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
    // res.json("Get all items");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     GET api/items/:id
// @desc      Get single item
// @access    Public
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.find({ _id: req.params.id });
    res.json(item);
    // res.json("Get all items");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     POST api/items
// @desc      Add item
// @access    Public
router.post("/", async (req, res) => {
  // @todo add validation
  try {
    const newItem = new Item(req.body);
    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     DELETE api/items/:id
// @desc      Delete item
// @access    Public
router.delete("/:id", async (req, res) => {
  try {
    let item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ msg: "Item not found" });

    await Item.findByIdAndRemove(req.params.id);
    return res.json(item);
    // res.json("Delete item");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
