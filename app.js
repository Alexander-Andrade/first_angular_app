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
});

myApp.controller('mainController', function($scope, $location, $log){
    
});

myApp.controller('secondController', function($scope, $location, $log){
    
});