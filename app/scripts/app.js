'use strict';

/**
 * @ngdoc overview
 * @name workshopApp
 * @description
 * # workshopApp
 *
 * Main module of the application.
 */
/*
angular.module('workshopApp').filter('pagination', function()
{
    return function(input, start)
    {
        start = +start;
        return input.slice(start);
    };
});*/
angular
  .module('workshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mainServices',
    'mainControllers'
  ])
  .filter('pagination', function()
    {
        return function(input, start)
        {
            if(typeof input !== 'undefined')
            {
                start = +start;
                return input.slice(start);
            }
        };
    })
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
      $httpProvider.defaults.transformRequest = function(data){
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    }}
);