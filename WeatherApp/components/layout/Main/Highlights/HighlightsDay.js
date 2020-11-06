import React, { Fragment, useContext, useEffect  } from "react";
import WeatherContext from "../../../../context/weather/weatherContext";
import Spinner from '../../../../assets/Spinner'

const HighlightsDay = () => {
  const weatherContext = useContext(WeatherContext);

  const { loading, current } = weatherContext;

  useEffect(() => {
    weatherContext.getWeather();
  }, [])

  if (loading) {
    return <Spinner />
  } else 
    return (
      <Fragment>
        <h2 className="header">Today's Highlights</h2>
        <section className="highlightsDay">
          <div className="highlight">
            <p>Wind Status</p>
            <h1 className="central">
              {current.consolidated_weather[0].wind_speed.toFixed(1)} mph
            </h1>
          </div>

          <div className="highlight">
            <p>Humidity</p>
            <h1 className="central">
              {current.consolidated_weather[0].humidity}%
            </h1>
            <div className="bar">
              <div
                className="progress"
                style={{
                  height: "24px",
                  width: `${current.consolidated_weather[0].humidity}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="highlight">
            <p>Visibility</p>
            <h1 className="central">
              {current.consolidated_weather[0].visibility.toFixed(1)} miles
            </h1>
          </div>

          <div className="highlight">
            <p>Air Pressure</p>
            <h1 className="central">
              {current.consolidated_weather[0].air_pressure} mb
            </h1>
          </div>
        </section>
      </Fragment>
    );
};

export default HighlightsDay;
