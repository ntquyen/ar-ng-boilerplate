angular.module('fileUpload', []).factory('fileUploadApi', [
  '$http',
  function ($http) {
    var config = { baseUrl: '/desktopmodules/AgencyRevContactIntegrations/API/FileUploads' };
    return {
      verify: function (data) {
        return $http.post(config.baseUrl + '/Verify', data);
      },
      import: function (data) {
        return $http.post(config.baseUrl + '/Import', data);
      }
    };
  }
]);