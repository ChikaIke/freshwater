//Loading modules
var express = require('express');
var app = express();
var bodyparser = require('body-parser'); 

var http = require('http').Server(app);
var io = require('socket.io')(http);
var b = require('bonescript');

//Enable CORS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
  });

  app.use(express.static(__dirname + '/public/'));
  app.use(express.json()); 
  app.use(
    express.urlencoded({
      extended: true
    })
  );
  app.use(express.json({
    type: 'application/vnd.api+json'
})); // Parse application/vnd.api+json as json

  b.getPlatform(printData);
function printData(x) {
    console.log('name = ' + x.name);
    console.log('version = ' + x.version);
    console.log('serialNumber = ' + x.serialNumber);
    console.log('bonescript = ' + x.bonescript);
}

// When communication is established
io.on('connection', function (socket) {
    socket.on(console.log('socket connected'));
});

var stage;

app.post('/api-interface/precheck', function (req, res) {

  var stage = req.body.signal;
  console.log("button pressed: "+stage);
});
app.post('/api-interface/startbtn', function (req, res) {

  var stage = req.body.signal;
  console.log("button pressed: "+stage);
});
app.post('/api-interface/stopbtn', function (req, res) {

  var stage = req.body.signal;
  console.log("button pressed: "+stage);
});

// Displaying a console message for user feedback
//listen on port 5000
http.listen( (process.env.PORT || 5000), function(){
    console.log('Server running');
  });