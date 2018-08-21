const Like = require('../Entities/like');
const pg = require('pg');
const Consts = require('../consts');

const LikesDAL = class {
    static addLike(post_id, username) {
        //const client = new pg.Client(Consts.databaseConnectionString);

        //client.query(Consts.addLikeQuery, [post_id, username], (result, err) => {
        //    if (!err) {
        //        return result;
        //    } else {
        //        console.log(Consts.errorMessage + err);
        //    }
        //});

        //client.end();
        let newLike = new Like(post_id, username, new Date());

        return newLike;
    }
}

module.exports = LikesDAL;