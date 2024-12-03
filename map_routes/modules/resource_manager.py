import json

def load_routes(json_route_path = "map_routes/route_resources/panama_bus_info.json"):
    with open(json_route_path, "r") as data:
        return json.load(data)
    

if __name__ == "__main__":
    print(load_routes())