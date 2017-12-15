//Requires
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var html = require(path.join(__dirname, "./app/routing/htmlRoutes.js"));
var api = require(path.join(__dirname, "./app/routing/apiRoutes.js"));

var app = express();
var port = process.env.PORT || 3000;

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname,'./app/public')));

// Initialize server routs
html(app);
api(app);

//listen for the PORT and report back
app.listen(port, function() {
    console.log("listening on port", port);
});
