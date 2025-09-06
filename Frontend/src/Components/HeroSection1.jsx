import React from "react";

function HeroSection1() {
  return (
    <div className="w-full  h-[30vh] mt-5 md:h-[50vh] md:mt-7  flex flex-col md:flex-row relative">
      {/* Left Section */}
      <div className=" relative w-full md:w-[65%] h-[40vh] md:h-full flex items-end justify-center md:justify-start p-4">
        <h1 className="leading-tight  font-bold text-6xl sm:text-5xl md:text-8xl md:absolute md:bottom-5">
          Empower brands  bold{" "}
          <br /> <span className="font-font1 text-[#D0FF71] font-normal">
            creativity
          </span>
        </h1>
      </div>

      {/* Right Section */}
      <div className=" relative w-full md:w-[35%] h-[40vh] md:h-full flex items-center justify-center md:items-end  p-4">

        <div className=" md:absolute md:right-0 md:bottom-0 h-[25%] md:w-[80%] w-full flex justify-center items-center">
           <h1 >
          Connecting businesses with their audiences and  individuals with
          their dreams. Our path forward  is one of continuous growth
        </h1>

        </div>
       
      </div>
    </div>
  );
}

export default HeroSection1;
