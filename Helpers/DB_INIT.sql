CREATE TABLE IF NOT EXISTS tweets (
	id serial primary key,
	text_content text not null,
	username text not null,
	timestamp timestamp with time zone not null
);

CREATE TABLE IF NOT EXISTS likes (
	post_id int not null,
	username text not null,
	timestamp timestamp with time zone not null,
	FOREIGN KEY (post_id) REFERENCES tweets(id)
);

CREATE TABLE IF NOT EXISTS retweets (
	post_id int not null,
	username text not null,
	timestamp timestamp with time zone not null,
	FOREIGN KEY (post_id) REFERENCES tweets(id)
);
