// $(document).ready(function() {

// 	// Dropdown Menu Handler
// 	$(".dropdown-menu-toggle").click(function() {
// 		$(this).find(".dropdown-menu").toggleClass("show");
// 	});

	

// 	$(".primary-nav-links .button").click(function() {
// 		$(".modal-login").addClass("show");
// 		$(".modal-backdrop").addClass("show");
// 	});

// 	// Mobile Navigation Handler
// 	$(".mobile-navigation-toggle").click(function() {
// 		$(this).toggleClass("close");
// 		$("body").toggleClass("mobile-nav-open");
// 		$(".primary-nav-links").toggleClass("show");
		
// 		var current = 100;
// 		$(".primary-nav-links li").each(function() {
// 			$(this).css("animation-delay", current + "ms");
// 			current = current + 50;
// 		});
// 		$(".primary-nav-links li").toggleClass("slide-in-left");
// 		$(".primary-navigation-desktop").toggleClass("mobile-nav-open");
// 	});

// 	$(".js-modal-close").click(function() {
// 		$(this).parents(".modal").removeClass("show");
// 		$(".modal-backdrop").removeClass("show");
// 	});

// 	$("dt").click(function() {
// 		$(this).next("dd").slideToggle();
// 		$(this).toggleClass("is-active");
// 	});

// 	$(".button.white").click(function() {
// 		$(".modal").addClass("show");
// 		$(".modal-backdrop").addClass("show");
// 	});
// });