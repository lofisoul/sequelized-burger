var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 3000;

//adding in the require for models for db sync
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes =============================================================
//this came from stack overflow and is from class examples
require("./controllers/html-routes.js")(app);
require("./controllers/html-routes.js")(app);

//this was on a github repo [ALT VERSION]
//var htmlRoutes = require("./controllers/html-routes.js")(app);
//var apiRoutes = require("./controllers/html-routes.js")(app);
// app.use('/', htmlRoutes);
// app.use('/', apiRoutes);

db.sequelize.sync().then(function(){
    app.listen(port, function(){
        console.log("It's ALIVE on PORT: " + port);
    });
});
