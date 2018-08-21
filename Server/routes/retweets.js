var express = require('express');
var router = express.Router();

var RetweetsBL = require('../BL/retweetsBL');

// Get all retweets
router.get('/', async (req, res) => {
    res.send(await RetweetsBL.getAllRetweets());
});

module.exports = router;