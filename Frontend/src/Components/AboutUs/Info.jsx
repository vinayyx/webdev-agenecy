import { ArrowUpRight } from "lucide-react";
import React from "react";
import image from "../../assets/aboutushero.png";

function Info() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:px-16 bg-[#18191B] px-4 py-10 md:py-20">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex gap-6 flex-col justify-center items-start">
            {/* Subtitle */}
            <h1 className="text-sm sm:text-base font-bold md:text-xl text-[#D0FF71]">
              Why Choose Us
            </h1>

            {/* Main Heading */}
            <div className="w-full">
              <h1 className="text-left text-xl sm:text-2xl md:text-3xl font-bold leading-snug md:leading-[1.3]">
                Connecting businesses with their audiences and individuals with
                their dreams. Our path forward is one of continuous growth
              </h1>
            </div>

            {/* Button */}
            <button
              className="group mt-6 sm:mt-8 bg-[#D0FF71] rounded-full px-5 sm:px-6 py-2 sm:py-3 flex gap-2 items-center text-sm sm:text-base text-black border border-transparent 
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

        {/* Right Image */}
        <div className="w-full md:w-1/2 rounded-lg">
          <img
            src={image}
            className="w-full h-auto md:h-full rounded-lg object-cover"
            alt="about-us"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
