import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function TaglineLoader({ onFinish }) {
  const [show, setShow] = useState(true);
  const taglineRef = useRef(null);

  const tagline = "Crafting Beautiful Web Experiences";

  useEffect(() => {
    const letters = taglineRef.current.querySelectorAll("span");

    const tl = gsap.timeline({
      onComplete: () => {
        setShow(false);
        if (onFinish) onFinish();
      },
    });

    // Fade + slide + slight scale in
    tl.fromTo(
      letters,
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.05, duration: 0.5, ease: "power3.out" }
    )
      .to(
        letters,
        { opacity: 0, y: -20, stagger: 0.03, duration: 0.5, delay: 1 }
      );

  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <h1
        ref={taglineRef}
        className="text-[#D0FF71] font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-wide"
      >
        {tagline.split("").map((char, i) =>
          char === " " ? (
            <span key={i} className="inline-block w-2">&nbsp;</span>
          ) : (
            <span key={i} className="inline-block">{char}</span>
          )
        )}
      </h1>
    </div>
  );
}
