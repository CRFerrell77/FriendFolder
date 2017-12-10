var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 3000;

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

//listen for the PORT and report back
app.listen(port, function() {
    console.log("listening on port", port);
});
