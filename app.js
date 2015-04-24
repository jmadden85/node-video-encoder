var hb = require('handbrake-js');
var path = require('path');
var fs   = require('fs');
var cwd = process.cwd();


var encoder = function (options) {
  hb.spawn(options)
  .on("error", function (error) {
    console.log(error);
  })
  .on("begin", function () {
    console.log('started');
  })
  .on("end", function () {
    console.log('end');
  })
  .on("complete", function () {
    console.log('exiting handbrake');
  })
  .on("progress", function (progress) {
    console.log(
      "Percent complete: %s, ETA: %s",
      progress.percentComplete,
      progress.eta
    );
};

var encodeOptions = {
  highRes: {
    input: '',
    output: '',
    encoder: 'x264',
    height: 720,
    ab: 128,
    vb: 384,
    2: '',
    aencoder: 'av_aac',
    rate: 29.97
  },
  midRes: {
   input: '',
   output: '',
   encoder: 'x264',
   height: 480,
   ab: 128,
   vb: 256,
   2: '',
   aencoder: 'av_aac',
   rate: 29.97
  },
  lowRes: {
   input: '',
   output: '',
   encoder: 'x264',
   height: 240,
   ab: 128,
   vb: 128,
   2: '',
   aencoder: 'av_aac',
   rate: 29.97
  }
};

encodeOptions.highRes.input = path.resolve(__dirname, "sampleHighRes.mp4");
encodeOptions.highRes.output = path.resolve(__dirname, 'test_large.mp4');
encodeOptions.midRes.output = path.resolve(__dirname, 'test_medium.mp4');
encodeOptions.lowRes.output = path.resolve(__dirname, 'test_small.mp4');

hb.spawn(encodeOptions.highRes)
  .on("error", function (error) {
    console.log(error);
  })
  .on("begin", function () {
    console.log('started');
  })
  .on("end", function () {
    console.log('end');
  })
  .on("complete", function () {
    console.log('exiting handbrake');
  })
  .on("progress", function (progress) {
    console.log(
      "Percent complete: %s, ETA: %s",
      progress.percentComplete,
      progress.eta
    );
  }
);