const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], default: [] },
    category: {
      type: String,
      enum: ["backend", "web", "data"],
      default: "web",
    },
    iconKey: { type: String, default: "code" }, // maps to a lucide icon on the client
    accentColor: { type: String, default: "purple" }, // purple | orange | pink
    image: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" },
    featured: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
