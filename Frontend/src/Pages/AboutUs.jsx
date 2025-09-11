import React from "react";
import Header from "../Utils/Header";
import Hero from "../Components/AboutUs/Hero";
import Brands from "../Components/Brands";

function AboutUs() {
  return (
    <div>
      <Header title={"About Us"} />
      <Hero />
      <div className="md:px-28 px-4">
        <Brands />
      </div>
    </div>
  );
}

export default AboutUs;
