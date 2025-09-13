import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import iphone from "../assets/iphone.png";
import laptop from "../assets/laptop.png";
import paper from "../assets/paper.png";
import macbook from "../assets/macbook.png";
import circle from "../assets/circleArrow.png";





 export function Card({ image, title }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    const circle = circleRef.current;

    // hover in
    const handleEnter = () => {
      gsap.to(img, {
        scale: 1.08,
        rotate: -3,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(circle, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    // hover out
    const handleLeave = () => {
      gsap.to(img, { scale: 1, rotate: 0, duration: 0.5, ease: "power3.out" });
      gsap.to(circle, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power3.out",
      });
    };

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
      className="relative w-full md:w-[55%] flex flex-col justify-center gap-4 h-[450px] sm:h-[500px] md:h-[95vh] rounded-3xl shadow-lg p-1"
    >
      <div className="relative w-full h-[80%] rounded-2xl overflow-hidden">
        <img
          ref={imgRef}
          className="h-full w-full rounded-2xl object-cover"
          src={image}
          alt=""
        />
        {/* Red circle hidden by default */}
        <div
          ref={circleRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-40 h-40 bg-[#D0FF71] rounded-full opacity-0 scale-50"
        >  <img className="w-full h-full object-cover" src={circle} alt="" /> </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex gap-4 flex-wrap">
          <div className="px-4 py-1 text-sm sm:text-base text-center rounded-full border-[1px] border-white">
            Business
          </div>
          <div className="px-4 py-1 text-sm sm:text-base text-center rounded-full border-[1px] border-white">
            Agency
          </div>
        </div>

        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">{title}</h1>
      </div>
    </div>
  );
}

function Bigcard() {
  return (
    <div className="w-full mt-6">
      <div className="w-full relative flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center py-8 min-h-[100vh] rounded-2xl">
        
          <Card image={laptop} title="UI/UX Design" />
          <Card image={iphone} title="App Development" />
        
      </div>
      <div className="w-full relative flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center py-8 min-h-[100vh] rounded-2xl">
        
          <Card image={macbook} title="Web Development" />
          <Card image={paper} title="Brand Design" />
        
      </div>
    </div>
  );
}

export default Bigcard;
