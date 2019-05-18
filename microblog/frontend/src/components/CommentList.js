import React from "react";

const CommentList = ({ comments, deleteComment }) => {
  return comments.map(c => (
    <p key={c.id}>
      {deleteComment && (
        <i
          className="fa fa-times text-danger mr-2"
          onClick={() => deleteComment(c.id)}
        />
      )}
      {c.text}
    </p>
  ));
};

export default CommentList;
