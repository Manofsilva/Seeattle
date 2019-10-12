var db = require('../models');

// Routes

// This is to test if the routes work with dummy data

module.exports = function (app) {
  // app.post("/api/attractions", function(req, res) {
  //     console.log("testing");
  // create takes an argument of an object describing the item we want to insert
  // into our table. In this case we just we pass in an object with a text and
  // complete property
  // db.Attraction.create({
  //     attractionSite: "DC"
  // }).then(function(dbAttraction) {
  // We have access to the new attraction as an argument inside of the callback function
  //         res.json(dbAttraction);
  //     }).catch(function(err){
  //         res.json({err: err})
  //     })
  // });

  // POST route to db for saving a new attraction entered by user
  app.post("/api/attractions/:attractionSite", function (req, res) {
    console.log(req.params);
    db.Attraction.create({
      attractionSite: req.params.attractionSite
    })
      .then(function (dbAttraction) {
        res.json(dbAttraction);
      }).catch(function (err) {
        res.json({ err: err })
      })
  });

  // GET route for all attractions
  app.get("/api/attractions", function (req, res) {
    console.log(req.params);
    db.Attraction.findAll({})
      .then(function (dbAttraction) {
        res.json(dbAttraction);
      }).catch(function (err) {
        res.json({ err: err })
      })
  });

  //   GET route that includes all reviews associated with all tourist attractions
  app.get("/api/attractions/reviews/:attraction", function (req, res) {
    db.Attraction.findAll({
      include: [db.Reviews]
    }).then(function (dbAttraction) {
      res.json(dbAttraction);
    }).catch(function (err) {
      res.json({ err: err })
    })
  });


  //   GET route that includes all reviews associated with one tourist attraction
  app.get("/api/attractions/:review", function (req, res) {
    db.Attraction.findOne({
      where: {
        id: req.params.attractionSite
      },
      include: [db.Review]
    }).then(function (dbAttraction) {
      res.json(dbAttraction);
    }).catch(function (err) {
      res.json({ err: err })
    })
  });


}
