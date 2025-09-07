import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ux from "../assets/ux.png"
import web from "../assets/web.png"
import data from "../assets/data.png"
import devlopment from "../assets/devlopment.png"
import brand from "../assets/brand.png"


// List of services with title, heading, and description
const services = [
  {
    title: "UI / UX DESIGN",
    heading: "Creative Approach",
    desc: "Connecting businesses with their audiences and individuals with their dreams. Our path forward",
    icon: ux
  },
  {
    title: "WEB DESIGN",
    heading: "Web Solutions",
    desc: "We create modern and responsive websites tailored to your brand.",
    icon: web
  },
  {
    title: "DEVELOPMENT",
    heading: "Full Stack Dev",
    desc: "Building scalable and powerful web applications.",
    icon: devlopment
  },
  {
    title: "DATA ANALYSIS",
    heading: "Insights & Growth",
    desc: "Data-driven decisions to scale your business.",
    icon: data
  },
  {
    title: "BRAND DESIGN",
    heading: "Identity Creation",
    desc: "Crafting strong, memorable brand identities.",
    icon: brand
  },
];

export default function Services() {
  const [active, setActive] = useState(0); // Tracks which service is active (hovered)
  const containerRefs = useRef([]); // Refs for GSAP animations
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // Detect mobile screens

  // Animate flex on desktop, optional fade-in on mobile
  useEffect(() => {
    if (!isMobile) {
      // Desktop animation: expand hovered item
      services.forEach((_, i) => {
        const flexValue = active === i ? 4 : 1;
        gsap.to(containerRefs.current[i], {
          flex: flexValue,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    } else {
      // Mobile: subtle fade-in for all items
      containerRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      });
    }
  }, [active, isMobile]);

  return (
    <div
      className={`flex bg-black rounded-lg p-2 ${
        isMobile ? "flex-col space-y-4 p-4" : "flex-row"
      } md:h-[90vh] w-full text-white overflow-hidden`}
    >
      {services.map((service, i) => (
        <div
          key={i}
          ref={(el) => (containerRefs.current[i] = el)} // Reference for GSAP
          className={`relative flex items-center justify-center cursor-pointer rounded-lg ${
            isMobile ? "bg-[#1a1a1a] p-4" : ""
          }`}
          onMouseEnter={() => !isMobile && setActive(i)} // Hover only for desktop
        >
          {active === i || isMobile ? (
            // Active service content or mobile content
            <div className="flex flex-col w-full justify-center items-center text-center">
              {/* Title*/}

              <div className=" h-full border-b-2 border-gray-500">
                <h1 className=" font-semibold text-4xl md:text-6xl mb-1">
                  {service.title}
                </h1>
              </div>

              {/* Heading */}
              <h3 className="text-[#D0FF71] mt-2 md:mt-5 font-semibold text-lg md:text-2xl mb-1">
                {service.heading}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base mb-4">
                {service.desc}
              </p>

              {/* Icon area */}
              <div
                className={`bg-[#D0FF71] flex items-center justify-center rounded-xl
                ${
                  isMobile
                    ? "w-56 border-2 border-gray-400 h-60 md:w-72 md:h-80 text-lg"
                    : "w-72 h-80"
                }`}
              >
                <span className="text-black font-semibold">
                    
                    <img className="w-full h-full object-contain" src={service.icon} alt="" />
                 
                </span>
              </div>
            </div>
          ) : (
            // Non-active service content (desktop)
            <div className="w-full border-l-[1px]  border-r-[1px] h-full border-gray-600 flex justify-center items-center p-2 min-h-[80px]">
              {/* Vertical rotated title */}
              <h2 className="rotate-180 [writing-mode:vertical-rl] text-3xl md:text-6xl font-bold tracking-wide">
                {service.title}
              </h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
