const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Photo = require("../models/Photo");

// @route     GET api/photos
// @desc      Get all photos
// @access    Public
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.json(photos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     POST api/photos
// @desc      Add new photo
// @access    Public
router.post(
  "/",
  body("label", "Label is required").not().isEmpty(),
  body("url", "Url is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { url, label } = req.body;

    try {
      const newPhoto = new Photo({
        url,
        label,
      });

      const photo = await newPhoto.save();
      res.json(photo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route     DELETE api/photos/:id
// @desc      Delete photo
// @access    Private
router.delete("/:id", async (req, res) => {
  try {
    let photo = await Photo.findByIdAndDelete(req.params.id);
    if (!photo) return res.status(404).json({ msg: "Photo not found" });

    await Photo.findByIdAndRemove(req.params.id);
    return res.json({ msg: "Photo removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
