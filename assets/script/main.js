
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
    console.log(response)
    
    $("#firstSpot").html('<p>Business location: '+response.businesses[1].name+'</p>');
      console.log(response.businesses[1].name[1]);















      
    //$("#secondSpot").html('<p>Business location: '+response.businesses[2].name+'</p>');
     // console.log(response.businesses[2].name[1]);



    /*var businesses = response.businesses;

    for (var i = 0; i < 7; i++) {
      var businessName = businesses[i].name;

      $('body').append('<h1>Business location: '+businesses[i].location.display_address[0]+'</h1>')
      console.log(businesses[i].location.display_address[0]);
    }*/
  });

//Jose code