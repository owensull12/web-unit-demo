// map of charlotte
// coordinates: 35.2271° N, 80.8431° W
    // north and east are positive
    // south and west are negative

let myMap = L.map('map', {
    center: [35.2271, -80.8431],
    zoom: 13
})

// the map currently doesn't show anything - need to add a tile layer (map image at the coordinates)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap)

// add a marker
let marker = L.marker(
    [35.2271, -80.8431], {
        title: 'Hello from Charlotte!'
    }
).addTo(myMap)

// bind a popup to the marker (makes it clickable)
marker.bindPopup('You clicked the Charlotte marker!')