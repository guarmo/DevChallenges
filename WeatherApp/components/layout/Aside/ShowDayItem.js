import React, { useContext } from "react";
import WeatherContext from "../../../context/weather/weatherContext";

const ShowDayItem = () => {
  const weatherContext = useContext(WeatherContext);

  const { current, tempUnit } = weatherContext;
  return (
    <section className="showDay">
      <div className="clouds">
        <i className="material-icons cloud cloud-top-left">cloud</i>
        <i className="material-icons cloud cloud-top-right">cloud</i>
        <i className="material-icons cloud cloud-bottom-left">cloud</i>
        <i className="material-icons cloud cloud-bottom-right">cloud</i>
      </div>

      <img
        className="icon"
        src={`https://www.metaweather.com/api/static/img/weather/${current.consolidated_weather[0].weather_state_abbr}.svg`}
        alt="icon"
      />
      <h1 className="temp">
        {tempUnit === "C"
          ? current.consolidated_weather[0].the_temp.toFixed(1)
          : weatherContext.converToFarenheit(
              current.consolidated_weather[0].the_temp.toFixed(1)
            )}
        <span>°{tempUnit}</span>
      </h1>
      <p className="stateName">
        {current.consolidated_weather[0].weather_state_name}
      </p>
      <p className="date">{`Today - ${weatherContext.formatDate(current.consolidated_weather[0].applicable_date)}`}</p>
      <p className="city">
        <i className="material-icons">location_on</i>
        {current.title}
      </p>
    </section>
  );
};

export default ShowDayItem;
