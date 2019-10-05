var db = require('../models');

// Routes

module.exports = function(app) {

// GET route  for getting all of the table info
app.get("/api/members", function(req, res) {
    db.Members.findAll({})
    .then(function(dbMembers) {
        res.json(dbMembers);
    });
});

// POST route for saving a new member???
// app.post("/api/members", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    // db.Members.create({
    //     username: "req.body.username",
    //     email: "req.body.email"
    // }).then(function(dbMembers) {
        // We have access to the new member as an argument inside of the callback function
//         res.json(dbMembers);
//     }).catch(function(err){
//         res.json({err: err})
//     })
// });


}