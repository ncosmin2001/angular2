var mainServices = angular.module('mainServices', ['ngResource']);

mainServices.factory('mainServices', function($http, $rootScope, $cookieStore) {
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
        updateUser: function(user){
            return $http.post('./php/controllers/user.php?action=updateUser',user,{headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
                    .then(function(result){
                       return result.data;                       
                    });
        },
        userSession : {
            user :null,
            getUser:function(){
                
                return $cookieStore.get("user");
            },
            setUser:function(user){
                this.user = user;
                $cookieStore.put("user", user);
            }
        },
        getSkills: function() {
            return $http.get('./php/controllers/skills.php?action=getSkills')
                .then(function(result){
                    return result.data;
                });
        }



    };
});