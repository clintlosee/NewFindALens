var Lens        = require('../models/lens'),
    config      = require('../../config');

module.exports = function(app, express) {
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
    
    // create a lens (access at POST http://localhost:8000/api/lens)
    .post(function(req, res) {
        var lens = new Lens();
        
        lens.brand          = req.body.brand;
        lens.lensName       = req.body.lensName;
        lens.model          = req.body.model;
        lens.price          = req.body.price;
        lens.aperture       = req.body.aperture;
        lens.focalRange     = req.body.focalRange;
        lens.filterSize     = req.body.filterSize;
        lens.mount          = req.body.mount;
        lens.stabilization  = req.body.stabilization;
        lens.afmotor        = req.body.afmotor;
        lens.zoomType       = req.body.zoomType;
        lens.frontElementRotates = req.body.frontElementRotates;
        lens.tripodMount    = req.body.tripodMount;
        lens.color          = req.body.color;
        lens.manualFocus    = req.body.manualFocus;
        lens.numberOfLenses    = req.body.numberOfLenses;
        lens.numberOfGroups    = req.body.numberOfGroups;
        lens.diaphragmBlades   = req.body.diaphragmBlades;
        lens.length         = req.body.length;
        lens.weight         = req.body.weight;
        lens.announced      = req.body.announced;
        lens.description    = req.body.announced;
        lens.useOne         = req.body.useOne;
        lens.useTwo         = req.body.useTwo;
        lens.useThree       = req.body.useThree;
        lens.useFour        = req.body.useFour;
        lens.useFive        = req.body.useFive;
        lens.useSix         = req.body.useSix;
        lens.useSeven       = req.body.useSeven;
        lens.rank           = req.body.rank;
        lens.bestUse        = req.body.bestUse;
        lens.amazonLink     = req.body.amazonLink;
        lens.bandhLink      = req.body.bandhLink;
        lens.images         = req.body.images;
        
        lens.save(function(err) {
            if (err) {
                // duplicate entry
                if (err.code == 11000)
                    return res.json({ success: false, message: 'A lens with that model already exists.' });
                else 
                    return res.send(err);
            }
            
            res.json({ message: 'Lens Created!' });
        });
    })
    
    // get all lenses (access at GET http://localhost:8000/api/lens)
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
            req.body.brand ? lens.brand = req.body.brand : lens.brand = '';
            if (req.body.lensName) lens.lensName = req.body.lensName;
            if (req.body.model) lens.model = req.body.model;
            req.body.price ? lens.price = req.body.price : lens.price = 0;
            req.body.aperture ? lens.aperture = req.body.aperture : lens.aperture = '';
            if (req.body.focalRange) lens.focalRange = req.body.focalRange;
            if (req.body.filterSize) lens.filterSize = req.body.filterSize;
            if (req.body.mount) lens.mount = req.body.mount;
            if (req.body.stabilization) lens.stabilization = req.body.stabilization;
            if (req.body.afmotor) lens.afmotor = req.body.afmotor;
            if (req.body.zoomType) lens.zoomType = req.body.zoomType;
            if (req.body.frontElementRotates) lens.frontElementRotates = req.body.frontElementRotates;
            if (req.body.tripodMount) lens.tripodMount = req.body.tripodMount;
            if (req.body.color) lens.color = req.body.color;
            if (req.body.manualFocus) lens.manualFocus = req.body.manualFocus;
            if (req.body.numberOfLenses) lens.numberOfLenses = req.body.numberOfLenses;
            if (req.body.numberOfGroups) lens.numberOfGroups = req.body.numberOfGroups;
            if (req.body.diaphragmBlades) lens.diaphragmBlades = req.body.diaphragmBlades;
            if (req.body.length) lens.length = req.body.length;
            if (req.body.weight) lens.weight = req.body.weight;
            if (req.body.announced) lens.announced = req.body.announced;
            if (req.body.description) lens.description = req.body.description;
            if (req.body.useOne) lens.useOne = req.body.useOne;
            if (req.body.useTwo) lens.useTwo = req.body.useTwo;
            if (req.body.useThree) lens.useThree = req.body.useThree;
            if (req.body.useFour) lens.useFour = req.body.useFour;
            if (req.body.useFive) lens.useFive = req.body.useFive;
            if (req.body.useSix) lens.useSix = req.body.useSix;
            if (req.body.useSeven) lens.useSeven = req.body.useSeven;
            if (req.body.rank) lens.rank = req.body.rank;
            if (req.body.bestUse) lens.bestUse = req.body.bestUse;
            if (req.body.amazonLink) lens.amazonLink = req.body.amazonLink;
            if (req.body.bandhLink) lens.bandhLink = req.body.bandhLink;
            if (req.body.images) {
                lens.update({
                    $addToSet:  { "images": req.body.images }
                }, function(err) {
                    if (err) {
                        res.send(err);
                    }
                });
            } else if (req.body.images === '') {
                lens.images = [];
            }

            // save the lens
            lens.save(function(err) {
                if (err) res.send(err);

                res.json({ success: true, message: 'Lens Updated!' });
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
    
    return router;
};