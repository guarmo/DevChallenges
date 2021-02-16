import React, { useEffect, useContext } from "react";
import Header from "./Header";
import Discover from "./Discover";
import Why from "./Why";
import CatsContext from "../../context/cats/catsContext";
import Spinner from "../layout/Spinner";

const Main = () => {
  const catsContext = useContext(CatsContext);
  const { clearQueried, loading } = catsContext;

  useEffect(() => {
    clearQueried();
  }, []);

  {
    return !loading ? (
      <>
        <Header />
        <Discover />
        <Why />
      </>
    ) : (
      <Spinner />
    );
  }
};

export default Main;
