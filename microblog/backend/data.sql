DROP DATABASE IF EXISTS "microblog";

CREATE DATABASE "microblog";

\c "microblog"

CREATE TABLE posts (id SERIAL PRIMARY KEY, 
                    title TEXT NOT NULL, 
                    description TEXT NOT NULL,
                    body TEXT, 
                    votes INT NOT NULL DEFAULT 0);
                    
CREATE TABLE comments (id SERIAL PRIMARY KEY, 
                       text TEXT NOT NULL, 
                       post_id INT NOT NULL REFERENCES posts ON DELETE CASCADE);

INSERT INTO posts (title, description, body) VALUES
    ('First Post', 'First Post!', 'This is the first post'),
    ('Second Post', 'Second Post!', 'Wow! A second post.');

INSERT INTO comments (text, post_id) VALUES
    ('This is a really great post.', 1),
    ('Yup, its really good.', 1);