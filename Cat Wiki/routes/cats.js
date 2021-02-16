const express = require("express");
const router = express.Router();
const axios = require("axios");

const Searched = require("../models/Searched");

// @route   GET api/breeds
// @desc    Get all breeds
// @access  Public
router.get("/breeds", async (req, res) => {
  try {
    const breeds = await axios.get("https://api.thecatapi.com/v1/breeds");

    res.json(breeds.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/breed
// @desc    Get queried
// @access  Public
router.get("/breeds/:breed", async (req, res) => {
  try {
    const uri = `https://api.thecatapi.com/v1/breeds/search?q=${req.params.breed}`;
    const headers = {
      "Content-Type": "application/json",
    };

    const breed = await axios.get(uri, { headers });

    res.json(breed.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/images/:image_id
// @desc    Get single image
// @access  Public
router.get("/image/:image_id", async (req, res) => {
  try {
    const image = await axios.get(
      `https://api.thecatapi.com/v1/images/${req.params.image_id}`
    );
    res.json(image.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/images/:breed_id
// @desc    Get images
// @access  Public
router.get("/images/:breed_id", async (req, res) => {
  try {
    const breed = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_id=${req.params.breed_id}&limit=8`
    );

    const images = breed.data.map((b) => b.url);
    res.json(images);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/searched
// @desc    Add score
// @access  Public
router.post("/searched", async (req, res) => {
  // Get the image
  const image = await axios.get(
    `https://api.thecatapi.com/v1/images/${req.body.reference_image_id}`
  );

  try {
    const searched = await Searched.find({ id: req.body.id });

    const { id, name, description } = req.body;

    if (searched.length === 0) {
      // If not in DB
      newSearched = new Searched({
        id,
        name,
        description,
        image: image ? image.data.url : "",
        score: 1,
      });
      await newSearched.save();
      res.json(newSearched);
    } else if (searched.length > 0) {
      // If already in DB

      const updated = {
        id: searched[0].id,
        name: searched[0].name,
        description: searched[0].description,
        image: image ? image.data.url : "",
        score: searched[0].score + 1,
      };

      await Searched.findOneAndReplace({ id: req.body.id }, updated);
      res.json(updated);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/searched/list
// @desc    Get ordered list of most searched
// @access  Public
router.get("/searched/list", async (req, res) => {
  try {
    const list = await Searched.find({});
    const ordered = list.sort((a, b) =>
      a.score > b.score ? -1 : b.score > a.score ? 1 : 0
    );
    const firstTen = ordered.slice(0, 10);

    res.json(firstTen);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
