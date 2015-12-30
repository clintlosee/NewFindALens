module.exports = {
    'port': process.env.PORT || 8000,
    'dbLocal': 'mongodb://localhost/lenses', // enter the local db name
//    'dbRemote': 'mongodb://', // enter the mongolab db path with db username and password
    'dbRemote': 'mongodb://clintlosee:findalens1234@ds035004.mongolab.com:35004/findalens', // enter the mongolab db path with db username and password
};