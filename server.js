'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
var bodyParser = require('body-parser')
var app = express()
var location_x = 0;
var location_y = 0;

const PORT = process.env.PORT || 3000;
const API_PORT = process.env.PORT || 5000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('It works!');
});

app.post('/', function (req, res) {
  location_x = req.body.x_pos;
  location_y = req.body.y_pos;
  res.send('Success!');
});

app.listen(API_PORT, function () {
  console.log('API is listening on port ' + API_PORT);
});

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('location', location_x, location_y), 500);
