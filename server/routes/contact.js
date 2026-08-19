const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST /api/contact - submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email and message are required." });
    }
    const saved = await Message.create({ name, email, subject, message });
    res.status(201).json({ message: "Message sent successfully.", data: saved });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/contact - list messages (for an admin view)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
