//Loading modules
var express = require('express');
var app = express();
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

// When communication is established
io.on('connection', function (socket) {
    socket.on(console.log('socket connected'));
});


// Displaying a console message for user feedback
//listen on port 5000
http.listen( (process.env.PORT || 5000), function(){
    console.log('Server running');
  });