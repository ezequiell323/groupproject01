$("#searchCityholder").hide();
// This will get called after getCurrentPosition()
function showPosition(position) {
  // Grab coordinates from the given object
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);
  //Call the API and pass in the coordinates
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=cCh76O7Ve0ZGF8uXq89VksBzFEZGrmOt&latlong="+lat+","+lon;
$.ajax({
  type: "GET",
  url: queryURL,
  async: true,
  dataType: "json",
  success: function (response) {
    $(".ticketMaster").removeClass("loader")
    for (var i = 0; i < response._embedded.events.length; i++) {
      var image = response._embedded.events[i].images[0].url;
      var name = response._embedded.events[i].name;
      var date = response._embedded.events[i].dates.start.localDate;
      var time = response._embedded.events[i].dates.start.localTime;
      var url = response._embedded.events[i].url;
          var info;
          if (info = response._embedded.events[i].info === undefined) {
            info = ""
          } else {
            info = response._embedded.events[i].info;
          }
          
          //Create Master Element and Append to container
          $(".containerRowTwo").append(" <div class='col-xl-4 col-lg-4 col-md-6 col-12'> <div class='card'> <img height='300' width='auto' src='"+ image + "'class='card-img-top alt='...'><div class='card-body'><h5 id='firstSpot'class='card-title'>" + name + "</h5><p  class='card-text'>" + date + " " + time + " " + info +"</p><a target='_blank'href="+url+" class='btn btn-warning'>Buy your tickets</a></div> </div></div>");
    };
  }
})
// Call our next function, passing on the coordinates
  console.log(lat);
  console.log(lon);
}
function getLocation() {
  // Make sure browser supports this feature
  if (navigator.geolocation) {
    // Provide our showPosition() function to getCurrentPosition
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
  else {
    alert("Geolocation is not supported by this browser.");
  }
}
$("#nearMe").click(function(){ 
$(".ticketMaster").addClass("loader")
//Get Location
getLocation();
  $("#landPageHolder").hide();
  $("#searchCityholder").show();
});
$("#nearMe2").click(function(e){ 
  e.preventDefault();
  $(".ticketMaster").addClass("loader");
  $(".containerRowTwo").text("");
  //Get Location
  getLocation();
    $("#landPageHolder").hide();
    $("#searchCityholder").show();
  });
$("#findCity").on("click", function(e){
  e.preventDefault();
  $(".ticketMaster").addClass("loader");
  $(".containerRowTwo").text("");
  
    var cityInput = $("#cityInput").val();
    console.log(cityInput);
  
    var city=cityInput;
  
    
      var queryURL="https://app.ticketmaster.com/discovery/v2/events.json?city="+city+"&apikey=cCh76O7Ve0ZGF8uXq89VksBzFEZGrmOt";
    
    // From TicketMaster's API page:
    $.ajax({
      type: "GET",
      url: queryURL,
      async: true,
      dataType: "json",
    
      success: function (response) {
    
        for (var i = 0; i < response._embedded.events.length; i++) {
    
          var image = response._embedded.events[i].images[0].url;
          var name = response._embedded.events[i].name;
          var date = response._embedded.events[i].dates.start.localDate;
          var time = response._embedded.events[i].dates.start.localTime;
          var url = response._embedded.events[i].url;
          var info;
          if (info = response._embedded.events[i].info === undefined) {
            info = ""
          } else {
            info = response._embedded.events[i].info;
          }
          
          //Create Master Element and Append to container
          $(".containerRowTwo").append(" <div class='col-xl-4 col-lg-4 col-md-6 col-12'> <div class='card'> <img height='300' width='auto' src='"+ image + "'class='card-img-top alt='...'><div class='card-body'><h5 id='firstSpot'class='card-title'>" + name + "</h5><p  class='card-text'>" + date + " " + time + " " + info +"</p><a target='_blank'href="+url+" class='btn btn-warning'>Buy your tickets</a></div> </div></div>");
          $(".ticketMaster").removeClass("loader")
        };
      }
    
    })
  
  });
$("#searchCity").click(function(){ 
  $("#searchCityholder").show();
  $("#landPageHolder").hide();
});
//Yelp code Api starts here
var city="miami";
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=burgers&location="+city;
$.ajax({
  url: queryURL,
  method: "GET",
  headers: {
    Authorization: "Bearer yFGA5vRwWDXaOq0f6KaNtexkN5JjC-Bnl1X5kcfX2WLDLfyMbbtwfD9XoTF8cC8KqaWLwuaJ4fnRUJCNDmtEfB6IyvwTJtRvLeHF_gpMms8ZIRycX52NLnUkFOY-XnYx"
  }
}).then(function (response) {
  console.log(response);
  for (var i = 0; i < response.businesses.length; i++) {
    //Create variables to reference in code below
    var image = response.businesses[i].image_url;
    var name = response.businesses[i].name;
    var address = response.businesses[i].location.address1;
    var telephone = response.businesses[i].display_phone;
    //Create Master Element and Append to container
    $(".containerTwo").append(" <div class='col-xl-4 col-lg-4 col-md-6 col-12'> <div class='card'> <img height='300' width='auto' src='" + image + "'class='card-img-top alt='...'> <div class='card-body'><h5 id='firstSpot'class='card-title'>" + name + "</h5><p  class='card-text'>" + address + " " + telephone + "</p><a href='#' class='btn btn-warning'>Go somewhere</a></div> </div></div>");
  };
});
