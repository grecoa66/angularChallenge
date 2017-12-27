(function(){
    'use strict';
    var app = angular.module("myApp", []);

    // Directive for displaying the IR-BOXES
    app.directive("irBoxes", function(){
        return {
            restrict: 'EA',
            scope: {
                numBoxes : '=boxes',
                numArr: '=numarr'
            },
            templateUrl: 'ir-boxes.html'
        }
    });

    // Directive for quantity selector
    app.directive('boxCounter', function(){
       return {
           templateUrl: 'box-counter.html',
           scope: {
               numBoxes : '=boxes'
           }
       }
    });

    // Controller to drive the directives
    app.controller('irController', function($scope){
        $scope.Boxes = 3;
        $scope.NumArray = getNumArray($scope.Boxes);

        function getNumArray(num){
            var numArr = [];
            for(var i = 1; i <= num; i++){
                numArr.push(i);
            }
            return numArr;
        }

    });



})();