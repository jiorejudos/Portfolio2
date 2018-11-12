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


$(function() {
	 $('.scroll-down').click (function() {
		 $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
		 return false;
	 });
 });


 function addContent() {
   var c = '';
   for (var i = 0; i < 10; i++) {
       c += '<a class="box"></a>';
   }
   $("#container").append(c);
}
