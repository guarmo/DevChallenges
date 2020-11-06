import React, { useContext } from "react";

import WeatherContext from "../../../context/weather/weatherContext";

const Search = () => {
  const weatherContext = useContext(WeatherContext);

  return (
    <button
      onClick={() => weatherContext.setSearchMode(true)}
      className="btn searchBtn"
    >
      Search for places
    </button>
  );
};

export default Search;
