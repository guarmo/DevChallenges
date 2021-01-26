import React from "react";
import loaderStyles from "./loader.css";

const Loader = () => {
  return (
    <div className="progress" style={{ loaderStyles }}>
      <div className="indeterminate"></div>
    </div>
  );
};

export default Loader;
