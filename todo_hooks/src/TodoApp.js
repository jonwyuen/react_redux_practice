import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";

const TodoApp = () => {
	const initialTodos = [
		{ id: 1, task: "Eat", completed: false },
		{ id: 2, task: "Sleep", completed: true },
		{ id: 3, task: "Work", completed: false }
	];

	const [ todos, setTodos ] = useState(initialTodos);
	const addTodo = newTodoText => {
		setTodos([ ...todos, { id: 4, task: newTodoText, completed: false } ]);
	};
	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: "100vh",
				backgroundColor: "#fafafa"
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: "64px" }}>
				<ToolBar>
					<Typography color="inherit">Todos With Hooks</Typography>
				</ToolBar>
			</AppBar>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} />
		</Paper>
	);
};

export default TodoApp;
