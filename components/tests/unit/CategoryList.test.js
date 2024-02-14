import renderer from "react-test-renderer";
import React, { useEffect, useState } from "react";
import Data from "../../../shared/Data";
import CategoryItem from "../../CategoryItem";
import CategoryList from "../../CategoryList";

jest.mock("../shared/Data");
jest.mock("./CategoryItem");

const renderTree = (tree) => renderer.create(tree);
describe("CategoryList", () => {
  // Renders a "Select A Category" heading.
  it('should render a "Select A Category" heading', () => {
    // Arrange
    const setSelectedCategory = jest.fn();

    // Act
    render(<CategoryList setSelectedCategory={setSelectedCategory} />);

    // Assert
    expect(screen.getByText("Select A Category")).toBeInTheDocument();
  });

  // Renders a list of categories with their icons and names.
  it("should render a list of categories with icons and names", () => {
    // Arrange
    const setSelectedCategory = jest.fn();

    // Act
    render(<CategoryList setSelectedCategory={setSelectedCategory} />);

    // Assert
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
    expect(screen.getByText("Category 3")).toBeInTheDocument();
    // Add more assertions for each category item
  });

  // Allows the user to select a category by clicking on it.
  it("should allow the user to select a category by clicking on it", () => {
    // Arrange
    const setSelectedCategory = jest.fn();

    // Act
    render(<CategoryList setSelectedCategory={setSelectedCategory} />);
    fireEvent.click(screen.getByText("Category 1"));

    // Assert
    expect(setSelectedCategory).toHaveBeenCalledWith("Category 1");
  });

  // Does not call the 'setSelectedCategory' function if the selected category value is null.
  it("should not call the setSelectedCategory function if selected category value is null", () => {
    // Arrange
    const setSelectedCategory = jest.fn();

    // Act
    render(<CategoryList setSelectedCategory={setSelectedCategory} />);
    fireEvent.click(screen.getByText("Category 1"));

    // Assert
    expect(setSelectedCategory).not.toHaveBeenCalledWith(null);
  });

  // Does not call the 'setSelectedCategory_' function if the selected category object is null.
  it("should not call the setSelectedCategory_ function if selected category object is null", () => {
    // Arrange
    const setSelectedCategory = jest.fn();

    // Act
    render(<CategoryList setSelectedCategory={setSelectedCategory} />);
    fireEvent.click(screen.getByText("Category 1"));

    // Assert
    expect(setSelectedCategory_).not.toHaveBeenCalledWith(null);
  });

  // Does not highlight any category if the 'selectedCategory' state is null.
  it("should not highlight any category if selectedCategory state is null", () => {
    // Arrange
    const setSelectedCategory = jest.fn();

    // Act
    render(<CategoryList setSelectedCategory={setSelectedCategory} />);

    // Assert
    expect(screen.getByText("Category 1")).not.toHaveClass("bg-teal-200");
    expect(screen.getByText("Category 2")).not.toHaveClass("bg-teal-200");
    expect(screen.getByText("Category 3")).not.toHaveClass("bg-teal-200");
    // Add more assertions for each category item
  });
});
