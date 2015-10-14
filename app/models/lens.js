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








//{
//    "brand": "Canon",
//    "model": "EF 16-35mm f/4L IS USM",
//    "id": "ef-16-35mm-f4l-is-usm",
//    "price": 1199.00,
//    "aperture": "f/4",
//    "focalRange": "16-35",
//    "filterSize": "77mm",
//    "mount": "Canon EF",
//    "stabilization": true,
//    "afmotor": "USM",
//    "zoomType": "Ring",
//    "frontElementRotate": false,
//    "tripodMount": false,
//    "color": "Black",
//    "manualFocus": true,
//    "lensElements": {
//        "numberOfLenses": "16",
//        "numberOfGroups": "12",
//        "diaphragmBlades": "9"
//    },
//    "sizeAndWeight": {
//        "length": "82.6mm",
//        "weight": "615gr"
//    },
//    "announced": "05-13-2014",
//    "images": [
//            "img/lenses/canon-16-35-4.jpg",
//            "img/lenses/canon-16-35-4-b.jpg"
//        ],
//    "description": "Canon has been instrumental in offering lightweight f/4 lenses for professional users, and this new ultra-wide angle zoom L-series model is the first from the maker to include stabilization.",
//    "uses": {
//        "useOne": "Landscape",
//        "useTwo": "Portrait",
//        "useThree": "Sports",
//        "useFour": "Wildlife",
//        "useFive": "Macro",
//        "useSix": "Wedding",
//        "useSeven": "Travel"
//    },
//    "rank": "1",
//    "bestUse": "Landscape",
//    "amazonLink": "http://www.amazon.com/gp/product/B00K8942SO/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00K8942SO&linkCode=as2&tag=clinlosephot-20&linkId=WME7FHHCTEKA6FOI"
//}



