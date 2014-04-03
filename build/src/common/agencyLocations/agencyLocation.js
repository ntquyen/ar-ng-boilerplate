angular.module('agencyLocation', ['fakeApi']).factory('agencyLocationApi', [
  '$http',
  'fakeApiService',
  function ($http, fakeApiService) {
    return {
      getAgencyLocations: function () {
        return fakeApiService.buildFakeResponse([
          {
            'agencyLocationId': 12,
            'agencyLocationDesc': 'McClain - HawkSoft - Everett',
            'agencyLocationKey': 'c5d4fbc2-fa8a-11de-b4f2-53ca56d89593',
            'dateCreated': '2010-03-25T15:40:23',
            'dateModified': '2013-06-21T16:46:10.6',
            'portalId': 0,
            'moduleId': 1460,
            'triggerPointsEnabled': true,
            'enabled': true
          },
          {
            'agencyLocationId': 42,
            'agencyLocationDesc': 'Test Location 2',
            'agencyLocationKey': 'a92c6262-17e0-4890-8e0e-926a068323b1',
            'dateCreated': '2010-10-22T16:35:27.4',
            'dateModified': '2013-03-04T20:08:51.357',
            'portalId': 0,
            'moduleId': 1460,
            'triggerPointsEnabled': false,
            'enabled': true
          }
        ]);
      }
    };
  }
]);