// Controllers
myApp.controller('mainCtrl', ['$scope', function($scope){
    
    
    
}]);

myApp.controller('contactCtrl', ['$scope', function($scope){
    
    
    
}]);

myApp.controller('svcCtrl', ['$scope', function($scope){
    $scope.things= [{title:'Affordable',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis tincidunt, tristique eros a, pulvinar turpis. Mauris viverra sodales risus, a rutrum felis gravida id. In vestibulum non purus et feugiat.'},
                   {title:'Fast',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis tincidunt, tristique eros a, pulvinar turpis. Mauris viverra sodales risus, a rutrum felis gravida id. In vestibulum non purus et feugiat.'},
                   {title:'Quality',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis tincidunt, tristique eros a, pulvinar turpis. Mauris viverra sodales risus, a rutrum felis gravida id. In vestibulum non purus et feugiat.'}];
    
    
}]);

// Carousel Controller
myApp.controller('CarouselCtrl', CarouselCtrl);
 function CarouselCtrl($scope) {
  $scope.myInterval = 2000;
  $scope.slides = [
      {image:'assets/img/image01.jpg',text:'Image1'},
      {image:'assets/img/image02.jpg',text:'Image2'},
      {image:'assets/img/image03.jpg',text:'Image3'},
      {image:'assets/img/image05.jpg',text:'Image4'}];
  
    var slides = $scope.slides;

     
};