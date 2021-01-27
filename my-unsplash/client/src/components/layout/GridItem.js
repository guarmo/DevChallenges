import React, { useState, Fragment, useRef, useContext } from "react";
import PhotoContext from "../../context/photo/photoContext";

const GridItem = ({ image }) => {
  const photoContext = useContext(PhotoContext);

  const { deletePhoto, filtered } = photoContext;

  const [info, setInfo] = useState(false);
  const el = useRef(null);

  const showInfo = () => {
    setInfo(true);
  };
  const hideInfo = () => {
    setInfo(false);
  };

  return (
    <div onMouseOver={setInfo} onMouseOut={hideInfo} className="relative">
      <img
        className="rounded-xl"
        src={image.url}
        style={{ width: "100%", display: "block" }}
        alt=""
        ref={el}
      />

      {info && (
        <Fragment>
          <button
            onMouseEnter={() => showInfo()}
            onMouseLeave={() => showInfo()}
            onClick={() => deletePhoto(image._id)}
            style={{
              top: "20px",
              right: "20px",
            }}
            className="absolute font-semibold rounded-2xl text-red-700 border border-red-700 p-1 px-2 text-xs hover:border-red-500 hover:text-red-500"
          >
            delete
          </button>
          <p
            onMouseEnter={() => showInfo()}
            onMouseLeave={() => showInfo()}
            style={{ bottom: "20px", left: "20px" }}
            className="absolute text-white font-semibold"
          >
            {image.label}
          </p>
        </Fragment>
      )}
    </div>
  );
};

export default GridItem;
