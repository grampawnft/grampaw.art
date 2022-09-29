$(document).ready(function(){

	var tl = gsap.timeline();

    if ($('body').hasClass('body-home')){
    	var offset;
	    function polylineToPath() {

	        var polyline = document.querySelectorAll('polyline, polygon');

			[].forEach.call(polyline, function(poly) {
				var svgNS = poly.ownerSVGElement.namespaceURI;
				var path = document.createElementNS(svgNS, 'path');
				var points = poly.getAttribute('points').split(/\s+|,/);
					var x0=points.shift(), y0=points.shift();
				var pathdata = 'M'+x0+','+y0+'L'+points.join(' ');
					if (poly.tagName=='polygon') pathdata+='z';
				path.setAttribute('class', 'p');
				path.setAttribute('d',pathdata);
				var len = path.getTotalLength();
				path.style.strokeDashoffset = len;
				path.style.strokeDasharray = len + ',' + len;
				poly.parentNode.replaceChild(path, poly);
				animate();
				animatePath();
				setInterval(function () {
			    	animate();
			    	animatePath();
	  			}, 8000);
				
			});
	    }

	    function animate() {
	        var paths = document.querySelectorAll('.p');

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
			    'stroke-dashoffset 5s';
			  // Go!
			  path.style.strokeDashoffset = '0';
			})
	    }

	    function animatePath(){
	    	var paths = document.querySelectorAll('.st0, .st1');

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

	    $('body').addClass('loading');
	    // tl.from('ul.transition li', { duration: .5, scaleY: 1, stagger: .2});
    	$('.hero-slider-wrapper').imagesLoaded().done( function( instance ) {
    		tl.to('ul.transition li', { duration: .5, scaleY: 0, stagger: .2, delay: 2.5});
    		setTimeout(function() {
    			$('body').removeClass('loading');
			}, 2500);
		  	
		  	setTimeout(function() {
		    	$('.hero-slider-wrapper').on('init', function(event, slick){
				    $(".hero-slider-wrapper").find('.slick-current').addClass("active");
				});
				$('.hero-slider-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				    $(".hero-slider-wrapper").find('.hero-slider-item').removeClass("active");
			    	$(".hero-slider-wrapper").find('.hero-slider-item').eq(nextSlide).addClass("active");
				});
				$('.hero-slider-wrapper').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 100,
					arrows: false,
					fade: true,
					dots: true,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 8000,
					focusOnSelect: false,
	  				pauseOnHover:false
				});
				 polylineToPath();
				 $('.svg-anim, .svg-anim2').css('opacity','1');
		    }, 3000);
		})
	     
    }
	
});


