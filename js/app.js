var app = angular.module('app', []);

app.controller('TimeCtrl', ['$scope','$interval',
     function($scope, $interval){
         $scope.message = "Hello World";
         $scope.breakLength = 5;
         $scope.sessionLength = 25;
         $scope.minutes = $scope.sessionLength;
         $scope.seconds = 60;
         $scope.fillerHeight = 0;
         $scope.color = "#99CC00";
         $scope.start = false;
         $scope.stop = false;

         $scope.decreaseBreak = function(){
             if($scope.breakLength > 1){
                 $scope.breakLength--;
             }
             
         };

         $scope.increaseBreak = function(){
             $scope.breakLength++;
         };

         $scope.decreaseSession = function() {
             if($scope.breakLength > 1){
                $scope.sessionLength--;
             }
             
         };

         $scope.increaseSession = function() {
             $scope.sessionLength++;
         };


         $scope.toggleTimer = function() {
             
             $interval(function(){
                    if($scope.minutes !== 0){
                        $scope.minutes--;
                    }                                
            }, 1000);

             if($scope.fillerHeight === 0){
                 $scope.start = true;
                 $scope.fillerHeight = 100;
             }
             else if($scope.fillerHeight > 0 && $scope.start){
                 $scope.start = false;
                 $scope.stop = true;
                 
             }
             else if($scope.fillerHeight > 0 && $scope.stop){
                 $scope.start = true;
                 $scope.stop = false;
             }
             
         };

      
    }

]);