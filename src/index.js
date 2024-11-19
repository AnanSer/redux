// import React from "react";
// import {createRoot} from "react-dom";
// import { Provider } from "react-redux";

// import "./index.css";
// import App from "./App";
// import store from "./store";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

import React from "react";
import { createRoot } from "react-dom/client"; // Correct import for React 18
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

// Get the root element
const container = document.getElementById("root");

// Create a root and render the application
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
