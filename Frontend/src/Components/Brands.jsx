import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import compnay1 from "../assets/compnay1.png";
import compnay2 from "../assets/compnay2.png";

function Brands() {
  const sliderRef = useRef(null);

  const brands = [
    compnay1, compnay2, compnay1, compnay2,
    compnay1, compnay2, compnay1, compnay2,
    compnay1, compnay2, compnay1, compnay2,
    compnay1,
  ];

  useEffect(() => {
    const slider = sliderRef.current;

    // duplicate content for seamless infinite scroll
    const sliderContent = slider.innerHTML;
    slider.innerHTML += sliderContent;

    gsap.to(slider, {
      xPercent: -50, // shift half because we duplicated
      duration: 20,  // speed control (increase = slow, decrease = fast)
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-full h-[25vh] md:mt-5  md:h-[30vh]  flex justify-center items-center   overflow-hidden">
      <div
        ref={sliderRef}
        className="flex  md:gap-40 gap-16 items-center "
      >
        {brands.map((e, i) => (
          <div
            key={i}
            className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0"
          >
            <img
              className="w-full h-full object-contain"
              src={e}
              alt={`brand-${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
