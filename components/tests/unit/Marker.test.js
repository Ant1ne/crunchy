import renderer from "react-test-renderer";
import React, { useContext } from "react";
import { InfoBox, MarkerF } from "@react-google-maps/api";
import { BusinessListContext } from "../../../context/BusinessListContext";
import Marker from "../../Marker";

jest.mock("@react-google-maps/api");
jest.mock("../context/BusinessListContext");

const renderTree = (tree) => renderer.create(tree);
describe("Marker", () => {
  // should render a MarkerF component with a logo icon and InfoBox for each business in the businessList array, up to the first 5, and a MarkerF component with a user-pin icon for the user location
  it("should render MarkerF components with logo icon and InfoBox for each business and user-pin icon for user location", () => {
    // Arrange
    const businessList = [
      {
        geometry: {
          location: {
            lat: 37.7749,
            lng: -122.4194,
          },
        },
        name: "Business 1",
      },
      {
        geometry: {
          location: {
            lat: 37.7749,
            lng: -122.4194,
          },
        },
        name: "Business 2",
      },
      {
        geometry: {
          location: {
            lat: 37.7749,
            lng: -122.4194,
          },
        },
        name: "Business 3",
      },
      {
        geometry: {
          location: {
            lat: 37.7749,
            lng: -122.4194,
          },
        },
        name: "Business 4",
      },
      {
        geometry: {
          location: {
            lat: 37.7749,
            lng: -122.4194,
          },
        },
        name: "Business 5",
      },
    ];
    const userLocation = { lat: 37.7749, lng: -122.4194 };
    const expectedMarkerCount = 6;

    // Act
    const result = render(<Marker userLocation={userLocation} />, {
      wrapper: ({ children }) => (
        <BusinessListContext.Provider value={{ businessList }}>
          {children}
        </BusinessListContext.Provider>
      ),
    });

    // Assert
    expect(result.getAllByTestId("marker")).toHaveLength(expectedMarkerCount);
  });
});
