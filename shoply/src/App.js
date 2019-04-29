import React, { Component } from "react";
import Main from "./components/Main";
import NavBarContainer from "./containers/NavBarContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <NavBarContainer />
        <div className="App container">
          <Main />
        </div>
      </main>
    );
  }
}

export default App;
