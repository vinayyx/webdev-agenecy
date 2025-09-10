import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection1 from "../Components/HeroSection1";
import HeroSection2 from "../Components/HeroSection2";
import AgencyStrip from "../Components/AgencyStrip";
import Exprience from "../Components/Exprience";
import Card from "../Components/Card";
import Gallary from "../Components/Gallary";
import Brands from "../Components/Brands";
import Testimonial from "../Components/Testimonial";

function Home() {
  return (
    <div className="overflow-x-hidden" >

      <HeroSection1/>
      <HeroSection2/>
      <AgencyStrip/>
      <Exprience/>
      <Card/>
      <Gallary/>
      <Brands/>
      <Testimonial/>

      
    </div>
  );
}

export default Home;
