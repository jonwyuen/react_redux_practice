import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root.js";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has a text area and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

// sim event => find element, sim change evt, provide fake evt obj, force component to update, assert value has changed

describe("text area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { name: "comment", value: "new comment" }
    });
    wrapper.update();
  });

  it("has a text area that users can type in", () => {
    expect(wrapper.find("textarea").props().value).toEqual("new comment");
  });

  it("empties text area when form is submitted", () => {
    wrapper.find("form").simulate("submit", {
      target: { name: "comment" }
    });
    wrapper.update();
    expect(wrapper.find("textarea").props().value).toEqual("");
  });
});
