import React, { Component } from "react";

class PostForm extends Component {
  static defaultProps = {
    post: { title: "", description: "", body: "" }
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      description: this.props.post.description,
      body: this.props.post.body
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPost(this.state);
  }

  render() {
    return (
      <form>
        <div />
      </form>
    );
  }
}

export default PostForm;
