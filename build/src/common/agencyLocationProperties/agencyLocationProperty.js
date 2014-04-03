angular.module('agencyLocationProperty', ['fakeApi']).factory('agencyLocationPropertyApi', [
  '$http',
  'fakeApiService',
  function ($http, fakeApiService) {
    return {
      getAgencyLocationProperties: function (agencyLocationId) {
        return fakeApiService.buildFakeResponse([
          {
            'agencyLocationPropertyId': 501,
            'propertyName': 'AMSType',
            'propertyValue': 'HawkSoft',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 502,
            'propertyName': 'AMSType',
            'propertyValue': 'HawkSoftDesktop',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 503,
            'propertyName': 'AMSType',
            'propertyValue': 'AMS360',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 504,
            'propertyName': 'AMSType',
            'propertyValue': 'TAM',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 505,
            'propertyName': 'AMSType',
            'propertyValue': 'Vision',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 506,
            'propertyName': 'AMSType',
            'propertyValue': 'PowerBroker',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 507,
            'propertyName': 'AMSType',
            'propertyValue': 'InStar',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 508,
            'propertyName': 'AMSType',
            'propertyValue': 'Xanatek',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 509,
            'propertyName': 'AMSType',
            'propertyValue': 'Eclipse',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 510,
            'propertyName': 'AMSType',
            'propertyValue': 'DORIS',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 511,
            'propertyName': 'AMSType',
            'propertyValue': 'FSC',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 512,
            'propertyName': 'AMSType',
            'propertyValue': 'PartnerXE',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 513,
            'propertyName': 'AMSType',
            'propertyValue': 'QQCatalyst',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 514,
            'propertyName': 'AMSType',
            'propertyValue': 'EbixASP',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          },
          {
            'agencyLocationPropertyId': 515,
            'propertyName': 'AMSType',
            'propertyValue': 'Epic',
            'propertyDescription': '',
            'dateCreated': '2014-02-24T19:27:30.86',
            'dateModified': '2014-02-24T19:27:30.86',
            'portalId': 42
          }
        ]);
      }
    };
  }
]);