var express = require('express');
var router = express.Router();

var TweetsBL = require('../BL/tweetsBL');

// Get all tweets
router.get('/', async (req, res) => {
    result = await TweetsBL.getTweets();
    res.send(result);
});

// Add new tweet
router.post('/', async (req, res) => {
    const username = req.body.username;
    const content = req.body.content;

    result = await TweetsBL.addTweet(username, content);

    res.send(result);
});

// Add like to a tweet
router.post('/:id/likes', async (req, res) => {
    const tweetId = req.param('id');
    const username = req.body.username;

    res.send(await TweetsBL.likeTweet(tweetId, username));
});

// Add retweet to a tweet
router.post('/:id/retweet', async (req, res) => {
    const tweetId = req.param('id');
    const username = req.body.username;

    res.send(await TweetsBL.retweetTweet(tweetId, username));
});

module.exports = router;