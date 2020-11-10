import React, { useContext } from "react";
import "./App.css";
import "../Constants/colorVars.css";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import FullTime from "../Components/FullTime/FullTime";
import SearchByLocation from "../Components/SearchByLocation/SearchByLocation";
import DefaultLocations from "../Components/DefaultLocations/DefaultLocations";
import JobsListing from "../Components/JobsListing/JobsListing";
import DetailPage from '../Components/DetailPage/DetailPage'
import DetailAside from '../Components/DetailAside/DetailAside'

import JobsContext from "../Context/jobsContext";

function App() {
  /* Last adjustments:
  - Fix date formatting
  - Add time icon to jobListingItem
  - Uncheck radio buttons
  - Add application form in detail page
  - Add pagination
  */
  const jobsContext = useContext(JobsContext);

  const { detailPage } = jobsContext;

  return (
    <div className="App">
      <div className="container">
        <header>
          {
            (!detailPage) ? <div><Header />
            <Search /></div> : <Header />
          }
        </header>
        <div className="grid">
          <aside>
            {
              (!detailPage) ? <div><FullTime />
              <SearchByLocation />
              <DefaultLocations /></div> : <DetailAside />
            }
          </aside>
          <main>
            {
              (!detailPage) ? <JobsListing /> : <DetailPage />
            }
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
