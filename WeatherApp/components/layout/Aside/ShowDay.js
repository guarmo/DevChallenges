import React, { useContext, useEffect } from "react";
import ShowDayItem from "./ShowDayItem";
import Spinner from '../../../assets/Spinner'

import WeatherContext from "../../../context/weather/weatherContext";

const ShowDay = () => {
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    weatherContext.getWeather();
  },[]) 

  const { current, loading } = weatherContext;

  if (loading) {
    return <Spinner />
  } else {
    return <ShowDayItem 
    current={current} 
    loading={loading}
    />;
  }
};

export default ShowDay;
