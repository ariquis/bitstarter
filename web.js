var express = require('express');

var app = express.createServer(express.logger());

//app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//});

Var read = fs.readFileSync("index.html");
Var buff = new Buffer(read);
response.send(buff.toString(0,buff.lenght)

Var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
