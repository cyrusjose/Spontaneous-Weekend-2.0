-- parks db and table
CREATE DATABASE activities_db;

use activities_db;

CREATE TABLE t_parks (
trail_name VARCHAR(255) NOT NULL,
trail_location VARCHAR(255) NOT NULL,
difficulty VARCHAR(255) NOT NULL,
distance DECIMAL(5,2),
trail_URL VARCHAR(255)
);
-- restaurants table

CREATE TABLE restaurants (
  restaurant_id INT NOT NULL AUTO_INCREMENT,
  restaurant_name varchar(60) NOT NULL,
  cuisine VARCHAR(60),
  price INT,
  address VARCHAR(80),
  PRIMARY KEY (restaurant_id)
);
