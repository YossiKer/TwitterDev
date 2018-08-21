const Like = require('../Entities/like');
const pg = require('pg');
const Consts = require('../consts');

const client = new pg.Client(Consts.databaseConnectionString);

const LikesDAL = class {
    static addLike(post_id, username) {
        return new Promise((resolve) => {
            client.connect();

            let timestamp = new Date();

            client.query(Consts.addLikeQuery, [post_id, username, timestamp], (err, res) => {
                client.end();
                if (!err) {
                    resolve(new Like(post_id, username, timestamp));
                } else {
                    console.log(Consts.errorMessage + err);
                    resolve(undefined);
                }
            });

        });
    }
}

module.exports = LikesDAL;