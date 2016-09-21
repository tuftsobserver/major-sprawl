var map;
function initMap() {
	// Tufts Coordindates
	var lat = 42.407441
	var lng = -71.120193
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: lat, lng: lng},
		zoom: 15,
		scrollwheel: false
	});

	// Example circle
	var circle = new google.maps.Circle({
		strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: {lat: 42.404896, lng: -71.118387},
        radius: 100
    });
}