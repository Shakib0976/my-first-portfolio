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
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import { HashLink } from "react-router-hash-link";
import Loader from "../Components/Loader.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip.jsx";
import { Dock } from "@/Components/unlumen-ui/dock.jsx"
import { Navbar } from "@/Pages/Navbar/Navbar.jsx";


const RootLayouts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }





  return (
    <div>
      <div className="relative z-10">
        {/* sidebar */}
        <aside className="hidden md:flex">
          <Dock />
        </aside>

        {/* main */}
        <main>
          <Navbar></Navbar>
          <Outlet />
        </main>

        {/* footer */}
        <footer className="bg-white text-black py-5 border-t-2 border-gray-300">
          <div className="container mx-auto justify-center px-4 flex flex-col md:flex-row items-center">
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
    </div>

  );
};

export default RootLayouts;
