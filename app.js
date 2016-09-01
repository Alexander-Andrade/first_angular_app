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

myApp.controller('mainController',["$scope","$log", function($scope, $log){
  $scope.people = [
      {
          name: 'Rufus Frus',
          address: '555 Fru St.,Frutown ',
          city: 'New York',
          state: 'NY',
          zip: '22229'
      },
      {
          name: 'Jane Frus',
          address: '444 Fru St.,Frutown ',
          city: 'Djusaland',
          state: 'NY',
          zip: '13333'
      },
      {
          name: 'Fruthland',
          address: '777 Fru St.,Frutown ',
          city: 'Kejptaun',
          state: 'NY',
          zip: '99999'
      }
  ];
  
  $scope.formattedAddress = function(person){
      return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;            
  };
}]);

myApp.controller('secondController',['$scope', '$log', function($scope, $log){
  
}]);

myApp.directive("searchResult", function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope:{
            personObject: "=",
            formattedAddressFunction: "&"
        },
        transclude: true
    }   
});