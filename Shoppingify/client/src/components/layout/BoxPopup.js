import React from "react";

const BoxPopup = ({ text }) => {
  // @todo fix popup (different sizes & different distance to icon)
  return (
    <div className="hover-target">
      {/* Border */}
      <div
        style={{ left: "-27px" }}
        className="border-2 border-cYellow-main absolute h-full rounded-xl"
      ></div>
      <div
        style={{
          fontSize: "12px",
          right: "-70px",
          WebkitBoxAlign: "center",
          WebkitBoxPack: "center",
          display: "webkitBox",
        }}
        className="absolute px-3 bg-cGray-dark text-white rounded-md"
      >
        <span>{text}</span>
        {/* Triangle */}
        <div
          style={{
            top: "5px",
            left: "-4px",
            width: "0",
            height: "0",
            borderTop: "4px solid transparent",
            borderBottom: "4px solid transparent",
            borderRight: "4px solid #454545",
          }}
          className="absolute w-2 h-2"
        ></div>
      </div>
    </div>
  );
};

export default BoxPopup;
