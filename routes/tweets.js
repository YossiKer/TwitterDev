var express = require('express');
var router = express.Router();

var TweetsBL = require('../BL/tweetsBL');

// Get all tweets
router.get('/', (req, res) => {
    res.send(TweetsBL.getTweets());
});

// Add new tweet
router.post('/', (req, res) => {
    const username = req.body.username;
    const content = req.body.content;

    res.send(TweetsBL.addTweet(username, content));
});

// Add like to a tweet
router.post('/:id/likes', (req, res) => {
    const tweetId = req.param('id');
    const username = req.body.username;

    res.send(TweetsBL.likeTweet(tweetId, username));
});

// Add retweet to a tweet
router.post('/:id/retweet', (req, res) => {
    const tweetId = req.param('id');
    const username = req.body.username;

    res.send(TweetsBL.retweetTweet(tweetId, username));
});

module.exports = router;