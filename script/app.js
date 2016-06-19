var myApp = angular.module('myApp', ['ui.bootstrap', 'ngRoute']);

//Routes
myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        
        templateUrl:'pages/home.htm',
        controller:'mainCtrl'
        
    })
    
    .when('/contact',{
        
        templateUrl:'pages/contact.htm',
        controller:'contactCtrl'
        
    })
    
    .when('/service',{
        
        templateUrl:'pages/service.htm',
        controller:'svcCtrl'
        
    })
    
});


