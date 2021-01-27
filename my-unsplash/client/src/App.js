import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./tailwind.output.css";
import PhotoState from "./context/photo/PhotoState";
import Home from "./components/layout/Home";

function App() {
  return (
    <PhotoState>
      <Router>
        <div className="max-w-screen-lg m-auto p-4">
          <Route exact path="/" component={Home}></Route>
        </div>
      </Router>
    </PhotoState>
  );
}

export default App;
