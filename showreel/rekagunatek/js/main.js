
$(document).on('click', '.js-hamburger',  function(e){
	e.stopPropagation();
	e.preventDefault();

	var _parent = $(this).closest('header');
	var _sibmobile = _parent.siblings('.mobile-menu-list');
	var _sibBGoverlay = _parent.siblings('.bg-overlay');

	// _sibmobile.addClass('active');
	// _sibBGoverlay.addClass('active');
	// $('body').addClass('noscroll')

	$(this).toggleClass('active');

});