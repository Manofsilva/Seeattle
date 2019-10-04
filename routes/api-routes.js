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

}