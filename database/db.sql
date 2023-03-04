-- create the database  

CREATE DATABASE
IF NOT EXISTS `devauthchallenge`;

USE devauthchallenge

-- create a table of users that will be used to store the user information

CREATE TABLE
IF NOT EXISTS `users`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `image` varchar
(255),
  `name` varchar
(255) NOT NULL,
  `email` varchar
(255) NOT NULL,
  `bio` varchar
(255) ,
  `phone` varchar
(255) ,
  `password` varchar
(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON
UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY
(`id`)
) ; 

DESCRIBE users;

-- create a dummy user to test the api

INSERT INTO users
  (name, email, password)
VALUES
  ('John Doe', ' john@example.com', '123456');
