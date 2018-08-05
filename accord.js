
$(document).ready(function() {
	function close() {
		$('.accordion .title').removeClass('active');
		$('.accordion .content').slideUp(400).removeClass('open');
	}

	$('.title').click(function(e) {
	    // hold the current value
		let value = $(this).attr('href');

		if($(e.target).is('.active')) {
			close();
		}
		else {
			close();

			// add active class to section
			$(this).addClass('active');
	        $('.accordion ' + value).slideDown(400).addClass('open');
		}

		e.preventDefault();
	});
});