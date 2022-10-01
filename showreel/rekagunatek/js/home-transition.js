$(document).ready(function(){

	var tl = gsap.timeline();

    if ($('body').hasClass('body-home')){

	    $('body').addClass('loading');

	    const videoElement = document.getElementById("myVideo");

	    videoElement.addEventListener('loadeddata', (e) => {

	    	if(videoElement.readyState >= 3){
	    		tl.to('ul.transition li', { duration: .5, scaleY: 0, stagger: .2, delay: 2.5});
	    		setTimeout(function() {
	    			$('body').removeClass('loading');
				}, 2500);
	    	}

	    })
	     
    }
	
});


