import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    const center = {
        lat: 25.7616,
        lng: -80.1916,
    };

    const onLoad = () => {
        if (window.google && window.google.maps) {
            setMapLoaded(true);
        }
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyB7nIuEzkhX1YIctCOuawFSjYeTmJegdGY" onLoad={onLoad}>
            {mapLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '400px' }}
                    center={center}
                    zoom={20}
                >
                    <Marker
                        position={center}
                        label={{
                            text: 'Cool Cars',
                            color: 'red',
                            fontSize: '14px',
                            className: 'marker-position',
                        }}

                    />
                </GoogleMap>
            )}
        </LoadScript>
    );
};

export default GoogleMapComponent;