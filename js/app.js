$(document).ready(function(){
	$('#btnSubmit').click(function(){
		alert("Button Pressed !!");
	});

	$('.collapse').on('show.bs.collapse', function () {
		$('.collapse.in').collapse('hide');
	});
   

    var options = {
		 zoom: 10,
		 mapTypeId: google.maps.MapTypeId.ROADMAP,
		 center: new google.maps.LatLng(-38.072424, 145.307299)
    };
	  
	var map = new google.maps.Map(document.getElementById("map"), options);

	 //navigator.geolocation.getCurrentPosition(function(position){
		  
	//}); 
	 
 });  