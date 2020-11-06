import React, { useState, useEffect } from "react";
import _ from "underscore";
import countriesContext from "./countriesContext";

const CountriesState = (props) => {
  const [countries, setCountries] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [resultsMode, setResultsMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [questionNum, setQuestionNum] = useState(0);
  const [options, setOptions] = useState(
    _.shuffle([questionNum, questionNum + 1, questionNum + 2, questionNum + 3])
  );
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setOptions(
      _.shuffle([
        questionNum,
        questionNum + 1,
        questionNum + 2,
        questionNum + 3,
      ])
    );
  }, [questionNum]);

  return (
    <countriesContext.Provider
      value={{
        countries,
        clicked,
        correct,
        setCorrect,
        setClicked,
        setCountries,
        setLoading,
        setQuestionNum,
        resultsMode,
        setResultsMode,
        loading,
        questionNum,
        options,
      }}
    >
      {props.children}
    </countriesContext.Provider>
  );
};

export default CountriesState;
