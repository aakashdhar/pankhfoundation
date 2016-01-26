var map = new GMaps({
	  div: '.map',
	  lat: 28.4447562,
	  lng: 77.1425387,
	  zoom: 12
	});

	map.addMarker({
  	lat: 28.4447562,
  	lng: 77.1425387,
  	title: 'Pankh Foundation',
  	infoWindow: {
  	content: '<p>Pankh foundation office</p>'
	}
});