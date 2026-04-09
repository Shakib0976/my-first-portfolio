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

  // after loading is false, render your full layout:
  const navItems = [
    {
      to: "https://www.linkedin.com/feed/",
      target: "_blank",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      to: "https://github.com/Shakib0976",
      target: "_blank",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      to: "https://www.facebook.com/md.shakib.khan.809698",
      target: "_blank",
      label: "Facebook",
      icon: <FaFacebook />,
    },
    { to: "/", label: "Home", icon: <FaHome /> },
  ];

  const items = [
    {
      to: "/#home",
      label: "Home",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 20, height: 20 }}
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      to: "/#about",
      label: "About",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 20, height: 20 }}
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      to: "/#skills",
      label: "Skills",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 20, height: 20 }}
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      to: "/#projects",
      label: "Projects",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 20, height: 20 }}
        >
          <rect x="2" y="3" width="6" height="6" rx="1" />
          <rect x="16" y="3" width="6" height="6" rx="1" />
          <rect x="2" y="15" width="6" height="6" rx="1" />
          <path d="M14 6h4v1a4 4 0 01-4 4H9" />
          <path d="M5 15v-3a4 4 0 014-4h1" />
        </svg>
      ),
    },
    {
      to: "/#education",
      label: "Education",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 20, height: 20 }}
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      to: "/#contact",
      label: "Contact",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 20, height: 20 }}
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  // const getScale = (itemIndex) => {
  //   if (hoveredIndex !== null) {
  //     const dist = Math.abs(hoveredIndex - itemIndex);
  //     if (dist === 0) return 1.5;
  //     if (dist === 1) return 1.2;
  //     if (dist === 2) return 1.08;
  //     return 1.0;
  //   }
  //   if (activeIndex === itemIndex) return 1.25;
  //   return 1.0;
  // };
  return (
    <div className="bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-teal-400/5 ">
      {/* sidebar */}
      <aside>
        <Dock />
        {/* <div
          className="fixed gap-5 px-3 py-4 hover:scale-110 duration-500 top-1/2 left-5 hidden mt-10 -translate-y-1/2 lg:flex flex-col items-center bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-teal-500/30 text-white border border-gray-200 rounded-full shadow-lg z-50"
          onMouseLeave={() => {
            setHoveredIndex(null);
          }}
        >
          {navItemsV.map(({ to, icon, label }, index) => (
            <Tooltip key={to}>
              <TooltipTrigger>
                <HashLink
                  smooth
                  to={to}
                  style={{
                    transform: `scale(${getScale(index)})`,
                    transition:
                      "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  className="group relative rounded-full p-2 my-2 block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() =>
                    setActiveIndex((prev) => (prev === index ? null : index))
                  }
                >
                  {icon}
                </HashLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div> */}
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
