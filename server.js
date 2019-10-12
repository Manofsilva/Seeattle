// link dependencies
var express = require('express');
var exphbs = require('express-handlebars');

// setup express app
var app = express();
var PORT = process.env.PORT || 8000;

// add model folder for data syncing and to be able to read the files under this folder
var db = require('./models');

// setup data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add static directory
app.use(express.static('public'));

// Set Handlebars
var exphbs = require("express-handlebars");

// app.engine is setting the view engine as well as the default layout.
// this line tells express to look in the /views/layouts folder a main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine","handlebars");

// import routes
// *********not sure if this is done correctly
require("./routes/reviews-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/attractions-api-routes.js")(app);



// sync our sequelize models and start the express app
db.sequelize.sync({ force: true}).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
}).catch(err => console.log(err))