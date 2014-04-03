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
angular.module('contactIntegration.fileUpload', ['ui.router', 'angularFileUpload', 'fileUpload'])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    console.log('contactIntegration.fileUpload.config()');
    $stateProvider.state('fileUpload', {
        url: '/fileUpload',
        views: {
            "main": {
                controller: 'FileUploadCtrl',
                templateUrl: 'fileUploads/fileUpload.tpl.html'
            }
        },
        data: {
            pageTitle: 'File Upload'
        }
    });
})
/**
 * And of course we define a controller for our route.
 */
.controller('FileUploadCtrl', ['$scope', '$state', '$upload', 'fileUploadApi',
    function($scope, $state, $upload, fileUploadApi) {
        console.log('contactIntegration.fileUpload.FileUploadCtrl');
        // back to previous state
        if (!App.agencyLocation) {
            $state.transitionTo('apiInfo');
            return;
        }
        // back to previous state
        $scope.goBack = function() {
            $state.transitionTo('dashboard');
        };
        $scope.goInstructions = function() {
            $state.transitionTo('dashboard');
        };
        $scope.agencyLocation = App.agencyLocation;
        $scope.step1 = {};
        $scope.step2 = {};
        $scope.importModel = {
            saveAmsType: App.agencyLocation.saveAmsType,
            agencyLocationId: App.agencyLocation.agencyLocationId,
            agencyLocationKey: App.agencyLocation.agencyLocationKey,
            fileType: App.agencyLocation.exportType
        };
        setTimeout(function() {
            $scope.goToStep1();
        }, 0);
        ///////////////////////////
        // step 1: upload file
        ///////////////////////////
        $scope.goToStep1 = function() {
            $scope.step = 1;
            $scope.onFileSelect = function($files) {
                //$files: an array of files selected, each file has name, size, and type.
                //for (var i = 0; i < $files.length; i++) {
                var file = $files[0];
                $scope.upload = $upload.upload({
                    url: '/desktopModules/AgencyRevContactIntegrations/api/FileUploads/Upload', //upload.php script, node.js route, or servlet url
                    method: 'POST',
                    data: {},
                    file: file
                }).progress(function(evt) {
                    $scope.step1.uploadPercent = parseInt(100.0 * evt.loaded / evt.total, 10);
                    console.log('percent: ' + $scope.step1.uploadPercent);
                }).success(function(data, status, headers, config) {
                    // file is uploaded successfully
                    console.log(data);
                    $scope.importModel.fileName = data.result.name;
                    $scope.goToStep2();
                }).error(function(err) {
                    $scope.step1.error = 'Sorry... an error has occurred!';
                    console.log(err);
                });
                //}
            };
        };
        ////////////////////////////////////////////
        // step 2: verify & import the export file
        ////////////////////////////////////////////
        $scope.goToStep2 = function() {
            $scope.step = 2;
        };
        // verify data
        $scope.import = function() {
            $scope.step2.processing = true;
            fileUploadApi.import($scope.importModel).success(function(data) {
                $scope.step2.processing = false;
                $scope.responseData = data;
            }).error(function(err) {
                $scope.step2.processing = false;
                $scope.step2.error = 'Sorry... Error occurred!';
                console.log(err);
            });
        };
    }
]);