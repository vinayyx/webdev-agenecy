import React from "react";
import TestimonialCards from "../Utils/TestimonialCards";

function Testimonial() {
  return (
    <div className="w-full flex flex-col gap-8   py-10 md:py-24 px-4 md:px-28">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-8">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 flex  flex-col gap-10">
          <h1 className="font-font2 font-bold text-[#D0FF71] text-sm sm:text-base md:text-lg">
            Client Review
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Capture attention create impact
          </h1>
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-[40%] flex items-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          </p>
        </div>
      </div>

      <TestimonialCards/>
    </div>
  );
}

export default Testimonial;
