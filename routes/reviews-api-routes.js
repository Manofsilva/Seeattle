var db = require('../models');

// Routes

module.exports = function(app) {

// GET route for getting all of the table info that the user searches
app.get("/api/reviews/:attractionId", function(req, res) {
    db.Reviews.findAll({
        where: {
            attractionId: req.params.attractionId
        }
    })
    .then(function(dbReviews) {
        res.json(dbReviews);
    });
});

// POST route for saving a new review
app.post("/api/reviews", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Reviews.create({
        username: req.body.username,
        review: req.body.review, 
        attractionId: req.body.attractionId
    }).then(function(dbReviews) {
        // We have access to the new review as an argument inside of the callback function
        res.json(dbReviews);
    }).catch(function(err){
        res.json({err: err})
    })
});

}