import React from "react";
import { Plus, Sparkle } from "lucide-react";

function Experience() {
  return (
    <div className="md:px-28 px-4 flex flex-col gap-10 mt-10 justify-center items-center w-full min-h-[80vh]">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[60%] gap-6">
        {/* Left Text */}
        <div className="flex flex-col gap-4 w-full md:w-[55%] text-left">
          <h1 className="font-font2 font-bold text-[#D0FF71] text-sm sm:text-base md:text-lg">
            Creative Digital Agency
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Agenxis empowering brands innovate with purpose
          </h1>
        </div>

        {/* Circle with Number */}
        <div className="flex justify-start md:justify-start items-center w-full md:w-[20%]">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex justify-center items-center bg-[#F1F1F1] rounded-full">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-black font-bold">
              5
            </h1>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 absolute -top-2 -right-2 bg-[#18191B] rounded-full flex justify-center items-center group cursor-pointer">
              <Plus
                size={20}
                className="text-white transform transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="relative w-full md:w-[25%] flex justify-center md:justify-end items-center">
          <div className="md:absolute md:bottom-3 md:right-1 flex flex-col gap-2 text-left">
            <h1 className="text-lg text-[#D0FF71] sm:text-xl font-bold">
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
      <div className="w-full flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6">
        {[
          "350+ very satisfied clients around the worldwide.",
          "20+ successful global campaigns delivered.",
          "15+ years of consistent innovation in design.",
        ].map((text, i) => (
          <div
            key={i}
            className="group w-full md:w-[30%] flex flex-col gap-5 p-4 sm:p-6 bg-transparent rounded-lg cursor-pointer"
          >
            {/* Animated underline */}
            <div className="h-[1px] w-full bg-gray-800 relative overflow-hidden rounded">
              <div className="absolute inset-0 w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* Content */}
            <div className="w-full flex gap-3 sm:gap-4 justify-start items-center transition-colors duration-500 group-hover:text-white">
              <Sparkle className="h-8 w-8 sm:h-10 sm:w-10 transition-colors duration-500 group-hover:text-[#D0FF71]" />
              <h1 className="text-sm sm:text-base md:text-lg font-semibold leading-snug">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
