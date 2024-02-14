import renderer from "react-test-renderer";
import React from "react";
import ShimmerEffectItem from "../../ShimmerEffectItem";

const renderTree = (tree) => renderer.create(tree);
describe("ShimmerEffectItem", () => {
  // Renders a div with a class of 'rounded-md p-4 max-w-sm w-full'
  it("should render a div with class 'rounded-md p-4 max-w-sm w-full' when ShimmerEffectItem is called", () => {
    const wrapper = shallow(<ShimmerEffectItem />);
    expect(wrapper.find("div.rounded-md.p-4.max-w-sm.w-full")).toHaveLength(1);
  });

  // Renders a div with a class of 'animate-pulse flex space-x-4'
  it("should render a div with class 'animate-pulse flex space-x-4' when ShimmerEffectItem is called", () => {
    const wrapper = shallow(<ShimmerEffectItem />);
    expect(wrapper.find("div.animate-pulse.flex.space-x-4")).toHaveLength(1);
  });

  // Renders a div with a class of 'rounded-2xl bg-slate-200 h-[90px] w-[90px]'
  it("should render a div with class 'rounded-2xl bg-slate-200 h-[90px] w-[90px]' when ShimmerEffectItem is called", () => {
    const wrapper = shallow(<ShimmerEffectItem />);
    expect(
      wrapper.find("div.rounded-2xl.bg-slate-200.h-[90px].w-[90px]")
    ).toHaveLength(1);
  });

  // None of the classes are present
  it("should not render any div with classes when ShimmerEffectItem is called", () => {
    const wrapper = shallow(<ShimmerEffectItem />);
    expect(wrapper.find("div")).toHaveLength(0);
  });

  // The divs are not rendered
  it("should not render any divs when ShimmerEffectItem is called", () => {
    const wrapper = shallow(<ShimmerEffectItem />);
    expect(wrapper.find("div")).toHaveLength(0);
  });

  // Renders a div with a class of 'flex-1 space-y-6 py-1'
  it("should render a div with class 'flex-1 space-y-6 py-1' when ShimmerEffectItem is called", () => {
    const wrapper = shallow(<ShimmerEffectItem />);
    expect(wrapper.find("div.flex-1.space-y-6.py-1")).toHaveLength(1);
  });
});
