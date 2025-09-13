import { ArrowUpRight } from "lucide-react";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import sassflow from "../../assets/sassflow.png";
import learnytix from "../../assets/learnytix.png";
import lalufi from "../../assets/lalufi.png";
import Ninjagames from "../../assets/ningames.png";
import Increation from "../../assets/increation.png";
import Corsolo from "../../assets/corsolo.png";

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

    {
      tittle: "Learnytix",
      image: learnytix,
      link: "https://learnytix.in/",
      discription:
        "Learnytix is a modern e-education platform that makes learning engaging and accessible. We offer a comprehensive library of video lessons, interactive quizzes, and personalized learning paths designed to help students master new subjects at their own pace. With live Q&A sessions and a supportive community, we empower learners to achieve their academic goals and develop a lifelong love for learning.",
    },

    {
      tittle: "Lalufi",
      image: lalufi,
      link: "https://lalufi.com/",
      discription:
        "Lalufi is more than just a jewelry brand—it's a celebration of individuality and confidence. We believe that true beauty shines from within, and our pieces are designed to be a radiant extension of your unique personality.",
    },

    {
      tittle: "Ninjagames",
      image: Ninjagames,
      link: "https://crazy-games-pi.vercel.app/mobile",
      discription:
        "NinjaGames is a free online gaming platform where you can play a vast library of games directly in your browser, with no downloads required. We offer a diverse collection of titles across popular genres like action, puzzle, adventure, and strategy. With NinjaGames, instant and accessible fun is always just a click away.",
    },

    {
      tittle: "Increation",
      image: Increation,
      link: "https://increation.vercel.app/",
      discription:
        "Increation helps businesses grow online with creative digital marketing solutions. From social media campaigns to SEO and paid ads, we craft strategies that increase engagement, drive traffic, and boost sales.",
    },

    {
      tittle: "Corsolo",
      image: Corsolo,
      link: "https://corsolo.com/",
      discription:
        "Corsolo is your one-stop e-commerce destination, offering premium products with quality, convenience, and trust. We deliver a seamless shopping experience with fast service and great deals.",
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
          className="w-full  h-auto md:h-[100vh] md:px-16 px-6 md:py-10 py-5"
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
