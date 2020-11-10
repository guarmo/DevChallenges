import React, { useContext } from "react";
import JobsContext from "../../Context/jobsContext";

const DefaultLocations = () => {
  const jobsContext = useContext(JobsContext);

  const handleChange = (e) => {
    jobsContext.setLoading(true);
    jobsContext.setLocation(e.target.value);
    document.querySelector('.locationInput').value=''
  };

  return (
    <div className="defaultLocations">
      <div>
        <input
          type="radio"
          id="defaultOne"
          name="default"
          value="London"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="defaultOne">London</label>
      </div>
      <div>
        <input
          type="radio"
          id="defaultTwo"
          name="default"
          value="NewYork"
          onClick={(e) => handleChange(e)}
        />
        <label htmlFor="defaultTwo">New York</label>
      </div>
      <div>
        <input
          type="radio"
          id="defaultThree"
          name="default"
          value="Amsterdam"
          onClick={(e) => handleChange(e)}
        />
        <label htmlFor="defaultThree">Amsterdam</label>
      </div>
      <div>
        <input
          type="radio"
          id="defaultFour"
          name="default"
          value="Berlin"
          onClick={(e) => handleChange(e)}
        />
        <label htmlFor="defaultThree">Berlin</label>
      </div>
    </div>
  );
};

export default DefaultLocations;
