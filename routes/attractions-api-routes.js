var db = require('../models');

// Routes

// This is to test if the routes work with dummy data

module.exports = function (app) {

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

  // DOES NOT WORK
    // GET route that includes all reviews associated with all tourist attractions
  // app.get("/api/attractions/:id", function (req, res) {
  //   db.Attraction.findAll({
  //       where: {
  //         id: req.params.id
  //       }
  //   }).then(function (dbAttraction) {
  //     res.json(dbAttraction);
  //   }).catch(function (err) {
  //     console.log(err);
  //     res.json({ err: err })
  //   })
  // });

// I DONT THINK THAT I NEED IT
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
