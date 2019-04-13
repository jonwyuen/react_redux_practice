import React from "react";
import TodoListContainer from "./TodoListContainer";
import TodoFormContainer from "./TodoFormContainer";
import "./App.css";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/todos/new">Add a todo</Link>
      </p>
      <Route exact path="/todos" component={TodoListContainer} />
      <Route path="/todos/new" component={TodoFormContainer} />
      <Route path="/todos/:id/edit" component={TodoFormContainer} />
    </div>
  );
};

export default App;
