import React, { useEffect, useContext } from "react";
import _ from "underscore";
import "./main.css";
import QuestionCard from "../QuestionCard";
import ResultsCard from "./ResultsCard";
import { fetchAllCountries } from "../../../services/fetchAllCountries";

import CountriesContext from "../../../context/countriesContext";

const Main = () => {
  const countriesContext = useContext(CountriesContext);

  const { resultsMode, loading, questionNum } = countriesContext;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllCountries();

      countriesContext.setCountries(_.sample(result.data, 40));
      setTimeout(() => {
        countriesContext.setLoading(false);
      }, 1500);
    };

    fetchData();
  }, [questionNum]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : resultsMode ? (
        <ResultsCard />
      ) : (
        <QuestionCard />
      )}
    </>
  );
};

export default Main;
