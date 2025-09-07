import React from "react";
import groupImage from "../assets/herosection2 group image.png";
import girlImage from "../assets/herosection2 girl.png";

function HeroSection2() {
  return (
    <div className="w-full md:px-28 px-1  flex flex-col md:flex-row gap-4 mt-10 md:mt-[5vw]">
      {/* Left Section */}
      <div className="w-full md:w-[65%] min-h-[30vh] md:h-[85vh]">
        <img
          className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
          src={groupImage}
          alt="Group"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[35%] min-h-[30vh] sm:min-h-[40vh] md:h-[85vh] flex items-center justify-center">
        <img
          className="w-[95%] h-[85%] sm:h-[90%] object-cover rounded-2xl sm:rounded-3xl"
          src={girlImage}
          alt="Girl"
        />
      </div>
    </div>
  );
}

export default HeroSection2;
