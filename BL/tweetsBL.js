const TweetsDAL = require('../DALS/tweetsDAL');
const RetweetsDAL = require('../DALS/retweetsDAL');
const LikesDAL = require('../DALS/likesDAL');

const TweetBL = class {
    static getTweets() {
        let allTweets = TweetsDAL.getTweets();

        let formatedTweets = [];

        for (let tweet of allTweets) {
            console.log(tweet);
            formatedTweets.push({
                id: tweet.id,
                content: tweet.text_content,
                username: tweet.username,
                timestamp: tweet.timestamp,
                likes_count: tweet.likes ? tweet.likes.length : 0,
                retweetscount: tweet.retweets ? tweet.retweets.length : 0
            })
        }

        return formatedTweets;
    }

    static addTweet(username, content) {
        return TweetsDAL.addTweet(username, content);
    }

    static likeTweet(tweetId, username) {
        return LikesDAL.addLike(tweetId, username);
    }

    static retweetTweet(tweetId, username) {
        return RetweetsDAL.addRetweet(tweetId, username);
    }
}

module.exports = TweetBL;