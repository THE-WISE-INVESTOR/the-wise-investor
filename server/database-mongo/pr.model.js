const mongoose = require("mongoose");
const db = require("./index.js");

const PrSchema = new mongoose.Schema({
  image:String,
  title:String,
  budget:Number,
  field:String,
  tutorial:String
});

const Pr = mongoose.model("Pr", PrSchema);
module.exports = Pr;