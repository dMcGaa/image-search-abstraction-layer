var express = require('express');
var imageSearch = require('./image-search-layer/util-image-search');
var app = express();

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
  var str = request.url;
  str = str.slice(("/api/imagesearch/").length);
  var searchObj = imageSearch.imageSearch(str);
  response.send(searchObj.searchTerms);
  
  //add to recently searched array
  recentSearch.push({
    term: searchObj.searchTerms.join(" "),
    when: Date.now()
  });
});

app.get('/api/latest/imagesearch/', function(request, response) {
  response.send(recentSearch);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});