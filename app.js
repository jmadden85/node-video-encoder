var hb = require('handbrake-js');
var path = require('path');
var fs   = require('fs');
var cwd = process.cwd();


var encodeOptions = {
  highRes: {
    input: '',
    output: '',
    optimize: true,
    height: 720,
    ab: 128,
    vb: 384,
    vfr: true,
    aencoder: 'av_aac',
    rate: 29.97
  }
};

encodeOptions.highRes.input = path.resolve(__dirname, "sampleHighRes.mp4");
encodeOptions.highRes.output = cwd + '/test.mp4';

console.log(path.resolve(__dirname, "J1115-Sample-Class-highres.mp4"));

hb.spawn(encodeOptions.highRes)
  .on("error", function (error) {
    console.log(error);
  })
  .on("begin", function () {
    console.log('started')
  })
  .on("end", function () {
    console.log('ended')
  })
  .on("complete", function () {
    console.log('exiting handbrake')
  })
  .on("progress", function (progress) {
    console.log(
      "Percent complete: %s, ETA: %s",
      progress.percentComplete,
      progress.eta
    );
  }
);