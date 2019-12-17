import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

const EditTodoForm = ({ id, task, editTodo, toggleIsEditing }) => {
  const [value, handleChange, reset] = useInputState(task);
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleIsEditing();
  };
  return (
    <form style={{ marginLeft: "1rem", width: "50%" }} onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
