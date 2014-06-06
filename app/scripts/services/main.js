
var mainServices = angular.module('mainServices', ['ngResource']);

mainServices.factory('mainServices', function($http, $rootScope) {
    return {
        getCeva: function(id) {
            return $http.get('route....')
                .then(function(result) {
                    return result.data;
                });
        }
    }
});