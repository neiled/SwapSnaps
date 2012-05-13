
/**
 * Module dependencies.
 */
require ('coffee-script')

var express = require('express')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

require('./apps/welcome/routes')(app)
require('./apps/album/routes')(app)

// var awssum = require('awssum');
// var amazon = awssum.load('amazon/amazon');
// var S3 = awssum.load('amazon/s3').S3;
// 
// var s3 = new S3('12SZTMN88X2EPZQKY182', 'Qm6E+NSiw0J8WUOxAwiviD7X8rLKcTUX0S+LxoFJ', '8337-9200-2458', amazon.US_WEST_1);
// 
// s3.ListBuckets(function(err, data) {
//     if (err) {
//       // something went wrong with the request
//       console.log(err);
//       return;
//     }
// 
//     // request was fine
//     console.log(data);
// });
// 
// 
//
var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
