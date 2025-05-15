import { useEffect, useRef } from 'react';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 26.8467, lng: 80.9462 }, // Lucknow coordinates
      zoom: 14,
      styles: [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#7c93a3" },
            { "lightness": "-10" }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [
            { "visibility": "on" }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
            { "color": "#a0a0a0" },
            { "weight": "1.5" }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ]
    });

    // Add marker for Lucknow
    new window.google.maps.Marker({
      position: { lat: 26.8467, lng: 80.9462 },
      map: map,
      title: "Our Lucknow Office"
    });
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '400px', 
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
      }}
    />
  );
};

export default MapComponent;