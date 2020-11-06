import React from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import WeatherState from "./context/weather/WeatherState";

const App = () => {

  return (
    <WeatherState>
      <Home />
    </WeatherState>
  );
};

export default App;
