<b>Project Overview:</b>

A web application that tracks and displays real-time geolocation data of users on a map.
Features:

<ul>
<li>Real-time tracking of user locations.</li>
<li>Map visualization using Leaflet.</li>
<li>Dynamic updates of user locations on the map.</li>
</ul>

<b>Technologies Used:</b>
<ul>
<li>Express: Web server framework for Node.js.</li>
<li>Socket.io: Real-time communication library for bidirectional event-based communication.</li>
<li>EJS: Templating engine for rendering HTML pages with embedded JavaScript.</li>
<li>Leaflet: JavaScript library for interactive maps.</li>
<li>OpenStreetMap: Provides map tiles for display.</li>
</ul>
<b>Dependencies:</b>
<ul>
<li>express: Web framework to handle server-side logic.</li>
<li>ejs: Templating engine for server-side HTML rendering.</li>
<li>socket.io: Enables real-time bidirectional event-based communication.</li>
<li>dotenv: Loads environment variables from a .env file.</li>
<li>leaflet: Library for creating interactive maps.</li>
</ul>
<b>How It Works:</b>
<ul>
<li>Users’ locations are tracked using the browser’s geolocation API.</li>
<li>Location updates are sent to the server using Socket.io.</li>
<li>The server broadcasts these location updates to all connected clients.</li>
<li>Clients update their map view with new location data, displaying markers for each user.</li>

</ul>
<b>Usage:</b>

Start the server with node app.js.
Access the application through a web browser at http://localhost:3000 (or your configured port).

<b><u>--Output--</u></b>
<img src="">
