-- show databases;
-- create database <dbName>;
-- use <dbName>; 
-- show tables; 
-- describe <dbName> (show table)

-- create db
CREATE TABLE users(
  username VARCHAR(50),
  email VARCHAR(100),
  age INT,

-- add data
INSERT INTO users
(username, email, age) 
VALUES("Joseph", "joseph@email.com", 37);

)

-- get data with conditions
SELECT * 
FROM users 
WHERE age >= 18

-- delete data
DELETE FROM users WHERE username = <nameToBeDeleted>

-- update data

UPDATE users SET username = "newUsername" WHERE username = "oldUsername"