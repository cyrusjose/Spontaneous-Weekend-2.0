// Dependencies
const Restaurant = require("../models/food.js");

// Routes
module.exports = function(app) {


    // Get all favorited restaurants
    // MIGHT NEED TO FIX ROUTE NAMES
    app.get("/api/all", function(req, res) {
  
      // Finding all favorited restaurants, and then returning them to the user as JSON.
      // Sequelize queries are asynchronous, which helps with perceived speed.
      // If we want something to be guaranteed to happen after the query, we'll use
      // the .then function
      Restaurant.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
  
    });
  
    // Add a favorite restaurant
    // MIGHT NEED TO FIX ROUTE NAMES
    app.post("/api/new", function(req, res) {
  
      console.log("Restaurant Data:");
      console.log(req.body);
  
      Restaurant.create({
        restaurant_name: req.body.restaurant_name,
        cuisine: req.body.cuisine,
        price: req.body.price,
        address: req.body.address
      }).then(function(results) {
        // `results` here would be the newly created chirp
        res.end();
      });
  
    });
  
  };