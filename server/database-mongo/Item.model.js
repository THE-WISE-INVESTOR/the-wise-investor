const mongoose = require("mongoose");
const db = require("./index.js");

const tutorialSchema = new mongoose.Schema({
  tutorial: {
    title: String,
    content: String
  },
});

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;
