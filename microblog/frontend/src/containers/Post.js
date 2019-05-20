import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPostFromAPI,
  updatePostInAPI,
  sendVoteToAPI,
  sendCommentToAPI,
  removeCommentFromAPI,
  removePostFromAPI
} from "../actions/posts";
import PostForm from "../components/PostForm";
import CommentList from "../components/CommentList";
import PostDisplay from "../components/PostDisplay";
import CommentForm from "../components/CommentForm";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.vote = this.vote.bind(this);
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  async componentDidMount() {
    if (!this.props.post) {
      await this.props.getPostFromAPI(this.props.id);
    }
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  editPost({ title, body, description }) {
    this.props.updatePostInAPI(this.props.post.id, title, description, body);
    this.toggleEdit();
  }

  deletePost() {
    this.props.removePostFromAPI(this.props.post.id);
    this.props.history.push("/");
  }

  vote(direction) {
    this.props.sendVoteToAPI(this.props.post.id, direction);
  }

  addComment(comment) {
    this.props.sendCommentToAPI(this.props.post.id, comment);
  }

  deleteComment(commentId) {
    this.props.removeCommentFromAPI(this.props.post.id, commentId);
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

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.postId;
  return {
    id,
    post: state.posts[id]
  };
};

export default connect(
  mapStateToProps,
  {
    getPostFromAPI,
    updatePostInAPI,
    sendVoteToAPI,
    sendCommentToAPI,
    removeCommentFromAPI,
    removePostFromAPI
  }
)(Post);
