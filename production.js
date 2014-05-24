var newrelic = require('newrelic');

var express = require('express');
var request = require('request');
var prerender = require('prerender-node')

var app = express();
var port = process.env.PORT || 8000;
var pageCache = {};

app.use(express.logger());
app.use(express.compress());
app.use(prerender.set('prerenderToken', process.env.PRERENDER_TOKEN));
app.use(express.static(__dirname + '/dist', { maxAge: 86400000 })); //cache one day
app.use(express.static(__dirname + '/public'));

// TODO DRY this up from the gulpfile
app.get('/pages/:page', function(req, res){
  var pageName = req.params.page;
  if (pageCache[pageName]){
    res.send({'html': pageCache[pageName]});
  } else {
  	var options = {
      url: 'https://api.github.com/repos/southpolesteve/yahara/contents/app/pages/' + pageName + '.html',
      headers: {
        'User-Agent': 'Yahara'
      }
    };
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var content = new Buffer(JSON.parse(body).content, 'base64').toString('ascii');
        pageCache[pageName] = content;
        res.send({'html': pageCache[pageName]});
      }
    });
  }
});

app.get('/*', function(req, res){
  res.sendfile(__dirname + '/dist/index.html');
});

app.listen(port);
