$(function() {
	//----- OPEN
	$('[popup-open]').on('click', function(e) {
		var target = jQuery(this).attr('popup-open');
		$('[popup="' + target + '"]').fadeIn(350);

		e.preventDefault();
	});

	//----- CLOSE
	$('[popup-close]').on('click', function(e) {
		var target = jQuery(this).attr('popup-close');
		$('[popup="' + target + '"]').fadeOut(350);

		e.preventDefault();
	});
});