'use strict';

/**
 * @ngdoc function
 * @name angularJsWorkshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsWorkshopApp
 */
angular.module('angularJsWorkshopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
