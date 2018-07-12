CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_type varchar(150) NOT NULL,
    is_Devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);
