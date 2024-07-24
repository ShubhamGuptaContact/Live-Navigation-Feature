const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Create a new socket connection.
const socketio = require('socket.io');
const server = require('http').createServer(app);
const io = socketio(server);


//Adding views for the application

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

// Create a new get request

app.get('/', (req, res) => {
  res.send("hello")
});

// Listen for new connections

server.listen(process.env.PORT);