/*** Jquery Scroll up PLugin
	* Author: Krishna Teja G S
	*Website: www.packetcode.com
	*Release Date: Jan 31 2014
*/
$(function() {
		
		// The main function scrollup
		// Takes the options as color,position,verticalpixel and scrollto
		$.fn.scrollUp = function( options) {
				var settings = $.extend({
							color: "dark",
							position: "right",
							verticalpixel:"100",
							scrollto:"2px"
						}, options );
				//adding a scroll-div element to the bottom of body tag and hiding it initially		
				var str = "<div class='scroll-div "+settings.color+" "+settings.position+" '>^</div>" ;		
				$( "body" ).append( str);
				$('.scroll-div').hide();
				//registering click event for scroll-div
				// scrolls the page up as functionality
				$('.scroll-div').click(function(){
					$("html, body").animate({ scrollTop: settings.scrollto }, 1300);
				});
			
				// making the hidden scroll-div visible from a vertical position
				$(document).scroll(function () {
					var y = $(this).scrollTop();
					if (y > settings.verticalpixel) {
						$('.scroll-div').fadeIn();
					} else {
						$('.scroll-div').fadeOut();
					}
				});
		 
		};
 
});
		
