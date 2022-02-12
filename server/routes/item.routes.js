const router = require("express").Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAllTutos);

router.get("/", itemController.selectOneTuto);

router.delete("/tutorial/del", itemController.deleteOneTuto);

router.post("/tutorials", itemController.postTuto);

router.get("/data", itemController.selectAll);
router.post("/signUp", itemController.signUp);
router.post("/login", itemController.login);

module.exports = router;
