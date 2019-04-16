import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
// redux thunk allows us to write action creators that return a function instead of an action
// thunk delays dispatch so that we can wait until some async action has completed to dispatch an action

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
