const Retweet = require('../Entities/retweet');

const allRetweets = [{
    "content": "My second tweet",
    "retweet_user": "Moshe",
    "tweet_id": "ce1b95a0-f2d4-417f-876c-cde4a2e9d2d1",
    "tweet_user": "YossiK",
    "timestamp": "2018-08-20T19:55:52.834925+00:00"
},{
    "content": "My second tweet",
    "retweet_user": "Itzik",
    "tweet_id": "ce1b95a0-f2d4-417f-876c-cde4a2e9d2d1",
    "tweet_user": "YossiK",
    "timestamp": "2018-08-20T19:55:52.835144+00:00"
},{
    "content": "My first tweet",
    "retweet_user": "Itzik",
    "tweet_id": "eb676828-26d7-4af9-8fcd-db801419fabe",
    "tweet_user": "YossiK",
    "timestamp": "2018-08-20T19:55:52.835148+00:00"
},{
    "content": "My third tweet",
    "retweet_user": "David",
    "tweet_id": "a7a5f488-9afa-4ba2-833f-3cb7afb17eee",
    "tweet_user": "YossiK",
    "timestamp": "2018-08-20T19:55:52.835149+00:00"
},{
    "content": "My second tweet",
    "retweet_user": "David",
    "tweet_id": "ce1b95a0-f2d4-417f-876c-cde4a2e9d2d1",
    "tweet_user": "YossiK",
    "timestamp": "2018-08-20T19:55:52.83515+00:00"
},{
    "content": "My third tweet",
    "retweet_user": "Moshe",
    "tweet_id": "a7a5f488-9afa-4ba2-833f-3cb7afb17eee",
    "tweet_user": "YossiK",
    "timestamp": "2018-08-20T19:55:52.835151+00:00"
},{
    "content": "And i am the last tweet",
    "retweet_user": "Itzik",
    "tweet_id": "f282ec24-980b-417b-b307-cd5123e71568",
    "tweet_user": "Inobix",
    "timestamp": "2018-08-20T19:55:52.835152+00:00"
},{
    "content": "My third tweet",
    "retweet_user": "Itzik",
    "tweet_id": "a7a5f488-9afa-4ba2-833f-3cb7afb17eee",
    "tweet_user": "YossiK",
    "timestamp": "2018-08-20T19:55:52.835153+00:00"
}]

const RetweetsDAL = class {
    static getRetweets() {
        return allRetweets;
    }

    static addRetweet(post_id, username) {
        let newRetweet = new Retweet(post_id, username, new Date());

        return newRetweet;
    }
}

module.exports = RetweetsDAL;