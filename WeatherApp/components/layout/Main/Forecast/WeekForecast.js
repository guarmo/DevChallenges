import React, { useEffect, useContext } from "react";
import WeatherContext from "../../../../context/weather/weatherContext";
import WeekForecastItem from "./WeekForecastItem";
import Spinner from '../../../../assets/Spinner'

const WeekForecast = () => {
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    weatherContext.getWeather();
  },[])

  const { current, loading, tempUnit } = weatherContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <section className="weekForecast">
        {((current.consolidated_weather).slice(1)).map((day, index) => (
          <WeekForecastItem key={index} day={day} tempUnit={tempUnit} />
        ))}
      </section>
    )
  }
};

export default WeekForecast;
