const Tweet = require('../Entities/tweet');
const pg = require('pg');
const Consts = require('../consts');

const client = new pg.Client(Consts.databaseConnectionString);

const TweetsDAL = class {
    static getTweets() {
        return new Promise((resolve) => {
            client.connect();

            client.query(Consts.getAllTweetsQuery, (err, res) => {
                client.end;
                if (!err) {
                    resolve(res.rows[0].json_agg);
                } else {
                    console.log(Consts.errorMessage + err.message);
                    resolve(undefined);
                }
            });
        });
    }

    static addTweet(username, content) {
        return new Promise((resolve) => {
            client.connect();

            let timestamp = new Date();

            client.query(Consts.addTweetQuery, [username, content, timestamp], (err, res) => {
                client.end();
                if (!err) {
                    resolve(new Tweet(username, content, timestamp));
                } else {
                    console.log(Consts.errorMessage + err.message);
                    resolve(undefined);
                }
            });
        });
    }
}

module.exports = TweetsDAL;