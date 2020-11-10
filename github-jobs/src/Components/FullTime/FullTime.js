import React, { useContext } from "react";
import JobsContext from "../../Context/jobsContext";

const FullTime = () => {
  const jobsContext = useContext(JobsContext);

  const { fullTimeCheck } = jobsContext;

  return (
    <div className="fullTimeDiv">
      <input
        id="fullTime"
        name="fullTime"
        type="checkbox"
        onChange={() => jobsContext.setFullTimeCheck(!fullTimeCheck)}
      />
      <label htmlFor="location">Full Time</label>
    </div>
  );
};

export default FullTime;
