angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
    
    // home page route
    .when('/', {
        templateUrl : 'app/views/pages/home.html'
    })

    .when('/lenses', {
        templateUrl : 'app/views/pages/lenses/all.html',
        controller : 'lensController',
        controllerAs : 'lens'
    })
    
    .when('/lenses/create', {
        templateUrl : 'app/views/pages/lenses/single.html',
        controller : 'lensCreateController',
        controllerAs : 'lens'
    })

    .when('/lenses/:lens_id', {
        templateUrl : 'app/views/pages/lenses/single.html',
        controller : 'lensEditController',
        controllerAs : 'lens'
    })
    
    .when('/canon', {
        templateUrl : 'app/views/pages/brands/canon.html'
    })
        
    .when('/nikon', {
        templateUrl : 'app/views/pages/brands/nikon.html'
    });
    
    $locationProvider.html5Mode(true);
});