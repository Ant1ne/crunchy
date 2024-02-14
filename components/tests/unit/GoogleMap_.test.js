import renderer from "react-test-renderer";
import React, { useContext } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { UserLocationContext } from "../../../context/UserLocationContext";
import Marker from "../../Marker";
import { SelectedBusinessContext } from "../../../context/SelectedBusinessContext";
import GoogleMap_ from "../../GoogleMap_";

jest.mock("@react-google-maps/api");
jest.mock("../context/UserLocationContext");
jest.mock("./Marker");
jest.mock("../context/SelectedBusinessContext");

const renderTree = (tree) => renderer.create(tree);
describe("GoogleMap_", () => {
  // Renders a <GoogleMap_> component with a container style of 100% width and 500px height.
  it("should render a GoogleMap component with the correct container style", () => {
    const { container } = render(<GoogleMap_ />);
    const googleMapContainer = container.querySelector(".google-map-container");
    expect(googleMapContainer).toHaveStyle("width: 100%");
    expect(googleMapContainer).toHaveStyle("height: 500px");
    expect(googleMapContainer).toHaveStyle("border-radius: 20px");
  });

  // Renders a <LoadScript> component with a googleMapsApiKey prop.
  it("should render a LoadScript component with the correct googleMapsApiKey prop", () => {
    const { container } = render(<GoogleMap_ />);
    const loadScriptComponent = container.querySelector(
      ".load-script-component"
    );
    expect(loadScriptComponent).toHaveAttribute(
      "googleMapsApiKey",
      process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    );
  });

  // Renders a <Marker> component with a userLocation prop.
  it("should render a Marker component with the correct userLocation prop", () => {
    const { container } = render(<GoogleMap_ />);
    const markerComponent = container.querySelector(".marker-component");
    expect(markerComponent).toHaveAttribute("userLocation", userLocation);
  });

  // Does not render a <GoogleMap> component if userLocation is null.
  it("should not render a GoogleMap component if userLocation is null", () => {
    const { container } = render(<GoogleMap_ />);
    const googleMapComponent = container.querySelector(".google-map-component");
    expect(googleMapComponent).toBeNull();
  });

  // Does not render a <Marker> component if businessList is null.
  it("should not render a Marker component if businessList is null", () => {
    const { container } = render(<GoogleMap_ />);
    const markerComponent = container.querySelector(".marker-component");
    expect(markerComponent).toBeNull();
  });

  // Does not render a <Marker> component if businessList is an empty array.
  it("should not render a Marker component if businessList is an empty array", () => {
    const { container } = render(<GoogleMap_ />);
    const markerComponent = container.querySelector(".marker-component");
    expect(markerComponent).toBeNull();
  });
});
