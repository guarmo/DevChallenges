import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import CatsContext from "../../context/cats/catsContext";
import discoverStyles from "./discover.css";

const Discover = () => {
  const catsContext = useContext(CatsContext);
  const {
    getAllBreeds,
    getQueried,
    getSearched,
    searched,
    setLoading,
  } = catsContext;
  const history = useHistory();

  useEffect(() => {
    getAllBreeds();
    getSearched();
  }, []);

  const onImageClick = async (e) => {
    setLoading();
    await getQueried(e.target.nextSibling.innerText);
    history.push("/details");
  };
  const onTextClick = async (e) => {
    setLoading();
    await getQueried(e.target.innerText);
    history.push("/details");
  };

  return (
    <div
      style={{ discoverStyles }}
      style={{ backgroundColor: "#E3E1DC" }}
      className="p-6 sm:p-12 rounded-b-2xl"
    >
      <div className="flex relative">
        <div className="discover-copy">
          <div className="text-xs sm:text-base">
            <p>Most Searched Breeds</p>
            <div
              style={{ width: "3.75rem" }}
              className="border-2 border-black rounded-2xl my-1"
            ></div>
          </div>
          <h1 className="text-xl md:text-5xl font-bold">
            66+ Breeds For you to discover
          </h1>
        </div>
        <Link
          to="/top-ten"
          style={{ right: "3rem", bottom: ".5rem" }}
          className="hidden sm:flex items-center uppercase absolute opacity-50"
        >
          <p>See more</p>
          <i className="fas fa-long-arrow-alt-right pl-2"></i>
        </Link>
      </div>
      <div
        style={{ gridTemplateRows: "1fr min-content" }}
        className="grid gap-4 sm:grid-cols-4 grid-cols-2 sm:my-8 my-4"
      >
        {searched &&
          searched.map(
            (r, index) =>
              index <= 3 && (
                <div key={index}>
                  <img
                    onClick={(e) => onImageClick(e)}
                    className="discoverImg rounded-2xl mb-2 cursor-pointer"
                    src={r.image}
                    alt=""
                  />
                  <p
                    onClick={(e) => onTextClick(e)}
                    className="text-xs sm:text-base cursor-pointer"
                  >
                    {r.name}
                  </p>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Discover;
