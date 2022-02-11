var {User} = require("../database-mongo/Item.model.js");
var ProfileBlog = require("../database-mongo/profile.js");
var Pr = require('../database-mongo/pr.model');
var Feed =require("../database-mongo/mainfeed.js");

// select all the tutorials

var selectAllTutos = function (req, res) {
  Pr.find({})
    .then((tutorials) => {
      res.send(tutorials);
    })
    .catch((error) => {
      res.send(error);
    });
};

// post one tutorial 
var postTuto = function (req, res) {
  // console.log(req.body)
  Pr.create({ 
    image:req.body.image,
    title:req.body.title,
    budget:req.body.budget,
    field:req.body.field,
    tutorial:req.body.tutorial
   })
    .then((result) => {
      console.log(req.body, "coucou")
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err,"ERROR");
    });
};

// select one tutorial 
var selectOneTuto = function (req, res) {
  Pr.findOne({ tutorial: req.body })
    .then((tuto)=>{
      res.send(tuto)
    })
}
// DELETE THIS LINE


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
// var Item = require('../database-mongo/Item.model.js');


// var selectAll = function (req, res) {
//   Pr.find({})
//     .then((items) => {
//       res.status(200).send(items);

//     })
//     .catch((error) => {
//       res.send(error);
//     });
// };

var getFeed=function(callback){
  Feed.find({},function(err,thefeed){
    if(err){
      callback(err,null)
    } else {
      callback(null,thefeed)
    }
  })
};

// delete one tutorial 
var deleteOneTuto = function (req, res) {
  Pr.findByIdAndDelete({
    _id:req.params.id
  })
    .then((tuto) => {
      console.log(req.params)
      res.send(tuto)
      console.log(tuto,`${req.body.title}, deleted !`);
    })
    .catch((error) => {
      console.log(error)
    });
};

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

module.exports = { 
  login, 
  signUp, 
  postBlog, 
  destroy ,
  selectAllTutos,
  selectOneTuto,
  deleteOneTuto,
  postTuto,
  getFeed
}