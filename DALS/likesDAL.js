const Like = require('../Entities/like');

const LikesDAL = class {
    static addLike(post_id, username) {
        let newLike = new Like(post_id, username, new Date());

        return newLike;
    }
}

module.exports = LikesDAL;