import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import ServiceDetails from "./Pages/ServiceDetails";
import Blogs from "./Pages/Blogs";
import BlogsDetails from "./Pages/BlogsDetails";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="md:px-28 px-1 ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogsDetails/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </div>
  );
}

export default App;
