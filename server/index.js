const express = require("express");
const itemRoutes = require('./routes/item.routes')
const mainfeedRoutes= require('./routes/getthefeed.routes')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
 var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/items", itemRoutes);
app.use("/api/mainfeed",mainfeedRoutes)
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
