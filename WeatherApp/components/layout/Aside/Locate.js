import React, { useContext } from "react";
import WeatherContext from '../../../context/weather/weatherContext'

const Locate = () => {
  const weatherContext = useContext(WeatherContext)

  return (
    <button onClick={() => weatherContext.getLocation()} className="btn locateBtn">
      <i className="material-icons">gps_fixed</i>
    </button>
  );
};

export default Locate;
