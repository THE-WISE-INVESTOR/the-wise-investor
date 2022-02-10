// DELETE THIS LINE
var User = require("../database-mongo/Item.model.js");
var ProfileBlog = require("../database-mongo/profile.js");
var Pr = require('../database-mongo/pr.model');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
// var Item = require('../database-mongo/Item.model.js');
var Feed=require("../database-mongo/mainfeed.js")

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// var selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };
var selectAll = function (req, res) {
  Pr.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
var getFeed=function(callback){
  Feed.find({},function(err,thefeed){
    if(err){
      callback(err,null)
    } else {
      callback(null,thefeed)
    }
  })
};

// // UNCOMMENT IF USING MONGOOSE WITH PROMISES
// var selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };
// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

var signUp = function (req, res) {
  var userData = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  User.create(userData, (err, data) => {
    if (err) {
      res.send("error");
    } else if (data) {
      res.send(data);
    }
  });
};
var login = function (req, res) {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) res.send("user not found");
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) {
        console.log("error");
      } else if (isMatch === true) {
        res.send(user);
      } else {
        res.send("bad password");
      }
    });
  });
};
var destroy = function (website, callback) {
  ProfileBlog.deleteOne({ _id: req.params.id }, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};
var postBlog = function (website, callback) {
  // var item = new Item(website);
  ProfileBlog.insertMany(website, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};
module.exports = { login, signUp, postBlog, destroy ,selectAll,getFeed};
