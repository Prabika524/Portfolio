const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// GET /api/profile - return the single profile document
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not set up yet" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/profile - upsert the profile
router.put("/", async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    res.json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
