import React, { useContext } from "react";
import { InfoBox, MarkerF } from "@react-google-maps/api";
import { BusinessListContext } from "../context/BusinessListContext";

function Marker({ userLocation }) {
  const { businessList, setBusinessList } = useContext(BusinessListContext);
  return (
    <div>
      {businessList &&
        businessList.map(
          (business, index) =>
            index <= 4 && (
              <MarkerF
                key={index}
                position={business.geometry.location}
                icon={{
                  url: "/logo.png",
                  scaledSize: {
                    width: 50,
                    height: 50,
                  },
                }}
              >
                <InfoBox position={business.geometry.location}>
                  <div
                    style={{
                      backgroundColor: "white",
                      backgroundColor: "#c084fc",
                      opacity: 1,
                      padding: 7,
                      color: "white",
                      borderRadius: 10,
                      width: 100,
                    }}
                  >
                    <div style={{ fontSize: 13, fontColor: `#08233B` }}>
                      {business.name}
                    </div>
                  </div>
                </InfoBox>
              </MarkerF>
            )
        )}
      <MarkerF
        position={userLocation}
        icon={{
          url: "/user-pin.png",
          scaledSize: {
            width: 50,
            height: 50,
          },
        }}
      ></MarkerF>
    </div>
  );
}

export default Marker;
