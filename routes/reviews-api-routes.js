var db = require('../models');

// Routes

module.exports = function (app) {

    // GET route for getting all of the reviews
    // WORKS
    app.get("/api/reviews", function (req, res) {
        console.log(req.params);
        db.Review.findAll({})
            .then(function (dbReview) {
                res.json(dbReview);
            }).catch(function (err) {
                res.json({ err: err })
            })
    });

    // WORKS
    // GET route for returning a review on specific attraction
    app.get("/api/reviews/:attractionId", function (req, res) {
        db.Review.findAll({
            where: {
                attractionId: req.params.attractionId
            }
        })
            .then(function (dbReview) {
                res.json(dbReview);
            });
    });

    // POST route for saving a new review.
    // ************made the name Review and not Reviews

    app.post("/api/reviews", function (req, res) {
        // create takes an argument of an object describing the item we want to insert
        // into our table. In this case we just we pass in an object with a text and
        // complete property
        db.Review.create({
            username: req.body.username,
            review: req.body.review,
            AttractionId: req.body.AttractionId
        }).then(function (dbReview) {
            // We have access to the new review as an argument inside of the callback function
            res.json(dbReview);
        }).catch(function (err) {
            res.json({ err: err })
        })
    });



    // PUT route for updating reviews
    app.put("/api/reviews", function (req, res) {
        db.Review.update(req.body,
            {
                where: {
                    AttractionId: req.body.AttractionId
                }
            })
            .then(function (dbReview) {
                res.json(dbReview);
            });
    });

    // DELETE route for deleting reviews
    app.delete("/api/reviews/:attractionId", function (req, res) {
        db.Review.destroy({
            where: {
                AttractionId: req.params.AttractionId
            }
        })
            .then(function (dbReview) {
                res.json(dbReview);
            });
    });

}