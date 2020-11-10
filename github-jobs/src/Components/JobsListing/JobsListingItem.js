import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./jobsListingItem.css";
import timeIcon from '../../Assets/time.svg';
import JobsContext from "../../Context/jobsContext";

const JobsListingItem = ({
  job: { index, time, location, company, type, title, logo },
}) => {
  const jobsContext = useContext(JobsContext);

  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const today = new Date().toLocaleString("en-US", options);
  const createdAt = new Date(time).toLocaleString("en-US", options);

  const daysAgo = Math.floor(
    (new Date(today) - new Date(createdAt)) / (1000 * 3600 * 24)
  );

  const handleClick = (e) => {
    jobsContext.setDetailPage(true);
    jobsContext.setselectedIndex(index);
  };

    return (
      <div className="item" index={index}>
        <img
          onClick={(e) => handleClick(e)}
          className="logo"
          src={logo}
          alt="company logo"
        />
        <div className="jobListingContainer">
          <header>
            <p>{company}</p>
          </header>
          <main>
            <h2 className="company">{title}</h2>
          </main>
          <footer>
            <button className="info">{type}</button>
            <div className="details">
              <p>
                <i className="fa fa-globe" aria-hidden="true"></i> {location}
              </p>
              <div className="time">
                <img style={{width:'23px'}} src={timeIcon} alt="time icon"/>
                
                <p style={{paddingLeft:'5px'}}>{daysAgo} days ago</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
};

export default JobsListingItem;

JobsListingItem.propTypes = {
  time: PropTypes.instanceOf(Date),
  location: PropTypes.string,
  company: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.string,
};
