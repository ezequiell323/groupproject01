    // Miami-FortLauderdale: 334 - Music Events - TicketMaster Supported Designated Market Area (DMA)    

    var queryURL="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=334&apikey=cCh76O7Ve0ZGF8uXq89VksBzFEZGrmOt";

    // From TicketMaster's API page:
    $.ajax({
      type:"GET",
      url: queryURL,
      async:true,
      dataType: "json",
      success: function(response) {
                  console.log(response);
              

        // Create a for loop
        // Create an element for each event
        // append the element to the front end
        // all events for (var i = 0; i < response._embedded.events.length; i++)
      
       for (var i = 0; i < response._embedded.events.length; i++) {
          $('body').append('<h1>Name: '+ response._embedded.events[i].name+'</h1>')
          $('body').append('<h2>URL: '+ response._embedded.events[i].url+'</h1>')
          $('body').append('<h3>Date: '+ response._embedded.events[i].dates.start.dateTime+'</h1>')
          
          // console.log(response._embedded.events[i].images[0].url);


          var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
          img.attr('src', response._embedded.events[i].images[0].url);
          $('body').append(img);

        
        // <div class="col mb-3">
        //   <div class="card">
        //     <img src="assets/images/events.jpeg" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">Card title</h5>
        //       <ul style="list-style-type:none;">
        //         <li>Coffee</li>
        //         <li>Tea</li>
        //         <li>Milk</li>
        //       </ul>
        //       <a href="#" class="btn btn-warning">Go somewhere</a>
        //     </div>
        //   </div>
        // </div>
        // <div class="col mb-3">
        //   <div class="card">

          //Step 1 - Create div above jusing jquery
          //Step 2 - Append div to container

          
          //Create a div

          // var outerDiv = $('div');
          // outerDiv.addClass("col mb-3");

          // var innerDiv = $('div');
          // innerDiv.addClass('card');

          // var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
          // img.attr('src', response._embedded.events[i].images[0].url);

          // var innerDiv2 = $('div');
          // innerDiv2.addClass('card');
          
          // var header = $('h5');
          // header.text(response._embedded.events[i].name);

          // var newLink = $("<a />", {
          //     id : "",
          //     name : "",
          //     href : response._embedded.events[i].url,
          //     text : ""
          //     });
              
          //     $('body').append(img);

        }
                
    }}); 