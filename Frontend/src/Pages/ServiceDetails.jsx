import React from "react";
import Header from "../Utils/Header";
import Hero from "../Components/Pricing/Hero";
import PriceTable from "../Components/Porfoilo/PriceTable";
import Footer from "../Components/Footer";

function ServiceDetails() {
  return <div>

    <Header title={"Pricing"} />
    <Hero/>
    <PriceTable/>
    <Footer/>

    
  </div>;
}

export default ServiceDetails;
