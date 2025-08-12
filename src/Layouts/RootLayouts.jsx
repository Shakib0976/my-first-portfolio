import React, { useState } from 'react';
import Home from '../Pages/Home/Home';
import { FaBars, FaCode, FaEnvelope, FaGraduationCap, FaHome, FaProjectDiagram, FaServicestack, FaTimes, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router';

const RootLayouts = () => {



    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { to: "/", label: "Home", icon: <FaHome /> },
        { to: "/about", label: "About", icon: <FaUser /> },
        { to: "/skills", label: "Skills", icon: <FaCode /> },
        { to: "/services", label: "Services", icon: <FaServicestack /> },
        { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    ];
    return (
        <div>


            <aside>
                <div className="fixed top-1/2 left-10 hidden mt-10  -translate-y-1/2 md:flex flex-col items-center bg-gray-950 text-white border-gray-200 border-1 rounded-full p-2 shadow-lg z-50">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `w-10 h-10 flex items-center justify-center rounded-full mb-3 transition-colors duration-300 
          ${isActive ? "bg-white text-black" : "hover:bg-gray-700"}`
                        }
                    >
                        <FaHome />
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `w-10 h-10 flex items-center justify-center rounded-full mb-3 transition-colors duration-300 
          ${isActive ? "bg-white text-black" : "hover:bg-gray-700"}`
                        }
                    >
                        <FaUser />
                    </NavLink>

                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            `w-10 h-10 flex items-center justify-center rounded-full mb-3 transition-colors duration-300 
          ${isActive ? "bg-white text-black" : "hover:bg-gray-700"}`
                        }
                    >
                        <FaCode />
                    </NavLink>

                    <NavLink
                        to="/education"
                        className={({ isActive }) =>
                            `w-10 h-10 flex items-center justify-center rounded-full mb-3 transition-colors duration-300 
          ${isActive ? "bg-white text-black" : "hover:bg-gray-700"}`
                        }
                    >
                        <FaGraduationCap />
                    </NavLink>

                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `w-10 h-10 flex items-center justify-center rounded-full mb-3 transition-colors duration-300 
          ${isActive ? "bg-white text-black" : "hover:bg-gray-700"}`
                        }
                    >
                        <FaServicestack />
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `w-10 h-10 flex items-center justify-center rounded-full mb-3 transition-colors duration-300 
          ${isActive ? "bg-white text-black" : "hover:bg-gray-700"}`
                        }
                    >
                        <FaProjectDiagram />
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 
          ${isActive ? "bg-white text-black" : "hover:bg-gray-700"}`
                        }
                    >
                        <FaEnvelope />
                    </NavLink>

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
                        {navItems.map(({ to, label, icon }) => (
                            <NavLink
                                key={to}
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
                <Home></Home>
            </main>
        </div>
    );
};

export default RootLayouts;