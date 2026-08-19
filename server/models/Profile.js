const mongoose = require("mongoose");

const TimelineItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    period: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  { _id: false }
);

const ChecklistItemSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  { _id: false }
);

const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    subtitle: { type: String, default: "" },
    greeting: { type: String, default: "" },
    tagline: { type: String, default: "" },
    bio: { type: String, required: true },
    bioParagraphs: { type: [String], default: [] },
    latelyParagraphs: { type: [String], default: [] },
    resumeUrl: { type: String, default: "" },
    skills: {
      type: [
        {
          label: { type: String, required: true },
          value: { type: String, required: true },
          iconKey: { type: String, default: "code" },
          accentColor: { type: String, default: "purple" },
        },
      ],
      default: [],
    },
    education: { type: [TimelineItemSchema], default: [] },
    experience: { type: [TimelineItemSchema], default: [] },
    hackathons: { type: [TimelineItemSchema], default: [] },
    volunteerExperience: { type: [TimelineItemSchema], default: [] },
    certifications: { type: [ChecklistItemSchema], default: [] },
    volunteering: { type: [ChecklistItemSchema], default: [] },
    social: {
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      email: { type: String, default: "" },
      other: { type: String, default: "" },
    },
    heroImage: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
