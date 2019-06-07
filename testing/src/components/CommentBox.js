import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = { comment: "" };

  // component just got rendered
  componentDidMount() {
    this.handleAuth();
  }

  // when component just got updated
  componentDidUpdate() {
    this.handleAuth();
  }

  handleAuth() {
    if (!this.props.auth) {
      this.props.history.push("/");
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ [e.target.name]: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            onChange={this.handleChange}
            name="comment"
            value={this.state.comment}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  actions
)(CommentBox);
