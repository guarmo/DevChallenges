import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.js";
import JobsState from "./Context/JobsState";

ReactDOM.render(
  <React.StrictMode>
    <JobsState>
      <App />
    </JobsState>
  </React.StrictMode>,
  document.getElementById("root")
);
