const router = require("express").Router();

const itemController = require("../controllers/item.controller");

router.get("/tutos", itemController.selectAllTutos);

router.get("/tuto", itemController.selectOneTuto);

router.delete("/tutorial/del/:id", itemController.deleteOneTuto);

router.post("/tutorial", itemController.postTuto);

router.get("/data", itemController.selectAll);

router.post("/signUp", itemController.signUp);

router.post("/login", itemController.login);

module.exports = router;
