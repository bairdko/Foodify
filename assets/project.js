$(document).ready(function(){


  function location(){
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      return pos;
    });
  }







  $('#search').on("click",function(){
    event.preventDefault();
    var userLocation = location();


    var cuisine = $("#cuisine").val();
    console.log("the value of search is " + cuisine);
    // console.log(userLocation);
    var apiKey = "AIzaSyBbk3RQCujaAyCVk8esnxZgSRP2RF_rRrg";


    var urlQuery = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + userLocation.lat + "," + userLocation.lng + "&radius=3000&type=restaurant&keyword=" + cuisine + "&key=" + apiKey;

    $.ajax({
      url: urlQuery,
      method: "GET"
    }).then(function(response){
      console.log(response);
    });


  });
});
