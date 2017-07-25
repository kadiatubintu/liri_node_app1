var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var second = process.argv[2];

if(second === "my-tweets"){
  var newTweet = new Twitter({
    consumer_key: keys.consumer_key,
    consumer_secret: keys.consumer_secret,
    access_token_key: keys.access_token_key,
    access_token_secret: keys.access_token_secret
    });
    newTweet.get('statuses/user_timeline', '', function(error, tweets, response){
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text)
        console.log("=======================");
        console.log("=======================");
      }
    })
  }

if(second === "spotify-this-song"){
  var spotify = new Spotify ({
  id: "88af65e8f9cd475689d14d8218a98357",
  secret: "e87f206d9cdc456f810c24b2fba3100e",
   });
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
    }
    console.log(data);
    })
  }

if(second === "do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);
    })
  }

if(second === "movie-this"){
  var movieName = process.argv[3];
  if(movieName ){
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
      request(queryUrl, function(error, response, body){
        if(!error && response.statusCode === 200){
           var movieData = JSON.parse(body);
          }
       console.log(movieData.Title);
       console.log(movieData.Year);
       console.log(movieData.imdbRating);
       console.log(movieData.Ratings[1]);
       console.log(movieData.Country);
       console.log(movieData.Language);
       console.log(movieData.Plot);
       console.log(movieData.Actors);
     })
   }
 }
