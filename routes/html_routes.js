const router = require("express").Router();
const path = require("path");

router.get("/movies", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/movie.html"));
});
router.get("/food", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/food.html"));
});
router.get("/park", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/park.html"));
});
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.js"));
});

module.exports = router;
