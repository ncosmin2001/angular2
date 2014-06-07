var mainServices = angular.module('mainServices', ['ngResource']);

mainServices.factory('mainServices', function($http, $rootScope, $cookies) {
    return {
        getCeva: function(id) {
            return $http.get('route....')
                .then(function(result) {
                    return result.data;
                });
        },
        tryLogin: function(credentials) {
            return $http.post('./php/controllers/user.php?action=login',credentials,{headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
                    .then(function(result){
                       return result.data;
                    });
        },

        userSession : {
            user :null,
            getUser:function(){
                return $cookies.user;                
            },
            setUser:function(user){
                this.user = user;
            }
        }
    };
});