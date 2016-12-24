var app = angular.module('app', []);

app.controller('TimeCtrl', ['$scope',
     function($scope){
         $scope.message = "Hello World";
         $scope.breakLength = 5;
         $scope.sessionLength = 25;
         $scope.decreaseBreak = function(){
             if($scope.breakLength != 0){
                 $scope.breakLength--;
             }
             
         }

         $scope.increaseBreak = function(){
             $scope.breakLength++;
         }

         $scope.decreaseSession = function() {
             if($scope.breakLength != 0){
                $scope.sessionLength--;
             }
             
         }

         $scope.increaseSession = function() {
             $scope.sessionLength++;
         }
    }

]);