import React from "react";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";

const Details = ({
  setDefaultMode,
  setDetailsMode,
  historyList: { currentList },
}) => {
  return (
    <div>
      {/* Back */}
      <div className="flex items-center text-sm text-cYellow-main">
        <span className="material-icons text-sm">keyboard_backspace</span>
        <button
          onClick={() => {
            setDefaultMode(true);
            setDetailsMode(false);
          }}
        >
          back
        </button>
      </div>

      {/* Name */}
      <h1 className="text-2xl">{currentList.name}</h1>

      {/* Date */}
      <div className="text-sm flex items-center">
        <span className="material-icons text-cGray-standard">event_note</span>
        <span className="ml-2 text-cGray-standard">
          {formatDate(currentList.date)}
        </span>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        {currentList &&
          currentList.items.map((item, index) => (
            <div
              key={index}
              className="bg-white flex justify-between items-center p-1 px-3 shadow rounded-lg mb-2"
            >
              <h1>{item.name}</h1>
              <span className="text-cYellow-main">{item.pieces} pcs</span>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  historyList: state.historyList,
});

export default connect(mapStateToProps, {})(Details);
