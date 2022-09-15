

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

	if (document.body.classList.contains('body-home'))
	{
	  	tl.to('.slide__caption', { duration: 1.5, translateY: 0, opacity: 1}, '-=1')
		tl.to('.slide__img-wrap', { duration: 1, clipPath: 'circle(55% at 70% 50%)', opacity: 1}, '-=1.2')
		// slideshow.init();
		preloadImages('.slide__img').then(() => {
		    // remove loader (loading class) 
		    document.body.classList.remove('loading');
		    // initialize the slideshow and navigation
		    const slideshow = new Slideshow(document.querySelector('.slideshow'));    
		    const navigation = new Navigation(document.querySelector('.slides-nav'));
		    // navigation events
		    navigation.DOM.ctrls.next.addEventListener('click', () => slideshow.next());
		    navigation.DOM.ctrls.prev.addEventListener('click', () => slideshow.prev());
		    // set the initial navigation current slide value
		    navigation.updateCurrent(slideshow.current);
		    // set the navigation total number of slides
		    navigation.DOM.total.innerHTML = slideshow.current < 10 ? `0${slideshow.slidesTotal}` : slideshow.slidesTotal;

		    setInterval(function () {slideshow.next()}, 6000);

		    // when a new slide is shown, update the navigation current slide value
		    slideshow.on('updateCurrent', position => navigation.updateCurrent(position));
		});
	}

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
			contentAnimation()
		},
		async once(data){
			contentAnimation()
		}
	}]
})

