var app = angular.module("OneBoxApp", []);
app.controller("SiteController", function ($scope, $http) {
   $scope.loading = true;

      
    //new code by cw
    $http.get('https://ws.iota.net.au/OneBox.Service/api/sites').then(function(response){
		$scope.products = response.data;
		$scope.loading = false;
	})
			   
			   
   /* $http.get('https://ws.iota.net.au/OneBox.Service/api/sites').

	  success(function (data, status, headers, config) {
		  $scope.products = data;
		 
	  })
	  .error(function (data, status, headers, config) {
		  alert('Error found ' + status);
		  alert('Error found ' + headers);
	  })
	  .finally(function () {
	      // Hide loading spinner whether our call succeeded or failed.
		  $scope.loading = false;
	  });
	*/	
		
});




/*
$(document).ready(function(){
	$('#btnSubmit').click(function(){
		alert("Button Pressed !!");
	});

	var map;
	$('.collapse').on('show.bs.collapse', function (e) {
		$('.collapse.in').collapse('hide');
				
		var options = {
		 zoom: 10,
		 mapTypeId: google.maps.MapTypeId.ROADMAP,
		 center: new google.maps.LatLng(-38.072424, 145.307299)
		};
		  
		map = new google.maps.Map(document.getElementById("map"), options);

		
		//Resize code
		
		google.maps.event.trigger(map, 'resize');
		map.setZoom( map.getZoom());
		
		
	});
   

    google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize);
	
	 
 });  

*/
