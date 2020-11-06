import React, { useContext } from "react";
import undrawWinners from "../../../assets/undraw_winners_ao2o 2.svg";

import CountriesContext from "../../../context/countriesContext";

const ResultsCard = () => {
  const countriesContext = useContext(CountriesContext);

  const { correct } = countriesContext;

  return (
    <main className="card card-results">
      <img src={undrawWinners} alt="undraw-winners" />
      <div className="results">
        <h1>Results</h1>
        <p>
          You got <span className="correctNum">{correct}</span> correct answers{" "}
        </p>
      </div>
      <button onClick={() => {window.location.reload()}} className="btn tryAgainBtn hover">Try again</button>
    </main>
  );
};

export default ResultsCard;
