angular.module('contactIntegration.apiInfo', [
  'ui.router',
  'agencyLocation',
  'agencyLocationProperty',
  'amsTypeLogTypeMap',
  'ngCookies'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.apiInfo.config');
    $stateProvider.state('apiInfo', {
      url: '/apiInfo',
      views: {
        'main': {
          controller: 'ApiInfoCtrl',
          templateUrl: 'apiInfo/apiInfo.tpl.html'
        }
      },
      data: { pageTitle: 'Api Key Information' }
    });
  }
]).controller('ApiInfoCtrl', [
  '$scope',
  '$state',
  '$cookies',
  'agencyLocationApi',
  'agencyLocationPropertyApi',
  'amsTypeLogTypeMapApi',
  function HomeController($scope, $state, $cookies, agencyLocationApi, agencyLocationPropertyApi, amsTypeLogTypeMapApi) {
    console.log('contactIntegration.apiInfo.ApiInfoCtrl');
    $scope.goBack = function () {
      $state.transitionTo(App && App.fromState && App.fromState.name && App.fromState.name != 'apiInfo' ? App.fromState.name : 'dashboard');
    };
    if (App.agencyLocation && !App.selectAnotherAgencyLocation) {
      $scope.goBack();
      return;
    }
    $scope.loading = {};
    $scope.loadIntegrationType = function () {
      var amsTypeLogTypeMap = $scope.getAmsTypeLogTypeMap($scope.agencyLocation.exportType);
      $scope.agencyLocation.integrationType = amsTypeLogTypeMap.integrationType;
    };
    $scope.selectAgencyLocation = function () {
      if (!$scope.agencyLocation) {
        return;
      }
      $scope.loadIntegrationType();
      App.agencyLocation = $scope.agencyLocation;
      App.selectAnotherAgencyLocation = false;
      $cookies.agencyLocationId = $scope.agencyLocation.agencyLocationId;
      $cookies.exportType = $scope.agencyLocation.exportType;
      $scope.goBack();
    };
    $scope.loadAmsType = function () {
      if (!$scope.agencyLocation.amsTypes) {
        return;
      }
      if (!App.selectAnotherAgencyLocation) {
        var exportType = $cookies.exportType;
        if (exportType) {
          $scope.agencyLocation.exportType = exportType;
          $scope.selectAgencyLocation();
          return;
        }
      }
      if ($scope.agencyLocation.amsTypes.length) {
        $scope.agencyLocation.exportType = $scope.agencyLocation.amsTypes[0];
        if ($scope.agencyLocation.amsTypes.length === 1 && !App.selectAnotherAgencyLocation) {
          $scope.selectAgencyLocation();
        }
      }
    };
    $scope.loadAmsTypes = function () {
      if (!$scope.agencyLocation) {
        return;
      }
      if ($scope.agencyLocation.amsTypes) {
        $scope.loadAmsType();
        return;
      }
      $scope.loading.amsTypeLogTypeMap = true;
      agencyLocationPropertyApi.getAgencyLocationProperties($scope.agencyLocation.agencyLocationId).success(function (data) {
        $scope.agencyLocation.amsTypes = [];
        if (data && data.length) {
          for (var i = data.length - 1; i >= 0; i--) {
            $scope.agencyLocation.amsTypes.push(data[i].propertyValue);
          }
          $scope.agencyLocation.saveAmsType = false;
        } else {
          $scope.agencyLocation.saveAmsType = true;
          for (var j = App.amsTypeLogTypeMaps.length - 1; j >= 0; j--) {
            $scope.agencyLocation.amsTypes.push(App.amsTypeLogTypeMaps[j].asmType);
          }
        }
        $scope.loading.amsTypeLogTypeMap = false;
        $scope.loadAmsType();
      }).error(function (err) {
        $scope.error = err;
        console.log(err);
        $scope.loading.amsTypeLogTypeMap = false;
      });
    };
    $scope.getAmsTypeLogTypeMap = function (amsType) {
      for (var i = App.amsTypes.length - 1; i >= 0; i--) {
        var amsTypeLogTypeMap = App.amsTypes[i];
        if (amsTypeLogTypeMap.amsType === amsType) {
          return amsTypeLogTypeMap;
        }
      }
      return null;
    };
    $scope.getAgencyLocationById = function (id) {
      if (!$scope.agencyLocations) {
        return;
      }
      for (var i = $scope.agencyLocations.length - 1; i >= 0; i--) {
        if ($scope.agencyLocations[i].agencyLocationId == id) {
          return $scope.agencyLocations[i];
        }
      }
      return null;
    };
    $scope.loadAgencyLocation = function () {
      if (!$scope.agencyLocations) {
        return;
      }
      var agencyLocationId = $cookies.agencyLocationId;
      if (agencyLocationId) {
        $scope.agencyLocation = $scope.getAgencyLocationById(agencyLocationId);
        if ($scope.agencyLocation) {
          $scope.loadAmsTypes();
          return;
        }
      }
      if ($scope.agencyLocations.length) {
        $scope.agencyLocation = $scope.agencyLocations[0];
        $scope.loadAmsTypes();
      }
    };
    $scope.loadAgencyLocations = function () {
      if (App.agencyLocations) {
        $scope.agencyLocations = App.agencyLocations;
        $scope.loadAgencyLocation();
      } else {
        $scope.loading.agencyLocation = true;
        agencyLocationApi.getAgencyLocations().success(function (data) {
          $scope.agencyLocations = data;
          App.agencyLocations = data;
          $scope.loading.agencyLocation = false;
          $scope.loadAgencyLocation();
        }).error(function (err) {
          $scope.loading.agencyLocation = false;
          $scope.error = err;
          console.log(err);
        });
      }
    };
    $scope.changeAgencyLocation = function (agencyLocation) {
      $scope.agencyLocation = agencyLocation;
      $scope.loadAmsTypes();
    };
    $scope.loadAmsTypeLogTypeMaps = function () {
      if (App.amsTypes) {
        $scope.amsTypes = App.amsTypes;
      } else {
        $scope.loading.amsTypeLogTypeMap = true;
        amsTypeLogTypeMapApi.get().success(function (data) {
          App.amsTypes = data;
          $scope.loading.amsTypeLogTypeMap = false;
        }).error(function (err) {
          $scope.loading.amsTypeLogTypeMap = false;
          $scope.error = err;
          console.log(err);
        });
      }
    };
    $scope.loadAmsTypeLogTypeMaps();
    $scope.loadAgencyLocations();
  }
]);