angular.module('lensCtrl', ['lensService'])

.controller('lensController', function(Lens) {
    var vm = this;
    
    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });

    // function to delete a lens
    vm.deleteLens = function(id) {
        vm.processing = true;

        // accept the lens id as a parameter
        Lens.delete(id)
            .success(function(data) {
            // get all the lenses to update the table
            // api can be set up to return list of lenses with delete call
            Lens.all()
                .success(function(data) {
                vm.processing = false;
                vm.lenses = data;
            });
        });
    };
})

.controller('lensCreateController', function(Lens) {
    var vm = this;

    // variable to show/hide elements in view
    // differentieates between create and edit pages
    vm.type = 'create';
    
    // function to create a lens
    vm.saveLens = function() {
        vm.processing = true;
        
        Lens.create(vm.lensData)
        .success(function(data) {
            vm.processing = false;

            // clear the form
            vm.lensData = {};
            vm.message = data.message;
        });
    }
})

// controller applied to lens edit page
.controller('lensEditController', function($stateParams, $timeout, $location, Lens) {
    var vm = this;

    // variable to hide/show elements in the view
    // differentiates between create or edit pages
    vm.type = 'edit';
    
    // Get the lens data for the lens you want to edit
    // $routeParams to grab the data from the URL
    Lens.get($stateParams.lensId)
        .success(function(data) {
        vm.lensData = data;
    });
    
    // function to save the lens
    vm.saveLens = function() {
        vm.processing = true;
        vm.message = '';
        
        // call the lensService function to Update
        Lens.update($stateParams.lensId, vm.lensData)
        .success(function(data) {
            vm.processing = false;
            
            // clear the form
            vm.lensData = {};
            
            // bind the message from the API to vm.message
            vm.message = data.message;
            
            if (data.success) {
                // if a lens successfully updates, redirect to lenses page
                $timeout(function() {
                    $location.path('/lenses-admin');
                }, 2000);
            } 
        });
    };
    
    // clear the image path on the form
    $('#clearImages').on('click', function() {
        vm.lensData.images = '';
        $('#imageLinks input').val('');
    });
})

// controller applied to lens view page
.controller('lensViewController', function($stateParams, Lens) {
    var vm = this;

    vm.type = 'individual';
    
    // Get the lens data for the lens you want to edit
    // $routeParams to grab the data from the URL
    Lens.get($stateParams.lensId)
        .success(function(data) {
        vm.lensData = data;
    });
})

// CANON LENS CONTROLLERS
.controller('canonLandscapeLensController', function(Lens) {
    var vm = this;
    
    vm.type = 'landscape';
    vm.brand = 'canon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;
    
    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('canonPortraitLensController', function(Lens) {
    var vm = this;

    vm.type = 'portrait';
    vm.brand = 'canon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('canonSportsLensController', function(Lens) {
    var vm = this;

    vm.type = 'sports';
    vm.brand = 'canon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('canonWildlifeLensController', function(Lens) {
    var vm = this;

    vm.type = 'wildlife';
    vm.brand = 'canon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('canonMacroLensController', function(Lens) {
    var vm = this;

    vm.type = 'macro';
    vm.brand = 'canon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('canonTravelLensController', function(Lens) {
    var vm = this;

    vm.type = 'travel';
    vm.brand = 'canon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

// NIKON LENS CONTROLLERS
.controller('nikonLandscapeLensController', function(Lens) {
    var vm = this;

    vm.type = 'landscape';
    vm.brand = 'nikon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('nikonPortraitLensController', function(Lens) {
    var vm = this;

    vm.type = 'portrait';
    vm.brand = 'nikon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('nikonSportsLensController', function(Lens) {
    var vm = this;

    vm.type = 'sports';
    vm.brand = 'nikon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('nikonWildlifeLensController', function(Lens) {
    var vm = this;

    vm.type = 'wildlife';
    vm.brand = 'nikon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('nikonMacroLensController', function(Lens) {
    var vm = this;

    vm.type = 'macro';
    vm.brand = 'nikon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
})

.controller('nikonTravelLensController', function(Lens) {
    var vm = this;

    vm.type = 'travel';
    vm.brand = 'nikon';
    vm.orderProp = 'rank';
    vm.numLimit = 6;

    // set a processing variable to show loading things
    vm.processing = true;

    // grab all the lenses at page load
    Lens.all()
        .success(function(data) {
        // when all the lenses come back, remove the processing variable
        vm.processing = false;

        // bind the lenses that come back to vm.lenses
        vm.lenses = data;
    });
});

