const Sequelize = require("sequelize");

const sequelize = require("../config/connection.js");

// Creates a "Restaurant" model that matches up with DB
const Restaurant = sequelize.define("restaurant", {
  restaurant_name: Sequelize.STRING,
  cuisine: Sequelize.STRING,
  price: Sequelize.NUMBER,
  address: Sequelize.STRING
});

// Syncs with DB
Restaurant.sync();

// Makes the Restaurant Model available for other files (will also create a table)
module.exports = Restaurant;
