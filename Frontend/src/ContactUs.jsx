import React from "react";
import Header from "./Utils/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/ContactUs.jsx/Hero";
import Map from "./Components/ContactUs.jsx/Map";

function ContactUs() {
  return (
    <div>
      <Header title={"Contact Us"} />
      <Hero />

      <Map />
      <Footer />
    </div>
  );
}

export default ContactUs;
