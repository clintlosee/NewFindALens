// BASE SETUP
// ===============================================================

// Call the packages ---------------------------------
var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    morgan          = require('morgan'),
    mongoose        = require('mongoose'),
    Lens            = require('./app/models/lens'),
    config          = require('./config');

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
mongoose.connect(config.dbLocal);


// ROUTES FOR THE API
// ===============================================================

// basic route for the home page
app.get('/', function(req, res) {
    res.send('Welcome to the home page!');
});

// get instance of express router
var router = express.Router();


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Someone just came to our app!');
    
    next();
});

// routes that end in /lens
router.route('/lens')

    .post(function(req, res) {
        var lens = new Lens();
    
        lens.lensName = req.body.lensName;
        lens.model = req.body.model;
        lens.price = req.body.price;
    
        lens.save(function(err) {
            if (err) {
                if (err.code == 1000)
                    return res.json({ success: false, message: 'A lens with that model already exists.'});
            } else {
                return res.send(err);
            }
            
            res.json({ message: 'Lens added!'});
        });
    })

    .get(function(req, res) {
        Lens.find(function(err, lenses) {
            if (err) res.send(err);
            
            res.json(lenses);
        });
    });

// routes that end in /lens/:lens_id
router.route('/lens/:lens_id')
    
    // get the lens with that id
    // access at GET http://localhost:8000/api/lens/:lens_id
    .get(function(req, res) {
        Lens.findById(req.params.lens_id, function(err, lens) {
            if (err) res.send(err);
            
            // return the lens
            res.json(lens);
        });
    })

    // update the lens with that id
    // access at PUT http://localhost:8000/api/lens/:lens_id
    .put(function(req, res) {
        Lens.findById(req.params.lens_id, function(err, lens) {
            if (err) res.send(err);
            
            // update the lens info if it is new
            if (req.body.lensName) lens.lensName = req.body.lensName;
            if (req.body.model) lens.model = req.body.model;
            if (req.body.price) lens.price = req.body.price;
            
            // save the lens
            lens.save(function(err) {
                if (err) res.send(err);
                
                res.json({ message: 'Lens Updated!' });
            });
        });
    })

    // delete the lens with that id
    // access at DELETE http://localhost:8000/api/lens/:lens_id
    .delete(function(req, res) {
        Lens.remove({
            _id: req.params.lens_id
        }, function(err, lens) {
            if (err) res.send(err);
            
            res.json({ message: 'Lens Deleted!' });
        });
    });


// test route to make sure things are working
// access at GET http://localhost:8000/api
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to our api!' })
});

// more routes go here


// REGISTER OUR ROUTES ---------------------------------
app.use('/api', router);


// START THE SERVER
// ===============================================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port);