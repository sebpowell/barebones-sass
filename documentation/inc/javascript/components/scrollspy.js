$(document).ready(function() {
	// setNavigation();
	// $(".mobile-navigation-toggle").click(function() {
	// 	$(".docs-navigation").toggleClass("show");
	// 	$(".backdrop").toggleClass("is-visible");
	// 	$(this).toggleClass("close");
	// });



	// console.log(window.location.pathname);



	var current = window.location.pathname;

	current = "'"+current.replace('/','')+"'";

	$("a[href="+current+"]").next(".sub-navigation").slideDown();

	$(".parent").on("click", function(e) {

		if ( current === $(this).attr("href") ) {

			e.preventDefault();

			var otherMenus = $(".sub-navigation");
			var menu = $(this).next(".sub-navigation");

			otherMenus.slideUp();

			if (menu.is(":visible"))  {
				menu.slideUp();
			}

			else {
				menu.slideDown();
			}
		}
		
		// $(".sub-navigation").slideUp();
		// $(this).next(".sub-navigation").slideToggle();

		// if 
	});

	// if ( $(window).width() < 800 ) {
	// 	$(".docs-navigation a").click(function() {
	// 		$(".docs-navigation").toggleClass("show");
	// 		$(".backdrop").toggleClass("is-visible");
	// 		$(".mobile-navigation-toggle").toggleClass("close");
	// 	});
	// }
	// else {
	// 	//
	// }
});



// (function($) { 
// 	$.fn.scrollSpy = function(options, val)
// 	{
// 		var that = this;
// 		var settings = $.extend({
// 			scrollSpeed: 1000,
// 			scrollThrottle: 500,
// 			activeClass: "active",
// 			offset: 0,
// 		}, options);

// 		var menu = that.find("a[href*=\\#]:not([href=\\#])");
		
// 		var sections = $("section");

// 		menu.on("click", function(e) 
// 		{

// 			e.preventDefault();

// 			var clickedLink = $(this);

// 			var location = $(this)[0]["hash"];

// 			var position = $(location).offset().top;

// 			// console.log(position);

// 			var test = $(".docs-content").prop('scrollHeight');

// 			// console.log


// 			var meh = $(".docs-content").scrollTop();

// 			console.log(meh);

// 			console.log(position);
// 			// console.log(clickedLink);

// 			// console.log(location);




// 				$(".docs-content").animate({
// 					scrollTop: position + meh
// 				}, settings.scrollSpeed, function() {
// 					that.find("a").removeClass(settings.activeClass);
// 					clickedLink.addClass(settings.activeClass);
// 				});
// 			// }

// 			// else if (position < 0) {
				
// 			// 	console.log(position);

// 			// 	console.log(location.position().top);
// 			// 	// $(".docs-content").animate({
// 			// 	// 	scrollTop: 0
// 			// 	// }, settings.scrollSpeed, function() {
// 			// 	// 	that.find("a").removeClass(settings.activeClass);
// 			// 	// 	clickedLink.addClass(settings.activeClass);
// 			// 	// });
// 			// }
// 		});




// 		$(".docs-content").scroll(function()  {
// 			var scrollPos = $(".docs-content").scrollTop();

// 			// console.log("test");

// 			sections.each(function(index, value) 
// 			{
// 				// console.log(index);

// 				// console.log(scrollPos);



// 				var el = $(this);
// 				var top_of_element = $(this).position().top;
// 				var bottom_of_element = $(this).offset().top + $(this).outerHeight();
// 				var bottom_of_screen = $(".docs-content").scrollTop() + $(".docs-content").height();
// 				var top_of_screen = $(".docs-content").scrollTop();
// 				var link = $(this).attr("id");


// 				// if ( ( el.position().top + el.height() > 0) && ($(this).position().top < $(".docs-content").height() ) ) {

// 				// 	console.log("top");
// 				// 	$("a[href='#"+link+"'").parents(".nav-section").prev(".nav-section").find(".sub-navigation").slideUp();
// 				// 	// $("a[href='#"+link+"'").parents(".sub-navigation").slideDown();
// 				// }


// 				// elementBottom > viewportTop && elementTop < viewportBottom
				
// 				console.log(link + " | " + "Top of element " + top_of_element + " | " + "Bottom of element " + bottom_of_element + " | " + "Top of screen " + top_of_screen + " | " + "Bottom of screen " + bottom_of_screen);
				
// 				// within view
// 				if ((top_of_element < 0) && (bottom_of_element > 0)) {
// 					console.log(link);
					
	
// 					$("a[href='#"+link+"'").parents(".sub-navigation").slideDown();
// 				}

// 				else if ((top_of_element > 0) && (bottom_of_element > 0)) {
// 					$("a[href='#"+link+"'").parents(".sub-navigation").slideUp();

// 				}

// 				// else {

// 				// 	// $("a[href='#"+link+"'").parents(".sub-navigation").slideUp();
// 				// }


// 				// if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
// 				//     // The element is visible, do something

// 				//    // console.log(link);
// 				// }
// 				// else {
// 				//     // The element is not visible, do something else
// 				//     // alert("test");
// 				//     // console.log("Test");
// 				// }



// 				// var height = $(this).height();
// 				// // console.log(height);

// 				// var view = $(this).offset().top;

// 				// var position = $(this).height() + scrollPos;

// 				// // console.log(position);

// 				// var t = $(".docs-content").prop('scrollHeight');

// 				// // console.log(t);


// 				// // console.log(sections[index]);


// 				// var length = sections.length;


// 				// sections[i];


// 				// var elStart = 
				


// // 				if ( view ) 
// // 				{
// // 					var link = $(this).attr("id");

// // 					// $(".sub-navigation").slideUp();

// // 					// console.log(link);

// // 					// $("a[href='#"+link+"'").parents(".nav-section").prev(".nav-section").find(".sub-navigation").slideUp();
// // // 
// // 					// $("a[href='#"+link+"'").parents(".sub-navigation").slideDown();

// // 					// $(this).parents(".sub-navigation").slideToggle();
// // 					that.find("a").removeClass(settings.activeClass);
// // 					that.find("a[href='#"+link+"']").addClass(settings.activeClass);
// // 				}
// 			});	
			
// 		});
// 	};
// })(jQuery);