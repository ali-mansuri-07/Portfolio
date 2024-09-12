const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  designation: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date },
  isCurrent: { type: Boolean, default: false },
  description: { type: String, required: true },
});

module.exports = ExperienceSchema;
