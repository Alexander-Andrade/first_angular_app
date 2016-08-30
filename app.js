var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second/:num',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.controller('mainController', function($scope, $routeParams){
    $scope.num = $routeParams.num;
});

myApp.controller('secondController', function($scope, $routeParams){
    $scope.num = $routeParams.num || 1;
});