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
    });
    
    $locationProvider.html5Mode(true);
});