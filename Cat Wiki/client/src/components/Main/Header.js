import React, { useState, useContext } from "react";
import CatwikiLogoWhite from "../../assets/CatwikiLogoWhite.svg";
import HeroImagelg from "../../assets/HeroImagelg.png";
import CatsContext from "../../context/cats/catsContext";
import Dropdown from "../../components/layout/Dropdown";

const Header = () => {
  const catsContext = useContext(CatsContext);
  const { getQueried } = catsContext;
  const [hide, setHide] = useState(true);

  const onInputChange = async (e) => {
    if (e.target.value === "") {
      setHide(true);
    } else {
      getQueried(e.target.value);
      setHide(false);
    }
  };

  return (
    <header className="w-full">
      <div className="w-full relative mt-4">
        <div className="text-white absolute w-2/4 flex flex-col items-start justify-center h-full p-4 pl-6 sm:pl-12">
          <div className="header-copy">
            <img className="w-full" src={CatwikiLogoWhite} alt="" />
            <h1 className="main-h sm:text-lg md:text-2xl py-2 sm:py-4">
              Get to know more about your cat breed{" "}
            </h1>
            <form className="relative flex">
              <input
                onChange={(e) => onInputChange(e)}
                style={{
                  fontFamily: "Montserrat, FontAwesome",
                  fontSize: "12px",
                }}
                className="bg-white text-black h-10 px-5 pr-10 rounded-full w-full text-sm focus:outline-none"
                type="text"
                list="options"
                placeholder="Search"
              />
              <Dropdown hide={hide} />
            </form>
          </div>
        </div>
        <img className="rounded-t-2xl" src={HeroImagelg} alt="" />
      </div>
    </header>
  );
};

export default Header;
