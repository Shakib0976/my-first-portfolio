import React, { useState } from 'react';
import { FaBars, FaCode, FaEnvelope, FaFacebook, FaGithub, FaHome, FaLinkedin, FaProjectDiagram, FaTimes, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router'; 
import { HashLink } from 'react-router-hash-link'; // ✅ for smooth scroll


const RootLayouts = () => {
    const [isOpen, setIsOpen] = useState(false);

    // top header menu (external links + home route)
    const navItems = [
        { to: "https://www.linkedin.com/feed/", target: "_blank", label: "LinkedIn", icon: <FaLinkedin /> },
        { to: "https://github.com/Shakib0976", target: "_blank", label: "GitHub", icon: <FaGithub /> },
        { to: "https://www.facebook.com/md.shakib.khan.809698", target: "_blank", label: "Facebook", icon: <FaFacebook /> },
        { to: "/", label: "Home", icon: <FaHome /> },
    ];

    // sidebar items (smooth scroll on home)
    const navItemsV = [
        { to: "/#home", icon: <FaHome color='black' />, label: "Home" },
        { to: "/#about", icon: <FaUser color='black'/>, label: "About" },
        { to: "/#skills", icon: <FaCode color='black'/>, label: "Skills" },
        { to: "/#projects", icon: <FaProjectDiagram color='black'/>, label: "Projects" },
        { to: "/#contact", icon: <FaEnvelope color='black' />, label: "Contact" },
    ];

    return (
        <div className=' bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-teal-400/5 '>
            {/* sidebar */}
            <aside>
                <div className="fixed top-1/2 left-5 hidden mt-10 -translate-y-1/2 md:flex flex-col items-center bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-teal-500/30 text-white border border-gray-200 rounded-full p-2 shadow-lg z-50">
                    {navItemsV.map(({ to, icon, label }) => (
                        <HashLink
                            smooth
                            key={to}
                            to={to}
                            className="group relative w-10 h-[10vh] flex items-center justify-center rounded-full mb-3 hover:bg-gray-950/20 transition-colors duration-300"
                        >
                            {icon}
                            <span
                                className="absolute left-full top-1/2 ml-3 -translate-y-1/2 
                       whitespace-nowrap rounded bg-slate-950/40 text-teal-300 font-bold px-3 py-2 text-sm 
                       opacity-0 group-hover:opacity-100 pointer-events-none
                       transition-opacity duration-300
                       select-none"
                            >
                                {label}
                            </span>
                        </HashLink>
                    ))}
                </div>
            </aside>

            {/* main */}
            <main>
                <header className="bg-gradient-to-r from-white/90 via-purple-100/90 to-teal-100/90 sticky top-0  z-50 text-gray-800 px-6 md:px-20 py-6  shadow-lg">
                    <div className="flex  justify-between items-center">
                        {/* Logo */}
                        <h1 className="text-lg md:text-xl font-bold text-teal-600">
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
                                        `flex items-center gap-1 text-lg font-semibold hover:text-teal-400 transition-colors duration-200 ${isActive ? "text-teal-600" : ""
                                        }`
                                    }
                                >
                                    {icon} {label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-600 text-2xl"
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

                {/* Only render the route content */}
                <Outlet />
            </main>

            {/* footer */}
            <footer className="bg-gray-700 text-white py-12">
                <div className="container mx-auto justify-center  px-4 flex flex-col md:flex-row  items-center">
                    <div className='flex flex-col-reverse gap-5 justify-center items-center'>
                        <p className="text-sm mb-4 md:mb-0">
                            © 2025 - All rights reserved by <span className="font-semibold">Shakib</span>
                        </p>
                        <div className='divider'></div>
                        <div className="flex space-x-5">
                            <a
                                href="https://www.facebook.com/md.shakib.khan.809698"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors duration-300"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/shakib09/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://github.com/Shakib0976"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 transition-colors duration-300"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RootLayouts;
