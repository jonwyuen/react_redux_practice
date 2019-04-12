import React from "react";
import TodoListContainer from "./TodoListContainer";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";

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
      <Route path="/todos" component={TodoListContainer} />
      <Route exact path="/" render={() => <Redirect to="/todos" />} />
    </div>
  );
};

export default App;
