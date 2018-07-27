var map;
var userPos = {lat: -34.397, lng: 150.644};
var cuisine = "mexican";
var infoWindow;
function initMap() {
  pos = userPos;
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 13
  });
  infoWindow = new google.maps.InfoWindow;
  var service = new google.maps.places.PlacesService(map);

        service.nearbySearch({
          location: pos,
          radius: 3000,
          type: ['restaurant'],
          keyword: [cuisine]
        }, callback);
      }

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
     }
    }
  }


  function createMarker(place) {
    console.log(place.name);
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      //is this line of code redundant? could placeLoc variabe be used here?
      position: place.geometry.location
    });
    var infoContent = "<h3>" + place.name + "</h3>";
    var infoWindow = new google.maps.InfoWindow({
      content:infoContent
    });
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }

    google.maps.event.addListener(marker, 'click', function() {
      console.log(place);
      infoWindow.open(map, marker);
      setTimeout(function(){
        infoWindow.close();
      }, 7000);
    });
  }

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      userPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(userPos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(userPos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }



  // function location(){
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //      pos = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };
  //     // var cuisine = $("#cuisine").val();
  //     // console.log("the value of search is " + cuisine);
  //     // // console.log(userLocation);
  //     // var apiKey = "AIzaSyBbk3RQCujaAyCVk8esnxZgSRP2RF_rRrg";
  //     //
  //     //
  //     // var urlQuery = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + pos.lat + "," + pos.lng + "&radius=3000&type=restaurant&keyword=" + cuisine + "&key=" + apiKey;
  //     //
  //     // $.ajax({
  //     //   url: urlQuery,
  //     //   method: "GET"
  //     // }).then(function(response){
  //     //   console.log(response);
  //     // });
  //     return pos;
  //   });
  // }
  //
  // location();







  $('#search').on("click",function(){
    event.preventDefault();
    // location();


    cuisine = $("#cuisine").val();
    map.setCenter(userPos);
    initMap();
    var userMarker = new google.maps.Marker({
      map: map,
      //is this line of code redundant? could placeLoc variabe be used here?
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      position: userPos

    });

    // console.log("the value of search is " + cuisine);
    // // console.log(userLocation);
    // var apiKey = "AIzaSyBbk3RQCujaAyCVk8esnxZgSRP2RF_rRrg";
    //
    //
    // var urlQuery = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + pos.lat + "," + pos.lng + "&radius=3000&type=restaurant&keyword=" + cuisine + "&key=" + apiKey;
    // console.log(pos.lat);
    // console.log(pos.lng);
    // $.ajax({
    //   url: urlQuery,
    //   method: "GET"
    // }).then(function(response){
    //   console.log(response);
    // });


  });



//Document ready closing
