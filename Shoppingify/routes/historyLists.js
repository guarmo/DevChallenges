const express = require("express");
const router = express.Router();

const HistoryList = require("../models/historyList");

// @route     GET api/historyLists
// @desc      Get all history lists
// @access    Public
router.get("/", async (req, res) => {
  try {
    const historyLists = await HistoryList.find();

    res.json(historyLists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     POST api/historyLists
// @desc      Add history lists
// @access    Public
router.post("/", async (req, res) => {
  try {
    const historyList = new HistoryList({
      ...req.body,
    });

    await historyList.save();

    res.json(historyList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
