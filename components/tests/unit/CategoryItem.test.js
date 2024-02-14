import renderer from "react-test-renderer";
import React from "react";
import Image from "next/image";
import CategoryItem from "../../CategoryItem";

jest.mock("next/image");

const renderTree = (tree) => renderer.create(tree);
describe("CategoryItem", () => {
  // Renders a div element with class 'flex flex-col items-center bg-teal-100 p-3 rounded-2xl hover:scale-105 transition-all duration-100 cursor-pointer' containing an Image and a h2 element.
  it("should render a div element with class 'flex flex-col items-center bg-teal-100 p-3 rounded-2xl hover:scale-105 transition-all duration-100 cursor-pointer' containing an Image and a h2 element", () => {
    // Arrange
    const category = {
      icon: "icon-url",
      name: "category-name",
    };

    // Act
    const wrapper = shallow(<CategoryItem category={category} />);

    // Assert
    expect(
      wrapper
        .find("div")
        .hasClass(
          "flex flex-col items-center bg-teal-100 p-3 rounded-2xl hover:scale-105 transition-all duration-100 cursor-pointer"
        )
    ).toBe(true);
    expect(wrapper.find("Image").prop("src")).toBe(category.icon);
    expect(wrapper.find("Image").prop("alt")).toBe(category.name);
    expect(wrapper.find("h2").text()).toBe(category.name);
  });
});
