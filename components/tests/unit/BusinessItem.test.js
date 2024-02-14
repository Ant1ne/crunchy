import renderer from "react-test-renderer";
import React from "react";
import Image from "next/image";
import BusinessItem from "../../BusinessItem";

jest.mock("next/image");

const renderTree = (tree) => renderer.create(tree);
describe("BusinessItem", () => {
  // Renders the business item with the correct image, name, vicinity, and rating
  it("should render the business item with the correct image, name, vicinity, and rating", () => {
    const business = {
      name: "Business Name",
      vicinity: "Business Address",
      rating: 4.5,
      photos: [
        {
          photo_reference: "photo_reference",
        },
      ],
    };

    renderTree(<BusinessItem business={business} />);

    expect(screen.getByAltText("business-image")).toBeInTheDocument();
    expect(screen.getByText("Business Name")).toBeInTheDocument();
    expect(screen.getByText("Business Address")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  // Renders the business item with a default image if no photo reference is provided
  it("should render the business item with a default image if no photo reference is provided", () => {
    const business = {
      name: "Business Name",
      vicinity: "Business Address",
      rating: 4.5,
      photos: [],
    };

    renderTree(<BusinessItem business={business} />);

    expect(screen.getByAltText("business-image")).toBeInTheDocument();
    expect(screen.getByAltText("business-image")).toHaveAttribute("src", "");
  });

  // Renders the business item with a default rating if no rating is provided
  it("should render the business item with a default rating if no rating is provided", () => {
    const business = {
      name: "Business Name",
      vicinity: "Business Address",
      photos: [
        {
          photo_reference: "photo_reference",
        },
      ],
    };

    renderTree(<BusinessItem business={business} />);

    expect(screen.getByAltText("business-image")).toBeInTheDocument();
    expect(screen.getByText("Business Name")).toBeInTheDocument();
    expect(screen.getByText("Business Address")).toBeInTheDocument();
    expect(screen.getByText("No Rating")).toBeInTheDocument();
  });

  // Renders the business item with an empty business object
  it("should render the business item with an empty business object", () => {
    const business = {};

    renderTree(<BusinessItem business={business} />);

    expect(screen.getByAltText("business-image")).toBeInTheDocument();
    expect(screen.queryByText("Business Name")).not.toBeInTheDocument();
    expect(screen.queryByText("Business Address")).not.toBeInTheDocument();
    expect(screen.getByText("No Rating")).toBeInTheDocument();
  });

  // Renders the business item with a business object missing the name property
  it("should render the business item with a business object missing the name property", () => {
    const business = {
      vicinity: "Business Address",
      rating: 4.5,
      photos: [
        {
          photo_reference: "photo_reference",
        },
      ],
    };

    renderTree(<BusinessItem business={business} />);

    expect(screen.getByAltText("business-image")).toBeInTheDocument();
    expect(screen.queryByText("Business Name")).not.toBeInTheDocument();
    expect(screen.getByText("Business Address")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  // Renders the business item with a business object missing the vicinity property
  it("should render the business item with a business object missing the vicinity property", () => {
    const business = {
      name: "Business Name",
      rating: 4.5,
      photos: [
        {
          photo_reference: "photo_reference",
        },
      ],
    };

    renderTree(<BusinessItem business={business} />);

    expect(screen.getByAltText("business-image")).toBeInTheDocument();
    expect(screen.getByText("Business Name")).toBeInTheDocument();
    expect(screen.queryByText("Business Address")).not.toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });
});
