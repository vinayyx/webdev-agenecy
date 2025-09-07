import React from "react";

function Experience() {
  return (
    <div className="md:px-28 px-4 flex flex-col gap-8 mt-10 justify-center items-center w-full min-h-[75vh]">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[60%] gap-6">
        {/* Left Text */}
        <div className="flex flex-col gap-4 w-full md:w-[55%] text-left md:text-left">
          <h1 className="font-font2 font-bold text-[#D0FF71] text-sm sm:text-base md:text-lg">
            Creative Digital Agency
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Agenxis empowering brands innovate with purpose
          </h1>
        </div>

        {/* Circle with Number */}
        <div className="flex justify-start items-start md:justify-start  md:items-start w-full md:w-[20%]">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-[80%] aspect-square flex justify-center items-center bg-white rounded-full">
            <h1 className="text-6xl sm:text-7xl md:text-9xl text-black font-bold">
              5
            </h1>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="relative w-full md:w-[25%] flex justify-start md:justify-end items-center">
          <div className="md:absolute md:bottom-3 md:right-1 flex flex-col gap-2 text-left md:text-left">
            <h1 className="text-lg sm:text-xl font-bold">
              Years of experience
            </h1>
            <p className="text-sm sm:text-base">
              Connecting businesses with their audiences and individuals with
              their dreams. Our path forward
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-40 sm:h-48 md:h-[35%] bg-blue-200 rounded-lg">
        sdfaisdhfasdf
      </div>
    </div>
  );
}

export default Experience;
