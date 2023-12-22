// let myMap = L.map('map', {
//     center: [35.2271, -80.8431],
//     zoom: 13
// })

let myMap = L.map('map').setView([32.7767, -96.7979], 4) // alternative to the previous method
    
// the map currently doesn't show anything - need to add a tile layer (map image at the coordinates)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap)


// red circle over dallas
L.circle([32.7767, -96.7979], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.80,
    radius: 100000
}).addTo(myMap)

// line connecting NYC to Toronto
L.polyline([[40.7128, -74.0060], [43.6532, -79.3832]], {color: 'black'}).addTo(myMap)


L.polygon([
    [33.7490, -84.3880],
    [32.0809, -81.0912],
    [30.3322, -81.6557],
    [32.3792, -86.3077]
], {color: "black", fillColor: "gold", fillOpacity: 0.8}).addTo(myMap);