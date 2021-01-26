import React from "react";
import alertStyles from "./alert.css";
import PropTypes from "prop-types";

const Alert = ({ error, setError, setImageAsFile }) => {
  return (
    error !== null && (
      <div style={{ alertStyles }}>
        <div className="alert">
          <span
            className="closebtn"
            onClick={() => {
              setError(null);
              setImageAsFile("");
            }}
          >
            &times;
          </span>
          {error}
        </div>
      </div>
    )
  );
};

Alert.propTypes = {
  error: PropTypes.string,
  setImageAsFile: PropTypes.func.isRequired,
};

export default Alert;
