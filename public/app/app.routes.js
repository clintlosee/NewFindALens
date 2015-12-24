angular.module('app.routes', ['ui.router'])

    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    
    // home page route
    .state('home', {
        url: '/',
        templateUrl: 'app/views/pages/home.html'
    })
    
    // view lenses admin route
    .state('lenses-admin', {
        url: '/lenses-admin',
        templateUrl: 'app/views/pages/lenses/all.html',
        controller: 'lensController',
        controllerAs: 'lens'
    })
    
    // admin create a lens route
    .state('lensCreate', {
        url: '/lenses-admin/create',
        templateUrl: 'app/views/pages/lenses/single.html',
        controller: 'lensCreateController',
        controllerAs: 'lens'
    })
    
    // edit a lens route
    .state('lensEdit', {
        url: '/lenses-admin/edit/{lensId}',
        templateUrl: 'app/views/pages/lenses/single.html',
        controller: 'lensEditController',
        controllerAs: 'lens'
    })
    
    // main canon page route
    .state('canon', {
        url: '/canon',
        templateUrl: 'app/views/pages/brands/canon.html'
    })
    
    // main nikon page route
    .state('nikon', {
        url: '/nikon',
        templateUrl: 'app/views/pages/brands/nikon.html'
    })
    
    // canon landscape lens route
    .state('canonLandscape', {
        url: '/canon-landscape',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'canonLandscapeLensController',
        controllerAs: 'lens'
    })
    
    // canon portrait lens route
    .state('canonPortrait', {
        url: '/canon-portrait',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'canonPortraitLensController',
        controllerAs: 'lens'
    })
    
    // nikon landscape lens route
    .state('nikonLandscape', {
        url: '/nikon-landscape',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'nikonLandscapeLensController',
        controllerAs: 'lens'
    })
    
    .state('lensView', {
        url: '/lens/{lensId}',
        templateUrl: 'app/views/pages/lenses/lens-view.html',
        controller: 'lensViewController',
        controllerAs: 'lens'
    });

    $locationProvider.html5Mode(true);
});