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
            
            // set the lens information (comes from request)
            lens.lensName = req.body.lensName;
            lens.model = req.body.model;
            lens.price = req.body.price;

            lens.save(function(err) {
                if (err) {
                    if (err.code == 11000)
                        return res.json({ success: false, message: 'A lens with that model already exists.'});
                } else {
                    return res.send(err);
                }

                res.json({ message: 'Lens Created!'});
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
    
    return router;
};