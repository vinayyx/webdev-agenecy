import React from "react";
import highlight from "../assets/highlight.png";

function Highlights() {
  return (
    <div className="w-full relative flex justify-center items-center h-[60vh] md:h-[90vh] md:px-28 px-4">
      {/* Background image */}
      <div className="w-full h-[60vh] md:h-[80%] relative rounded-3xl overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={highlight}
          alt="highlight"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65 rounded-3xl"></div>

        {/* Content on top */}
        <div className="absolute inset-0 flex flex-col md:flex-row  md:6 justify-between items-center px-6">
          {/* Left side */}
          <div className="w-full md:w-[50%]  h-[90%] flex flex-col gap-5 md:justify-start justify-center text-center md:text-left">
            <h1 className="text-lg md:text-xl text-[#D0FF71]">
              Highlights
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug md:leading-tight">
              Spark creativity transform brands
            </h1>
          </div>

          {/* Right side */}
          <div className="w-full md:w-[50%] relative h-[90%] flex items-center md:items-end justify-center md:justify-end">
            <div className="w-full sm:w-[80%] md:w-[60%] text-center md:text-left">
              <p className="text-base sm:text-lg md:text-xl">
                Capturing and showcasing the key moments, achievements, and features that define your journey and make your story truly unforgettable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
