angular.module('amsTypeLogTypeMap', ['fakeApi']).factory('amsTypeLogTypeMapApi', ['$http', 'fakeApiService',
    function($http, fakeApiService) {
        return {
            // get all AMS Types
            get: function() {
                return fakeApiService.buildFakeResponse([{
                    "messageLogTypeId": 6,
                    "amsType": "HawkSoft",
                    "integrationType": "RemoteApp"
                }, {
                    "messageLogTypeId": 6,
                    "amsType": "HawkSoftDesktop",
                    "integrationType": "RemoteApp"
                }, {
                    "messageLogTypeId": 8,
                    "amsType": "AMS360",
                    "integrationType": "API"
                }, {
                    "messageLogTypeId": 10,
                    "amsType": "TAM",
                    "integrationType": "FileUpload"
                }, {
                    "messageLogTypeId": 15,
                    "amsType": "Vision",
                    "integrationType": "RemoteApp"
                }, {
                    "messageLogTypeId": 4,
                    "amsType": "PowerBroker",
                    "integrationType": "RemoteApp"
                }, {
                    "messageLogTypeId": 13,
                    "amsType": "InStar",
                    "integrationType": "RemoteApp"
                }, {
                    "messageLogTypeId": 32,
                    "amsType": "Xanatek",
                    "integrationType": "FileUpload"
                }, {
                    "messageLogTypeId": 29,
                    "amsType": "Eclipse",
                    "integrationType": "FileUpload"
                }, {
                    "messageLogTypeId": 26,
                    "amsType": "DORIS",
                    "integrationType": "FileUpload"
                }, {
                    "messageLogTypeId": 35,
                    "amsType": "FSC",
                    "integrationType": "FileUpload"
                }, {
                    "messageLogTypeId": 38,
                    "amsType": "PartnerXE",
                    "integrationType": "FileUpload"
                }, {
                    "messageLogTypeId": 42,
                    "amsType": "QQCatalyst",
                    "integrationType": "API"
                }, {
                    "messageLogTypeId": 45,
                    "amsType": "EbixASP",
                    "integrationType": "FileUpload"
                }, {
                    "messageLogTypeId": 48,
                    "amsType": "Epic",
                    "integrationType": "FileUpload"
                }]);
                /*
                return $http.get('/desktopmodules/AgencyRevContactIntegrations/API/AmsTypeLogTypeMaps/GetAll');
                */
            }
        };
    }
]);