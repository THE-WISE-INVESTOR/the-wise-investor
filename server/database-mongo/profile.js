var mongoose = require("mongoose");
var db = require("./index.js");

var ProfilBlogSchema = new mongoose.Schema({
  title: String,
  image: String,
  text: String,
  date: String,
});
var ProfileBlog = mongoose.model("ProfileBlog", ProfilBlogSchema);

module.exports = ProfileBlog;
