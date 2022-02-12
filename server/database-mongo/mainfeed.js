const mongoose = require("mongoose");
const db = require("./index.js");

const mainfeedSchema = new mongoose.Schema({
  title: String,
  image: String,
  text: String,
  date: String,
});
const Feed = mongoose.model("Feed", mainfeedSchema);
module.exports = Feed;
