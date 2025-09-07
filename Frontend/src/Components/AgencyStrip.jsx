import React, { useEffect, useRef } from "react";
import { Sparkle } from "lucide-react";
import gsap from "gsap";

function AgencyStrip() {
  const stripRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const darkTrack = document.querySelector(".dark-track");
      const yellowTrack = document.querySelector(".yellow-track");

      const darkWidth = darkTrack.scrollWidth / 10; // 10 sets ka ek base width
      const yellowWidth = yellowTrack.scrollWidth / 10;

      // Responsive speed
      const isMobile = window.innerWidth < 640;
      const speed = isMobile ? 25 : 15; // phone pe slow, desktop pe fast

      // Dark strip (left)
      gsap.to(darkTrack, {
        x: -darkWidth,
        duration: speed,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % -darkWidth}px`,
        },
      });

      // Yellow strip (right)
      gsap.to(yellowTrack, {
        x: yellowWidth,
        duration: speed,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % yellowWidth}px`,
        },
      });
    }, stripRef);

    return () => ctx.revert();
  }, []);

  const AgencyItem = ({ color = "text-black" }) => (
    <div
      className={`flex h-full ${color} justify-center items-center gap-2 sm:gap-4 px-4`}
    >
      <Sparkle className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
      <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
        Agency
      </h1>
    </div>
  );

  return (
    <div
      ref={stripRef}
      className="mt-[5vw] relative flex flex-col justify-center items-center w-full h-[25vw] sm:h-[15vw] overflow-hidden"
    >
      {/* Dark strip */}
      <div className="w-[1000%] rotate-6 md:rotate-3 absolute h-[55%] sm:h-[40%] bg-[#18191B] flex items-center overflow-hidden">
        <div className="dark-track flex gap-10 sm:gap-20">
          {Array(10).fill(0).map((_, i) => (
            <div key={i} className="flex gap-10 sm:gap-20">
              <AgencyItem color="text-white" />
              <AgencyItem color="text-white" />
              <AgencyItem color="text-white" />
              <AgencyItem color="text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Yellow strip */}
      <div className="w-[1000%] -rotate-3 md:-rotate-3 absolute h-[55%] sm:h-[40%] bg-[#D0FF71] flex items-center overflow-hidden">
        <div className="yellow-track flex gap-10 sm:gap-20">
          {Array(10).fill(0).map((_, i) => (
            <div key={i} className="flex gap-10 sm:gap-20">
              <AgencyItem color="text-black" />
              <AgencyItem color="text-black" />
              <AgencyItem color="text-black" />
              <AgencyItem color="text-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgencyStrip;
