// BASE SETUP
// ===============================================================

// Call the packages ---------------------------------
var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    morgan          = require('morgan'),
    mongoose        = require('mongoose'),
    config          = require('./config')
    path            = require('path');

// APP CONFIGURATION ---------------------------------
// use bodyParser so we can grab information from the POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

// log all requests to the console
app.use(morgan('dev'));

// connect to the database
mongoose.connect(config.dbLocal); // connect to local db
//mongoose.connect(config.dbRemote); // connect to mongolab db

// set the static files location
// used for requests that the frontend will make
app.use(express.static(__dirname + '/public'));

// ROUTES FOR THE API
// ===============================================================

// API ROUTES ---------------------------------
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// MAIN CATCHALL ROUTE ---------------------------------
// SEND USERS TO FRONTEND ------------------------------
// has to be registered after apiRoutes
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});


// START THE SERVER
// ===============================================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port);