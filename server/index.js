const express = require("express");
const itemRoutes = require("./routes/item.routes");
const profileRoutes = require("./routes/profile");
var User = require("./database-mongo");
var ProfileBlog = require("./database-mongo");
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/user", itemRoutes);
app.use("/api/profile", profileRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
