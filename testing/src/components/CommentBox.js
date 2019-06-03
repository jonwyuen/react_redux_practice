import React, { Component } from "react";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // call action creator and save comment
    this.setState({ [e.target.name]: "" });
  }
  // state = { comment: "" };

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   // call action creator and save comment
  //   this.setState({ [e.target.name]: "" });
  // };

  render() {
    return (
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
    );
  }
}

export default CommentBox;
