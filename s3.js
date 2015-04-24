var VERSION = '1.0.0';
var fs = require('fs');
var path = require('path');
var desh = require('lodash');
var parser = require('commander');
var key = path.join(__dirname, 'keys.enc');
var log = require('simple-node-logger').createSimpleLogger();
var S3BucketWatch = require('./node_modules/aws-commons/lib/S3BucketWatch.js');
var AWSCommonsFactory = require('aws-commons').commons.AWSCommonsFactory;

fs.readFile(key, 'utf8', function (err, data) {
  var opts = {
    base64Keys:data,
    log:log
  };

  var factory = AWSCommonsFactory.createInstance(opts);

  var s3 = factory.createS3Connection();

  log.info(s3);
  log.info(S3BucketWatch);
  // s3.listBuckets(listBucketsCallback);
});

var listBucketsCallback = function (err, data) {
  if (err) {
    log.error(err);
  }
  log.info(JSON.stringify(data));
};