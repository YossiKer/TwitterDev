var assert = require('chai').assert;

const Like = require('../Entities/like');
const LikesDAL = require('../DALS/likesDAL');

describe('Likes DAL Tests', () => {
    describe('Add Like Tests', () => {
        it('Should return the new like object.', () => {

            var actualResult = LikesDAL.addLike('1', 'YossiK');
            var expectedResult = new Like('1', 'YossiK', actualResult.timestamp);

            assert.isTrue(actualResult.equals(expectedResult));
        })
    })
});