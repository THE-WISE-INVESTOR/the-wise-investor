const router = require("express").Router();
const itemController = require("../controllers/item.controller");

  router.post("/postblog", itemController.postBlog);


router.delete("/deleteblog/:id", itemController.destroy);       
module.exports = router;
