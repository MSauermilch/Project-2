DROP DATABASE IF EXISTS pixelsdb;
CREATE DATABASE pixelsdb;

USE pixelsdb;

CREATE TABLE 'users' (
    'id' INT(11) AUTO_INCREMENT NOT NULL,
    'name' VARCHAR(255),
    'username' VARCHAR(255) NOT NULL,
    'password' VARCHAR(255) NOT NULL,
    PRIMARY KEY('id')
);

CREATE TABLE 'pixels' (
    'id' INT(11) AUTO_INCREMENT NOT NULL,
    'user_id' INT references users(id),
    'date' DATETIME NOT NULL,
    'mood_id' INT references mood(id),
    'caffeine' INT,
    'alcohol' INT,
    'exercise' BOOLEAN,
    'screen' INT,
    'sleep' INT,
    PRIMARY KEY('id')
)

CREATE TABLE 'moods' (
    'id' INT(11) AUTO_INCREMENT NOT NULL,
    'name' VARCHAR(255) NOT NULL
)

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
