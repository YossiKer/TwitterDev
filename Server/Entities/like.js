const Like = class {
    constructor(post_id, username, timestamp) {
        this.post_id = post_id;
        this.username = username;
        this.timestamp = timestamp;
    }

    equals(otherLike) {
        return this.post_id === otherLike.post_id &&
               this.username === otherLike.username &&
               this.timestamp === otherLike.timestamp;
    }
};

module.exports = Like;