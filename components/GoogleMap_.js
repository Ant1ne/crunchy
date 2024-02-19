import React, { useContext } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { UserLocationContext } from "../context/UserLocationContext";
import Marker from "./Marker";
import { SelectedBusinessContext } from "../context/SelectedBusinessContext";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

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
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={selectedBusiness ? 15 : 10}
        >
          <Marker userLocation={userLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMap_;
