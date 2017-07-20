var keys = require("./keys.js");
var second = process.argv[2];

  if(second === "my-tweets"){
      }

  if(second === "spotify-this-song"){
      }

  if(second === "movie-this"){
      }

  if(second === "do-what-it-says"){
      }

  var movieName = process.argv[3];
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
  var request = require("request");
  request(queryUrl, function(error, response, body){
    if(!error && response.statusCode === 200){
       //console.log(JSON.parse(body));
       var movieData = JSON.parse(body);
      /*var movieData = {
         title: "Title",
         year: "Year",
         imdb: "imdbRating",
         rating: "Ratings",
         country: "Country",
         language: "Language",
         plot: "Plot",
         actors: "Actors"
       }*/
     };
     //console.log(JSON.parse(movieData));
     console.log(movieData.Title);
     console.log(movieData.Year);
     console.log(movieData.imdbRating);
     console.log(movieData.Ratings[1]);
     console.log(movieData.Country);
     console.log(movieData.Language);
     console.log(movieData.Plot);
     console.log(movieData.Actors);
});
