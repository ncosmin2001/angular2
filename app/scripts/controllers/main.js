'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workshopApp
 */

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('LoginCtrl' , ['$scope','$routeParams', 'mainServices',
    function($scope, $routeParams, mainServices){
        $scope.credentials = {
            user_name: '',
            user_password: ''
        };
        
        $scope.login = function(credentials){
            mainServices.tryLogin(credentials).then(function(user){
                    return user;
            });
        };
    }]);

mainControllers.controller('MainCtrl' , ['$scope','$routeParams', 'mainServices',
    function($scope, $routeParams, mainServices){
        /**
         * magic
         */
    }]);

mainControllers.controller('EditProfileCtrl' , ['$scope','$routeParams', 'mainServices',
    function($scope, $routeParams, mainServices){
        /**
         * magic
         */
    }]);

/*
angular.module('workshopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/