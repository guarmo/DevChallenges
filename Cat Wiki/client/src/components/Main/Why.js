import React from "react";
import img1 from "../../assets/image 1.png";
import img2 from "../../assets/image 2.png";
import img3 from "../../assets/image 3.png";

const Why = () => {
  return (
    <div className="p-6 sm:p-12 flex flex-col sm:flex-row items-center">
      <div className="copy flex flex-col items-start justify-center sm:max-w-full">
        <div className="copy-container">
          <div
            style={{ width: "3.75rem" }}
            className="border-2 border-black rounded-2xl my-1"
          ></div>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Why should you have a cat?
          </h1>
          <p className="py-4">
            Having a cat around you actually triggers the release of calming
            chemicals in your body which lowers your stress and anxiety levels
          </p>
          <div className="flex items-center uppercase opacity-50">
            <p className="text-xs sm:text-base">Read more</p>
            <i className="fas fa-long-arrow-alt-right pl-2"></i>
          </div>
        </div>
      </div>
      <div className="images">
        <div className="img1">
          <img src={img2} alt="" />
        </div>
        <div className="img2">
          <img src={img1} alt="" />
        </div>
        <div className="img3">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Why;
