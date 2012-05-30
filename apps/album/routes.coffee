formidable = require ('formidable')
express = require ('express')
awssum = require('awssum');
amazon = awssum.load('amazon/amazon');
inspect = require('eyes').inspector()
fs = require('fs')
console.dir = require('cdir')
_ = require('underscore')._

S3 = awssum.load('amazon/s3').S3
s3 = new S3('12SZTMN88X2EPZQKY182', 'Qm6E+NSiw0J8WUOxAwiviD7X8rLKcTUX0S+LxoFJ', '8337-9200-2458', amazon.US_EAST_1)

store_s3 = (bucketname, files) ->
  _.each files, (file, key, list) ->
    fs.stat file.path, (err, file_info) ->
      if err
        inspect err, "Error reading file"
        return


      bodyStream = fs.createReadStream(file.path)
      console.log file.path
      console.log file_info.size

      options =
        BucketName: bucketname
        ObjectName: file.path + "/" + file.name
        ContentLength: file_info.size
        Body: bodyStream

      s3.PutObject options, (err, data) ->
        console.log "\nputting an object to " + bucketname + " - expecting success"
        inspect err, "Error"
        inspect data, "Data"

routes = (app) ->
  app.post '/album', (req, res) ->
    inspect req.param('session_id')
    store_s3 'swapsnaps_dev', req.files.files


module.exports = routes
