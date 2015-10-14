angular.module('lensCtrl', ['lensService'])

.controller('lensController', function(Lens) {
    var vm = this;
    
    vm.message = "This is working";

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
.controller('lensEditController', function($routeParams, Lens) {
    var vm = this;

    // variable to hide/show elements in the view
    // differentiates between create or edit pages
    vm.type = 'edit';
    
    // Get the lens data for the lens you want to edit
    // $routeParams to grab the data from the URL
    Lens.get($routeParams.lens_id)
        .success(function(data) {
        vm.lensData = data;
    });
    
    // function to save the lens
    vm.saveLens = function() {
        vm.processing = true;
        vm.message = '';
        
        // call the lensService function to Update
        Lens.update($routeParams.lens_id, vm.lensData)
        .success(function(data) {
            vm.processing = false;
            
            // clear the form
            vm.lensData = {};
            
            // bind the message from the API to vm.message
            vm.message = data.message;
        });
    };
});

