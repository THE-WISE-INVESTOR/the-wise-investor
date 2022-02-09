const express = require("express");
const itemRoutes = require('./routes/item.routes')
const cors=require("cors")
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
 var Pr = require('./database-mongo');
 var User = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/pr", itemRoutes);
app.use("/api/user", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
