import React from "react";
import "./PostDisplay.css";

const PostDisplay = ({ post, toggleEdit, deletePost, vote }) => {
  const { title, description, body, votes } = post;
  return (
    <div className="post-display">
      <div>
        <h2>{title}</h2>
        <p>
          <i>{description}</i>
        </p>
        <div>{body}</div>
      </div>
      <div className="post-display-right">
        <div className="post-display-edit">
          <i
            className="fas fa-edit text-primary ml-2"
            onClick={() => toggleEdit()}
          />
          <i
            className="fas fa-times text-danger ml-2"
            onClick={() => deletePost()}
          />
        </div>
        <div className="post-display-votes">
          <h4>{votes} votes:</h4>
          <i
            className="fas fa-thumbs-up text-success"
            onClick={() => vote("up")}
          />
          <i
            className="fas fa-thumbs-down text-danger"
            onClick={() => vote("down")}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDisplay;
