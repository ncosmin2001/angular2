'use strict';

/**
 * @ngdoc function
 * @name angularJsWorkshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsWorkshopApp
 */
angular.module('angularJsWorkshopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
