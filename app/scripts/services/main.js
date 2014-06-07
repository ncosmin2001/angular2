var mainServices = angular.module('mainServices', ['ngResource']);

mainServices.factory('mainServices', function($http, $rootScope, $cookieStore) {
    return {
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
        getSkills: function() {
            return $http.get('./php/controllers/skills.php?action=getSkills')
                .then(function(result){
                    return result.data;
                });
        },
        setSkillRelation: function(user_id,skill_id,skill_level){
            var data = { user_id:user_id, skill_id:skill_id, level:skill_level};
            return $http.post('php/controllers/skills.php?action=addSkill',data,{headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
                .then(function(result){
                   return result;                       
                });
        },

            getMySkills: function(userId) {
            return $http.get('./php/controllers/skills.php?action=getUserSkills&user_id='+userId)
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
        getUsers: function() {
            return $http.get('./php/controllers/user.php?action=getAll')
                .then(function(result){
                    return result.data;
                });
        }

    };
});