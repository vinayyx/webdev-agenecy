import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import gsap from "gsap";

function Navbar() {
  const [ServiceOpen, setServiceOpen] = useState(false);
  const [BlogOpen, setBlogOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuRef = useRef(null);
  const BlogmenuRef = useRef(null);
  const sidebarRef = useRef(null);

  const location = useLocation();

  // Dropdown Active States
  const isPagesActive =
    location.pathname === "/services" ||
    location.pathname === "/service-details";

  const BlogisPagesActive =
    location.pathname === "/blog" || location.pathname === "/blog-details";

  // Animate dropdown (services)
  useEffect(() => {
    if (ServiceOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: -10, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [ServiceOpen]);

  // Animate dropdown (blogs)
  useEffect(() => {
    if (BlogOpen) {
      gsap.fromTo(
        BlogmenuRef.current,
        { y: -10, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [BlogOpen]);

  // Sidebar animation
  useEffect(() => {
    if (sidebarOpen) {
      gsap.fromTo(
        sidebarRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [sidebarOpen]);

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex justify-between md:px-28  items-center py-6 px-5 relative">
      {/* Logo */}
      <div>
      {/* <img
          src="https://agenxis-html.netlify.app/assets/images/logo.svg"
          alt="Logo"
          className="h-8"
        /> */} 

        <h1 className="font-bold text-xl md:text-3xl text-[#D0FF71] " > Gentixx</h1>
      </div>

      {/* Mobile: Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu className="h-7 w-7 text-white" />
        </button>
      </div>

      {/* Desktop Navbar Items */}
      <div className="hidden md:flex justify-center items-center">
        <div className="flex justify-between gap-12 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-[#D0FF71] rounded-full px-6 py-2 text-black"
                : "hover:text-[#D0FF71] cursor-pointer"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-[#D0FF71] rounded-full px-6 py-2 text-black"
                : "hover:text-[#D0FF71] cursor-pointer"
            }
          >
            About Us
          </NavLink>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <div
              className={
                isPagesActive
                  ? "bg-[#D0FF71] rounded-full flex items-center gap-1 px-6 py-2 text-black"
                  : "hover:text-[#D0FF71] cursor-pointer flex items-center gap-1"
              }
            >
              Pages
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  ServiceOpen ? "rotate-180 text-[#D0FF71]" : "rotate-0"
                }`}
              />
            </div>
            {ServiceOpen && (
              <div
                ref={menuRef}
                className="absolute w-40 "
              >
                <div className=" mt-4 bg-black border border-gray-800 shadow-lg p-2 rounded-md" >

                   <ul className="flex flex-col text-white">
                  <NavLink
                    to="/services"
                    onClick={handleLinkClick}
                    className="hover:text-[#D0FF71] border-b border-gray-800 pb-2 cursor-pointer"
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/service-details"
                    onClick={handleLinkClick}
                    className="hover:text-[#D0FF71] cursor-pointer"
                  >
                    Service Details
                  </NavLink>
                </ul>

                </div>
               
              </div>
            )}
          </div>

          {/* Blogs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBlogOpen(true)}
            onMouseLeave={() => setBlogOpen(false)}>
            <div
              className={
                BlogisPagesActive
                  ? "bg-[#D0FF71] rounded-full flex items-center gap-1 px-6 py-2 text-black"
                  : "hover:text-[#D0FF71] cursor-pointer flex items-center gap-1"
              }
            >
              Blogs
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  BlogOpen ? "rotate-180 text-[#D0FF71]" : "rotate-0"
                }`}
              />
            </div>
            {BlogOpen && (
              <div
                ref={BlogmenuRef}
                className="absolute w-40  "
              >
                <div className=" bg-black mt-4 w-40 border border-gray-800 shadow-lg p-2 rounded-md ">

                  <ul className="flex flex-col text-white">
                  <NavLink
                    to="/blog"
                    onClick={handleLinkClick}
                    className="hover:text-[#D0FF71] border-b border-gray-800 pb-2 cursor-pointer"
                  >
                    Blogs
                  </NavLink>
                  <NavLink
                    to="/blog-details"
                    onClick={handleLinkClick}
                    className="hover:text-[#D0FF71] cursor-pointer"
                  >
                    Blogs Details
                  </NavLink>
                </ul>


                </div>
                
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-[#D0FF71] rounded-full px-6 py-2 text-black"
                : "hover:text-[#D0FF71] cursor-pointer"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Button (Desktop Only) */}
      <div className="hidden md:block">
        <button
          className="group bg-[#D0FF71] rounded-full px-6 py-2 flex gap-2 items-center text-black border border-transparent 
          hover:bg-black hover:border-[#D0FF71] hover:text-[#D0FF71] 
          transition-all duration-300 ease-in-out"
        >
          Get a Quote
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight />
          </span>
        </button>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-64 bg-black shadow-lg z-50 p-6 translate-x-full"
      >
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://agenxis-html.netlify.app/assets/images/logo.svg"
            alt="Logo"
            className="h-8"
          />
          <button onClick={() => setSidebarOpen(false)}>
            <X className="h-7 w-7 text-white" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-white">
          <NavLink to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/about-us" onClick={handleLinkClick}>
            About Us
          </NavLink>
          <NavLink to="/services" onClick={handleLinkClick}>
            Services
          </NavLink>
          <NavLink to="/service-details" onClick={handleLinkClick}>
            Service Details
          </NavLink>
          <NavLink to="/blog" onClick={handleLinkClick}>
            Blogs
          </NavLink>
          <NavLink to="/blog-details" onClick={handleLinkClick}>
            Blogs Details
          </NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
