// variables
var map;
var markers;
var infowindow;
var initMap ="https://maps.googleapis.com/maps/api/js?key=AIzaSyBeZrxEkr6xV-CR2xEHki58ipGEHcOmFAY&callback=initMap"

function initMap(){
    // Map options
    var options = {
      zoom: 13,
      center: {lat:47.6062,lng:-122.3321}
    }

    // creating the new map object. Map()will take 2 parameters
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Create an array of markers
    var markers = [
      {
        coords: {lat:47.6205,lng:-122.3493},
        content: '<h6>Space Needle</h6>'
      },
      {
        coords: {lat:47.6101,lng:-122.3420},
        content: '<h6>Pike Place Market</h6>'
      },
      {
        coords: {lat:47.6676,lng:-122.3962},
        content: '<h6>Ballard Locks</h6>'
      },
      {
        coords: {lat:47.6338,lng:-122.3158},
        content: '<h6>Bruce Lee Grave Site</h6>'
      },
      {
        coords: {lat:47.6067,lng:-122.3325},
        content: '<h6>Central Public Library</h6>'
      },
      {
        coords: {lat:47.6398,lng:-122.2945},
        content: '<h6>Washington Park Arboretum</h6>'
      },
      {
        coords: {lat:47.6020,lng:-122.3317},
        content: '<h6>Smith Tower</h6>'
      },
      {
        coords: {lat:47.6512,lng:-122.3477},
        content: '<h6>Fremont Troll</h6>'
      },
      {
        coords: {lat:47.5180,lng:-122.2964},
        content: '<h6>Museum of Flight</h6>'
      },
      {
        coords: {lat:47.6295,lng:-122.3599},
        content: '<h6>Kerry Park</h6>'
      },

    ];

    // loop through markers
    for (var i = 0; i < markers.length; i++){
      // Add a marker
      addMarker(markers[i]);
    }
  
  // function to add marker to pass in values and then put in dynamic values inside
  // add marker function
  function addMarker(props){
    var marker = new google.maps.Marker({
    position: props.coords,
    map: map,
    icon: ''
  });

  // check for content
    if(props.content){
      // information on the map marker
  var infoWindow = new google.maps.InfoWindow({
    content: props.content
  });

  // add a listener for the map marker information
  marker.addListener('click', function(){
    infoWindow.open(map,marker);
  });
    }
  }

  };