from django.shortcuts import render
from django.http import HttpResponse, request, JsonResponse
from map_routes.modules.resource_manager import load_routes

def index(request):
    return render(request, 'map.html')

def search_route(request):
    
    if request.method == "GET":
        routes = load_routes()
        matched_routes = {}
        query_route_code = request.GET["route_code"]
        query_route_name = request.GET["route_name"]
        
        for route in routes:
            if query_route_code in route:
                if query_route_name.upper() in routes[route]["route"].upper():
                    matched_routes[route] = routes[route]
        print(matched_routes)
        return JsonResponse({"response": 1,
                            "route_data": matched_routes}, status=200)
