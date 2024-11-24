// Initialize the map with MapTiler tiles
var map = L.map('map', {
    zoomControl: false,
    tileSize: 512
}).setView([51.505, -0.09], 13);

// Add MapTiler base layer
L.tileLayer('https://api.maptiler.com/maps/basic-v2-dark/{z}/{x}/{y}.png?key=u507Mv8aKLfST7xMEKej', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>',
    maxZoom: 20,
    
}).addTo(map);

L.control.zoom({
    position: 'topright' // Change this to 'topleft', 'bottomleft', or 'bottomright' as needed
}).addTo(map);


const collapse_desc_btn = document.getElementById("collapse_description_btn");
const description_aside_container = document.getElementById("description_aside_container")

let description_is_collapsed = false


collapse_desc_btn.addEventListener("click", function(e){


    if (description_is_collapsed === false){
        description_aside_container.classList.add("description-collapsed")
        collapse_desc_btn.classList.remove("collapse_mode_btn")
        description_is_collapsed = true
    }else{
        description_aside_container.classList.remove("description-collapsed")
        collapse_desc_btn.classList.add("collapse_mode_btn")
        description_is_collapsed = false
    }
})