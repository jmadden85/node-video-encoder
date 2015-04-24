var createBase64Keys = function() {
  var keys = {
    version:'2.0',
    aws:{
      accessKeyId:'Your Key',
      secretAccessKey:'Your Secret'
    }
  };

  var json = JSON.stringify( keys );

  return new Buffer( JSON.stringify( keys ) ).toString('base64');
};

console.log(createBase64Keys());