const collapse_desc_btn = document.getElementById("collapse_description_btn");
const description_aside_container = document.getElementById("description_aside_container");
const route_input_text = document.getElementById("user_input_route_course");
const route_code_input_text = document.getElementById('user_input_route_code');
const route_options_content_container = document.getElementById("route_options_item__container");

let description_is_collapsed = false;

document.addEventListener("DOMContentLoaded", (event) => {
    loadMap();
    create_route_info_divs(["", ""]);
  });


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


route_code_input_text.addEventListener("input", function(e){

    
    let user_input_text = route_code_input_text.value;
    console.log("Input event: " + e.inputType);
    console.log(user_input_text);
    route_code_input_text.value = user_input_text.toUpperCase();

    create_route_info_divs([route_code_input_text.value, route_input_text.value]);
});


route_input_text.addEventListener("input", function(e){

    
    let user_input_text = route_input_text.value;
    console.log("Input event: " + e.inputType);
    console.log(user_input_text);
    

    create_route_info_divs([route_code_input_text.value, route_input_text.value]);
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


async function fetch_routes(query_info) {
    delete_route_info_divs();
    let query_order = ["route_code", "route_name"]
    let query_data = new URLSearchParams();
    for(let i = 0; i < query_order.length; i++){
        query_data.append(query_order[i], query_info[i]);
    }

    try {
        let response = await fetch(`http://127.0.0.1:8080/map_routes/search_route/?${query_data.toString()}`, {
            method: "GET",
        });
        let data = await response.json();
        console.log("Datos de ruta: ", data.route_data);
        return data.route_data;
    } catch (error) {
        console.error("Ha pasado un error...", error);
        return null; // Return null or handle the error as needed
    }
}

async function create_route_info_divs(query_info){
    let json_routes = await fetch_routes(query_info);
    console.log("Entramos a la funcion de creacion de divs");
    console.log("Json_routes: ", json_routes);
    for(let route_code in json_routes){
        let route_title = json_routes[route_code]["title"];
        let route_type = json_routes[route_code]["type"];
        let route_info = json_routes[route_code]["route"];
        let route_color = json_routes[route_code]["color"];

        let div = document.createElement('div');
        div.setAttribute('id', route_code);
        div.setAttribute('class', 'route_option-item');

        let h1 = document.createElement('h1');
        h1.setAttribute('class', 'route_code');
        h1.style.backgroundColor = route_color;
        h1.textContent = route_title;

        let p = document.createElement('p');
        p.setAttribute('class', 'route_desc');
        p.textContent = route_info;

        div.appendChild(h1);
        div.appendChild(p);

        route_options_content_container.appendChild(div);
    }
}

function delete_route_info_divs(){
    while (route_options_content_container.firstChild) {
        route_options_content_container.removeChild(route_options_content_container.firstChild);
    }
}