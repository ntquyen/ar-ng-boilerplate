angular.module('contactIntegration.apiInfo', ['ui.router', 'agencyLocation', 'agencyLocationProperty', 'amsTypeLogTypeMap', 'ngCookies', 'appConfig'])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    console.log('contactIntegration.apiInfo.config');
    $stateProvider.state('apiInfo', {
        url: '/apiInfo',
        views: {
            "main": {
                controller: 'ApiInfoCtrl',
                templateUrl: 'apiInfo/apiInfo.tpl.html'
            }
        },
        data: {
            pageTitle: 'Api Key Information'
        }
    });
})
/**
 * And of course we define a controller for our route.
 */
.controller('ApiInfoCtrl', function HomeController($scope, $state, $cookies, agencyLocationApi, agencyLocationPropertyApi, amsTypeLogTypeMapApi, appConfig) {
    console.log('contactIntegration.apiInfo.ApiInfoCtrl');
    // back to previous state
    $scope.goBack = function() {
        $state.transitionTo(appConfig && appConfig.fromState && appConfig.fromState.name && appConfig.fromState.name != 'apiInfo' ? appConfig.fromState.name : 'dashboard');
    };
    // return to previous state if no force to select another location
    if (appConfig.agencyLocation && !appConfig.selectAnotherAgencyLocation) {
        $scope.goBack();
        return;
    }
    $scope.loading = {};
    // load Integration Type
    $scope.loadIntegrationType = function() {
        var amsTypeLogTypeMap = $scope.getAmsTypeLogTypeMap($scope.agencyLocation.exportType);
        $scope.agencyLocation.integrationType = amsTypeLogTypeMap.integrationType;
    };
    // select a location and transition to previous state
    $scope.selectAgencyLocation = function() {
        if (!$scope.agencyLocation) {
            return;
        }
        $scope.loadIntegrationType();
        appConfig.agencyLocation = $scope.agencyLocation;
        appConfig.selectAnotherAgencyLocation = false;
        // store to cookie
        $cookies.agencyLocationId = $scope.agencyLocation.agencyLocationId;
        $cookies.exportType = $scope.agencyLocation.exportType;
        // back to previous state
        $scope.goBack();
    };
    // load the default ams type
    $scope.loadAmsType = function() {
        if (!$scope.agencyLocation.amsTypes) {
            return;
        }
        if (!appConfig.selectAnotherAgencyLocation) {
            // try to read from cookie and select automatically
            var exportType = $cookies.exportType;
            if (exportType) {
                $scope.agencyLocation.exportType = exportType;
                $scope.selectAgencyLocation();
                return;
            }
        }
        if ($scope.agencyLocation.amsTypes.length) {
            $scope.agencyLocation.exportType = $scope.agencyLocation.amsTypes[0];
            if ($scope.agencyLocation.amsTypes.length === 1 && !appConfig.selectAnotherAgencyLocation) {
                // select automatically if there is only one location
                $scope.selectAgencyLocation();
            }
        }
    };
    // load amsTypes for the current location & select the default
    $scope.loadAmsTypes = function() {
        if (!$scope.agencyLocation) {
            return;
        }
        // no need to reload if data is ready
        if ($scope.agencyLocation.amsTypes) {
            $scope.loadAmsType();
            return;
        }
        // get location properties for the current location
        $scope.loading.amsTypeLogTypeMap = true;
        agencyLocationPropertyApi.getAgencyLocationProperties($scope.agencyLocation.agencyLocationId).success(function(data) {
            $scope.agencyLocation.amsTypes = [];
            if (data && data.length) {
                for (var i = data.length - 1; i >= 0; i--) {
                    $scope.agencyLocation.amsTypes.push(data[i].propertyValue);
                }
                $scope.agencyLocation.saveAmsType = false;
            } else {
                $scope.agencyLocation.saveAmsType = true;
                for (var j = appConfig.amsTypeLogTypeMaps.length - 1; j >= 0; j--) {
                    $scope.agencyLocation.amsTypes.push(appConfig.amsTypeLogTypeMaps[j].asmType);
                }
            }
            $scope.loading.amsTypeLogTypeMap = false;
            $scope.loadAmsType();
        }).error(function(err) {
            $scope.error = err;
            console.log(err);
            $scope.loading.amsTypeLogTypeMap = false;
        });
    };
    // get AmsTypeLogTypeMap object
    $scope.getAmsTypeLogTypeMap = function(amsType) {
        for (var i = appConfig.amsTypes.length - 1; i >= 0; i--) {
            var amsTypeLogTypeMap = appConfig.amsTypes[i];
            if (amsTypeLogTypeMap.amsType === amsType) {
                return amsTypeLogTypeMap;
            }
        }
        return null;
    };
    // get agency location by id
    $scope.getAgencyLocationById = function(id) {
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
    // load default location
    $scope.loadAgencyLocation = function() {
        if (!$scope.agencyLocations) {
            return;
        }
        // try to read from cookie and select automatically
        var agencyLocationId = $cookies.agencyLocationId;
        if (agencyLocationId) {
            $scope.agencyLocation = $scope.getAgencyLocationById(agencyLocationId);
            if ($scope.agencyLocation) {
                $scope.loadAmsTypes();
                return;
            }
        }
        // select automatically if there is only one locations
        if ($scope.agencyLocations.length) {
            $scope.agencyLocation = $scope.agencyLocations[0];
            $scope.loadAmsTypes();
        }
    };
    // load locations
    $scope.loadAgencyLocations = function() {
        if (appConfig.agencyLocations) {
            // no need to reload if data is ready
            $scope.agencyLocations = appConfig.agencyLocations;
            $scope.loadAgencyLocation();
        } else {
            // load all locations  
            $scope.loading.agencyLocation = true;
            agencyLocationApi.getAgencyLocations().success(function(data) {
                $scope.agencyLocations = data;
                appConfig.agencyLocations = data;
                $scope.loading.agencyLocation = false;
                $scope.loadAgencyLocation();
            }).error(function(err) {
                $scope.loading.agencyLocation = false;
                $scope.error = err;
                console.log(err);
            });
        }
    };
    // change agency location
    $scope.changeAgencyLocation = function(agencyLocation) {
        $scope.agencyLocation = agencyLocation;
        $scope.loadAmsTypes();
    };
    // load all AmsTypeLogTypeMaps
    $scope.loadAmsTypeLogTypeMaps = function() {
        if (appConfig.amsTypes) {
            // no need to reload if data is ready
            $scope.amsTypes = appConfig.amsTypes;
        } else {
            // load all AmsTypeLogTypeMaps
            $scope.loading.amsTypeLogTypeMap = true;
            amsTypeLogTypeMapApi.get().success(function(data) {
                appConfig.amsTypes = data;
                $scope.loading.amsTypeLogTypeMap = false;
            }).error(function(err) {
                $scope.loading.amsTypeLogTypeMap = false;
                $scope.error = err;
                console.log(err);
            });
        }
    };
    // init
    $scope.loadAmsTypeLogTypeMaps();
    $scope.loadAgencyLocations();
});