var myApp = angular.module('myApp', []);


myApp.controller('AppCtrl', ['$scope', '$http','$location','$rootScope', function($scope, $http,$location,$rootScope,$locationProvider) {
    console.log("Hello World from controller");



    //qProvider.errorOnUnhandledRejections(false);

  

   var refresh=function(id){
    $http.get('/contactlist').then(function(response) {
        console.log("I got the data I requested");
        //data from the server to the controller
        $scope.contactlist = response.data;
        console.log(response);
      });
    }

    refresh(0);
    

     //add the data to the database
      $scope.addBorehole = function() {
        $http.post('/contactlist',$scope.borehole).then(function(response){
            $scope.contactlist = response.data;
          refresh(0);
          });
      };


      $scope.remove = function(id) {
        console.log(id);
       // $http.delete('/contactlist/' + id);
        
       $http.delete('/contactlist/' + id).then(function(response) {
        refresh(0);
      });
       
      };

      $scope.edit = function(id) {
        console.log(id);
        $http.get('/contactlist/' +id).then(function(response) {
          $scope.borehole= response.data;


          console.log(response.data);

        });
      };  
      



      $scope.update = function() {
        console.log($scope.borehole.id);
        //put the data to be updated
        $http.put('/contactlist/' + $scope.borehole.id, $scope.borehole).then(function(response) {
          refresh(0);
        })
      };



    
var refresh2=function(id){
  $http.get('/waterlist/'+id).then(function(response) {
      console.log("I got the data I requested");
      $scope.waterlist = response.data;
      console.log(response);
    });
}




$scope.mama = function(id) {
  console.log($scope.water);
  $scope.check=id;
  refresh2(id);
};


//adding watter level
$scope.addWater= function(id) {
  console.log($scope.water);
  $http.post('/waterlist/'+id,$scope.water).then(function(response) {

    $scope.waterlist = response.data;

    refresh2(id);
  });
};

//delete


$scope.removeWater= function(id) {
  console.log(id);

 $http.delete('/waterlist/' + id).then(function(response) {
  location.reload();
});
 
};



$scope.editWater = function(id) {
  console.log(id);
  $http.get('/waterlist2/' +id).then(function(response) {
    $scope.water= response.data;

    $scope.idp=id;
    console.log(response.data);

  });
}; 



$scope.updateWater = function(id) {
  console.log("HHHH>>"+id);
  //put the data to be updated
  $http.put('/waterlist3/' + id, $scope.water).then(function(response) {
    location.reload();
  })
};


      
      
            
    
    



}]);