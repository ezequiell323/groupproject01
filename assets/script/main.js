//var city=$("#city").val();

var city="new york";
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
    $(".containerRow").append(" <div class='col-4 mb-3'> <div class='card'> <img height='300' width='auto' src='" + image + "'class='card-img-top alt='...'> <div class='card-body'><h5 id='firstSpot'class='card-title'>" + name + "</h5><p  class='card-text'>" + address + " " + telephone + "</p><a href='#' class='btn btn-warning'>Go somewhere</a></div> </div></div>");
  };
});
//Eze code
var x = document.getElementById("nearMe");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  
  

  //Call Ticket Master API
  latlong = position.coords.latitude + position.coords.longitude;

  city = "";

//Jose code
var city="city";

if (city) {
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=334&apikey=cCh76O7Ve0ZGF8uXq89VksBzFEZGrmOt&city=" + city;
} else {
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=334&apikey=cCh76O7Ve0ZGF8uXq89VksBzFEZGrmOt&latlong=" + latlong;
}

$("#nearMe").val();



// From TicketMaster's API page:

var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=334&apikey=cCh76O7Ve0ZGF8uXq89VksBzFEZGrmOt&city=" + city;


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

      //Create Master Element and Append to container
      $(".containerRowTwo").append(" <div class='col-4 mb-3'> <div class='card'> <img height='300' width='auto' src='" + image + "'class='card-img-top alt='...'><div class='card-body'><h5 id='firstSpot'class='card-title'>" + name + "</h5><p  class='card-text'>" + date + " " + time + "</p><a href='#' class='btn btn-warning'>Go somewhere</a></div> </div></div>");

    };
  }

})




