// variables

var map;
var infoWindow;

function createMap() {
    var options = {
        center: { lat: 47.6062, lng: -122.3321 },
        zoom: 12
    };

    map = new google.maps.Map(document.getElementById('map'), options);

    // variable for using the search functionality
    var input = document.getElementById("search");
// initialize the search box
var searchBox = new google.maps.places.SearchBox(input);

// search results bias in current viewport (Seattle) by adding bounds
map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
});

// see search results in map with markers
var markers = [];

// add another listener for our places changed
searchBox.addListener('places_changed', function() {
    // this callback will fire when the user selects a prediction from the list
    var places = searchBox.getPlaces();

    // if no places are found 
    if(places.length === 0)
    return;

    markers.forEach(function (m) { m.setMap(null); });
    markers = [];

    // bounds is the coordinate boundaries of a map
    var bounds = new google.maps.LatLngBounds();

    // geometry is data position on the map
    places.forEach(function (p) {
        if (!p.geometry)
        return;

        // object will take a few attributes
        markers.push(new google.maps.Marker({
            map: map,
            title: p.name,
            position: p.geometry.location
        }));

        // if geometry of a place has a viewport
        if (p.geometry.viewport)
        // setting for recommended bounds for that site
        bounds.union(p.geometry.viewport);
        else
        bounds.extend(p.geometry.location);
    });
    map.fitBounds(bounds);

});




    // using constructor provided by Google to use for Geolocator
    infoWindow = new google.maps.InfoWindow;

    // check if geolocation is available in browser to use users position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (p) {
            // if all goes well then it will grab the info
            var position = {
                lat: p.coords.latitude,
                lng: p.coords.longitude
            };
            infoWindow.setPosition(position);
            infoWindow.setContent("Your location!");
            infoWindow.open(map);
            // callback function in case there is an error
        }, function () {
            handleLocationError("Geolocation service failed", map.center());
        })
    } else {
        handleLocationError("No geolocation available", map.center());
    }
}
// provide error message if geolocation is not available
function handleLocationError(content, position) {
    infoWindow.setPosition(position);
    infoWindow.setContent(content);
    infoWindow.open(map);

}