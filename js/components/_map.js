function map() {
	var canvas = document.getElementById('map');
	var isDraggable = $(document).width() > 480 ? true : false; // If document is wider than 480px, isDraggable = true, else isDraggable = false
	var address = {lat: 51.506116, lng: -0.135969};
	var options = {
		center: address,
		draggable: isDraggable,
		zoom: 14,
		scrollwheel: false,
		streetViewControl: false, 
		mapTypeControl: false,
		zoomControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(canvas, options);
	var marker = new google.maps.Marker({
		position: address,
		map: map,
		title: 'Hello World!'
	});
}

google.maps.event.addDomListener(window, 'load', map);