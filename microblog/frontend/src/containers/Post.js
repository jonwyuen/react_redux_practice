import React, { Component } from "react";
import PostDisplay from "../components/PostDisplay";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <PostDisplay />
        <section>
          <h4>Comments</h4>
        </section>
      </div>
    );
  }
}

export default Post;
