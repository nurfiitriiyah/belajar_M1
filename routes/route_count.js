var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
    console.log("as")
    res.render("getCount")
});

module.exports = router;
