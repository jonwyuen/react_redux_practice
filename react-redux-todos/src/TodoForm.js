import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
    this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>Add Todo</label>
          <input
            type="text"
            name="todo"
            id="todo"
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
