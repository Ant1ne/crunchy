import renderer from "react-test-renderer";
import React, { useState, useEffect, useContext } from "react";
import BusinessItem from "../../BusinessItem";
import ShimmerEffectItem from "../../ShimmerEffectItem";
import { SelectedBusinessContext } from "../../../context/SelectedBusinessContext";
import BusinessList from "../../BusinessList";

jest.mock("./BusinessItem");
jest.mock("./ShimmerEffectItem");
jest.mock("../context/SelectedBusinessContext");

const renderTree = (tree) => renderer.create(tree);
describe("BusinessList", () => {
  // Renders the component with businessListData
  it("should render the component with businessListData", () => {
    const businessListData = [{ name: "Business 1" }, { name: "Business 2" }];
    render(<BusinessList businessListData={businessListData} />);
    // assertion
    expect(screen.getByText("Top Nearby Places")).toBeInTheDocument();
    expect(screen.getByText("Business 1")).toBeInTheDocument();
    expect(screen.getByText("Business 2")).toBeInTheDocument();
  });

  // Displays the top nearby places
  it("should display the top nearby places", () => {
    const businessListData = [{ name: "Business 1" }, { name: "Business 2" }];
    render(<BusinessList businessListData={businessListData} />);
    // assertion
    expect(screen.getByText("Top Nearby Places")).toBeInTheDocument();
  });

  // Clicking on the right arrow increases the count by 3
  it("should increase the count by 3 when clicking on the right arrow", () => {
    const businessListData = [{ name: "Business 1" }, { name: "Business 2" }];
    render(<BusinessList businessListData={businessListData} />);
    // simulate click on right arrow
    fireEvent.click(screen.getByTestId("right-arrow"));
    // assertion
    expect(screen.getByText("Top Nearby Places")).toBeInTheDocument();
    expect(screen.getByText("Business 1")).toBeInTheDocument();
    expect(screen.getByText("Business 2")).toBeInTheDocument();
  });

  // businessListData is empty
  it("should not display any business when businessListData is empty", () => {
    const businessListData = [];
    render(<BusinessList businessListData={businessListData} />);
    // assertion
    expect(screen.queryByText("Top Nearby Places")).toBeNull();
    expect(screen.queryByText("Business 1")).toBeNull();
    expect(screen.queryByText("Business 2")).toBeNull();
  });

  // businessListData has less than 3 items
  it("should display all businesses when businessListData has less than 3 items", () => {
    const businessListData = [{ name: "Business 1" }];
    render(<BusinessList businessListData={businessListData} />);
    // assertion
    expect(screen.getByText("Top Nearby Places")).toBeInTheDocument();
    expect(screen.getByText("Business 1")).toBeInTheDocument();
  });
});
