import React, { useContext } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { UserLocationContext } from "../context/UserLocationContext";
import Marker from "./Marker";
import { SelectedBusinessContext } from "../context/SelectedBusinessContext";

function GoogleMap_() {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );
  const containerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: 20,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  if (!userLocation) {
    return null;
  }

  const center =
    !selectedBusiness || !selectedBusiness.geometry
      ? {
          lat: userLocation.lat,
          lng: userLocation.lng,
        }
      : selectedBusiness.geometry.location;

  return (
    <div>
      <useLoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={selectedBusiness ? 15 : 10}
        >
          <Marker userLocation={userLocation} />
        </GoogleMap>
      </useLoadScript>
    </div>
  );
}

export default GoogleMap_;
