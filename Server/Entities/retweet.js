const Retweet = class {
    constructor(post_id, username, timestamp) {
        this.post_id = post_id;
        this.username = username;
        this.timestamp = timestamp;
    }

    equals(otherRetweet) {
        return this.post_id === otherRetweet.post_id &&
               this.username === otherRetweet.username &&
               this.timestamp === otherRetweet.timestamp
    }
};

module.exports = Retweet;