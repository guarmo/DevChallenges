import React from "react";
import CatwikiLogoWhite from "../../assets/CatwikiLogoWhite.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center bg-black px-6 sm:px-12 py-6 rounded-t-2xl">
      <img src={CatwikiLogoWhite} alt="" />
      <p className="text-white text-xs sm:text-base">
        &#169; Armando Guarino - devchallenges.io 2021
      </p>
    </div>
  );
};

export default Footer;
