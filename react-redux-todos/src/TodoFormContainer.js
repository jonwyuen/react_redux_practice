import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, editTodo, getTodos } from "./actionCreators";
import TodoForm from "./TodoForm";

class TodoFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  handleSubmit(id, todo) {
    if (id) this.props.editTodo(id, todo);
    else this.props.addTodo(todo);
    this.props.history.push("/todos");
  }

  render() {
    return (
      <div>
        <TodoForm todo={this.props.todo} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  if (id) {
    return {
      todo: state.todos.find(todo => todo._id === id)
    };
  }
  return { todo: null };
};

export default connect(
  mapStateToProps,
  { addTodo, editTodo, getTodos }
)(TodoFormContainer);
