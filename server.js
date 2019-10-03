// link dependencies
var express = require('express');

// setup express app
var app = express();
var PORT = process.env.PORT || 8080;

// add model folder for data syncing
var db = require('./models');

// setup data parsing 
app.use(express.urlencoded({ encoded: true }));
app.use(express.json());

// add static directory
app.use(express.static('public'));

// import routes



// syinc our sequelize models and start the express app
db.sequelize.sync({ force: true}).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});