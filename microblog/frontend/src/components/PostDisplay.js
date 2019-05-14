import React from "react";
import "./PostDisplay.css";

const PostDisplay = ({ title, description, body, votes }) => {
  return (
    <div className="post-display">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{body}</div>
      </div>
      <div className="post-display-right">
        <div className="post-display-edit">
          <i className="fas fa-edit text-primary" />
          <i className="fas fa-times text-danger" />
        </div>
        <div className="post-display-votes">
          <h4>{votes} votes:</h4>
          <i className="fas fa-thumbs-up text-success" />
          <i className="fas fa-thumbs-down text-danger" />
        </div>
      </div>
    </div>
  );
};

export default PostDisplay;
