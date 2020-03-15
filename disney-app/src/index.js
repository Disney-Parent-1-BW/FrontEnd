import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducers from "./reducers";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const enhancer = compose(
    applyMiddleware(thunk),
    applyMiddleware(logger)
)

const store = createStore(
    reducers,
    enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
