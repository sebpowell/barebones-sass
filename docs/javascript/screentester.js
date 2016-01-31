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