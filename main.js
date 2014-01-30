$(document).ready(function(){
	var pinImagePath = 'images/pin.png';
	//test coordinates for boudaries
	//gets the  X,Y coordinates of the click on 
	// img#map and returns coordinates in an object with 
	 var getCoordinates = function(e){
	 	var clickXY = {};
	 	//-8 accounts for margin on body tag (normalize.css)
	 	clickXY.x =e.clientX-8;
	 	clickXY.y=e.clientY-8;
	 	// console.log(clickXY);
	 	return clickXY;
	 };
	 //takes an object as the first parameter and returns creates a dom element based on the input object
	 var makePinElement = function(obj){
	 	var pinElement = $('<img>');
	 	var xValue = (obj.x.toString()) + 'px';
	 	var yValue = (obj.y.toString()) + 'px';
	 	// console.log('X: ' + xValue);
	 	// console.log('Y: ' + yValue);

	 	pinElement.attr('src', pinImagePath).addClass('pin').css({
	 		position:'absolute',
	 		top: yValue,
	 		left: xValue,
	 		
	 	});
	 	console.log(pinElement);
	 	return pinElement;



	 };

 	$('#map').on('click', function(e){
 		var coordinates = getCoordinates(e);
 		// console.log(coordinates);
 		var newPin = makePinElement(coordinates);
 		newPin.appendTo($('.container'));
 		// console.log(newPin);
 	});
 	
 	// 
	// 
});
