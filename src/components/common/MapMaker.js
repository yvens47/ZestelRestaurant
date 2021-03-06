import React, { useState } from "react";

import {
  GoogleMap,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import MapInfoWindow from "./MapInfoWindow";
const MapMarker = ({ p }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onMarkerClick = (e) => {
    setIsOpen(!isOpen ? true : false);
  };
  return (
    <Marker
      onClick={() => onMarkerClick(p)}
      position={{
        lat: parseFloat(40),
        lng: parseFloat(50)
      }}
    >
      <MapInfoWindow p={p} isOpen={isOpen} />
    </Marker>
  );
};

export default MapMarker;
