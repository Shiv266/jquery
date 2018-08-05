	$(document).ready(function(){

		var v= "#nav", x = "active";	
        /* whenever the toggler is pressed */
		$('.toggle-menu').click(function(e){
                  
				if($(v).hasClass(x)){
					$(v).removeClass(x);
				}else{
					$(v).addClass(x);
				}
				/* method stops the default action of an element from happening */
				e.preventDefault();
		})			
	})