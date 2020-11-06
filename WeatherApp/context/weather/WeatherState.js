import React, { useState } from "react";
import weatherContext from "./weatherContext";

const WeatherState = (props) => {
  const [current, setCurrent] = useState({});
  const [woeid, setWoeid] = useState(44418);
  const [loading, setLoading] = useState(true);
  const [searchMode, setSearchMode] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");
  const [tempUnit, setTempUnit] = useState("C");

  // Set woeid based on geolocation
  async function getLocation() {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(async (position) => {
        const result = await fetch(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`,
          {
            headers: {
              "Access-Control-Allow-Headers": "Content-Type",
            },
          }
        );

        const woeid = await result.json();
        setWoeid(woeid[0].woeid);
      });

      setWoeid(woeid);
      setLoading(false);
    }
  }

  // Set woeid based on searched input
  async function getSearchedWeather() {
    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchedValue}`,
      {
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
    const weather = await result.json();

    setWoeid(weather[0].woeid);
    setSearchMode(false);
  }

  // Get weather data
  async function getWeather() {
    // setWoeid(woeid);

    const resultWeather = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`,
      {
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
    const weather = await resultWeather.json();

    setCurrent(weather);
    setLoading(false);
  }

  // Convert to farenheit
  const converToFarenheit = (el) => {
    return (el * 1.8 + 32).toFixed(1);
  };

  // Format date
  const formatDate = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const el = new Date(date);
    return el.toLocaleDateString("en-US", options);
  };

  return (
    <weatherContext.Provider
      value={{
        current,
        loading,
        searchMode,
        tempUnit,
        woeid,
        searchedValue,
        setTempUnit,
        setSearchMode,
        setLoading,
        setWoeid,
        setCurrent,
        getWeather,
        getLocation,
        setSearchedValue,
        getSearchedWeather,
        converToFarenheit,
        formatDate,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherState;
