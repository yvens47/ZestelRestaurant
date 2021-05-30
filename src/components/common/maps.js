import React, { useState } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import MapInfoWindow from "./MapInfoWindow";
import MapMarker from "./MapMaker";
const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.037876, lng: -76.305511 }}
    >
      {[1, 2, 3, 4].map((p) => (
        <MapMarker p={p}></MapMarker>
        // <Marker
        //   onClick={onMarkerClick}
        //   position={{
        //     lat: parseFloat(p.coords.lat),
        //     lng: parseFloat(p.coords.lng)
        //   }}
        // >
        //   <MapInfoWindow p={p} isOpen={isOpen} />
        // </Marker>
      ))}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
