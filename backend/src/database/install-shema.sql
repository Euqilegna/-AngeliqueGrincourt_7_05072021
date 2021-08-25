CREATE TABLE IF NOT EXISTS users 
(
    users_id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    users_lastName VARCHAR(255) NOT NULL, 
    users_firstName VARCHAR(255) NOT NULL, 
    users_mail VARCHAR(255) NOT NULL UNIQUE, 
    users_pwd VARCHAR(255) NOT NULL, 
    users_birthday DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

CREATE TABLE IF NOT EXISTS  posts 
(
    posts_id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    posts_author INT(11) NOT NULL,
    posts_title VARCHAR(255) NOT NULL, 
    posts_file VARCHAR(255) NULL, 
    posts_dateOfPublish DATE NOT NULL DEFAULT NOW(),
    posts_likes INT(5) NOT NULL DEFAULT 0,
    posts_unlikes INT(5) NOT NULL DEFAULT 0,
    posts_numberOfComments INT(5) NOT NULL DEFAULT 0,
   FOREIGN KEY (posts_author) REFERENCES users(users_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

CREATE TABLE IF NOT EXISTS comments
(
    comments_id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    comments_author INT(11) NOT NULL,
    comments_post INT(11) NOT NULL,
    comments_content TEXT(500) NOT NULL, 
    FOREIGN KEY (comments_author) REFERENCES users(users_id) ON DELETE CASCADE,
    FOREIGN KEY (comments_post) REFERENCES posts(posts_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 

