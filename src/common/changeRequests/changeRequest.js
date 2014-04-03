angular.module('changeRequest', ['fakeApi']).factory('changeRequestApi', ['$http', 'fakeApiService',
    function($http, fakeApiService) {
        var baseUrl = '/desktopmodules/AgencyRevContactIntegrations/API/changeRequests';
        return {
            // create ZenDesk changeRequest
            create: function(changeRequest) {
                if (!changeRequest.subject) {
                    throw new Error('Subject is required');
                }
                return $http.post(baseUrl + '/Create', changeRequest);
            },
            // get all ZenDesk change requests raised by this user
            getChangeRequests: function() {
                return fakeApiService.buildFakeResponse([]);
                /*
                return $http.get(baseUrl + '/GetChangeRequests');
                */
            }
        };
    }
]);