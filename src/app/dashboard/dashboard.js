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
angular.module('contactIntegration.dashboard', ['ui.router', 'status', 'appConfig', 'moonrayLight', 'underscore'])
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
.controller('DashboardCtrl', function HomeController($scope, $state, statusApi, appConfig, _) {
    console.log('contactIntegration.dashboard.DashboardCtrl');
    $scope.agencyLocation = appConfig.agencyLocation;
    if (!appConfig.agencyLocation) {
        $state.transitionTo('apiInfo');
        return;
    }
    if ($scope.agencyLocation) {
        $scope.informationMask = $scope.agencyLocation.agencyLocationDesc;
    }
    // change another location
    $scope.changeLocation = function() {
        appConfig.selectAnotherAgencyLocation = true;
        appConfig.agencyLocation = null;
        $state.transitionTo('apiInfo');
    };
    $scope.toggleInformation = function() {
        if ($scope.informationMask == $scope.agencyLocation.agencyLocationDesc) {
            $scope.informationMask = $scope.agencyLocation.agencyLocationKey;
        }
    };
    // load status
    $scope.loadStatus = function() {
        $scope.loading = true;
        statusApi.getStatus(appConfig.agencyLocation.agencyLocationKey).success(function(data) {
            data.lastSyncActivityDays = dateDiffInDays(Date.now(), data.lastSyncActivity);
            //data.lastSyncActivityDays = 10;
            $scope.status = data;
            appConfig.status = $scope.status;
            $scope.loading = false;
        }).error(function(err) {
            console.log(err);
            $scope.error = err;
            $scope.loading = false;
        });
    };
    if (!appConfig.status) {
        console.log($scope.status);
        $scope.loadStatus();
    } else {
        $scope.status = appConfig.status;
    }

    // a and b are javascript Date objects
    function dateDiffInDays(a, b) {
      // Discard the time and time-zone information.
      if (_.isDate(a) && _.isDate(b)) {
          var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
          var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
          return Math.floor((utc2 - utc1) / 1000 * 60 * 60 * 24);
      } else {
          return null;
      }
      
    }
});