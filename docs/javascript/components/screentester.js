function setNavigation() {
    var path = window.location.pathname;

    path = path.replace(/\/$/, "").replace(/^\//, "");
    // path = decodeURIComponent(path);

    $(".docs-navigation > ul > li > a").each(function () {
        var href = $(this).attr('href');
        var sub = path.substring(0, href.length);
        console.log(sub, href);

        if (sub === href) {
           $(this).closest('li').addClass('active');
        }
    });
}

$(document).ready(function() {
	setNavigation();
	$(".mobile-navigation-toggle").click(function() {
		$(".docs-navigation").toggleClass("show");
		$(".backdrop").toggleClass("is-visible");
		$(this).toggleClass("close");
	});
});











	//
			// 	$(document).ready(function() {
			// 		var documentHead = $("head");
			// 		var document = $(".iframe-container");
			// 		$('<div class="phantom"><iframe id="myFrame" name="myFrame" src="about:blank"></div>').appendTo('body');
			// 		var d = $("iframe")[0].contentWindow.document; // contentWindow works in IE7 and FF
			//     d.open();
			//     d.close();
			// 		$("iframe").contents().find("head, body").remove();
			// 		$("html", d).append(documentHead, document);
			// 		documentHead.clone().prependTo("html");
			// 		// var toolbarSelected = $("iframe").contents().find(".screen-tester-sizes-selected");
			// 		// var toolbarDropdown = $("iframe").contents().find(".screen-tester-sizes-dropdown");
			// 		// var toolbarOption = $("iframe").contents().find(".screen-tester-sizes-dropdown > li");
			// 		var toolbarSelected = $(".screen-tester-sizes-selected");
			// 		var toolbarDropdown = $(".screen-tester-sizes-dropdown");
			// 		var toolbarOption = $(".screen-tester-sizes-dropdown > li");
			// 		toolbarSelected.on('click', function() {
			// 			toolbarDropdown.toggleClass("is-visible");
			// 		});
			// 		toolbarOption.on("click", function() {
			// 				var value = $(this).attr("data-size");
			// 			  $("iframe").width(value);
			// 				testingIframe.width(value);
			// 					// breakpointSelected.html( $(this).text() );
			// 					// breakpointDropdown.removeClass("is-visible");
			// 				});
			// 	});