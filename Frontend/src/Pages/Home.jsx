import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection1 from "../Components/HeroSection1";
import HeroSection2 from "../Components/HeroSection2";
import AgencyStrip from "../Components/AgencyStrip";
import Exprience from "../Components/Exprience";

function Home() {
  return (
    <div className="overflow-x-hidden" >

      <HeroSection1/>
      <HeroSection2/>
      <AgencyStrip/>
      <Exprience/>

      
    </div>
  );
}

export default Home;
