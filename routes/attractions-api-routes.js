var db = require('../models');

// Routes

// This is to test if the routes work with dummy data

module.exports = function(app) {
    app.post("/api/attractions", function(req, res) {
        console.log("testing");
        // create takes an argument of an object describing the item we want to insert
        // into our table. In this case we just we pass in an object with a text and
        // complete property
        db.Attraction.create({
            attractionSite: "DC"
        }).then(function(dbAttraction) {
            // We have access to the new attraction as an argument inside of the callback function
            res.json(dbAttraction);
        }).catch(function(err){
            res.json({err: err})
        })
    });

     // POST route for saving a new post
  app.post("/api/attractions/:attractionSite", function(req, res) {
    console.log(req.params);
    db.Attraction.create({
      attractionSite: req.params.attractionSite
    })
      .then(function(dbAttraction) {
        res.json(dbAttraction);
      });
  });

}