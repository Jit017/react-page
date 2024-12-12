import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface WaterUsagePoint {
  id: string;
  lat: number;
  lng: number;
  usage: number;
  name: string;
}

const sampleData: WaterUsagePoint[] = [
  { id: '1', lat: 51.505, lng: -0.09, usage: 250, name: 'Field A' },
  { id: '2', lat: 51.51, lng: -0.1, usage: 180, name: 'Field B' },
  { id: '3', lat: 51.515, lng: -0.09, usage: 300, name: 'Field C' }
];

export const InteractiveMap: React.FC = () => {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {sampleData.map((point) => (
          <Circle
            key={point.id}
            center={[point.lat, point.lng]}
            radius={100}
            pathOptions={{
              color: point.usage > 250 ? 'red' : 'blue',
              fillColor: point.usage > 250 ? 'red' : 'blue',
              fillOpacity: 0.7
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">{point.name}</h3>
                <p>Water Usage: {point.usage}L</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};