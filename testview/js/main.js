$(document).on('click', '.js-burger',  function(e){

	var _parent = $(this).closest('.header');
	var _mobile = _parent.find('.menu-mobile-wrapper');
	var _menuWrapper = _parent.find('.menu-wrapper');
	var _height = $(window).height();

	if(_mobile.hasClass('menu-open')){
		_menuWrapper.removeClass('buka');
		setTimeout(function(){ 
			_mobile.animate({'height':'60px'},300).removeClass('menu-open');
		 }, 750);
	}
	else{
		_mobile.animate({'height':'100vh'},300).addClass('menu-open');
		_menuWrapper.addClass('buka');
	}
	$(this).toggleClass('opened')
});

$(document).on('click', '.menu-wrapper li',  function(e){
	var _parent = $(this).closest('.header');
	var _mobile = _parent.find('.menu-mobile-wrapper');
	var _menuWrapper = _parent.find('.menu-wrapper');
	var _height = $(window).height();

	_menuWrapper.removeClass('buka');
	setTimeout(function(){ 
		_mobile.animate({'height':'60px'},300).removeClass('menu-open');
	 }, 750);
	$('.js-burger').removeClass('opened')
});

$(document).on('click', '.header-banner-main li',  function(e){
	var _parent = $(this).closest('.header-banner-main');
	var _li = _parent.find('li');
	
	_li.not(this).removeClass('active');
	$(this).addClass('active');
});

$(document).on('click', '.header-logo',  function(e){
	var _parent = $(this).closest('.header');
	var _mobile = _parent.find('.menu-mobile-wrapper');
	var _menuWrapper = _parent.find('.menu-wrapper');
	var _height = $(window).height();

	$('.header-banner-main li').removeClass('active');
	_menuWrapper.removeClass('buka');
	setTimeout(function(){ 
		_mobile.animate({'height':'60px'},300).removeClass('menu-open');
	 }, 750);
	$('.js-burger').removeClass('opened')
});

$(document).on('click', '.js-tab',  function(e){
	var _parent = $(this).closest('.inner-container');
	var _tablist = _parent.find('.tab-header-list');
	var _tabdetaillist = _parent.find('.tab-detail-list');
	var _data = $(this).attr('data-tab');

	_tablist.not(this).removeClass('active');
	$(this).addClass('active');
	_tabdetaillist.not('#'+_data).removeClass('active').fadeOut(100);
	$('#'+_data).addClass('active').fadeIn(100);
});

$('.photobanner').each(function(index, value){
	var _width = ($(this).height())*16;
	var _left= ($(this).height())*8;
	$(this).css('min-width',_width+'px');
	$(this).css('width',_width+'px');
	if($(this).hasClass('photobanner2')){
		$(this).css('margin-left','-'+_left+'px');
	}
});


$(document).bind("contextmenu",function(e){
    return false;
});

$(document).keydown(function(e){
  	if(event.keyCode == 123) {
	    return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
	    return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
	    return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
	    return false;
	}
	if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
	    return false;
	}
});

$('.phase-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  arrows: false,
  dots: true,
  // centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
  infinite: false
});