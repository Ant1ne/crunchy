import renderer from "react-test-renderer";
import React, { useContext } from "react";
import GlobalApi from "../../../services/GlobalApi";
import { UserLocationContext } from "../../../context/UserLocationContext";
import { BusinessListContext } from "../../../context/BusinessListContext";
import SearchBar from "../../SearchBar";

jest.mock("../services/GlobalApi");
jest.mock("../context/UserLocationContext");
jest.mock("../context/BusinessListContext");

const renderTree = (tree) => renderer.create(tree);
describe("SearchBar", () => {
  // Renders a search bar component with a search input and search icon
  it("should render a search bar component with a search input and search icon", () => {
    const { getByPlaceholderText, getByTestId } = render(<SearchBar />);

    const searchInput = getByPlaceholderText("Search");
    const searchIcon = getByTestId("search-icon");

    expect(searchInput).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  // Allows user to input search text in the search input
  it("should allow user to input search text in the search input", () => {
    const { getByPlaceholderText } = render(<SearchBar />);

    const searchInput = getByPlaceholderText("Search");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
