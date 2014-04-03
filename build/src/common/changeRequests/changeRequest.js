angular.module('changeRequest', ['fakeApi']).factory('changeRequestApi', [
  '$http',
  'fakeApiService',
  function ($http, fakeApiService) {
    var baseUrl = '/desktopmodules/AgencyRevContactIntegrations/API/changeRequests';
    return {
      create: function (changeRequest) {
        if (!changeRequest.subject) {
          throw new Error('Subject is required');
        }
        return $http.post(baseUrl + '/Create', changeRequest);
      },
      getChangeRequests: function () {
        return fakeApiService.buildFakeResponse([]);
      }
    };
  }
]);