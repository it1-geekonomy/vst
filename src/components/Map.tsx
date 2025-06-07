import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { createMapiIcon } from '@/app/public/logos/mapiIcon';

// Office locations data
const OFFICE_LOCATIONS = {
  bengaluru: {
    name: 'VST Bengaluru Office',
    coords: [12.989645, 77.572548] as [number, number],
    address: '1, Palace Cross Road,\nBengaluru - 560 020',
    mapsUrl: 'https://www.google.com/maps/place/1,+Palace+Cross+Rd,+Bengaluru,+Karnataka+560020'
  },
  chennai: {
    name: 'VST Chennai Office',
    coords: [13.0626463, 80.2640781] as [number, number],
    address: '199, Anna Salai,\nChennai - 600 002',
    mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6439710634196!2d80.26407809999999!3d13.0626463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266170d73c381%3A0xb1a2f46c2795a4b1!2sVST%20Motors!5e0!3m2!1sen!2sin!4v1749290939492!5m2!1sen!2sin'
  }
};

const Map: React.FC = () => {
  // Calculate center point between both locations
  const centerCoords: [number, number] = [
    (OFFICE_LOCATIONS.bengaluru.coords[0] + OFFICE_LOCATIONS.chennai.coords[0]) / 2,
    (OFFICE_LOCATIONS.bengaluru.coords[1] + OFFICE_LOCATIONS.chennai.coords[1]) / 2
  ];

  // Create custom icon for markers using useMemo to prevent unnecessary recreations
  const customIcon = useMemo(() => createMapiIcon(48, "#000000"), []); // Larger black marker

  return (
    <MapContainer 
      center={centerCoords} 
      zoom={6} 
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Bengaluru Office Marker */}
      <Marker 
        position={OFFICE_LOCATIONS.bengaluru.coords} 
        icon={customIcon}
        eventHandlers={{
          click: () => {
            window.open(OFFICE_LOCATIONS.bengaluru.mapsUrl, '_blank');
          }
        }}
      >
        <Popup>
          <div className="text-black">
            <strong>{OFFICE_LOCATIONS.bengaluru.name}</strong><br />
            {OFFICE_LOCATIONS.bengaluru.address.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}<br />
              </React.Fragment>
            ))}
          </div>
        </Popup>
      </Marker>

      {/* Chennai Office Marker */}
      <Marker 
        position={OFFICE_LOCATIONS.chennai.coords} 
        icon={customIcon}
        eventHandlers={{
          click: () => {
            window.open(OFFICE_LOCATIONS.chennai.mapsUrl, '_blank');
          }
        }}
      >
        <Popup>
          <div className="text-black">
            <strong>{OFFICE_LOCATIONS.chennai.name}</strong><br />
            {OFFICE_LOCATIONS.chennai.address.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}<br />
              </React.Fragment>
            ))}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map; 