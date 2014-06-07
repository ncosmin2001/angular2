'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workshopApp
 */

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('LoginCtrl' , ['$scope','$routeParams', 'mainServices','$location',
    function($scope, $routeParams, mainServices, $location){
        $scope.credentials = {
            user_name: '',
            user_password: ''
        };

        $scope.login = function(credentials){
            mainServices.tryLogin(credentials).then(function(user){
                mainServices.userSession.setUser(user);               
            });
            $location.path("/");
        };        
    }]);

mainControllers.controller('MainCtrl' , ['$scope','$routeParams', 'mainServices','$location',
    function($scope, $routeParams, mainServices, $location){
        var user = mainServices.userSession.getUser();

        if(!user){
             $location.path("/login");
        }else{
            $scope.user = user;
        }
        mainServices.getUsers().then(function(data){
            $scope.users = data;
        });
    }]);

mainControllers.controller('EditProfileCtrl' , ['$scope','$routeParams', 'mainServices','$location',
    function($scope, $routeParams, mainServices, $location){
        $scope.user = mainServices.userSession.getUser();
        $scope.update = function(user){            
            mainServices.updateUser(user).then(function(data){
                if(data){
                    mainServices.userSession.setUser(user);
                    $location.path("/");
                }                
            });            
        };
    }]);
 

mainControllers.controller('SearchCtrl' , ['$scope', '$http','mainServices',
    function($scope, $http, mainServices){
        var user = mainServices.userSession.getUser();
        $scope.mySkills = [];

        mainServices.getMySkills(user.user_id).then(function(data){
            $scope.mySkills = data;
            console.log($scope.mySkills);
        });

        mainServices.getSkills().then(function(data){

            for( var i = 0; i < data.length ; i++)
            {
                data[i].skill_level = 1;
            }
            $scope.tags = data;

            for( var i = 0; i < data.length ; i++)
            {
                $scope.removeFromScope(data[i].skill_id);
            }

            console.log($scope.tags);
        });

        $scope.addSkill = function(tag)
        {

           var user = mainServices.userSession.getUser();
            mainServices.setSkillRelation(user.user_id, tag.skill_id, tag.skill_level).then(function(data){
                $scope.removeFromScope(tag.skill_id);
                mainServices.getMySkills(user.user_id).then(function(data){
                    $scope.mySkills = data;
                });
            });
        }

        $scope.removeFromScope = function (idTag){
            var x = $scope.mySkills;
            var y = $scope.tags;
            for(var i in x){

               if(x[i].skill_id == idTag){
                   y.splice(i);
                   $scope.tags = y;
                   return;
               }
            }

        }


    }]);

