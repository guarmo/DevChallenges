import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import CountriesState from "./context/CountriesState";

ReactDOM.render(
  <React.StrictMode>
    <CountriesState>
      <App />
    </CountriesState>
  </React.StrictMode>,
  document.getElementById("root")
);
