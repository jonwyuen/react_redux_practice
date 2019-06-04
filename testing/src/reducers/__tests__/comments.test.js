import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    comment: "new comment"
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(["new comment"]);
});
