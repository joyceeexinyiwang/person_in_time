console.log(window);
window.cur = 0;
window.total = 5;

window.onload = function() {
	window.total = 5;  
	var x = document.getElementById("snap"+0);
	x.classList.toggle("m-fadeIn");
	for (var i = window.cur + 1; i < window.total; i++) {
		var z = document.getElementById("snap"+i);
		z.classList.toggle("m-fadeOut");
	}
	window.cur = 0;
}

function start() {

	// add transparent button, and title with m-fadein
	// onclick: wait 2 seconds, remove button, remove title

	wait(2000);
	var x = document.getElementById("button");
	x.style.display = "none";
}

function myFunction() {

	var x = document.getElementById("button");
	x.style.display = "none";

	var toOpen = (window.cur+1)%window.total;
	var toClose = (window.cur)%window.total;

	var x = document.getElementById("snap"+toOpen);
	x.classList.toggle("m-fadeIn");
	x.classList.toggle("m-fadeOut");

	wait(300);

	console.log("showing " + window.cur);
	var y = document.getElementById("snap"+toClose);
	y.classList.toggle("m-fadeIn");
	y.classList.toggle("m-fadeOut");

	window.cur = (window.cur+1)%window.total;
}

function wait(ms)
{
	var d = new Date();
	var d2 = null;
	do { d2 = new Date(); }
	while(d2-d < ms);
}
