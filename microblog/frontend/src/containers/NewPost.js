import React, { Component } from "react";
import "./NewPost.css";
import { connect } from "react-redux";
import { addPostToAPI } from "../actions/posts";
import PostForm from "../components/PostForm";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  addPost({ title, description, body }) {
    this.props.addPostToAPI(title, description, body);
    this.props.history.push("/");
  }

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <main>
        <h1>New Post</h1>
        <PostForm addPost={this.addPost} cancel={this.cancel} />
      </main>
    );
  }
}

export default connect(
  null,
  { addPostToAPI }
)(NewPost);
