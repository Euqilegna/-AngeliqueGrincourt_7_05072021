CREATE TABLE users 
(
    users_id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    users_lastName VARCHAR(255) NOT NULL, 
    users_firstName VARCHAR(255) NOT NULL, 
    users_mail VARCHAR(255) NOT NULL UNIQUE, 
    users_birthday DATE NOT NULL,
    users_profilePicture BLOB NULL, 
    users_isEnable VARCHAR(255) NULL
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ;

CREATE TABLE post 
(
    post_id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    post_author INT(11) NOT NULL,
    post_title VARCHAR(255) NOT NULL, 
    post_content TEXT(2000) NOT NULL,  
    post_file BLOB NULL, 
    post_date  DATE NOT NULL,
    CONSTRAINT fk_user_post
    FOREIGN KEY (author)
    REFERENCES users(id)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ;

CREATE TABLE comment 
(
    comment_id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    comment_author INT(11) NOT NULL,
    comment_content TEXT(500) NOT NULL, 
    CONSTRAINT fk_user_comment
    FOREIGN KEY (author)
    REFERENCES users(id)

) ENGINE=MyISAM  DEFAULT CHARSET=utf8 


-- JOINTURE 
-- Recupèrerer les titres des articles écrit par "Grincourt"
SELECT post_title FROM post INNER JOIN users on `post_author` = users_id WHERE users_lastName = "Grincourt"