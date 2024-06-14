import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 37.7749, // Replace with your latitude
    lng: -122.4194, // Replace with your longitude
};

const GoogleMapComponent = () => {
    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;