var express = require('express');
var app = express();

var searchTerm = [];
var searchResult = [];
var recentSearch = [];

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});
app.get('/api/imagesearch/*', function(request, response) {
  console.log(request.url);
  var str = request.url;
  str = str.slice(("/api/imagesearch/").length);

  if ((/\w+/).test(str)) {

    if ((/\?offset=\d+\W|\&/).test(str)) {
      var tempArr = str.match(/\?offset=\d+\W|\&/);
      console.log(tempArr);
      console.log("before offset remove: " + str);
      str = str.replace(tempArr[0], tempArr[0][tempArr[0].length - 1]);
      str = str.slice(0, str.length-1); //remove last character (should be "&")
      console.log("after offset remove: " + str);
    }
    searchTerm = str.split(/\%\w{2}|\W/);
    console.log(searchTerm);
    //request.url = "test%20test";  //cannot reset request url in address bar ("beauitify" it)

    // response.send(searchTerm);
    response.render('pages/gapi');
  }
  else {
    console.log(str);
    console.log("Invalid Input");
    response.send(searchTerm);
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});