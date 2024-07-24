const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
require("dotenv").config();

// Create a new socket connection
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Handling for io requests
io.on("connection", function (socket) {
  console.log("New client connected", socket.id); // Log the socket ID instead of the entire object

  socket.on("send-location", function (data) {
    console.log(data); // Log the location data in the console
    io.emit("rec-location", { id: socket.id, ...data }); // Broadcast the location to all connected clients
  });
  socket.on("disconnect", function () {
    console.log("Client disconnected", socket.id);
    io.emit("user-disconnected", socket.id);
    // Log the socket ID instead of the entire object
  });
});

// Create a new get request
app.get("/loaction", (req, res) => {
  res.render("index");
});

// Listen for new connections
const PORT = process.env.PORT || 9000; // Fallback to port 3000 if PORT is not set
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
