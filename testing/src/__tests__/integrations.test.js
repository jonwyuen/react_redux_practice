import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";

it("can fetch a list of comments and display them", () => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );
});
