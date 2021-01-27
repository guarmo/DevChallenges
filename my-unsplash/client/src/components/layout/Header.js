import React, { useContext } from "react";
import logo from "../../assets/my_unsplash_logo.svg";
import PhotoContext from "../../context/photo/photoContext";

const Header = () => {
  const photoContext = useContext(PhotoContext);

  const { filterItems, setShowModal, clearFilter } = photoContext;

  const onChange = (e) => {
    filterItems(e.target.value);
    if (e.target.value === "") {
      clearFilter();
    }
  };

  return (
    <div className="flex flex-col justify-between content-center sm:flex-row p-2">
      <div className="flex content-center sm:justify-between h-full">
        <img src={logo} alt="" />
        <input
          onChange={(e) => onChange(e)}
          style={{ minWidth: "300px", fontFamily: "Noto Sans, FontAwesome" }}
          type="text"
          className="outline-none text-grey-darkest rounded-lg p-3 text-sm"
          placeholder="&#xF002; Search by name"
        />
      </div>

      <button
        onClick={() => setShowModal()}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg sm:mt-0 mt-4"
      >
        Add a photo
      </button>
    </div>
  );
};

export default Header;
