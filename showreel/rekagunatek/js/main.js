

$(document).on('click', '.js-hamburger',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var tl = gsap.timeline();

	tl.to('.menu-wrapper', { duration: .8, scaleX: 1, ease: 'expo.out'});
	tl.to('ul.menu-list li', { duration: .8, opacity: 1, x: 0, ease: 'expo.out', stagger: .2}, '-=.2');
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