import React, { useContext } from "react";
import Search from "../Aside/Search";
import Locate from "../Aside/Locate";
import ShowDay from "./ShowDay";
import SearchModeEl from './SearchModeEl'

import WeatherContext from "../../../context/weather/weatherContext";

const Aside = () => {
  const weatherContext = useContext(WeatherContext);

  const { searchMode } = weatherContext;

  if (!searchMode) {
    return (
      <aside className="aside-content">
        <header>
          <Search />
          <Locate />
        </header>
        <main>
          <ShowDay />
        </main>
      </aside>
    );
  } else
   return <SearchModeEl />;
};

export default Aside;
