import renderer from "react-test-renderer";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { SelectedBusinessContext } from "../../../context/SelectedBusinessContext";
import BusinessSquare from "../../BusinessSquare";

jest.mock("next/image");
jest.mock("../context/SelectedBusinessContext");

const renderTree = (tree) => renderer.create(tree);
describe("BusinessSquare", () => {
  // Renders the component with selected business and user location
  it("should render component with selected business and user location", () => {
    // Arrange
    const userLocation = { lat: 123, lng: 456 };
    const selectedBusiness = {
      name: "Business",
      geometry: { location: { lat: 789, lng: 0o12 } },
    };
    const setSelectedBusiness = jest.fn();
    const useContextMock = jest
      .fn()
      .mockReturnValue({ selectedBusiness, setSelectedBusiness });
    jest.spyOn(React, "useContext").mockImplementation(useContextMock);

    // Act
    render(<BusinessSquare userLocation={userLocation} />);

    // Assert
    expect(useContextMock).toHaveBeenCalledWith(SelectedBusinessContext);
    expect(useContextMock).toHaveBeenCalledTimes(1);
    expect(calculateDistance).toHaveBeenCalledWith(789, 0o12, 123, 456);
    expect(calculateDistance).toHaveBeenCalledTimes(1);
  });
});
