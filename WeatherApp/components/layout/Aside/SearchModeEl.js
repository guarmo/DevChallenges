import React, { useContext } from "react";
import WeatherContext from "../../../context/weather/weatherContext";

const SearchModeEl = () => {
  const weatherContext = useContext(WeatherContext);

  const { searchedValue } = weatherContext;

  const onSubmit = (e) => {
    e.preventDefault();

    weatherContext.getSearchedWeather();
    weatherContext.setSearchedValue('');
  };

  return (
    <div className="searchModeEl">
      <header>
        <button
          onClick={() => {
            weatherContext.setSearchMode(false);
          }}
          className="closeBtn material-icons"
        >
          close
        </button>
      </header>
      <form onSubmit={onSubmit}>
        <input
          className="fontAwesome searchInput"
          type="text"
          placeholder="&#xF002; Search"
          onChange={(e) => weatherContext.setSearchedValue(e.target.value)}
          value={searchedValue}
        />
        <button className="searchBtn">Search</button>
      </form>
    </div>
  );
};

export default SearchModeEl;
