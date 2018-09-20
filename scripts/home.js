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
