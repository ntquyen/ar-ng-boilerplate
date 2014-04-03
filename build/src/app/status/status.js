angular.module('contactIntegration.status', [
  'ui.router',
  'status'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.status.config()');
    $stateProvider.state('status', {
      url: '/status',
      views: {
        'main': {
          controller: 'StatusCtrl',
          templateUrl: 'status/status.tpl.html'
        }
      },
      data: { pageTitle: 'Status' }
    });
  }
]).controller('StatusCtrl', [
  '$scope',
  '$state',
  'statusApi',
  function ($scope, $state, statusApi) {
    console.log('contactIntegration.status.StatusCtrl');
    if (!App.agencyLocation) {
      $state.transitionTo('apiInfo');
      return;
    }
    $scope.goBack = function () {
      $state.transitionTo('dashboard');
    };
    $scope.loadStatus = function () {
      $scope.loading = true;
      statusApi.getStatus(App.agencyLocation.agencyLocationKey).success(function (data) {
        $scope.status = data;
        $scope.loading = false;
      }).error(function (err) {
        console.log(err);
        $scope.error = err;
        $scope.loading = false;
      });
    };
    if (App && App.agencyLocation && App.agencyLocation.agencyLocationKey) {
      $scope.loadStatus();
    }
  }
]);