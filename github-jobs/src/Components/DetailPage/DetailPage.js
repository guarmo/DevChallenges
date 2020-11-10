import React, { useContext } from "react";
import "./detailPage.css";
import timeIcon from '../../Assets/time.svg'
import worldIcon from '../../Assets/earth.svg'
import JobsContext from "../../Context/jobsContext";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const DetailPage = () => {
  const jobsContext = useContext(JobsContext);

  const { jobsListing, selectedIndex } = jobsContext;

   // Format date
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const today = new Date().toLocaleString("en-US", options);
    const createdAt = new Date(jobsListing[selectedIndex].time).toLocaleString("en-US", options);
  
    const daysAgo = Math.floor(
      (new Date(today) - new Date(createdAt)) / (1000 * 3600 * 24)
    );

  return (
    <div className="detailPage">
      <div className="top">
        <p className="title">{jobsListing[selectedIndex].title}</p>
        <button className="info">{jobsListing[selectedIndex].type}</button>
      </div>
      <div className="daysAgoDiv">
        <img style={{width:'15px'}} src={timeIcon} alt="time"/>
      <p className="daysAgo">{daysAgo} days ago</p>
      </div>
      <div className="logoName">
        <img
          className="company logo"
          src={jobsListing[selectedIndex].logo}
          alt="logo"
        />
        <div className="rightSide">
          <p className="companyName">{jobsListing[selectedIndex].company}</p>
          <div className="locationDiv">
              <img style={{width:'15px'}} src={worldIcon} alt="world"/>
              <p className="location">{jobsListing[selectedIndex].location}</p>
            </div>
        </div>
      </div>
      <div>{ReactHtmlParser(jobsListing[selectedIndex].description)}</div>
    </div>
  );
};

export default DetailPage;
