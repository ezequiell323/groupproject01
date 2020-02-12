
// Raul code
//Client ID
//vLPrgG6PXNrL_cpL4E8SjA
//yelp API key
//yFGA5vRwWDXaOq0f6KaNtexkN5JjC-Bnl1X5kcfX2WLDLfyMbbtwfD9XoTF8cC8KqaWLwuaJ4fnRUJCNDmtEfB6IyvwTJtRvLeHF_gpMms8ZIRycX52NLnUkFOY-XnYx

var city="new york";

var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&location="+city;

$.ajax({
    url: queryURL,
    method: "GET",
    headers:{
      Authorization:"Bearer yFGA5vRwWDXaOq0f6KaNtexkN5JjC-Bnl1X5kcfX2WLDLfyMbbtwfD9XoTF8cC8KqaWLwuaJ4fnRUJCNDmtEfB6IyvwTJtRvLeHF_gpMms8ZIRycX52NLnUkFOY-XnYx"
    }
  }).then(function(response) {
    console.log(response);
    //for (var i = 0; i < response.length; i++) {
     
     
      var newtitle =$("<h2>");
      newtitle.html(response.businesses[0].name);
      var locAddress =$("<h4>");
      locAddress.html(response.businesses[0].location.address1);
      var telPhone =$("<p>");
      telPhone.html(response.businesses[0].display_phone);
     
      $("body").append(newtitle);
      $("body").append(locAddress);
      $("body").append(telPhone);

      
     

    //};
  });
    /*
      <div class="col mb-3">
     <!--event1 -->       
          <div class="card">
            <img src="assets/images/events.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 id="firstSpot"class="card-title">Title</h5>
              <p  class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn btn-warning">Go somewhere</a>
            </div>
          </div>
        </div>

        var card =$("<div>");
      card.html("this is my div");
      $("body").append(card);





      $("#firstSpot").html('<p>Business location: '+response.businesses[1].name+'</p>');
      console.log(response.businesses[1].name[1]);

      
    $("#secondSpot").html('<p>Business location: '+response.businesses[2].name+'</p>');
      console.log(response.businesses[2].name[1]);



    /*var businesses = response.businesses;

    for (var i = 0; i < 7; i++) {
      var businessName = businesses[i].name;

      $('body').append('<h1>Business location: '+businesses[i].location.display_address[0]+'</h1>')
      console.log(businesses[i].location.display_address[0]);
    }*/


//Jose code