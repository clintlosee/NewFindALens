// grab the packages that we need for the lens model
var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

// lens schema
var LensSchema = new Schema({
    brand:          { type: String, default: '' },
    lensName:       { type: String, required: true },
    model:          { type: String, required: true, index: { unique: true }},
    price:          { type: Number, default: 0 },
    aperture:       { type: String, default: '' },
    focalRange:     { type: String, default: '' },
    filterSize:     { type: String, default: '' },
    mount:          { type: String, default: '' },
    stabilization:  { type: Boolean, default: false },
    afmotor:        { type: String, default: '' },
    zoomType:       { type: String, default: '' },
    frontElementRotates:  { type: Boolean, default: false },
    tripodMount:    { type: Boolean, default: false },
    color:          { type: String, default: '' },
    manualFocus:    { type: Boolean, default: false },
    numberOfLenses: { type: Number, default: 0 }, 
    numberOfGroups: { type: Number, default: 0 }, 
    diaphragmBlades:{ type: Number, default: 0 },
    length:         { type: String, default: '' },
    weight:         { type: String, default: '' },
    announced:      { type: String, default: '' },
    description:    { type: String, default: '' },
    useOne:         { type: String, default: '' },
    useTwo:         { type: String, default: '' },
    useThree:       { type: String, default: '' },
    useFour:        { type: String, default: '' },
    useFive:        { type: String, default: '' },
    useSix:         { type: String, default: '' },
    useSeven:       { type: String, default: '' },
    rank:           { type: Number, default: 0 },
    bestUse:        { type: String, default: '' },
    amazonLink:     { type: String, default: '' },
    bandhLink:      { type: String, default: '' },
    images:         [ { type: String } ]
});

LensSchema.pre('save', function(next) {
    this.images = 'assets/img/lenses/' + this.images;
    next();
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
//            "assets/img/lenses/canon-16-35-4.jpg",
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


//{
//"brand": "Nikon",
//"model": "Nikkor 18-55mm f/3.5-5.6 ED II AF-S DX",
//"id": "nikkor-18-55mm-f3_5-5_6-ed-ii-afs-dx",
//"price": 119.95,
//"aperture": "f/3.5-5.6",
//"focalRange": "18-55",
//"filterSize": "",
//"mount": "DX",
//"stabilization": true,
//"afmotor": "",
//"zoomType": "",
//"frontElementRotate": false,
//"tripodMount": false,
//"color": "Black",
//"manualFocus": true,
//"lensElements": {
//"numberOfLenses": "",
//"numberOfGroups": "",
//"diaphragmBlades": ""
//},
//"sizeAndWeight": {
//"length": "",
//"weight": ""
//},
//"announced": "",
//"images": [
//"img/lenses/nikon-18-55.jpg",
//"img/lenses/nikon-18-55.jpg"
//],
//"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.",
//"uses": {
//"useOne": "Landscape",
//"useTwo": "Portrait",
//"useThree": "Sports",
//"useFour": "Wildlife",
//"useFive": "Macro",
//"useSix": "Wedding",
//"useSeven": "Travel"
//},
//"rank": "4",
//"bestUse": "Landscape",
//"amazonLink": ""
//}



