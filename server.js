const express = require("express");

// server port
const PORT = process.env.PORT || 6800;
const app = express();

// static public folder
app.use(express.static("public"));

// application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const template = require("express-handlebars");

app.engine("handlebars", template({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

// configure routes
app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
});
