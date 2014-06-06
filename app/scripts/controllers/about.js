'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
