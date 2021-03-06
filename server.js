// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

app.get('/:date', function(request, response){
  var result = {};
  var stringDate = String(request.params.date);
  console.log(stringDate);
  var date = new Date( isNaN(stringDate) ? stringDate : parseInt(stringDate));
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  result.unix = date.getTime();
  result.natural = date.toDateString() !== 'Invalid Date' ? date.toLocaleDateString('en-US', options) : null;
  response.send(result);
  
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
