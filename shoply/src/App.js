import React, { Component } from "react";
import Main from "./components/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <div className="App container">
          <Main />
        </div>
      </main>
    );
  }
}

export default App;
