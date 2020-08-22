// const router = require("express").Router();
const path = require("path");

// Routes for signup and login

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/movie", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/movie.html"));
  });
  app.get("/food", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/food.html"));
  });
  app.get("/favorites", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/favorites.html"));
  });
};

// Routes for activity pages
// router.get("/movies", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/movie.html"));
// });
// router.get("/food", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/food.html"));
// });
// router.get("/park", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/park.html"));
// });
// router.get("/home", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/home.html"));
// });
// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/login.html"));
// });

// module.exports = router;
