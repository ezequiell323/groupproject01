//var city=$("#city").val();
//var zipCode=$("#zipCode").val();
var city="miami";
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=burgers&location="+city;

$.ajax({
    url: queryURL,
    method: "GET",
    headers:{
      Authorization:"Bearer yFGA5vRwWDXaOq0f6KaNtexkN5JjC-Bnl1X5kcfX2WLDLfyMbbtwfD9XoTF8cC8KqaWLwuaJ4fnRUJCNDmtEfB6IyvwTJtRvLeHF_gpMms8ZIRycX52NLnUkFOY-XnYx"
    }
  }).then(function(response) {
    console.log(response);
    for (var i = 0; i < response.businesses.length; i++) {
  
     //Create variables to reference in code below
      var image = response.businesses[i].image_url;
      var name = response.businesses[i].name;
      var address = response.businesses[i].location.address1;
      var telephone = response.businesses[i].display_phone;

      //Create Master Element and Append to container
      $(".containerRow").append(" <div class='col-4 mb-3'> <div class='card'> <img height='300' width='auto' src='"+ image + "'class='card-img-top alt='...'> <div class='card-body'><h5 id='firstSpot'class='card-title'>" + name + "</h5><p  class='card-text'>" + address + " " + telephone + "</p><a href='#' class='btn btn-warning'>Go somewhere</a></div> </div></div>");
  };
  });


    /*
      <div class="row">
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
  var businesses = response.businesses;

    for (var i = 0; i < 7; i++) {
      var businessName = businesses[i].name;

      $('body').append('<h1>Business location: '+businesses[i].location.display_address[0]+'</h1>')
      console.log(businesses[i].location.display_address[0]);
    
    // Raul code
    //Client ID
    //vLPrgG6PXNrL_cpL4E8SjA
    //yelp API key
    //yFGA5vRwWDXaOq0f6KaNtexkN5JjC-Bnl1X5kcfX2WLDLfyMbbtwfD9XoTF8cC8KqaWLwuaJ4fnRUJCNDmtEfB6IyvwTJtRvLeHF_gpMms8ZIRycX52NLnUkFOY-XnYx

!<----------------------------------------------------------------------------------------------------->>>>>>
  }*/
//Jose code