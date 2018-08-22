const Retweet = require('../Entities/retweet');
const pg = require('pg');
const Consts = require('../consts');

const RetweetsDAL = class {
    static getRetweets() {
        return new Promise((resolve) => {
            const client = new pg.Client(Consts.databaseConnectionString);
            client.connect();

            client.query(Consts.getAllRetweetsQuery, (err, res) => {
                client.end();
                if (!err) {
                    resolve(res.rows[0].json_agg);
                } else {
                    console.log(Consts.errorMessage + err.message)
                    resolve(undefined);
                }
            });
        });
    }

    static addRetweet(post_id, username) {
        return new Promise((resolve) => {
            const client = new pg.Client(Consts.databaseConnectionString);
            client.connect();

            let timestamp = new Date();

            client.query(Consts.addRetweetQuery, [post_id, username, timestamp], (err, res) => {
                client.end();
                if (!err) {
                    resolve(new Retweet(post_id, username, timestamp));
                } else {
                    console.log(Consts.errorMessage + err.message);
                    resolve(undefined);
                }
            })
        });
    }
}

module.exports = RetweetsDAL;