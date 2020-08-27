// console.log(secret);

// mapboxgl.accessToken = 'pk.eyJ1IjoiZGFtaWVuc2FsYXphciIsImEiOiJja2Vjd3VwZHEwZzMyMnFwM2N1a3l0aWZlIn0.XYKx9HjM7gIZsnUYN_v_kw';
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
//     center: [-98.4916, 29.4252], // starting position [lng, lat]
//     zoom: 15 // starting zoom
// });
//Geekdom
// var geekdom = new mapboxgl.Marker().setLngLat([-98.4935, 29.4264]).addTo(map);
// var burj = new mapboxgl.Marker().setLngLat([55.2744, 25.1972]).addTo(map);
// var eiffel = new mapboxgl.Marker().setLngLat([2.2945, 48.8584]).addTo(map);

// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<p><em>Codeup Rocks!</em></p>")
//     .addTo(map)
//
// var alamoMarker = new mapboxgl.Marker()
//     .setLngLat([-98.4861, 29.4260])
//     .addTo(map);
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember The Alamo!</p>")
//     .addTo(map)
//
// alamoMarker.setPopup(alamoPopup)


// var alamoInfo = {
//     address: "The Alamo",
//     popupHTML: "<p>Remember the Alamo!</p>"
// };

// function placeMarkerAndPopup(info, token, map) {
//     geocode(info.address, token).then(function(coordinates) {
//         var popup = new mapboxgl.Popup()
//             .setHTML(info.popupHTML);
//         var marker = new mapboxgl.Marker()
//             .setLngLat(coordinates)
//             .addTo(map)
//             .setPopup(popup);
//         popup.addTo(map);
//     });
// }
//
// placeMarkerAndPopup(alamoInfo, MAPBOX_TOKEN, map);
//
//
//
// console.log("Coordinates for Codeup: [-98.489615, 29.426827]");
// geocode("600 Navarro St #350, San Antonio, TX 78205", MAPBOX_TOKEN)
//     .then(function(result) {
//         console.log("Geocoded results: " + result);
//         map.setCenter(result);
//         map.setZoom(15);
//     });
//
// var geekdom = {lng: -98.4935, lat: 29.4264};
// var burj = {lng: 55.2744, lat:25.1972};
// var eiffel = {lng: 2.2945, lat: 48.8584};
//
// reverseGeocode(geekdom, MAPBOX_TOKEN)
//     .then(function(result) {
//         console.log("Did we find Geekdom?  " + result);
//     })
//
// reverseGeocode(burj, MAPBOX_TOKEN)
//     .then(function(result) {
//         console.log("Did we find the Burj Kalifa?  " + result);
//     })
//
// reverseGeocode(eiffel, MAPBOX_TOKEN)
//     .then(function(result) {
//         console.log("Did we find the Eiffel Tower?  " + result);
//     })


//Generate map.
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFtaWVuc2FsYXphciIsImEiOiJja2Vjd3VwZHEwZzMyMnFwM2N1a3l0aWZlIn0.XYKx9HjM7gIZsnUYN_v_kw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [-98.5002, 29.4251], // starting position [lng, lat]
    zoom: 8 // starting zoom
});
//restaurant number one Mi Tierra.
var marker = new mapboxgl.Marker()
    .setLngLat([-98.5002, 29.4251])
    .addTo(map);

var miTierraPopup = new mapboxgl.Popup()
    .setLngLat([-98.5002, 29.4251])
    .setHTML("<p><em>Mi Tierra</em></p>")
    .addTo(map)

marker.setPopup(miTierraPopup)

//restaurant number two Salt Grass
var marker2 = new mapboxgl.Marker()
    .setLngLat([-98.619953, 29.462789])
    .addTo(map);

var saltPopup = new mapboxgl.Popup()
    .setLngLat([-98.619953, 29.462789])
    .setHTML("<p><em>Salt Grass!</em></p>")
    .addTo(map)

marker2.setPopup(saltPopup)

//restaurant number three

var marker3 = new mapboxgl.Marker()
    .setLngLat([-98.606203, 29.480626])
    .addTo(map);

var ojosPopup = new mapboxgl.Popup()
    .setLngLat([-98.619953, 29.462789])
    .setHTML("<p><em>Ojos Locos!</em></p>")
    .addTo(map)

marker3.setPopup(ojosPopup)

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', function() {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', function() {
    map.getCanvas().style.cursor = '';
});

let favEats = [
    {
        lngLat: [-98.5002, 29.4251],
        name: "Mi Tierra"

    },
    {
        lngLat: [-98.619953, 29.462789],
        name: "Salt Grass"
    },
    {
        lngLat: [-98.619953, 29.462789],
        name: "Ojos Locos"
    }
];

favEats.forEach(function(eats){
    var popup = new mapboxgl.Popup()
        .setHTML(`<p>${eats.name}</p>`);
    new mapboxgl.Marker()
        .setLngLat(eats.lngLat)
        .addTo(map)
        .setPopup(popup)
});









