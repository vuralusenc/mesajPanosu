var myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope','$http',function($scope,$http){
	console.log('controller çalışır durumda');

	 
	//kişi ekleme controller kısmı

	$scope.ekle = function(){
		console.log($scope.mesaj);
		$http.post('/ekleme', $scope.mesaj).success(function(response){
		//	console.log(response);
		});
	}


	//kişi listeme
	$scope.reset = function(){
		$http.get('/eklemeler').success(function(response){
			console.log("reset");
			$scope.mesajlar = response;
			$scope.mesajs = "";
		});
	}

	var list;
	 
	$scope.list = [
		{ name:'vural', no: 'usenc'},
		{ name:'ali', no: 'kara'},
	]

/*	$scope.mesajlar = [];
		$http.get('/ekleme')
		  .then(function(result) {
		    $scope.mesajlar = result.data;
	});


	$http.get("/ekleme")
    .then(function(response) {
    	$scope.mesajlar = response.data.records;
    });

*/
 /*
	$http.get('/ekleme').
    success(function(data, status, headers, config) {
      $scope.mesajlar = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
*/
}]);

