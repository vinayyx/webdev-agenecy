import { ArrowUpRight } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="w-full flex justify-start items-center h-auto md:h-[70vh]  md:px-28 px-4 py-10">
      <div className="flex gap-5 flex-col justify-center items-start">
        {/* Subtitle */}
        <h1 className="text-sm sm:text-base md:text-xl text-[#D0FF71]">
          Our Prices 
        </h1>

        {/* Main Heading */}
        <div className="w-full md:w-[60vw]">
          <h1 className="text-left text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-[1.2]">
            Delivering the best services within your budget, with care and quality.
          </h1>
        </div>

        
      </div>
    </div>
  );
}

export default Hero;
