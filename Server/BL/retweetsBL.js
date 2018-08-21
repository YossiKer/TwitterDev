const RetweetsDAL = require('../DALS/retweetsDAL');

const RetweetsBL = class {
    static async getAllRetweets() {
        return await RetweetsDAL.getRetweets();
    }
};

module.exports = RetweetsBL;