const Consts = {
    databaseConnectionString: 'postgres://postgres:1q2w3e4r5y@localhost:5432/postgres',
    getAllTweetsQuery: 'select json_agg(row_to_json(result_rows)) ' +
                       'from (select t.id, ' +
                                   't.text_content, ' + 
                                   't.username, ' +
                                   't.timestamp, ' +
                                   '(select json_agg(row_to_json(result_rows2)) ' +
                                   ' from (select l.username, l.timestamp ' +
                                           'from likes l ' +
                                           'where l.post_id = t.id ' +
                                       ') result_rows2 ' +
                                   ') as likes, ' +
                                   '(select json_agg(row_to_json(result_rows3)) ' +
                                   'from (select r.username, r.timestamp ' +
                                           'from retweets r ' +
                                           'where r.post_id = t.id ' +
                                           ') result_rows3 ' +
                                   ') as retweets ' +
                           'from tweets t ' +
                           ') result_rows',
    addTweetQuery: 'insert into tweets(text_content, ' + 
                                                   'username, ' +
                                                   'timestamp) ' +
                                               'values ($2, ' + 
                                                       '$1, ' + 
                                                       '$3) ',
    addLikeQuery: 'insert into likes(post_id, ' + 
                                                 'username, ' +
                                                 'timestamp) ' +
                                             'values ($1, ' +
                                                     '$2, ' +
                                                     '$3) ' ,
    addRetweetQuery: 'insert into retweets(post_id, ' +
                                                       'username, ' +
                                                       'timestamp) ' +
                                                   'values ($1, ' +
                                                           '$2, ' +
                                                           '$3) ',
    getAllRetweetsQuery: 'select json_agg(row_to_json(result_rows)) ' +
                         'from (select t.text_content as content, ' +
                                         'r.username as retweet_user, ' +
                                         't.id as tweet_id, ' +
                                         't.username as tweet_user, ' +
                                         'r.timestamp ' +
                             'from tweets t, retweets r ' +
                             'where t.id = r.post_id ' +
                             ') result_rows',
    errorMessage: 'An error has occured : '
}

module.exports = Consts;