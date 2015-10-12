// grab the packages that we need for the lens model
var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

// lens schema
var LensSchema = new Schema({
    lensName:   { type: String, required: true },
    model:      { type: String, required: true, index: { unique: true }},
    price:      { type: Number, required: true }
});

// return the model
module.exports = mongoose.model('Lens', LensSchema);