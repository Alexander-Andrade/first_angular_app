var myApp = angular.module('myApp', ['ngMessages','ngResource']);


myApp.controller('mainController', function($scope, $timeout, $filter,  $log) {
    $scope.handle = '';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
    $scope.characters = 5;
    
    $scope.rules = [
        { rulename: "Must be 5 characters" },
        { rulename: "Must not be userd elsewhere" },
        { rulename: "Must be cool" }
    ];
});