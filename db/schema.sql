-- CREATE database burgers_db;

USE burgers_db;

CREATE table burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name varchar(1000) NOT NULL,
  devoured boolean not null default 0,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
