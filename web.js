var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

//app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//});


app.get('/', function(request, response) {
  var read1 = fs.readFileSync("index.html","utf-8");
  var buff = new Buffer(read1);
  response.send(buff.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
