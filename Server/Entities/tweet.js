const Tweet = class {
    constructor(username, text_content, timestamp) {
        this.username = username;
        this.text_content = text_content;
        this.timestamp = timestamp;
    }
}

module.exports = Tweet;