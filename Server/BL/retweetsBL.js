const RetweetsDAL = require('../DALS/retweetsDAL');

const RetweetsBL = class {
    static getAllRetweets() {
        return RetweetsDAL.getRetweets();
    }
};

module.exports = RetweetsBL;