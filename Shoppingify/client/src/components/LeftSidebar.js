import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import cart from "../assets/shopping_cart-white.svg";
import assessment from "../assets/assessment.svg";
import replay from "../assets/replay.svg";
import list from "../assets/list.svg";
import BoxPopup from "../components/layout/BoxPopup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setEditMode } from "../actions/modes";

const LeftSidebar = ({
  setEditMode,
  modes: { editMode },
  shoppingList: { items },
}) => {
  return (
    <div
      style={{ width: "5%" }}
      className="min-h-full py-4 flex flex-col items-center justify-between"
    >
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div>
        <div className="relative my-6 hover-trigger">
          <BoxPopup text={"items"} />
          <Link to="/">
            <img className="w-6 h-6 cursor-pointer" src={list} alt="" />
          </Link>
        </div>
        <div className="relative my-6 hover-trigger">
          <BoxPopup text={"history"} />
          <Link to="/history">
            <img className="w-6 h-6 cursor-pointer" src={replay} alt="" />
          </Link>
        </div>
        <div className="relative my-6 hover-trigger">
          <BoxPopup text={"stats"} />
          <Link to="/statistics">
            <img className="w-6 h-6 cursor-pointer" src={assessment} alt="" />
          </Link>
        </div>
      </div>
      <button
        onClick={() => {
          items.length > 0 && setEditMode(!editMode);
        }}
        className="bg-cYellow-main p-2 rounded-full relative"
      >
        <img src={cart} alt="" />
        {
          <div>
            {items && (
              <span
                style={{ fontSize: "12px", top: "-5px", right: "-5px" }}
                className={`bg-cRed-main text-white px-1 rounded-sm ${
                  items.length === 0 ? "hidden" : "absolute"
                }`}
              >
                {items.length}
              </span>
            )}
          </div>
        }
      </button>
    </div>
  );
};

LeftSidebar.propTypes = {
  modes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  modes: state.modes,
  shoppingList: state.shoppingList,
});

export default connect(mapStateToProps, { setEditMode })(LeftSidebar);
