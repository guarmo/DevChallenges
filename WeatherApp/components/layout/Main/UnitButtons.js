import React, { useContext } from "react";
import WeatherContext from "../../../context/weather/weatherContext";

const TempConverter = () => {
  const weatherContext = useContext(WeatherContext);

  const { tempUnit } = weatherContext;

  return (
    <div>
      <button
        className="tempBtn"
        style={tempUnit === "C" ? selectedBtn : unselectedBtn}
        onClick={() => {
          weatherContext.setTempUnit("C");
        }}
        className="btn tempBtn cBtn"
      >
        °C
      </button>
      <button
        className="tempBtn"
        style={tempUnit === "C" ? unselectedBtn : selectedBtn}
        onClick={() => {
          weatherContext.setTempUnit("F");
        }}
        className="btn tempBtn fBtn"
      >
        °F
      </button>
    </div>
  );
};

const selectedBtn = {
  color: "#110e3c",
  backgroundColor: "#e7e7eb",
};

const unselectedBtn = {
  color: "#e7e7eb",
  backgroundColor: "#585676",
};

export default TempConverter;
