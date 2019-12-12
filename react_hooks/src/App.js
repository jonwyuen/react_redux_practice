import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggler from "./Toggler";
import SimpleFormHook from "./SimpleFormHook";
import SWMovies from "./SWMovies";

function App() {
	return (
		<div className="App">
			<Toggler />
			<SimpleFormHook />
			<SWMovies />
		</div>
	);
}

export default App;
