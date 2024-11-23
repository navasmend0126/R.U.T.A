// Initialize the map with MapTiler tiles
var map = L.map('map').setView([51.505, -0.09], 13);

// Add MapTiler base layer
L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=u507Mv8aKLfST7xMEKej', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>',
    maxZoom: 19
}).addTo(map);