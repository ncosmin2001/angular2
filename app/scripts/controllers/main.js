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
        $scope.user = mainServices.userSession.getUser();
        if(typeof $scope.user =='undefined')
        {
            $scope.user = false;
        }
        $scope.credentials = {
            user_name: '',
            user_password: ''
        };

        $scope.login = function(credentials){
            mainServices.tryLogin(credentials).then(function(user){
                mainServices.userSession.setUser(user);
                $location.path("/");
            });
        };

        $scope.logout = function()
        {
            mainServices.userSession.setUser(false);
            $location.path("/login");
        }
    }]);

mainControllers.controller('MainCtrl' , ['$scope','$routeParams', 'mainServices','$location',
    function($scope, $routeParams, mainServices, $location){
        mainServices.userSession.checkLogin($location);
        $scope.user = mainServices.userSession.getUser();
        $scope.userCount = 0;
        mainServices.getUsers().then(function(data){
            $scope.users = data;
            $scope.userCount = $scope.users.length;
            //console.log($scope.users);
        });
        $scope.curPage = 0;
        $scope.pageSize = 5;
        $scope.numberOfPages = function()
        {
            return Math.ceil($scope.userCount / $scope.pageSize);
        }
    }]);

mainControllers.controller('EditProfileCtrl' , ['$scope','$routeParams', 'mainServices','$location',
    function($scope, $routeParams, mainServices, $location){
        mainServices.userSession.checkLogin($location);
        $scope.user = mainServices.userSession.getUser();
        $scope.update = function(user){            
            mainServices.updateUser(user).then(function(data){
                if(data){
                    mainServices.userSession.setUser(user);
                    $('#myModal').modal('hide');
                }                
            });            
        };
    }]);

mainControllers.controller('SearchCtrl' , ['$scope', '$http','mainServices','$location',
    function($scope, $http, mainServices, $location){
        mainServices.userSession.checkLogin($location);
        var user = mainServices.userSession.getUser();
        $scope.user = user;
        $scope.mySkills = [];

        mainServices.getMySkills(user.user_id).then(function(data)
        {
            $scope.mySkills = data;
            //console.log($scope.mySkills);
        });
        mainServices.getSkills().then(function(data)
        {
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

