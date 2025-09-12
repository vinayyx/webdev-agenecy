import { ArrowUpRight } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="w-full flex justify-start items-center h-auto md:h-[70vh]  md:px-28 px-4 py-10">
      <div className="flex gap-5 flex-col justify-center items-start">
        {/* Subtitle */}
        <h1 className="text-sm sm:text-base md:text-xl text-[#D0FF71]">
          Why Choose Us
        </h1>

        {/* Main Heading */}
        <div className="w-full md:w-[60vw]">
          <h1 className="text-left text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-[1.2]">
            Connecting businesses with their audiences and individuals with
            their dreams. Our path forward is one of continuous growth
          </h1>
        </div>

        {/* Button */}
        <button
          className="group mt-8 sm:mt-10 bg-[#D0FF71] rounded-full px-4 sm:px-6 py-2 sm:py-3 flex gap-2 items-center text-sm sm:text-base text-black border border-transparent 
          hover:bg-black hover:border-[#D0FF71] hover:text-[#D0FF71] 
          transition-all duration-300 ease-in-out"
        >
          Get a Quote
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={18} />
          </span>
        </button>

        
      </div>
    </div>
  );
}

export default Hero;
