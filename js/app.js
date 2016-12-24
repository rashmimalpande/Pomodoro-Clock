var app = angular.module('app', []);

app.controller('TimeCtrl', ['$scope',
     function($scope){
         $scope.message = "Hello World";
         $scope.breakLength = 5;
         $scope.sessionLength = 25;
         $scope.minutes = $scope.sessionLength;
         $scope.seconds = 0;
         $scope.decreaseBreak = function(){
             if($scope.breakLength > 1){
                 $scope.breakLength--;
             }
             
         }

         $scope.increaseBreak = function(){
             $scope.breakLength++;
         }

         $scope.decreaseSession = function() {
             if($scope.breakLength > 1){
                $scope.sessionLength--;
             }
             
         }

         $scope.increaseSession = function() {
             $scope.sessionLength++;
         }


         $scope.toggleTimer = function() {

         }
    }

]);