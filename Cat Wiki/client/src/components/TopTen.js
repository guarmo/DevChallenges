import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CatsContext from "../context/cats/catsContext";

const TopTen = () => {
  const catsContext = useContext(CatsContext);
  const { getSearched, searched } = catsContext;

  useEffect(() => {
    getSearched();
  }, []);

  return (
    <div className="mt-4">
      <Link className="text-sm" to="/">
        <i className="fas fa-long-arrow-alt-left"></i> Back
      </Link>
      <h1 className="text-4xl my-4">Top 10 most searched breeds</h1>

      {searched &&
        searched.map((el, index) => (
          <div key={index} className="flex my-8">
            <img
              style={{ width: "170px", height: "170px" }}
              src={el.image}
              alt=""
            />
            <div className="ml-8">
              <h1 className="text-4xl">{`${index + 1}. ${el.name}`}</h1>
              <p>{el.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TopTen;
