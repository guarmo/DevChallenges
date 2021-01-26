import React from "react";
import uploadingStyles from "./uploading.css";
import Loader from "./Loader";

const Uploading = () => {
  return (
    <div stlye={{ uploadingStyles }} className="card card-uploading">
      <h1 className="text-bg uploading-h">Uploading...</h1>
      <Loader />
    </div>
  );
};

export default Uploading;
