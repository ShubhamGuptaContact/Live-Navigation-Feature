const socket = io();

// Initialize the map
const map = L.map("map").setView([0, 0], 20); // Default center

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Shubham Gupta'
}).addTo(map);

// Object to hold markers for each client
const markers = {};

// Watch position
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords;
        console.log(`Current location: ${latitude}, ${longitude}`);
        socket.emit('send-location', { latitude, longitude });
    }, err => {
        console.error(`Geolocation error: ${err.message}`);
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });
} else {
    console.error("Geolocation is not supported by this browser.");
}

// Listen for location updates from the server
socket.on('rec-location', data => {
    const { id, latitude, longitude } = data;
    console.log(`Received location from ${id}: ${latitude}, ${longitude}`);

    // Set the view of the map to the new location
    map.setView([latitude, longitude], 20);

    // Update or create the marker for the client
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

socket.on('user-dissconnected', (id) => {
    console.log(`User ${id} has disconnected.`);
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});