var myApp = angular.module('myApp', []);


myApp.controller('mainController', function($scope) {
    $scope.alertClick = function(){
      alert("Clicked!")  
    };
    
});