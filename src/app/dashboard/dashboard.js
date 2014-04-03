/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('contactIntegration.dashboard', ['ui.router', 'status'])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    console.log('contactIntegration.dashboard.config()');
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        views: {
            "main": {
                controller: 'DashboardCtrl',
                templateUrl: 'dashboard/dashboard.tpl.html'
            }
        },
        data: {
            pageTitle: 'Dashboard'
        }
    });
})
/**
 * And of course we define a controller for our route.
 */
.controller('DashboardCtrl', function HomeController($scope, $state, statusApi) {
    console.log('contactIntegration.dashboard.DashboardCtrl');
    $scope.agencyLocation = App.agencyLocation;
    if (!App.agencyLocation) {
        $state.transitionTo('apiInfo');
        return;
    }
    if ($scope.agencyLocation) {
        $scope.informationMask = $scope.agencyLocation.agencyLocationDesc;
    }
    // change another location
    $scope.changeLocation = function() {
        App.selectAnotherAgencyLocation = true;
        App.agencyLocation = null;
        $state.transitionTo('apiInfo');
    };

    $scope.toggleInformation = function(){
        if ($scope.informationMask == $scope.agencyLocation.agencyLocationDesc) {
            $scope.informationMask = $scope.agencyLocation.agencyLocationKey;
        }
    };

    $scope.loadStatus = function() {
        $scope.loading = true;
        statusApi.getStatus(App.agencyLocation.agencyLocationKey).success(function(data) {
            $scope.status = data;
            App.status = $scope.status;
            $scope.loading = false;
        }).error(function(err) {
            console.log(err);
            $scope.error = err;
            $scope.loading = false;
        });
    };

    if(!App.status) {
        console.log($scope.status);
        $scope.loadStatus();
    } else {
        $scope.status = App.status;
    }

});