// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // itinerary route loads itinerary.html
  app.get("/itinerary", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/itinerary.html"));
  });

  // review route loads blog.html
  app.get("/review", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/review.html"));
  });

};
