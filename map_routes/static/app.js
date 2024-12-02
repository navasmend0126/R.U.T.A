document.addEventListener("DOMContentLoaded", (event) => {
    loadMap();
  });
  


const collapse_desc_btn = document.getElementById("collapse_description_btn");
const description_aside_container = document.getElementById("description_aside_container");
const route_input_text = document.getElementById('user_input_route_code');


let first_character_of_route_search_bar = false;
let description_is_collapsed = false;


collapse_desc_btn.addEventListener("click", function(e){


    if (description_is_collapsed === false){
        collapse_desc_btn.click(false);
        description_aside_container.classList.add("description-collapsed");
        collapse_desc_btn.classList.add("collapse_mode_btn");
        description_is_collapsed = true;
    }else{
        description_aside_container.classList.remove("description-collapsed");
        collapse_desc_btn.classList.remove("collapse_mode_btn");
        description_is_collapsed = false;
    }
})


route_input_text.addEventListener("input", function(e){

    
    let user_input_text = route_input_text.value;
    console.log("Input event: " + e.inputType);
    console.log(user_input_text);
    route_input_text.value = user_input_text.toUpperCase();

    if(route_input_text.value.length > 0 && first_character_of_route_search_bar === false){
        if(user_input_text[0].match(/[a-z]/i)){
            console.log("Correct format");
            first_character_of_route_search_bar = true;
            route_input_text.value += "-";
            console.log(first_character_of_route_search_bar);
            
            
        }
        else{
            alert("Incorrect format");
            route_input_text.value = '';
        }
    }else if(route_input_text.value.length === 0 && first_character_of_route_search_bar === true){
        first_character_of_route_search_bar = false;

    }else if(route_input_text.value.length > 0 && first_character_of_route_search_bar === true){
        
    }
    
});




function loadMap(){
    // Initialize the map with MapTiler tiles
    var map = L.map('map', {
        zoomControl: false,
        tileSize: 512
        
    }).setView([9.030, -79.506], 15);

    // Add MapTiler base layer
    L.tileLayer('https://api.maptiler.com/maps/basic-v2-dark/{z}/{x}/{y}.png?key=u507Mv8aKLfST7xMEKej', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>',
        maxZoom: 20,
        
    }).addTo(map);

    L.control.zoom({
        position: 'topright' // Change this to 'topleft', 'bottomleft', or 'bottomright' as needed
    }).addTo(map);

    
}
