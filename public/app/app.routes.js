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
    
    // canon sports lens route
    .state('canonSports', {
        url: '/canon-sports',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'canonSportsLensController',
        controllerAs: 'lens'
    })
    
    // canon wildlife lens route
    .state('canonWildlife', {
        url: '/canon-wildlife',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'canonWildlifeLensController',
        controllerAs: 'lens'
    })
    
    // canon macro lens route
    .state('canonMacro', {
        url: '/canon-macro',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'canonMacroLensController',
        controllerAs: 'lens'
    })
    
    // canon travel lens route
    .state('canonTravel', {
        url: '/canon-travel',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'canonTravelLensController',
        controllerAs: 'lens'
    })
    
    // nikon landscape lens route
    .state('nikonLandscape', {
        url: '/nikon-landscape',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'nikonLandscapeLensController',
        controllerAs: 'lens'
    })
    
    // nikon portrait lens route
    .state('nikonPortrait', {
        url: '/nikon-portrait',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'nikonPortraitLensController',
        controllerAs: 'lens'
    })

    // nikon sports lens route
    .state('nikonSports', {
        url: '/nikon-sports',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'nikonSportsLensController',
        controllerAs: 'lens'
    })

    // nikon wildlife lens route
    .state('nikonWildlife', {
        url: '/nikon-wildlife',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'nikonWildlifeLensController',
        controllerAs: 'lens'
    })

    // nikon macro lens route
    .state('nikonMacro', {
        url: '/nikon-macro',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'nikonMacroLensController',
        controllerAs: 'lens'
    })

    // nikon travel lens route
    .state('nikonTravel', {
        url: '/nikon-travel',
        templateUrl: 'app/views/pages/brands/types/lens-type.html',
        controller: 'nikonTravelLensController',
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