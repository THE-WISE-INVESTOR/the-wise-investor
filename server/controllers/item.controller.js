var Tutorial = require("../database-mongo/Item.model.js");

// select all the tutorials
var selectAllTutos = function (req, res) {
  Tutorial.find({})
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
  Tutorial.create({ tutorial: req.body })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// select one tutorial 
var selectOneTuto = function (req, res) {
  Tutorial.findOne({ tutorial: req.body })
    .then((tuto) => {
      res.send(tuto);
    })
    .catch((error) => {
      res.send(error);
    });
};

// delete one tutorial 
var deleteOneTuto = function (req, res) {
  Tutorial.findOneAndDelete({
    title: req.body.title,
  })
    .then((tuto) => {
      console.log(tuto,`${req.body.title}, deleted !`);
      res.send(tuto);
    })
    .catch((error) => {
      res.send(error);
    });
};



// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAllTutos = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = {
  selectAllTutos,
  selectOneTuto,
  deleteOneTuto,
  postTuto,
};
