import React, {useContext} from "react";
import "./detailAside.css";
import arrowReturn from '../../Assets/arrowReturn.svg'
import "../../Constants/colorVars.css";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import JobsContext from "../../Context/jobsContext";

const DetailAside = () => {
  const jobsContext = useContext(JobsContext);

  const { jobsListing, selectedIndex } = jobsContext;

  return (
    <div>
      <div onClick={() => {jobsContext.setDetailPage(false)}} className="back">
        <div className="backDiv">
        <img style={{width:'20px'}}src={arrowReturn} alt=""/>
        <p>Back to search</p>
        </div>
      </div>
      <p className="howTo">How to apply</p>
  <p className="apply">{ReactHtmlParser(jobsListing[selectedIndex].apply)}</p>
    </div>
  );
};

export default DetailAside;
