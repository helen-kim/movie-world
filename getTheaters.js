function getTheaters (){  // do once original document loaded and ready
  // empties table of existing data
  $('#theatertable').empty();
  $('#theaters').show();
  // hides other divs
  $('#upcoming').hide();
  $('#nowplaying').hide();
  // retrieves json file from server
  $.getJSON("theaters.json", function(responseObject, diditwork) {
    //identifies table to add data to
    var table = $('#theatertable');
    table.append('$("<tr><th><b>Name</b></th>' 
                   + '<th><b>Address</b></th>'
                   + '<th><b>Phone Number</b></th></tr>")')
    for (var i = 0; i<responseObject.theaters.length; i++) {
      // parses through each object
      var theater = responseObject.theaters[i];
      // adds new row for each theater in the json file
      var t = '$("<tr><td>' + theater.name + '</td>' 
             + '<td>' + theater.address + '</td>'
             + '<td>' + theater.phone + '</td></tr>")'
      table.append(t);
    }

    } );  // getJSON
} 