import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo ? props.todo.todo : "",
      id: props.todo ? props.todo.id : null,
      redirect: false
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
    this.props.handleSubmit(this.state.id, this.state.todo);
    e.target.reset();
    this.setState({
      redirect: true
    });
  }

  render() {
    const form = this.state.redirect ? (
      <Redirect to="/todos" />
    ) : (
      <form onSubmit={this.handleSubmit}>
        <label>Todo</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button>Save Todo</button>
      </form>
    );
    return <div>{form}</div>;
  }
}

export default TodoForm;
