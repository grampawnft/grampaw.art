
gsap.registerPlugin(ScrollTrigger);

function batch(targets, vars) {
  let varsCopy = {},
      interval = vars.interval || 0.1,
      proxyCallback = (type, callback) => {
        let batch = [],
            delay = gsap.delayedCall(interval, () => {callback(batch); batch.length = 0;}).pause();
        return self => {
          batch.length || delay.restart(true);
          batch.push(self.trigger);
          vars.batchMax && vars.batchMax <= batch.length && delay.progress(1);
        };
      },
      p;
  for (p in vars) {
    varsCopy[p] = (~p.indexOf("Enter") || ~p.indexOf("Leave")) ? proxyCallback(p, vars[p]) : vars[p];
  }
  gsap.utils.toArray(targets).forEach(target => {
    let config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    ScrollTrigger.create(config);
  });
}

batch(".news-item", {
  interval: 0.1, 
  batchMax: 3,   
  onEnter: batch => gsap.to(batch, {autoAlpha: 1, y: 0, stagger: 0.3, overwrite: true, duration: .6})
});

gsap.to('.info-banner',{
	scrollTrigger: {
		trigger: '.info-banner'
	},
	duration: .6,
	y: 15,
	autoAlpha: 1,
	ease: "back.out(3)"
});

gsap.to('.image-banner',{
	scrollTrigger: {
		trigger: '.image-banner',
		start: 'center 80%',
	},
	duration: 2,
	scale: 1,
	opacity: 1,
	ease: "back.out(2)"
}, );

gsap.to('.footer',{
	scrollTrigger: {
		trigger: '.footer',
	},
	duration: 1.5,
	opacity: 1,
	ease: "power4.out)"
}, );

// form js
$(document).on('focus click', '.login-input',  function(e){

	var _parent = $(this).closest('.form-group');
	var _label = _parent.find('label');

	_label.addClass('active')
});

$(document).on('blur', '.login-input, .js-custom-select',  function(e){

	var _parent = $(this).closest('.form-group');
	var _label = _parent.find('label');


	if(!$(this).val()){
		_label.removeClass('active');
		$(this).removeClass('filled');
	}

	else{
		$(this).addClass('filled')
	}
});


$(".form-group label").each(function(){
    var _parent = $(this).closest('.form-group');
    var _input = _parent.find('input.form-control');
    var _textarea = _parent.find('textarea.form-control');
    var _select = _parent.find('select.form-control');
    var _option = _select.find('option:selected');

    if(_input.length > 0){
    	if(_input.val() != ""){
	    	$(this).addClass('active');
	    	if(_input.prop('readonly')){
		    	$(this).addClass('disabled')
			}
	    }
	    else if(_input.hasClass('js-calendar')){
	    	$(this).addClass('active')
	    }
	    else if(_input.prop('readonly')){
	    	$(this).addClass('disabled')
		}
		else if(_parent.hasClass('disabled')){
	    	$(this).addClass('active')
		}
	    else{
	    	$(this).removeClass('active')
	    }
    }
    if(_textarea.length > 0){
    	if(_textarea.val() != ""){
	    	$(this).addClass('active')
	    }
	    else{
	    	$(this).removeClass('active')
	    }
    }

});

$(document).on('change','.js-custom-select',function(){

	var _parent = $(this).closest('.form-group');
	var sib = _parent.find('label');

	$(this).find('option[value="0"]').hide();
	sib.addClass('active');

});



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

$(document).on('click', '.toptab a',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('.mobile-menu-list');
	var _li = $(this).closest('.toptab');
	var _panel = _parent.find('.tab-panel');
	var _dataTab = $(this).attr('data-tab');

	$('.toptab').removeClass('active');
	_li.addClass('active');
	$('.tab-panel').hide();
	$('#'+_dataTab).show()

});

$(document).on('click', '.js-has-sub',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('.tab-content-wrapper');
	var _sub = $(this).attr('data-sub');

	$('#'+_sub).addClass('active');

});

$(document).on('click', '.js-backto-sub',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('.sub-tab-content-wrapper');

	_parent.removeClass('active');

});

$(document).on('click', '.js-hamburger',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('header');
	var _sibmobile = _parent.siblings('.mobile-menu-list');
	var _sibBGoverlay = _parent.siblings('.bg-overlay');

	_sibmobile.addClass('active');
	_sibBGoverlay.addClass('active');
	$('body').addClass('noscroll')

});

$(document).on('click', '.js-close-menu-mobile',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('.mobile-menu-list');
	var _sibBGoverlay = _parent.siblings('.bg-overlay');

	_parent.removeClass('active');
	_sibBGoverlay.removeClass('active');
	$('body').removeClass('noscroll')

});

$(document).on('click', '.register-btn',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('.menulogin-wrapper');
	var _formlogin = _parent.find('.form-login');
	var _formregister = _parent.find('.form-register');

	_formlogin.fadeOut(100);
	_formregister.fadeIn(200);

});

$(document).on('click', '.login-btn',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('.menulogin-wrapper');
	var _formlogin = _parent.find('.form-login');
	var _formregister = _parent.find('.form-register');

	_formregister.fadeOut(100);
	_formlogin.fadeIn(200);

});
