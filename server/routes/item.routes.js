const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAllTutos);

router.get("/", itemController.selectOneTuto)

router.delete("/tutorial/del", itemController.deleteOneTuto);

router.post("/tutorials", itemController.postTuto);



module.exports = router;
