import React from "react";
import Bigcard from "./Bigcard";

function Gallary() {
  return (
    <div className="md:px-28 px-4 w-full bg-[#0E0F11]">
      <div className="w-full flex flex-col justify-between  md:mt0 mt-10 md:flex-row h-auto md:h-[35vh] ">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 gap-4 flex flex-col md:justify-center  justify-center items-start  h-full">
          <h1 className="font-font2 text-left font-bold text-[#D0FF71] text-sm sm:text-base md:text-lg">
            Gallery
          </h1>
          <h1 className="text-2xl text-left sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Make your brand unforgettable
          </h1>
        </div>

        {/* Right Side Button */}
        <div className="relative w-full  md:w-[25%]  flex justify-center md:justify-end items-center">
          <div className="md:absolute right-8 md:bottom-3 md:right-1 flex flex-col gap-2 text-left">
            <p className="text-sm sm:text-base">
              Connecting businesses with their audiences and individuals with
              their dreams. Our path forward
            </p>
          </div>
        </div>
      </div>

      <Bigcard />
    </div>
  );
}

export default Gallary;
