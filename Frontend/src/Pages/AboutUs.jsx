import React from "react";
import Header from "../Utils/Header";
import Hero from "../Components/AboutUs/Hero";
import Brands from "../Components/Brands";
import Info from "../Components/AboutUs/Info";
import AgencyStrip from "../Components/AgencyStrip";
import TestimonalAboutus from "../Utils/TestimonalAboutus";
import Footer from "../Components/Footer"

function AboutUs() {
  return (
    <div>
      <Header title={"About Us"} />
      <Hero />
      <div className="md:px-28 px-4">
        <Brands />
      </div>
      <Info/>
      <AgencyStrip/>
      <TestimonalAboutus/>
      <Footer/>
    </div>
  );
}

export default AboutUs;
