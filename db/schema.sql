CREATE DATABASE activities_db;

use activities_db;

CREATE TABLE t_parks (
trail_name VARCHAR(255) NOT NULL,
trail_location VARCHAR(255) NOT NULL,
difficulty VARCHAR(255) NOT NULL,
distance DECIMAL(5,2),
trail_URL VARCHAR(255)
);

