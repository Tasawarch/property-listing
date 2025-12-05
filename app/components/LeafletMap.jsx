"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Marker icons (default and subArea)
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const subAreaIcon = new L.Icon({
  iconUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=S|FF0000|000000",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// MapUpdater component for changing map view dynamically
function MapUpdater({ selectedArea }) {
  const map = useMap();

  if (selectedArea && selectedArea.coordinates) {
    map.setView(selectedArea.coordinates, 12);
  }

  return null;
}

export default function LeafletMap({ selectedArea }) {
  return (
    <MapContainer
      center={[25.276987, 55.296249]} // Default Dubai
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MapUpdater selectedArea={selectedArea} />

      {selectedArea && selectedArea.coordinates && (
        <Marker
          position={selectedArea.coordinates}
          icon={selectedArea.subArea ? subAreaIcon : defaultIcon}
        >
          <Popup>
            <strong>{selectedArea.name}</strong>
            <br />
            {selectedArea.description}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
