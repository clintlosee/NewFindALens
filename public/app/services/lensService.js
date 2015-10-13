angular.module('lensService', [])

.factory('Lens', function($http) {
    // create a new object
    var lensFactory = {};
    
    // get a single lens
    lensFactory.get = function(id) {
        return $http.get('/api/lens/' + id);
    };
    
    // get all lenses
    lensFactory.all = function() {
        return $http.get('/api/lens');
    };
    
    // create a lens
    lensFactory.create = function(lensData) {
        return $http.post('/api/lens/', lensData);
    };
    
    // update a lens
    lensFactory.update = function(id, lensData) {
        return $http.put('/api/lens/' + id, lensData)
    };
    
    // delete a lens
    lensFactory.delete = function(id) {
        return $http.delete('/api/lens/' + id);
    }
    
    // return the lensFactory object
    return lensFactory;
});