(function(){
    angular.module('controllers',[])
        .controller('homeController',homeController)
        
        //====using $scope way========
        // function homeController($scope){
        //     $scope.name="Home Controller"
        // }
        
        //=====using John papa style (controller as syntax)=======
          function homeController(){
              var hCtrl= this
            hCtrl.name="Home Controller"
        }
}());