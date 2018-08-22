const assert = require('chai').assert;
const Tweet = require('../Entities/tweet');
const TweetsDAL = require('../DALS/tweetsDAL');

describe('Tweets DAL tests', () => {
    describe('Get all tweets', () => {
        it('Should return all the tweets.', () => {
             const actualResult = TweetsDAL.getTweets();
             const expectedResult = [{
                "id": "eb676828-26d7-4af9-8fcd-db801419fabe",
                "text_content": "My first tweet",
                "username": "YossiK",
                "timestamp": "2018-08-20T19:46:32.332259+00:00",
                "likes": [
                    {
                        "username": "Moshe",
                        "timestamp": "2018-08-20T19:56:07.235574+00:00"
                    },
                    {
                        "username": "Itzik",
                        "timestamp": "2018-08-20T19:56:07.235862+00:00"
                    },
                    {
                        "username": "David",
                        "timestamp": "2018-08-20T19:56:07.235877+00:00"
                    }
                ],
                "retweets": [
                    {
                        "username": "Itzik",
                        "timestamp": "2018-08-20T19:55:52.835148+00:00"
                    }
                ]
            },{
                "id": "2913460a-30b4-4c29-8e38-481fa3c9f2ef",
                "text_content": "I am another first tweet",
                "username": "Inobix",
                "timestamp": "2018-08-20T19:47:12.269734+00:00",
                "likes": [
                    {
                        "username": "Itzik",
                        "timestamp": "2018-08-20T19:56:07.235875+00:00"
                    }
                ],
                "retweets": null
            },{
                "id": "ce1b95a0-f2d4-417f-876c-cde4a2e9d2d1",
                "text_content": "My second tweet",
                "username": "YossiK",
                "timestamp": "2018-08-20T19:47:32.617474+00:00",
                "likes": null,
                "retweets": [
                    {
                        "username": "Moshe",
                        "timestamp": "2018-08-20T19:55:52.834925+00:00"
                    },
                    {
                        "username": "Itzik",
                        "timestamp": "2018-08-20T19:55:52.835144+00:00"
                    },
                    {
                        "username": "David",
                        "timestamp": "2018-08-20T19:55:52.83515+00:00"
                    }
                ]
            },{
                "id": "a7a5f488-9afa-4ba2-833f-3cb7afb17eee",
                "text_content": "My third tweet",
                "username": "YossiK",
                "timestamp": "2018-08-20T19:47:39.138549+00:00",
                "likes": [
                    {
                        "username": "David",
                        "timestamp": "2018-08-20T19:56:07.235876+00:00"
                    },
                    {
                        "username": "Moshe",
                        "timestamp": "2018-08-20T19:56:07.235878+00:00"
                    }
                ],
                "retweets": [
                    {
                        "username": "David",
                        "timestamp": "2018-08-20T19:55:52.835149+00:00"
                    },
                    {
                        "username": "Moshe",
                        "timestamp": "2018-08-20T19:55:52.835151+00:00"
                    },
                    {
                        "username": "Itzik",
                        "timestamp": "2018-08-20T19:55:52.835153+00:00"
                    }
                ]
            },{
                "id": "f282ec24-980b-417b-b307-cd5123e71568",
                "text_content": "And i am the last tweet",
                "username": "Inobix",
                "timestamp": "2018-08-20T19:47:58.867888+00:00",
                "likes": [
                    {
                        "username": "Itzik",
                        "timestamp": "2018-08-20T19:56:07.235879+00:00"
                    },
                    {
                        "username": "David",
                        "timestamp": "2018-08-20T19:56:07.23588+00:00"
                    }
                ],
                "retweets": [
                    {
                        "username": "Itzik",
                        "timestamp": "2018-08-20T19:55:52.835152+00:00"
                    }
                ]
            }]

            let areEqual = true;
            
            for(let tweetIndex = 0; tweetIndex < actualResult.length && areEqual; tweetIndex++) {
                if (!tweetObject.equals(expectedResult[tweetIndex])) {
                    console.log(tweetObject);
                    console.log(expectedResult[tweetIndex]);
                    areEqual = false;
                }
            }

            assert.isTrue(areEqual);
        });
    })
});
