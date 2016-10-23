// making the API request to search for a given movie title (The Breakfast Club) and return its information
function getUpcoming(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=f6631e05f63626f94e6923102314856e",
    "method": "GET",
    "processData": false,
    "data": "{}"
  }

  // once we receive the response, we parse through the JSON to find the relevant data & insert using DOM manipulation
  $.ajax(settings).done(function (response) {
    var moviecount = response.results.length;
    console.log(moviecount);

    $('#upcoming').show();
    $('#nowplaying').hide();
    $('#theaters').hide();
    $('#upcoming').empty();

    for (i=0; i < 8; i++) {
      var info  = document.getElementById('upcoming');

      var moviediv = document.createElement('div');
      

      // add poster image of movie
      var poster  = document.createElement('img');
      $("img").css("width", 250);
      poster.src = "https://image.tmdb.org/t/p/w300"+response.results[i].poster_path;
      moviediv.appendChild(poster)


      // add title of movie        
      var title  = document.createElement('h6');
      var titleText = document.createTextNode(response.results[i].title);
      title.appendChild(titleText);
      moviediv.appendChild(title);

      info.appendChild(moviediv);
    }
  });
}