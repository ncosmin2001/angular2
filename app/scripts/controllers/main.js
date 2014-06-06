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
        /**
         * magic
         */
    }]);

mainControllers.controller('MainCtrl' , ['$scope','$routeParams', 'mainServices',
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