const TweetsDAL = require('../DALS/tweetsDAL');
const RetweetsDAL = require('../DALS/retweetsDAL');
const LikesDAL = require('../DALS/likesDAL');

const TweetBL = class {
    static async getTweets() {
        let allTweets = await TweetsDAL.getTweets();

        return new Promise((resolve) => {
            if (allTweets) {
                let formatedTweets = [];

                for (let tweet of allTweets) {
                    formatedTweets.push({
                        id: tweet.id,
                        content: tweet.text_content,
                        username: tweet.username,
                        timestamp: tweet.timestamp,
                        likesCount: tweet.likes ? tweet.likes.length : 0,
                        retweetsCount: tweet.retweets ? tweet.retweets.length : 0
                    })
                }

                resolve(formatedTweets);
            } else {
                resolve(allTweets);
            }
        });
    }

    static async addTweet(username, content) {
        let addedTweet = await TweetsDAL.addTweet(username, content);
        
        return new Promise((resolve) => {
            resolve(addedTweet);
        });
    }

    static async likeTweet(tweetId, username) {
        return await LikesDAL.addLike(tweetId, username);
    }

    static async retweetTweet(tweetId, username) {
        return await RetweetsDAL.addRetweet(tweetId, username);
    }
}

module.exports = TweetBL;