import React from "react";
import spinnerStyle from "./spinner.css";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        style={{ spinnerStyle }}
        className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 m-auto"
      ></div>
    </div>
  );
};

export default Spinner;
