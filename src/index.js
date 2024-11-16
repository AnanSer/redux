import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <provider store={store}>
    <App />
  </provider>,
  document.getElementById("root")
);