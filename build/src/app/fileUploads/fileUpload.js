angular.module('contactIntegration.fileUpload', [
  'ui.router',
  'angularFileUpload',
  'fileUpload'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.fileUpload.config()');
    $stateProvider.state('fileUpload', {
      url: '/fileUpload',
      views: {
        'main': {
          controller: 'FileUploadCtrl',
          templateUrl: 'fileUploads/fileUpload.tpl.html'
        }
      },
      data: { pageTitle: 'File Upload' }
    });
  }
]).controller('FileUploadCtrl', [
  '$scope',
  '$state',
  '$upload',
  'fileUploadApi',
  function ($scope, $state, $upload, fileUploadApi) {
    console.log('contactIntegration.fileUpload.FileUploadCtrl');
    if (!App.agencyLocation) {
      $state.transitionTo('apiInfo');
      return;
    }
    $scope.goBack = function () {
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
    setTimeout(function () {
      $scope.goToStep1();
    }, 0);
    $scope.goToStep1 = function () {
      $scope.step = 1;
      $scope.onFileSelect = function ($files) {
        var file = $files[0];
        $scope.upload = $upload.upload({
          url: '/desktopModules/AgencyRevContactIntegrations/api/FileUploads/Upload',
          method: 'POST',
          data: {},
          file: file
        }).progress(function (evt) {
          $scope.step1.uploadPercent = parseInt(100 * evt.loaded / evt.total, 10);
          console.log('percent: ' + $scope.step1.uploadPercent);
        }).success(function (data, status, headers, config) {
          console.log(data);
          $scope.importModel.fileName = data.result.name;
          $scope.goToStep2();
        }).error(function (err) {
          $scope.step1.error = 'Sorry... an error has occurred!';
          console.log(err);
        });
      };
    };
    $scope.goToStep2 = function () {
      $scope.step = 2;
    };
    $scope.import = function () {
      $scope.step2.processing = true;
      fileUploadApi.import($scope.importModel).success(function (data) {
        $scope.step2.processing = false;
        $scope.responseData = data;
      }).error(function (err) {
        $scope.step2.processing = false;
        $scope.step2.error = 'Sorry... Error occurred!';
        console.log(err);
      });
    };
  }
]);