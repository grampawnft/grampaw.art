

function pageTransition(){

	var tl = gsap.timeline();

	tl.to('.main-container', { duration: .5, opacity: 1})
	tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
	tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
	tl.to('.main-container', { duration: .5, opacity: 0, delay: .1})
}

function contentAnimation(){

	var tl = gsap.timeline();

	tl.from('header', { duration: 1.5, opacity: 0})

}

function delay(n){
	n = n || 2000;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n);
	});
}

barba.init({

	sync: true,
	transitions: [{
		async leave(data){

			const done = this.async();
			pageTransition();
			await delay(1500);
			done();

		},

		async enter(data){
			contentAnimation();
		},
		async once(data){
			contentAnimation()
		}
	}],
	views: [{
	    namespace: 'home',
	    afterEnter(data) {
	    	if(!window.location.hash) {
		        window.location = window.location + '#loaded';
		        window.location.reload();
		    }
	    	var tl = gsap.timeline();

	    	tl.to('.slide__caption', { duration: 1.5, translateY: 0, opacity: 1}, '-=1')
			tl.to('.slide__img-wrap', { duration: 1, clipPath: 'circle(55% at 70% 50%)', opacity: 1}, '-=1.2');

	    }
	  }]
})



// general js
$(document).on('click', '.js-show-cart',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('header');
	var _sibcart = _parent.siblings('.minicart');
	var _sibBGoverlay = _parent.siblings('.bg-overlay');

	_sibcart.addClass('active');
	_sibBGoverlay.addClass('active');

});

$(document).on('click', '.js-close-minicart',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('.minicart');
	var _sibBGoverlay = _parent.siblings('.bg-overlay');

	_parent.removeClass('active');
	_sibBGoverlay.removeClass('active');

});