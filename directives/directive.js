// Directive

myApp.directive('resDir', function(){
    return {
        restrict:'E',
        templateUrl:"directives/template/resDir.html",
        replace: false,
        scope: {
            myContent:'@',
            myTitle:'@'
        }
    }
})