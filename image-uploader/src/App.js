import React, { Fragment, useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Uploading from "./components/uploading/Uploading";
import Success from "./components/success/Success";
import Alert from "./components/layout/alert/Alert";

function App() {
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Fragment>
      <Alert
        error={error}
        setError={setError}
        setImageAsFile={setImageAsFile}
      />
      {loading && <Uploading />}
      {!loading && imageAsUrl === "" && (
        <Home
          imageAsFile={imageAsFile}
          setImageAsFile={setImageAsFile}
          setImageAsUrl={setImageAsUrl}
          setLoading={setLoading}
          setError={setError}
          error={error}
        />
      )}
      {!loading && imageAsUrl !== "" && <Success imageAsUrl={imageAsUrl} />}
    </Fragment>
  );
}

export default App;
