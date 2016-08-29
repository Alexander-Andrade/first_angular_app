var myApp = angular.module('myApp', []);


myApp.controller('mainController', function($scope, $timeout, $filter, $log) {
    $scope.handle = '';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
//    setTimeout(function() {
//       $scope.$apply(function() {
//           $scope.handle = 'qwerty';
//           console.log('Scope Changed!');
//       });
//        
//    }, 3000);
    
    $timeout(function(){
        $scope.handle = 'qwerty';
        console.log('Scope Changed!!!');
    }, 3000);
});