import React from "react";
import { ArrowUpRight } from "lucide-react";
import SlidingPanels from "./SlidingPanels";

function Card({bg}) {
  return (
    <div className={`w-full flex flex-col justify-center items-center gap-9 mt-14 md:mt-0 bg-${bg} md:px-28 px-4`}>
      {/* Top Section */}
      <div className="w-full flex flex-col md:mt0 mt-10 md:flex-row h-auto md:h-[35vh] ">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 gap-4 flex flex-col md:justify-center  justify-center items-start  h-full   ">
          <h1 className="font-font2 text-left font-bold text-[#D0FF71] text-sm sm:text-base md:text-lg">
            Agency Services
          </h1>
          <h1 className="text-2xl text-left sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We provide versatile services
          </h1>
        </div>

        {/* Right Side Button */}
        <div className="w-full md:w-1/2 relative h-40 md:h-full  flex justify-center md:justify-end items-center md:items-end p-6">
          <button
            className="group bg-[#D0FF71] rounded-full px-6 py-3 flex gap-2 items-center text-black border border-transparent 
          hover:bg-black hover:border-[#D0FF71] hover:text-[#D0FF71] 
          transition-all duration-300 ease-in-out"
          >
            View More
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Section */}

     
     <div className="w-full  md:h-[105vh] mb-8 flex justify-center items-center" >
    
     <SlidingPanels/>

     </div>
    


    </div>
  );
}

export default Card;
