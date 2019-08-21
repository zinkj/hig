import React from "react";
import renderer from "react-test-renderer";
import ContentPresenter from "./ContentPresenter";

describe("Accordion/ContentPresenter", () => {
  it("renders collapsed content", () => {
    const wrapper = <ContentPresenter collapsed />;
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders expanded content", () => {
    const wrapper = <ContentPresenter collapsed={false} />;
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
