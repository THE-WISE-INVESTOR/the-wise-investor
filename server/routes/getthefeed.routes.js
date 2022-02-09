const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getthefeed", function(req,res){itemController.getFeed(function(err,data){
if (err){
    res.sendStatus(500)
} else {
    res.json(data)
}
})});

module.exports = router;
