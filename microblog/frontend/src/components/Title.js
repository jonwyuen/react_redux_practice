import React from "react";
import { NavLink } from "react-router-dom";

const Title = ({ id, title, description, votes, sendVote }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <NavLink to={"/" + id}>{title}</NavLink>
          </div>
          <div className="card-text">
            <i>{description}</i>
          </div>
        </div>
        <div className="card-footer">
          <small>{votes} votes</small>
          <i
            className="fas fa-thumbs-up text-success ml-2"
            onClick={() => this.sendVote("up", id)}
          />
          <i
            className="fas fa-thumbs-down text-danger ml-2"
            onClick={() => this.sendVote("down", id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
