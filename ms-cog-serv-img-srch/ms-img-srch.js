require('dotenv').load();
var https = require('https');

function searchForImages(searchObj, callback){
    var options = {
        protocol: 'https:',
        host: 'api.cognitive.microsoft.com',
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.IMAGE_SEARCH
        },
        path: '/bing/v5.0/images/search'
    }
    
    console.log(searchObj.searchTerms);
    if(searchObj.searchTerms){
        options.path = String.prototype.concat(options.path, '?q=', getQueryString(searchObj.searchTerms));
        // console.log(options.path);
    }
    if(searchObj.offset){
        options.path = String.prototype.concat(options.path, '&count=', searchObj.offset);
        console.log(options.path);
    }
        
    https.get(options, (res) => {
        var body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            var parsed = JSON.parse(body);
            callback(parsed);
        });
    }).on('error', (e) => {
      console.error(e);
    });
}

function getQueryString(arr){
    return arr.join('%20');
}

module.exports = {
    searchForImages,
    getQueryString
}