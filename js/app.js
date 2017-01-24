var app = angular.module('app', []);

app.controller('TimeCtrl', ['$scope','$interval',
     function($scope, $interval){
         $scope.breakLength = 5;
         $scope.sessionLength = 25;
         $scope.minutes = $scope.sessionLength;
         $scope.seconds = 0;
         $scope.timeLeft = 0;
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
             if($scope.sessionLength > 1){
                $scope.sessionLength--;
                
             }
             $scope.minutes = $scope.sessionLength;
             $scope.seconds = 0;
             $scope.fillerHeight = 0;
             $scope.color = "#99CC00";
         };

         $scope.increaseSession = function() {
             $scope.sessionLength++;
             $scope.minutes = $scope.sessionLength;
             $scope.seconds = 0;
             $scope.fillerHeight = 0;
              $scope.color = "#99CC00";
         };


         $scope.toggleTimer = function() {
        
            if($scope.fillerHeight === 0){
                $scope.start = true;
                $scope.startTimer();

            }

            else if($scope.fillerHeight > 0 && $scope.start){
                $scope.start = false;
                $scope.stop = true;
                $scope.stopTimer();
            }

            else if($scope.fillerHeight > 0 && $scope.stop){
                $scope.start = true;
                $scope.stop = false;
                $scope.startTimer();
            }
            
             
         };

         $scope.startTimer = function(){
             var height = 0;
             if($scope.minutes === 0){
                 height = 100 / 60;
             }
             else{
                 height = 100 / ($scope.minutes * 60);
             }
                 
             $scope.timeLeft = $interval(function(){
                if($scope.seconds == 0){
                    $scope.seconds = 60;
                    $scope.minutes--;
                    $scope.fillerHeight += height;              
                }

                $scope.seconds--;
                $scope.fillerHeight += height;

                if($scope.fillerHeight >= 100 && $scope.color=="#99CC00" && $scope.seconds === 0){
                    $scope.fillerHeight = 0;
                    $scope.color = 'tomato';
                    $scope.minutes = $scope.breakLength;
                    $scope.seconds = 0;
                    height = 100 / ($scope.minutes * 60);
                }

                else if($scope.fillerHeight >= 100 && $scope.color=="tomato" && $scope.seconds === 0){
                    $scope.fillerHeight = 0;
                    $scope.color = '#99CC00';
                    $scope.minutes = $scope.sessionLength;
                    $scope.seconds = 0;
                    height = 100 / ($scope.minutes * 60);
                }

                
            },1000);
         };

         $scope.stopTimer = function(){
             $interval.cancel($scope.timeLeft);
         };

      
    }

]);