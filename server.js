const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// const Plane = require('./models/plane');

// const MONGODB_URI = "./config/mongo_uri"

// Configure body parser for AJAX requests


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/flightbuddydb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
// app.use(express.static("client/build"));
app.use(function(req, res, next) {
  console.log("things again")
  console.log("What is our path server.js", req.url)
  next();
});
// Add routes, both API and view
app.use("/", routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
