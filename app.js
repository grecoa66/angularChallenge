(function(){

    var app = angular.module("myApp", []);

    app.directive("thing", function(){
        return {
            template: '<h1>Hello</h1>'
        }
    })

})();