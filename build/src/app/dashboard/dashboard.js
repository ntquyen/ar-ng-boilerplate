angular.module('contactIntegration.dashboard', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.dashboard.config()');
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      views: {
        'main': {
          controller: 'DashboardCtrl',
          templateUrl: 'dashboard/dashboard.tpl.html'
        }
      },
      data: { pageTitle: 'Dashboard' }
    });
  }
]).controller('DashboardCtrl', [
  '$scope',
  '$state',
  function HomeController($scope, $state) {
    console.log('contactIntegration.dashboard.DashboardCtrl');
    $scope.agencyLocation = App.agencyLocation;
    if (!App.agencyLocation) {
      $state.transitionTo('apiInfo');
    }
    if ($scope.agencyLocation) {
      $scope.informationMask = $scope.agencyLocation.agencyLocationDesc;
    }
    $scope.changeLocation = function () {
      App.selectAnotherAgencyLocation = true;
      App.agencyLocation = null;
      $state.transitionTo('apiInfo');
    };
    $scope.toggleInformation = function () {
      if ($scope.informationMask == $scope.agencyLocation.agencyLocationDesc) {
        $scope.informationMask = $scope.agencyLocation.agencyLocationKey;
      }
    };
  }
]);