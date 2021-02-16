import React from "react";
import spinnerStyles from "./spinner.css";

const Spinner = () => {
  return (
    <div className="cont flex items-center justify-center">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
    </div>
  );
};

export default Spinner;
