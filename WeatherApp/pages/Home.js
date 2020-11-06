import React, { Fragment, useEffect, useContext } from "react";
import TempConverter from "../components/layout/Main/UnitButtons";
import WeekForecast from "../components/layout/Main/Forecast/WeekForecast";
import HighlightsDay from "../components/layout/Main/Highlights/HighlightsDay";
import Aside from "../components/layout/Aside/Aside";

import WeatherContext from "../context/weather/weatherContext";

const Home = () => {
  const weatherContext = useContext(WeatherContext);

  const { woeid } = weatherContext;

  useEffect(async () => {
    weatherContext.getWeather();
  }, [woeid]);

  return (
      <div className="App">
         <Aside />
        <main className="main-content">
          
            <Fragment>
              <header>
                <TempConverter />
              </header>
              <main>
                <WeekForecast />
                <HighlightsDay />
              </main>
            </Fragment>
        </main>
      </div>
  );
};

export default Home;
