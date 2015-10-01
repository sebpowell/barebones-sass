(function($) { 
	$.fn.fixedNav = function(options) {
		var settings = $.extend({
			// How to get this? 
			targetElement: ".navigation-primary",
			fixedClass: 'is-fixed',
		}, options);


		$(window).scroll(function() {
			var y = $(window).scrollTop();
			var navigation = $(settings.targetElement);
			if ( y > 40 ) {
			 navigation.addClass("is-fixed");
			}
			else {
				navigation.removeClass(settings.fixedClass);
			}
		});

		$(".mobile-navigation-toggle").click(function() {
			$(this).toggleClass("close");
			$(".navigation-primary-links").toggleClass("is-open");
			
		});
	};
})(jQuery);





