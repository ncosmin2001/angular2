'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workshopApp
 */

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('LoginCtrl' , ['$scope','$routeParams', 'mainServices','$location','$cookies',
    function($scope, $routeParams, mainServices, $location, $cookies){
        $scope.credentials = {
            user_name: '',
            user_password: ''
        };
        
        $scope.login = function(credentials){
            mainServices.tryLogin(credentials).then(function(user){
                mainServices.userSession.setUser(user);
                $cookies.user = user;
            });
            $location.path("/");
        };
    }]);

mainControllers.controller('MainCtrl' , ['$scope','$routeParams', 'mainServices','$location',
    function($scope, $routeParams, mainServices, $location){
        var user = mainServices.userSession.getUser();
        
        if(!user){
             $location.path("/login");
        }
    }]);

mainControllers.controller('EditProfileCtrl' , ['$scope','$routeParams', 'mainServices',
    function($scope, $routeParams, mainServices){
        /**
         * magic
         */
    }]);

mainControllers.controller('SearchCtrl' , ['$scope', '$http',
    function($scope, $http){
        $scope.tags = [
            { name: 'cevreaueu', id: 1 },
            { name: 'cevreaueu1', id: 5 },
            { name: 'cevreaueu2', id: 4 },
            { name: 'cevreaueu3', id: 3 },
            { name: 'cevreaueu4', id: 2 },

        ];
        $scope.loadTags = function(query) {
            return $http.get('/tags?query=' + query);
        };
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