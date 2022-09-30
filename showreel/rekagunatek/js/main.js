

$(document).on('click', '.js-hamburger',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var tl = gsap.timeline();

	tl.to('.menu-wrapper', { duration: .8, scaleX: 1, ease: 'expo.out'});
	tl.to('ul.menu-list li', { duration: .8, opacity: 1, x: 0, ease: 'expo.out', stagger: .2}, '-=.4');
	tl.to('.company-info', { duration: .8, opacity: 1, x: 0, ease: 'expo.out'}, '-=.55');

});

$(document).on('click', '.js-close-menu',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var tl = gsap.timeline();

	tl.to('ul.menu-list li', { duration: .6, opacity: 0, x: 50, ease: 'expo.out', stagger: .1});
	tl.to('.company-info', { duration: .8, opacity: 0, x: 50, ease: 'expo.out'}, '-=.4');
	tl.to('.menu-wrapper', { duration: .8, scaleX: 0, ease: 'power4.out'}, '-=.5');

});

let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function showSlides() {
  let slides = document.querySelectorAll(".leader-slide-item");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  slides[slideIndex].style.display = "block";
  
}

// autoplay slides --------
let timer = 3; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 2000); // 1sec


// start barba
var offset;
function leaderToPath() {

    var polyline = document.querySelectorAll('.leaderpoly');

	[].forEach.call(polyline, function(poly) {
		var svgNS = poly.ownerSVGElement.namespaceURI;
		var path = document.createElementNS(svgNS, 'path');
		var points = poly.getAttribute('points').split(/\s+|,/);
			var x0=points.shift(), y0=points.shift();
		var pathdata = 'M'+x0+','+y0+'L'+points.join(' ');
			if (poly.tagName=='polygon') pathdata+='z';
		path.setAttribute('class', 'leaderpath');
		path.setAttribute('d',pathdata);
		var len = path.getTotalLength();
		path.style.strokeDashoffset = len;
		path.style.strokeDasharray = len + ',' + len;
		poly.parentNode.replaceChild(path, poly);
		animateLeader();
		animateLeaderPath();
		setInterval(function () {
	    	animateLeader();
	    	animateLeaderPath();
		}, 15000);
		
	});
}

function animateLeader() {
    var paths = document.querySelectorAll('.leaderpath');

	[].forEach.call(paths, function(path) {
	  var length = path.getTotalLength();
	  // Clear any previous transition
	  path.style.transition = path.style.WebkitTransition =
	    'none';
	  // Set up the starting positions
	  path.style.strokeDasharray = length + ' ' + length;
	  path.style.strokeDashoffset = length;
	  // Trigger a layout so styles are calculated & the browser
	  // picks up the starting position before animating
	  path.getBoundingClientRect();
	  // Define our transition
	  path.style.transition = path.style.WebkitTransition =
	    'stroke-dashoffset 10s';
	  // Go!
	  path.style.strokeDashoffset = '0';
	})
}

function animateLeaderPath(){
	var paths = document.querySelectorAll('.leader-line, .leader-line1');

	[].forEach.call(paths, function(path) {
	  var length = path.getTotalLength();
	  // Clear any previous transition
	  path.style.transition = path.style.WebkitTransition =
	    'none';
	  // Set up the starting positions
	  path.style.strokeDasharray = length + ' ' + length;
	  path.style.strokeDashoffset = length;
	  // Trigger a layout so styles are calculated & the browser
	  // picks up the starting position before animating
	  path.getBoundingClientRect();
	  // Define our transition
	  path.style.transition = path.style.WebkitTransition =
	    'stroke-dashoffset 2s';
	  // Go!
	  path.style.strokeDashoffset = '0';
	})
}

leaderToPath();