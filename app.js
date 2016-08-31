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

myApp.controller('mainController',['$scope','$log', function($scope, $log){
  $scope.person = {
      name: 'Rufus Frus',
      address: '555 Fru St.,Frutown '
  }
}]);

myApp.controller('secondController',['$scope', '$log', function($scope, $log){
  
}]);

myApp.directive("searchResult", function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope:{
            personObject: "="
        }
    }
});