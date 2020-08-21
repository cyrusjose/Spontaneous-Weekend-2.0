// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the Movies
  app.get("/api/movie", (req, res) => {
    const query = {};
    if (req.query.User_id) {
      query.UserId = req.query.User_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Movie.findAll({
      where: query,
      include: [db.User]
    }).then(dbMovie => {
      res.json(dbMovie);
    });
  });

  // Get route for retrieving a single Movie
  app.get("/movie/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Movie.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(dbMovie => {
      res.json(dbMovie);
    });
  });

  // Movie route for saving a new Movie
  app.post("/favorites", (req, res) => {
    console.log("Hello world");
    res.send("Hello world");
    // db.Movie.create(req.body).then(dbMovie => {
    //   res.json(dbMovie);
    // });
  });
};
