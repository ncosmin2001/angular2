var mainServices = angular.module('mainServices', ['ngResource']);
var serverUrl = './laravel/public';
mainServices.factory('mainServices', function($http, $rootScope, $cookieStore) {
    return {
        tryLogin: function(credentials) {
            return $http.post(serverUrl+'/user/auth',credentials,{headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
                    .then(function(result){
                       return result.data;                       
                    });
        },
        updateUser: function(user){
            return $http.post(serverUrl+'/user/update',user,{headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
                    .then(function(result){
                       return result.data;                       
                    });
        },
        getSkills: function() {
            return $http.get(serverUrl+'/skill/all')
                .then(function(result){
                    return result.data;
                });
        },
        setSkillRelation: function(user_id,skill_id,skill_level){
            var data = { user_id:user_id, skill_id:skill_id, skill_level:skill_level};
            return $http.post(serverUrl+'/user/skill/add',data,{headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
                .then(function(result){
                   return result;                       
                });
        },

        getMySkills: function(userId) {
        return $http.get(serverUrl+'/user/skills/'+userId)
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
            },
            deleteUser:function()
            {
                $cookieStore.put("user", null);
            },
            checkLogin:function(location){
                if(!this.getUser())
                {
                    location.path("/login");
                }
            }
        },
        getUsers: function() {
            return $http.get(serverUrl+'/user/all')
                .then(function(result){
                    return result.data;
                });
        }

    };
});