// Directive

myApp.directive('resDir', function(){
    return {
        restrict:'E',
        templateUrl:"template/resDir.html",
        replace: false,
        scope: {
            myContent:'@',
            myTitle:'@'
        }
    }
})