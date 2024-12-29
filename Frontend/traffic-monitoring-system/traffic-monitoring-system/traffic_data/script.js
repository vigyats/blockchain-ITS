const apiKey = "rTHoi5tuR7QotoIY7-BvPDmG47b8lP14rSa3oyVIE0k";

// Initialize the platform object with your HERE API key
let platform = new H.service.Platform({
  apikey: apiKey,
});

// Obtain the default map types from the platform object
let defaultLayers = platform.createDefaultLayers();

// Instantiate a map in the "map" div, set the base layer to the normal map layer
let map = new H.Map(
  document.getElementById("map"),
  defaultLayers.vector.normal.map,
  {
    zoom: 12, // Default zoom level
    center: { lat: 20.5937, lng: 78.9629 }, // Default center: India (approx)
  }
);

// Enable map interaction
let mapEvents = new H.mapevents.MapEvents(map);
let behavior = new H.mapevents.Behavior(mapEvents);

// Add a UI control for zooming
let ui = H.ui.UI.createDefault(map, defaultLayers);

// Traffic Layer
let trafficLayer = defaultLayers.vector.normal.traffic;

// Function to display the traffic data on the map
function displayTrafficOnMap(lat, lng, mapView) {
  // Center the map to the provided lat, lng
  map.setCenter({ lat: lat, lng: lng });

  // If mapView bounds are available, adjust zoom to fit the area
  if (mapView) {
    let boundingBox = new H.geo.Rect(
      mapView.north,
      mapView.west,
      mapView.south,
      mapView.east
    );
    map.getViewModel().setLookAtData({ bounds: boundingBox });
  } else {
    map.setZoom(14); // Default zoom for a city
  }

  // Add traffic layer to the map
  map.addLayer(trafficLayer);
}

// Function to search for the city's latitude and longitude using HERE Geocoding API
function searchCity(city) {
  fetch(
    `https://router.hereapi.com/v8/routes?apikey=YOUR_API_KEY&return=polyline%2Csummary%2Cactions%2Cinstructions&spans=segmentRef%2Cconsumption&transportMode=pedestrian&routingMode=short`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.items.length > 0) {
        let location = data.items[0].position;
        let mapView = data.items[0].mapView;
        displayTrafficOnMap(location.lat, location.lng, mapView);
      } else {
        alert("City not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching geocode data: ", error);
    });
}

// Event listener for the search button
document.getElementById("search-btn").addEventListener("click", () => {
  let city = document.getElementById("city-input").value;
  if (city) {
    searchCity(city);
  } else {
    alert("Please enter a city.");
  }
});
