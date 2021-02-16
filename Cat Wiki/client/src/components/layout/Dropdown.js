import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CatsContext from "../../context/cats/catsContext";

const Dropdown = ({ hide }) => {
  const catsContext = useContext(CatsContext);
  const { getQueried, queried, setLoading } = catsContext;
  const history = useHistory();

  const onClick = async (e) => {
    setLoading();
    await getQueried(e.target.text);
    history.push("/details");
  };

  return (
    <div
      style={{
        top: "40px",
        zIndex: "1",
        overflow: "scroll",
        maxHeight: "100px",
        fontSize: "12px",
      }}
      className={`text-xs origin-top-right absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
        hide && "hidden"
      }`}
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {queried &&
          queried.map((query, index) => (
            <a
              key={index}
              onClick={(e) => onClick(e)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              role="menuitem"
            >
              {query.name}
            </a>
          ))}
        ;
      </div>
    </div>
  );
};

export default Dropdown;
