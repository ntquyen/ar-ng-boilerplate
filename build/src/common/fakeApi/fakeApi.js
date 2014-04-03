angular.module('fakeApi', []).factory('fakeApiService', [
  '$http',
  '$q',
  function ($http, $q) {
    return {
      buildFakeResponse: function (responseData) {
        var promise = $q.defer();
        promise.success = function (fn) {
          var response = { data: responseData };
          var config = {};
          fn(response.data, response.status, response.headers, config);
          return promise;
        };
        promise.error = function (fn) {
          promise.reject(null, function (response) {
            fn(response.data, response.status, response.headers, config);
          });
          return promise;
        };
        return promise;
      }
    };
  }
]);