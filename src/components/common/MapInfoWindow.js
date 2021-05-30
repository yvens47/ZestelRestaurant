import React, { useState } from "react";

import { InfoWindow } from "react-google-maps";
const MapInfoWindow = ({ p, isOpen }) => {
  console.log("line 5 MapInfo", isOpen);

  return (
    isOpen && (
      <InfoWindow>
        <div
          style={{
            width: "230px",
            height: "auto",
            border: "solid 1px #eee",
            padding: "10px",
            marginBottom: "40px",
            position: "realtive"
          }}
        >
          <div className="info windowImage">
            <img
              style={{ marginBottom: "20px;" }}
              width="100%"
              src="https://images.pexels.com/photos/7667906/pexels-photo-7667906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </div>
          <div className="info window-details p-1"></div>
        </div>
      </InfoWindow>
    )
  );
};

export default MapInfoWindow;
