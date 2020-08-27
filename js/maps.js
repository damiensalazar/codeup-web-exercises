console.log(secret);

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFtaWVuc2FsYXphciIsImEiOiJja2Vjd3VwZHEwZzMyMnFwM2N1a3l0aWZlIn0.XYKx9HjM7gIZsnUYN_v_kw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 15 // starting zoom
});
//Geekdom
// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.4935, 29.4264])
//     .addTo(map);
//
// var burj = new mapboxgl.Marker().setLngLat([55.2744, 25.1972]).addTo(map);
//
// var eiffle = new mapboxgl.Marker().setLngLat([2.2945, 48.8584]).addTo(Map);

// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map)
//
// var alamoMarker = new mapboxgl.Marker()
//     .setLngLat([-98.4861, 29.4250])
//     .addTo(map)
//
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember The Alamo!</p>")
//     .addTo(map)
//
// marker.setPopup(alamoPopup)

