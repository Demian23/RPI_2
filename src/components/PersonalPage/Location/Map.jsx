import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'

const Map = (props) => {
    return (
        <div className="map_container">
            <MapContainer className="map" center={[props.coords.ltd, props.coords.lng]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.coords.ltd, props.coords.lng]}>
                    <Popup>
                        {props.place}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;