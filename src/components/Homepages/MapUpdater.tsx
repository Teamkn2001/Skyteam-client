import { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet'; // Add this import

// Create a component to handle map updates
const MapUpdater = ({ position }: { position: LatLngExpression }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [map, position]);
  
  return null;
};

export default MapUpdater;