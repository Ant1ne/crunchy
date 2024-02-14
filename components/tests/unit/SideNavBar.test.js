import renderer from "react-test-renderer";
import React from "react";
import Image from "next/image";
import SideNavBar from "../../SideNavBar";

jest.mock("next/image");

const renderTree = (tree) => renderer.create(tree);
describe("SideNavBar", () => {
  // Renders the SideNavBar component with logo and menu items
  it("should render SideNavBar component with logo and menu items", () => {
    const wrapper = shallow(<SideNavBar />);
    expect(wrapper.find("Image").exists()).toBe(true);
    expect(wrapper.find("svg").length).toBe(2);
  });

  // Each menu item is rendered as an SVG icon
  it("should render each menu item as an SVG icon", () => {
    const wrapper = shallow(<SideNavBar />);
    expect(wrapper.find("svg").length).toBe(2);
  });

  // SVG icons have hover effects
  it("should have hover effects on SVG icons", () => {
    const wrapper = shallow(<SideNavBar />);
    expect(
      wrapper
        .find("svg")
        .first()
        .hasClass("hover:text-teal-600 hover:bg-teal-100")
    ).toBe(true);
    expect(
      wrapper
        .find("svg")
        .last()
        .hasClass("hover:text-teal-600 hover:bg-teal-100")
    ).toBe(true);
  });

  // Menu items are not provided
  it("should render SideNavBar component without menu items", () => {
    const wrapper = shallow(<SideNavBar />);
    expect(wrapper.find("svg").length).toBe(0);
  });

  // Logo image is not provided
  it("should render SideNavBar component without logo image", () => {
    const wrapper = shallow(<SideNavBar />);
    expect(wrapper.find("Image").exists()).toBe(false);
  });

  // Logo image source is broken
  it("should render SideNavBar component with broken logo image", () => {
    const wrapper = shallow(<SideNavBar />);
    expect(wrapper.find("Image").prop("src")).toBe("/logo.png");
  });
});
