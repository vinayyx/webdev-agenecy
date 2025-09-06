import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import ServiceDetails from "./Pages/ServiceDetails";
import Blogs from "./Pages/Blogs";
import BlogsDetails from "./Pages/BlogsDetails";
import ContactUs from "./ContactUs";
import Loader from "./Components/Loader";
import Lenis from "@studio-freight/lenis";
import TaglineLoader from "./Components/TaglineLoader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [Taglineloading, setTaglineloading] = useState(true);

  //LENIS FOR SMOOTH SCROOL
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      smoothWheel: true, // smooth mouse wheel
      smoothTouch: true, // mobile me disable/enable
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup jab component unmount ho
    };
  }, []);

  // Loader on initial load
  useEffect(() => {
    setTaglineloading(true);
    const timer = setTimeout(() => setTaglineloading(false), 2300); // 1 sec delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // adjust as needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {" "}
      {loading && <Loader />}
      {Taglineloading && <TaglineLoader />}
      <div className="md:px-28 px-1 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog-details" element={<BlogsDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
