var express = require("express");
var routes = require("./controllers/burgers_controller");
var app = express();

PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
// We can uncommoent this if we want to use handlebars
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
