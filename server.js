var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;

app.post('/', function (req, res,next) {
  location_x = req.body.x_pos;
  location_y = req.body.y_pos;
  io.emit('location', location_x, location_y);
  res.send('Success!');
});

server.listen(PORT);
console.log("Port: " + PORT);
io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('location', function(data) {
           client.emit('broad', data);
           client.broadcast.emit('broad',data);
    });

});
