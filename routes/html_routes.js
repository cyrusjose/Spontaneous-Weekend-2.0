const router = require("express").Router();
const path = require("path");

router.get("/movies", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/movie.html"));
});
router.get("/food", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/food.html"));
});
router.get("/park", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/park.html"));
});
router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

module.exports = router;
