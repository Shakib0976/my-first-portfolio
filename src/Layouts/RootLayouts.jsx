import { LucideGraduationCap } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaCode,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaProjectDiagram,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import { HashLink } from "react-router-hash-link";
import Loader from "../Components/Loader.jsx"; // 👈 import loader
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip.jsx";
import { Dock } from "@/Components/unlumen-ui/dock.jsx";
import { Navbar } from "@/Pages/Navbar/navbar.jsx";

const RootLayouts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true); // 👈 global loading state
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    // here you can wait for auth, API, etc.
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // 👈 show spinner until finished
  }



  return (
    <div>
      {/* sidebar */}
      <aside>
        <Dock />
      </aside>

      {/* main */}
      <main>
        <Navbar></Navbar>
        {/* <header className="bg-gradient-to-r from-white/90 via-purple-100/90 to-teal-100/90 sticky top-0  z-50 text-gray-800 px-6 md:px-20 py-6  shadow-lg"> */}
          {/* <div className="flex  justify-between items-center">
           
            <h1 className="text-lg md:text-xl font-bold text-teal-600">
              &lt;C/&gt; Md . Shakib
            </h1> */}

            {/* Desktop Menu */}
            {/* <nav className="hidden md:flex items-center gap-6">
              {navItems.map(({ to, target, label, icon }) => (
                <NavLink
                  key={to}
                  target={target}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 text-lg font-semibold hover:text-teal-400 transition-colors duration-200 ${isActive ? "text-teal-600" : ""}`
                  }
                >
                  {icon} {label}
                </NavLink>
              ))}
            </nav> */}

          
            {/* <button
              className="md:hidden text-gray-600 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div> */}

        
          {/* {isOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4">
              {navItems.map(({ to, label, icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-blue-400 transition-colors duration-200 ${isActive ? "text-blue-400" : ""}`
                  }
                >
                  {icon} {label}
                </NavLink>
              ))}
            </div>
          )} */}
        {/* </header> */}

        {/* Only render the route content */}
        <Outlet />
      </main>

      {/* footer */}
      <footer className="bg-white text-black py-5 border-t-2 border-gray-300">
        <div className="container mx-auto justify-center  px-4 flex flex-col md:flex-row  items-center">
          <div className="flex flex-col-reverse gap-5 justify-center items-center">
            <p className="text-sm mb-4 md:mb-0">
              © 2025 - All rights reserved by{" "}
              <span className="font-semibold">Shakib</span>
            </p>

            <div className="flex space-x-5 ">
              <a
                href="https://www.facebook.com/md.shakib.khan.809698"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/shakib09/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/Shakib0976"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaGithub size={25} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayouts;
