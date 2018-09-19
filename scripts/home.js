document.onclick = function () {
	// change div
}
div.onclick = function () {}

document.onclick = function () {
	var newDiv = document.createElement('div');
	// populate div
	newDiv.onclick = function () {};
	document.body.appendChild(newDiv);
}
div.onclick = function () {}

jQuery ( document ).ready( function($) {

setTimeout ( function() {

$('a[href*="#"]').off('touchstart touchend');

} , 750 );

} );
