import React from "react";

function HeroSection1() {
  return (
    <div className="w-full md:px-28 px-1  mt-5 md:h-[50vh] md:mt-7 flex flex-col md:flex-row relative">
      {/* Left Section */}
      <div className="relative w-full md:w-[65%]  md:h-full flex items-center md:items-end justify-center md:justify-start p-3 sm:p-4">
        <h1 className="leading-snug text-left font-bold text-3xl sm:text-4xl md:text-8xl md:absolute md:bottom-5  md:text-left">
          Empower brands bonds <br />
          <span className="font-font1 text-[#D0FF71] font-normal">
            creativity
          </span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-[35%]  md:h-full flex items-center justify-center md:items-end p-3 sm:p-4">
        <div className="md:absolute md:right-0 md:bottom-0 w-full md:w-[80%]">
          <p className="text-sm text-left sm:text-base leading-relaxed  md:text-left">
            We don’t just build websites, we build experiences that grow businesses and earn trust. With clean code, modern design, and scalable solutions, our goal is to turn your vision into a digital presence that connects, engages, and delivers results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection1;
