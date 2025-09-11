import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import circleimage from "../assets/circleArrow.png";

export function SimpleCard({ image, title }) {
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
          alt={title}
        />
        {/* Highlight circle */}
        <div  ref={circleRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-40 h-40 bg-[#D0FF71] rounded-full opacity-0 scale-50" >
         
          <img
            src={circleimage}
            className="w-full h-full object-cover"
            alt={circleimage}
          />
        </div>
      </div>

      {/* Title only */}
      <h1 className="mt-2 font-bold text-xl sm:text-2xl md:text-2xl">
        {title}
      </h1>
    </div>
  );
}
