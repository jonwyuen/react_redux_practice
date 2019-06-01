import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";

// shallow renders just the component and none of its children

it("shows a comment box", () => {
  const wrapped = shallow(<App />);
  // find returns array of all instances of found component
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
