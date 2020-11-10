import React, { useState, useEffect } from "react";
import jobsContext from "./jobsContext";
import axios from "axios";

const JobsState = (props) => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [keywordInput, setKeywordInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [fullTime, setFullTime] = useState("");
  const [fullTimeCheck, setFullTimeCheck] = useState(false);
  const [jobsListing, setJobsListing] = useState([]);
  const [detailPage, setDetailPage] = useState(false);
  const [selectedIndex, setselectedIndex] = useState("");
  const [currentPage, setCurrentPage ] = useState(1);
  const [itemsPerPage, setItemsPerPage ] = useState(5);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `https://jobs.github.com/positions.json?utf8=✓&description=${keyword}&location=${location}${fullTime}`
      )
      .then((res) => {
        const result = res.data.map((job, index) => {
          return {
            index: index,
            id: job.id,
            type: job.type,
            location: job.location,
            index: index,
            title: job.title,
            company: job.company,
            description: job.description,
            logo: job.company_logo,
            time: job.created_at,
            apply: job.how_to_apply,
          };
        });

        setJobsListing(result);
        setLoading(false);
        setCurrentPage(1)
      });
  }, [location, keyword, fullTime]);

  // Full time
  useEffect(() => {
    fullTimeCheck === true ? setFullTime("&full_time=on") : setFullTime("");
  }, [fullTimeCheck]);

  return (
    <jobsContext.Provider
      value={{
        location,
        jobsListing,
        keywordInput,
        fullTimeCheck,
        loading,
        detailPage,
        selectedIndex,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        setselectedIndex,
        setDetailPage,
        setFullTimeCheck,
        setLoading,
        setKeywordInput,
        setLocation,
        setJobsListing,
        setKeyword,
      }}
    >
      {props.children}
    </jobsContext.Provider>
  );
};

export default JobsState;
