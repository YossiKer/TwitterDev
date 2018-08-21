const Tweet = class {
    constructor(username, text_content, timestamp) {
        this.username = username;
        this.text_content = text_content;
        this.timestamp = timestamp;
    }

    equals(otherTweet) {
        return this.username === otherTweet.username &&
               this.text_content === otherTweet.text_content &&
               this.timestamp === otherTweet;
    }
}

module.exports = Tweet;