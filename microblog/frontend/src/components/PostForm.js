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
      <div>
        <form className="mb-4" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="form-title">Title: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              id="form-title"
              name="title"
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-description">Description: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              id="form-description"
              name="description"
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-body">Body: </label>
            <textarea
              type="text"
              className="form-control"
              onChange={this.handleChange}
              id="form-body"
              name="body"
              rows={15}
              value={this.state.body}
            />
          </div>

          <button className="btn btn-primary mr-2">Submit</button>
          <button className="btn btn-secondary" onClick={this.props.cancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
