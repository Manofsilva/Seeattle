-- drop database if it currently exists
DROP DATABASE IF EXISTS itinerary;

-- create database
CREATE DATABASE itinerary;

USE itinerary;

CREATE TABLE members (
    id Integer not null AUTO_INCREMENT,
    username varchar(30) NOT NULL,
    email varchar(50) NOT NULL,
    PRIMARY KEY (id)
);