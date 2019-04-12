DROP DATABASE IF EXISTS pixelsdb;
CREATE DATABASE pixelsdb;

USE pixelsdb;

CREATE TABLE 'users' (
    'id' INT AUTO_INCREMENT NOT NULL,
    'name' VARCHAR(255),
    'username' VARCHAR(255) NOT NULL,
    'password' VARCHAR(255) NOT NULL,
    PRIMARY KEY('id')
);

CREATE TABLE 'pixels' (
    'id' INT AUTO_INCREMENT NOT NULL,
    'routeName' VARCHAR(256),
    'userId' INT references users(id),
    'date' VARCHAR(256),
    'moodId' INT references mood(id),
    'caffeine' INT,
    'alcohol' INT,
    'exercise' INT,
    'screen' INT,
    'sleep' INT,
    'createdAt' DATETIME,
    'updatedAt' DATETIME
)

CREATE TABLE 'moods' (
    'id' INT(11) AUTO_INCREMENT NOT NULL,
    'name' VARCHAR(255) NOT NULL
)

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
