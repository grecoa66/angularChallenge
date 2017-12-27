(function(){
    'use strict';
    var app = angular.module("myApp", []);

    // Directive for displaying the IR-BOXES
    app.directive("irBoxes", function(){
        return {
            restrict: 'E',
            scope: {
                count : '=',
                arr: '='
            },
            templateUrl: 'ir-boxes.html'
        }
    });

    // Directive for quantity selector
    app.directive('boxCounter', function(){
       return {
           templateUrl: 'box-counter.html',
           scope: {
               count : '=',
               updateCount :'&'
           }
       }
    });

    // Controller to drive the directives
    app.controller('irController', function($scope){
        // the # of boxes to be displayed
        $scope.count = 3;
        $scope.numArray = getNumArray();

        $scope.updateCount = function(){
            console.log("Updating num boxes: ", $scope.count);
            $scope.NumArray = getNumArray();
        };

        /**
         * This function provides a collection that is the size of the
         * box count. This is used by the ng-repeat directive. It is much cleaner
         * syntax to iterate over a collection with the ng-repeat directive.
         * @returns {Array}
         */
        function getNumArray(){
            var numArr = [];
            for(var i = 1; i <= $scope.count; i++){
                numArr.push(i);
            }
            return numArr;
        }

    });



})();