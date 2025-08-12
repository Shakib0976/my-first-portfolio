import React, { useState } from 'react';
import Home from '../Pages/Home/Home';
import { FaBars, FaCode, FaEnvelope, FaFacebook, FaFacebookF, FaGithub, FaGraduationCap, FaHome, FaLinkedin, FaLinkedinIn, FaProjectDiagram, FaServicestack, FaTimes, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router';
import Adbout from '../Pages/About/Adbout';
import Skills from '../Pages/Skills/Skills';
import Project from '../Pages/Project/Project';
import Contact from '../Pages/Contact/Contact';

const RootLayouts = () => {



    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { to: "https://www.linkedin.com/feed/", target: "_blank", label: "LinkedIn", icon: <FaLinkedin /> },
        { to: "https://github.com/Shakib0976", target: "_blank", label: "GitHub", icon: <FaGithub /> },
        { to: "https://www.facebook.com/md.shakib.khan.809698", target: "_blank", label: "Facebook", icon: <FaFacebook /> },
        { to: "/", label: "Home", icon: <FaHome /> },
    ];
    const navItemsV = [
        { to: "/", icon: <FaHome />, label: "Home" },
        { to: "/about", icon: <FaUser />, label: "About" },
        { to: "/skills", icon: <FaCode />, label: "Skills" },
        { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
        { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
    ];
    return (
        <div>


            <aside>
                {/* static icon bar */}

                <div className="fixed top-1/2 left-10 hidden mt-10 -translate-y-1/2 md:flex flex-col items-center bg-gray-950 text-white border border-gray-200 rounded-full p-2 shadow-lg z-50">
                    {navItemsV.map(({ to, icon, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `group relative w-10 h-10 flex items-center justify-center rounded-full mb-3 transition-colors duration-300
            ${isActive ? "bg-white text-black" : "hover:bg-gray-500"}`
                            }
                        >
                            {icon}

                            {/* Tooltip */}
                            <span
                                className="absolute left-full top-1/2 ml-3 -translate-y-1/2 
                       whitespace-nowrap rounded bg-gray-500 px-3 py-2 text-sm 
                       opacity-0 group-hover:opacity-100 pointer-events-none
                       transition-opacity duration-300
                       select-none"
                            >
                                {label}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </aside>
            <main>
                <header className="bg-[#0f172a] sticky top-0  z-50 text-gray-200 px-6 md:px-20 py-5 border-b border-gray-700">
                    <div className="flex  justify-between items-center">
                        {/* Logo */}
                        <h1 className="text-lg md:text-xl font-bold text-teal-400">
                            &lt;C/&gt; Md . Shakib
                        </h1>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex items-center gap-6">
                            {navItems.map(({ to, target, label, icon }) => (
                                <NavLink
                                    key={to}
                                    target={target}
                                    to={to}
                                    className={({ isActive }) =>
                                        `flex items-center gap-1 hover:text-blue-400 transition-colors duration-200 ${isActive ? "text-blue-400" : ""
                                        }`
                                    }
                                >
                                    {icon} {label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-200 text-2xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {isOpen && (
                        <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4">
                            {navItems.map(({ to, label, icon }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 hover:text-blue-400 transition-colors duration-200 ${isActive ? "text-blue-400" : ""
                                        }`
                                    }
                                >
                                    {icon} {label}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </header>
                <div className='hidden md:block'>
                    <Outlet></Outlet>
                </div>
                <div className='md:hidden'>
                    <Home></Home>
                    <Adbout></Adbout>
                    <Skills></Skills>
                    <Project></Project>
                    <Contact></Contact>

                </div>
            </main>


            {/* footer */}

            <footer className="bg-gray-700 text-white py-12">
                <div className="container mx-auto justify-center  px-4 flex flex-col md:flex-row  items-center">
                    {/* Copyright */}
                    <div className='flex flex-col-reverse gap-5 justify-center items-center'>
                        <p className="text-sm mb-4 md:mb-0">
                            © 2025 - All rights reserved by <span className="font-semibold">Shakib</span>
                        </p>
                      <div className='divider'></div>
                        {/* Social Links */}
                        <div className="flex space-x-5">
                            <a
                                href="https://www.facebook.com/md.shakib.khan.809698"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors duration-300"
                            >
                                <FaFacebookF size={25} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/shakib09/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaLinkedinIn size={25} />
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