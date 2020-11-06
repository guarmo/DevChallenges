import React, { useContext, useEffect } from "react";
import adventureImg from "../../assets/undraw_adventure_4hum 1.svg";
import CountriesContext from "../../context/countriesContext";

const QuestionCard = () => {
  const countriesContext = useContext(CountriesContext);

  const {
    options,
    countries,
    questionNum,
    clicked,
    correct,
  } = countriesContext;

  useEffect(() => {
    questionNum === 9 && countriesContext.setResultsMode(true);
  }, [questionNum]);

  const handleClick = (e) => {
    const icon = document.createElement("span");
    icon.className = "material-icons";

    if (!clicked && e.target.classList.contains("option")) {
      if (e.target.textContent === countries[questionNum].name) {
        e.target.parentElement.parentElement.classList.add("selectedBg");
        setTimeout(() => {
          e.target.parentElement.parentElement.classList.add("correct");
          icon.textContent = "check_circle_outline";
          countriesContext.setCorrect(correct + 1);
          e.target.parentElement.parentElement.appendChild(icon);
        }, 2000);
        countriesContext.setClicked(true);
      } else {
        e.target.parentElement.parentElement.classList.add("selectedBg");
        setTimeout(() => {
          e.target.parentElement.parentElement.classList.add("incorrect");
          icon.textContent = "highlight_off";
          e.target.parentElement.parentElement.appendChild(icon);
        }, 2000);
        countriesContext.setClicked(true);
      }

      setTimeout(() => {
        e.target.parentElement.parentElement.classList.remove("selectedBg");
        setTimeout(() => {
          document.querySelector(".nextBtn").classList.add("show");
        }, 1000);
      }, 2000);
    }
  };

  const handleNext = () => {
    countriesContext.setClicked(false);

    countriesContext.setQuestionNum(questionNum + 1);

    // Remove icon
    document.querySelector(".material-icons").remove();

    // Remove bg color
    const list = document.querySelectorAll(".choice");
    [...list].map((item) => item.classList.remove("incorrect"));
    [...list].map((item) => item.classList.remove("correct"));

    // Remove next btn
    document.querySelector(".nextBtn").classList.remove("show");
  };

  return (
  <div className="main">
    <img className="adventureImg" src={adventureImg} alt="adventure" />

  <header>
    <h1 className="header">Country Quiz</h1>
  </header>

  <main className="card card-questions">
      {questionNum % 2 === 0 ? (
        <h3 className="question">
          {countries[questionNum].capital} is the capital of
        </h3>
      ) : (
        <div>
          <img
            style={{ maxWidth: "90px" }}
            src={countries[questionNum].flag}
            alt="flag"
          />
          <h3 className="question">Which country does this flag belong to?</h3>
        </div>
      )}
      <div onClick={(e) => handleClick(e)} className="choice">
        <div className="left">
          <span className="letter">A</span>
          <span className="option hover">{countries[options[0]].name}</span>
        </div>
      </div>
      <div onClick={(e) => handleClick(e)} className="choice">
        <div className="left">
          <span className="letter">B</span>
          <span className="option hover">{countries[options[1]].name}</span>
        </div>
      </div>
      <div onClick={(e) => handleClick(e)} className="choice">
        <div className="left">
          <span className="letter">C</span>
          <span className="option hover">{countries[options[2]].name}</span>
        </div>
      </div>
      <div onClick={(e) => handleClick(e)} className="choice">
        <div className="left">
          <span className="letter">D</span>
          <span className="option hover">{countries[options[3]].name}</span>
        </div>
      </div>

      <footer>
        <button onClick={() => handleNext()} className="btn nextBtn hover">
          Next
        </button>
      </footer>
    </main>
  </div>

    
  );
};

export default QuestionCard;
