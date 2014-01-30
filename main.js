$(document).ready(function(){
	var pinImagePath = 'images/pin.png';
	//gets the  X,Y coordinates of the click on img#map and returns coordinates in an object with 
	 var getCoordinates = function(e){
	 	var clickXY = {};
	 	// -21 on x and -33on y account for pin image see lines 25,26
	 	var containerOffset= $('.container').offset();
	 	clickXY.x =e.clientX - containerOffset.left -21;
	 	clickXY.y=e.clientY - containerOffset.top - 35;
	 	return clickXY;
	 };
	 //takes an object as the first parameter and returns a dom element based on the input object
	 var makePinElement = function(obj){
	 	var pinElement = $('<img>');
	 	var xValue = (obj.x.toString()) + 'px';
	 	var yValue = (obj.y.toString()) + 'px';
	 	pinElement.attr('src', pinImagePath).addClass('pin').css({
	 		position:'absolute',
	 		top: yValue,
	 		left: xValue,
	 		width: '40px',
	 		height: '40px'
	 	});
	 	return pinElement;
	 };
 	$(document).on('click', '#map', function(e){
 		var coordinates = getCoordinates(e);
 		var newPin = makePinElement(coordinates);
 	});
 	$(document).on('click','.pin', function(e){
 		$(this).remove();
 	});

});
