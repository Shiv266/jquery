$(document).ready(function() {
$(function() {
	//----- OPEN
	$('[popup-open]').on('click', function(e) {
		let target = jQuery(this).attr('popup-open');
		$('[popup="' + target + '"]').fadeIn(300);

		e.preventDefault();
	});

	//----- CLOSE
	$('[popup-close]').on('click', function(e) {
		let target = jQuery(this).attr('popup-close');
		$('[popup="' + target + '"]').fadeOut(300);

		e.preventDefault();
	});
});
});