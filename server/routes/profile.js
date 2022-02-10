const router = require("express").Router();
const itemController = require("../controllers/item.controller");

router.post("/postblog", (req, res) => {
  itemController.postBlog(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

router.delete("/deleteblog/:id", itemController.destroy);

module.exports = router;
