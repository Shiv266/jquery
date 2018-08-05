
$(document).ready(function() {
	function close() {
		$('.accordion .title').removeClass('active');
		$('.accordion .content').slideUp(300).removeClass('open');
	}

	$('.title').click(function(e) {
	    // hold the current value
		var value = $(this).attr('href');

		if($(e.target).is('.active')) {
			close();
		}
		else {
			close();

			// add active class to section
			$(this).addClass('active');
	        $('.accordion ' + value).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});