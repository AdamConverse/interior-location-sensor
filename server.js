var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var math = require('mathjs');

app.use("/styles",express.static(__dirname + "/styles"));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;

app.post('/arduino-1/', function (req, res,next) {
  angle = parseInt(req.body.angle);
  distance = ((parseInt(req.body.rinches) + parseInt(req.body.linches)) / 2) / 12;
  x_pos = distance * math.sin(math.unit(angle, 'deg'));
  y_pos = distance * math.cos(math.unit(angle, 'deg'));
  io.emit('arduino-1', x_pos, y_pos);
  res.send('Success!');
});

app.post('/arduino-2/', function (req, res,next) {
  angle = parseInt(req.body.angle);
  distance = ((parseInt(req.body.rinches) + parseInt(req.body.linches)) / 2) / 12;
  x_pos = distance * math.sin(math.unit(angle, 'deg'));
  y_pos = distance * math.cos(math.unit(angle, 'deg'));
  io.emit('arduino-2', x_pos, y_pos);
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
