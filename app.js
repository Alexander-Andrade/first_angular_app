var myApp = angular.module('myApp', ['ngMessages','ngResource']);


myApp.controller('mainController', function($scope, $timeout, $filter,  $log) {
    $scope.handle = '';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }
});