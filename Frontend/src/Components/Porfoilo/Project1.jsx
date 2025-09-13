import { ArrowUpRight } from "lucide-react";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import sassflow from "../../assets/sassflow.png";

function Project1() {
  const imgRef = useRef(null);

  const dummydata = [
    {
      tittle: "SassFlow",
      image: sassflow,
      link: "https://sassflow-9tta.vercel.app/",
      discription:
        "A SaaS platform enabling AI-powered image generation, title creation, and automated emails, offering businesses advanced creative and communication tools",
    },
  ];

  useEffect(() => {
    const el = imgRef.current;
    if (el) {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { scale: 1.05, duration: 0.5, ease: "power3.out" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { scale: 1, duration: 0.5, ease: "power3.out" });
      });
    }
  }, []);

  return (
    <div className="w-full bg-black ">
      {dummydata.map((data, index) => (
        <div
          key={index}
          className="w-full  h-auto md:h-[100vh] md:px-16 px-6 md:py-16 py-10"
        >
          <div className="w-full flex bg-[#0E0F11] flex-col md:flex-row justify-between rounded-2xl p-4 items-center gap-8 h-full">
            
            {/* Left Image */}
            <div className="w-full md:w-[50%] h-[250px] md:h-[90%] overflow-hidden rounded-2xl">
              <img
                ref={imgRef}
                src={data.image}
                className="w-full h-full object-cover rounded-2xl"
                alt={data.tittle}
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[50%] flex flex-col justify-center items-start p-6 gap-10 md:gap-16 h-auto md:h-[90%]">
              <div className="flex w-full md:w-[80%] flex-col justify-center items-start gap-5">
                <h1 className="text-3xl md:text-4xl text-left font-bold text-[#D0FF71]">
                  {data.tittle}
                </h1>
                <p className="text-sm md:text-base text-gray-300">
                  {data.discription}
                </p>
              </div>

              <button
                onClick={() => window.open(data.link, "_blank")}
                className="group bg-[#D0FF71] rounded-full px-6 py-2 flex gap-2 items-center text-black border border-transparent 
              hover:bg-black hover:border-[#D0FF71] hover:text-[#D0FF71] 
              transition-all duration-300 ease-in-out"
              >
                View Project
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project1;
