const map = L.map("map-leaflet").setView([59.96831, 30.31748], 20);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.htmlacademy.com" title="www.htmlacademy.com">htmlacademy</a> from <a href="https://www.htmlacademy.com" title="htmlacademy">www.htmlacademy.com</a>',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: "../img/map_pin.png",
  iconSize: [114, 106],
  iconAnchor: [57, 106],
});

const mainPinMarker = L.marker([59.96831, 30.31748], {
  icon: mainPinIcon,
});

mainPinMarker.addTo(map).bindPopup("ул. Большая Конюшенная, д. 19/8");
