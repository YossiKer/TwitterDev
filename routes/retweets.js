var express = require('express');
var router = express.Router();

var RetweetsBL = require('../BL/retweetsBL');

// Get all retweets
router.get('/', (req, res) => {
    res.send(RetweetsBL.getAllRetweets());
});

module.exports = router;