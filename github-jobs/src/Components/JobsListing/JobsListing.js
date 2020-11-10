import React, { Fragment, useContext } from "react";
import JobsContext from "../../Context/jobsContext";
import JobsListingItem from "./JobsListingItem";
import previousArrow from "../../Assets/previousArrow.svg";
import nextArrow from "../../Assets/nextArrow.svg";

const JobsListing = () => {
  const jobsContext = useContext(JobsContext);

  const { jobsListing, currentPage, itemsPerPage, loading } = jobsContext;

  const handleClick = (e) => {
    jobsContext.setCurrentPage(Number(e.target.id));

    const buttons = document.querySelectorAll(".page");
    [...buttons].map((el) => el.classList.remove("selected"));
    e.target.classList.add("selected");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobsListing.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage !== jobsListing.length / 5) {
      jobsContext.setCurrentPage(currentPage + 1);
      const buttons = document.querySelectorAll(".page");
      [...buttons].map((el) => el.classList.remove("selected"));
      document.getElementById(`${currentPage + 1}`).classList.add("selected");
    }
  };

  const prevPage = () => {
    if (currentPage !== indexOfFirstItem + 1) {
      jobsContext.setCurrentPage(currentPage - 1);
      const buttons = document.querySelectorAll(".page");
      [...buttons].map((el) => el.classList.remove("selected"));
      document.getElementById(`${currentPage - 1}`).classList.add("selected");
    }
  };

  const renderItems = currentItems.map((item) => {
    return item;
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(jobsListing.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number === 1) {
      return (
        <li
          className="page selected"
          key={number}
          id={number}
          onClick={(e) => handleClick(e)}
        >
          {number}
        </li>
      );
    } else {
      return (
        <li
          className="page"
          key={number}
          id={number}
          onClick={(e) => handleClick(e)}
        >
          {number}
        </li>
      );
    }
  });

  if (loading) {
    return <div className="loaderContainer"><div className="loader"></div></div>;
  } else {
    if (jobsListing.length !== 0) {
      return (
        <Fragment>
          {renderItems.map((job, index) => (
            <JobsListingItem key={index} job={job} loading={loading} />
          ))}
          <ul className="page-numbers">
            <li onClick={() => prevPage()} className="arrow prevArrow">
              <img src={previousArrow} alt="prev arrow" />
            </li>
            {renderPageNumbers}
            <li onClick={() => nextPage()} className="arrow">
              <img src={nextArrow} alt="next arrow" />
            </li>
          </ul>
        </Fragment>
      );
    } else {
      return <h1>No results found</h1>;
    }
  }
};

export default JobsListing;
