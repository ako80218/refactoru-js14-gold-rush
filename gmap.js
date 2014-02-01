$(document).ready(function(){
var pinImagePath = 'images/pin.png';
//initialize provides the google map
var initialize = function() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map($('#map-canvas').get(0),
            mapOptions);
      };

//gets the  X,Y coordinates of the click on img#map and returns coordinates in an object with 
var getCoordinates = function(e){
 	var clickXY = {};
 	// -21 on x and -33on y account for pin image see lines 25,26
 	var containerOffset= $('.container').offset();
 	clickXY.x =e.clientX - containerOffset.left -21;
 	clickXY.y=e.clientY - containerOffset.top - 35;
 	console.log(clickXY);
 	return clickXY;
	 };

initialize();
$(document).on('click', '#map-canvas', function(e){

	getCoordinates(e);
});

});
