// makes the API request to search for a movie
function getMovie() {
  // obtain movie title from form
  var title = $('#searchEntry').val();
  // create searchURL w query info
  var searchURL = "https://api.themoviedb.org/3/search/movie?query="+title+"&language=en-US&api_key=f6631e05f63626f94e6923102314856e";
  // send request to API
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": searchURL,
    "method": "GET",
    "processData": false,
    "data": "{}"
  }

  // process json data once query is processed
  $.ajax(settings).done(function (response) {

    // get rid of any possible content
    $('#searchContainer').empty();

    // find search div & search container row
    var info  = document.getElementById('search');
    var contain = document.getElementById('searchContainer');
    
    // wrap poster image in one div
    var pd = document.createElement('div');
    pd.className="col-sm-4";

    // add poster image of movie
    var poster  = document.createElement('img');
    poster.src = "https://image.tmdb.org/t/p/w300"+response.results[0].poster_path;
    pd.appendChild(poster);
    contain.appendChild(pd);

    // wrap movie info in one div
    var id = document.createElement('div');
    id.className="col-sm-4";

    // add title of movie        
    var title  = document.createElement('h3');
    var titleText = document.createTextNode(response.results[0].title);
    console.log(titleText);
    title.appendChild(titleText);
    id.appendChild(title);

    // description of movie
    var desc  = document.createElement('h4');
    var descText = document.createTextNode(response.results[0].overview);
    console.log(descText);
    desc.appendChild(descText);
    id.appendChild(desc);
    contain.appendChild(id);

    // add new container content to search div
    info.appendChild(contain);
    // reset form for additional queries
    $("form").trigger("reset");
  });
}

// handles possible keypress GUI for users wanting to search using enter key
$(function(){
  $('#sf').keypress(function(e){
    if(e.which == 13) {
      getMovie();
      e.preventDefault();
    }
  })
})

function removeDivs (){
  $('#searchContainer').show();
  $('#nowplaying').hide();
  $('#upcoming').hide();
  $('#theaters').hide();   
}




