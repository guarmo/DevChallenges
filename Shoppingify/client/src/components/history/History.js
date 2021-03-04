import React, { useState, useEffect } from "react";
import Default from "./Default";
import Details from "./Details";
import { connect } from "react-redux";
import { getHistoryLists } from "../../actions/historyList";

const History = ({ historyList, getHistoryLists }) => {
  const [defaultMode, setDefaultMode] = useState(true);
  const [detailsMode, setDetailsMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function onLoad() {
      setLoading(true);
      await getHistoryLists();
      setLoading(false);
    }

    onLoad();
  }, []);

  return (
    <div
      style={{ width: "65%" }}
      className="bg-gray-100 px-4 sm:px-16 overflow-scroll"
    >
      {loading && <h1>Loading...</h1>}
      {!loading && defaultMode && (
        <Default
          setDefaultMode={setDefaultMode}
          setDetailsMode={setDetailsMode}
          historyList={historyList}
        />
      )}
      {!loading && detailsMode && (
        <Details
          setDefaultMode={setDefaultMode}
          setDetailsMode={setDetailsMode}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  historyList: state.historyList,
});

export default connect(mapStateToProps, { getHistoryLists })(History);
