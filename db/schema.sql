DROP DATABASE IF EXISTS pixelsdb;
CREATE DATABASE pixelsdb;

-- ==============
-- =INSTRUCTIONS=
-- ==============
-- In command line type 
-- "mysql -u root"
-- This gets you in the mysql command line interface
-- type
-- "source db/schema.sql"
-- to execute the file and create the database
-- type
-- "exit"
-- to get out of the mysql interface


-- USE pixelsdb;

-- CREATE TABLE 'users' (
--     'id' INT(11) AUTO_INCREMENT NOT NULL,
--     'name' VARCHAR(255),
--     'username' VARCHAR(255) NOT NULL,
--     'password' VARCHAR(255) NOT NULL,
--     PRIMARY KEY('id')
-- );

-- CREATE TABLE 'pixels' (
--     'id' INT(11) AUTO_INCREMENT NOT NULL,
--     'user_id' INT references users(id),  **This is a foreign key which we probably won't need due to Sequelize
--     'date' DATETIME NOT NULL,
--     'mood_id' INT references mood(id),
--     'caffeine' INT,
--     'alcohol' INT,
--     'exercise' BOOLEAN,
--     'screen' INT,
--     'sleep' INT,
--     PRIMARY KEY('id')
-- )

-- CREATE TABLE 'moods' (
--     'id' INT(11) AUTO_INCREMENT NOT NULL,
--     'name' VARCHAR(255) NOT NULL
-- )

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;
