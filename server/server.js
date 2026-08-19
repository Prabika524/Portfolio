require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");
const profileRoutes = require("./routes/profile");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/profile", profileRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
