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
        $scope.user = false;
        $scope.user_u = false;
        $scope.credentials = {
            user_name: '',
            user_password: ''
        };

        $scope.login = function(credentials){
            $scope.user_u = false;
            mainServices.tryLogin(credentials).then(function(user){
                mainServices.userSession.setUser(user);
                $scope.user_u = false;
            });
            $location.path("/");
        };

        $scope.logout = function()
        {
            $scope.user_u = true;
            mainServices.userSession.setUser(false);
            $location.path("/login");
        }


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
            console.log($scope.users);
        });
    }]);

mainControllers.controller('EditProfileCtrl' , ['$scope','$routeParams', 'mainServices','$location',
    function($scope, $routeParams, mainServices, $location){
        $scope.user = mainServices.userSession.getUser();
        $scope.update = function(user){            
            mainServices.updateUser(user).then(function(data){
                if(data){
                    mainServices.userSession.setUser(user);
                }                
            });            
        };
    }]);



mainControllers.controller('MenuCtrl' , ['$scope', '$http','mainServices','$location',
    function($scope, $http, mainServices, $location){
        var user_u = mainServices.userSession.getUser();
        console.log(user_u);
        $scope.user_u   = user_u == false;



    }]);
mainControllers.controller('SearchCtrl' , ['$scope', '$http','mainServices',
    function($scope, $http, mainServices){
        var user = mainServices.userSession.getUser();
        $scope.user = user;
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


        });

        $scope.addSkill = function(tag)
        {

           var user = mainServices.userSession.getUser();
            mainServices.setSkillRelation(user.user_id, tag.skill_id, tag.skill_level).then(function(data){

                mainServices.getMySkills(user.user_id).then(function(data){
                    $scope.mySkills = data;
                });
            });
        }



    }]);

