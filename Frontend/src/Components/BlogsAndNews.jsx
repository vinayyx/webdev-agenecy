import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./Bigcard";
import { SimpleCard } from "../Utils/SimpleCard";
import blog1 from "../assets/blog.png";
import blog2 from "../assets/blog2.png";

import blog3 from "../assets/blog3.png";

function BlogsAndNews() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-9 mt-14 md:mt-0 bg-[#18191B] md:px-28 px-4">
      <div className="w-full flex flex-col md:mt0 mt-10 md:flex-row h-auto md:h-[35vh] ">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 gap-4 flex flex-col md:justify-center  justify-center items-start  h-full   ">
          <h1 className="font-font2 text-left font-bold text-[#D0FF71] text-sm sm:text-base md:text-lg">
            Blogs & News
          </h1>
          <h1 className="text-2xl text-left sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Craft unique that identities stand
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

      {/* Bottom Section */}
      <div className="w-full mb-8 flex justify-center items-center">
        <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center relative">
          <SimpleCard image={blog1} title="Capturing your attentions create impact" />
          <SimpleCard image={blog2} title="Push boundaries was inspire innovation" />
          <SimpleCard image={blog3} title="Design solutions for you that drive results" />
        </div>
      </div>
    </div>
  );
}

export default BlogsAndNews;
