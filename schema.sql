-- drop database if it currently exists
DROP DATABASE IF EXISTS itinerary;

-- create database
CREATE DATABASE itinerary;

USE itinerary;

CREATE TABLE Reviews (
    id INT not null AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    review TEXT NOT NULL,
    attractionId INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Attractions (
    attractionId INT NOT NULL AUTO_INCREMENT,
    attractionSite varchar(50) NOT NULL,
    PRIMARY KEY (attractionId)
);
