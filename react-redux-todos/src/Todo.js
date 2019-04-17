import React from "react";
import { Link } from "react-router-dom";

const Todo = ({ todo, id, removeTodo }) => {
  return (
    <div>
      <li>
        {todo}
        <button>
          <Link to={`/todos/${id}/edit`}>Edit</Link>
        </button>
        <button
          style={{ color: "red", marginLeft: "10px" }}
          onClick={removeTodo}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Todo;
