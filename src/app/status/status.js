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
angular.module('contactIntegration.status', ['ui.router', 'status', 'appConfig'])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    console.log('contactIntegration.status.config()');
    $stateProvider.state('status', {
        url: '/status',
        views: {
            "main": {
                controller: 'StatusCtrl',
                templateUrl: 'status/status.tpl.html'
            }
        },
        data: {
            pageTitle: 'Status'
        }
    });
})
/**
 * And of course we define a controller for our route.
 */
.controller('StatusCtrl', function($scope, $state, statusApi, appConfig) {
    console.log('contactIntegration.status.StatusCtrl');
    // back to previous state
    if (!appConfig.agencyLocation) {
        $state.transitionTo('apiInfo');
        return;
    }
    // back to previous state
    $scope.goBack = function() {
        $state.transitionTo('dashboard');
    };
    // load status
    $scope.loadStatus = function() {
        $scope.loading = true;
        statusApi.getStatus(appConfig.agencyLocation.agencyLocationKey).success(function(data) {
            $scope.status = data;
            $scope.loading = false;
        }).error(function(err) {
            console.log(err);
            $scope.error = err;
            $scope.loading = false;
        });
        // load every 5 seconds
        //setTimeout(function() {
        //    $scope.loadStatus();
        //}, 5000);
    };
    if (App && appConfig.agencyLocation && appConfig.agencyLocation.agencyLocationKey) {
        $scope.loadStatus();
    }
});