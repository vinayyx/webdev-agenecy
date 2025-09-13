import { SquaresExclude } from "lucide-react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const WorkCard = ({ title, desc }) => {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const btnRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    const btn = btnRef.current;
    const texts = textRef.current.querySelectorAll("h1, p");
    const icon = iconRef.current;

    const tl = gsap.timeline({ paused: true });
    tl.to(overlay, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    })
      .to(
        btn,
        {
          backgroundColor: "black",
          color: "white",
          duration: 0.3,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        [texts, icon],
        {
          color: "black",
          duration: 0.3,
          ease: "power2.out",
        },
        "<"
      );

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full sm:w-[80%] md:w-[45%] lg:w-[23%] h-[300px] md:h-[350px] rounded-lg p-5 bg-black overflow-hidden"
    >
      {/* Lime overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#D0FF71] rounded-lg scale-0 origin-top-right"
      ></div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 h-full flex flex-col gap-6 justify-center items-start w-full text-white"
      >
        <div ref={iconRef}>
          <SquaresExclude size={50} />
        </div>
        <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
        <p className="text-sm font-bold text-gray-400">{desc}</p>
        <button
          ref={btnRef}
          className="bg-white text-black py-2 px-6 rounded-full transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

function Ourwork() {
  return (
    <div className="w-full flex justify-center items-center  min-h-screen lg:px-16  py-16">
      <div className="w-full flex justify-center  items-center">
        <div className="w-full flex  flex-col justify-center items-center gap-20">
          <h1 className="font-bold text-[#D0FF71] text-3xl md:text-5xl text-center">
            Our work process
          </h1>

          {/* Responsive grid */}
          <div className="w-full flex flex-wrap justify-center items-center gap-6 md:gap-5">
            <WorkCard
              title="Research and analysis"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing suscipit nec iaculis pellentesque et."
            />
            <WorkCard
              title="Design Phase"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing suscipit nec iaculis pellentesque et."
            />
            <WorkCard
              title="Development"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing suscipit nec iaculis pellentesque et."
            />
            <WorkCard
              title="Deployment"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing suscipit nec iaculis pellentesque et."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourwork;
