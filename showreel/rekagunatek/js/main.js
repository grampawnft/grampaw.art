

$(document).on('click', '.js-hamburger',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var tl = gsap.timeline();

	tl.to('.menu-wrapper', { duration: .8, scaleX: 1, ease: 'expo.out'});
	tl.to('ul.menu-list li', { duration: .8, opacity: 1, x: 0, ease: 'expo.out', stagger: .2}, '-=.4');
	tl.to('.company-info', { duration: .8, opacity: 1, x: 0, ease: 'expo.out'}, '-=.55');

	$('body').addClass('no-scroll')

});

$(document).on('click', '.js-close-menu',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var tl = gsap.timeline();

	tl.to('ul.menu-list li', { duration: .6, opacity: 0, x: 50, ease: 'expo.out', stagger: .1});
	tl.to('.company-info', { duration: .8, opacity: 0, x: 50, ease: 'expo.out'}, '-=.4');
	tl.to('.menu-wrapper', { duration: .8, scaleX: 0, ease: 'power4.out'}, '-=.5');

	$('body').removeClass('no-scroll')

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




