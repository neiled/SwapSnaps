
var awssum = require('awssum');
var amazon = awssum.load('amazon/amazon');
var S3 = awssum.load('amazon/s3').S3;
var s3 = new S3('12SZTMN88X2EPZQKY182', 'Qm6E+NSiw0J8WUOxAwiviD7X8rLKcTUX0S+LxoFJ', '8337-9200-2458', amazon.US_WEST_1);

s3.ListBuckets(function(err, data) {
    if (err) {
      // something went wrong with the request
      console.log(err);
      return;
    }

    // request was fine
    console.log(data.Body.ListAllMyBucketsResult);
});


