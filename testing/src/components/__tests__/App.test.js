import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// shallow renders just the component and none of its children

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("shows a comment box", () => {
  // find returns array of all instances of found component
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
