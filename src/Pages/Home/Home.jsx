import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaDownload } from 'react-icons/fa';
import PixelTransition from '../../Components/PixelTransiction';

import Adbout from '../About/Adbout';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Home = () => {
    const words = ["a MERN Stack Developer", "a Frontend Specialist"];
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed] = useState(150);

    useEffect(() => {
        const current = words[wordIndex];
        const timeout = setTimeout(() => {
            setText(
                isDeleting
                    ? current.substring(0, text.length - 1)
                    : current.substring(0, text.length + 1)
            );

            if (!isDeleting && text === current) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, speed]);

    return (
        <div className="text-gray-200 font-sans">
            {/* hero section */}
            <section id="home" className="min-h-screen w-11/12 mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10">
                {/* mobile heading */}
                <h1 className="text-3xl sm:text-4xl mb-8 mt-5 md:hidden text-center font-semibold text-teal-400">
                    Developer
                </h1>

                <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center mt-10 lg:mt-20 gap-10 lg:gap-20">

                    {/* Image with floating cards */}
                    <div className="relative flex justify-center items-center w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                        {/* Shadow background (glow) */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 blur-2xl opacity-40"></div>

                        <PixelTransition
                            firstContent={
                                <img
                                    src="https://i.ibb.co.com/GQhkTh80/sk8-24-at-09-22-28-1cea5aae.jpg"
                                    alt="Profile"
                                    className="rounded-full w-full h-full object-cover"
                                />
                            }
                            secondContent={
                                <img
                                    src="https://i.ibb.co.com/GQhkTh80/sk8-24-at-09-22-28-1cea5aae.jpg"
                                    alt="Profile"
                                    className="rounded-full w-full h-full object-cover"
                                />
                            }
                            gridSize={12}
                            pixelColor="#ffffff"
                            animationStepDuration={0.4}
                            className="custom-pixel-card"
                        />

                        {/* Floating skill cards */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -left-16 sm:-left-24 lg:-left-32 top-1/3 bg-white text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow-md"
                        >
                            Frontend Developer
                        </motion.div>

                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            className="absolute -right-10 sm:-right-16 lg:-right-24 top-1/5 bg-white text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow-md"
                        >
                            MERN Stack Developer
                        </motion.div>

                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            className="absolute -right-5 sm:-right-8 lg:-right-10 bottom-1/5 bg-white text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow-md"
                        >
                            Problem Solver
                        </motion.div>
                    </div>

                    {/* middle card */}
                    <div className="text-center lg:text-left max-w-xl">
                        {/* <h1 className="text-sm font-bold mb-2 text-teal-400">&lt;C/&gt;</h1> */}
                        <p className="text-2xl text-gray-800  sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-snug">
                            <span className="mb-2 ">Hey</span>
                            <br /> I’m <span className="text-teal-600"> Md. Shakib </span>, <br />
                            <span className="mt-2 h-10 block text-2xl text-gray-600 font-semibold">{text}|</span>
                        </p>

                        {/* <h1 className="text-sm font-bold mt-4 text-teal-400">&lt;C/&gt;</h1> */}

                        <p className="mt-4  text-sm sm:text-base font-normal md:text-lg text-gray-400 leading-relaxed">
                            Frontend Web Developer skilled in React, JavaScript, and full-stack technologies including Node.js, Express.js, and
                            MongoDB. Experienced in building scalable, responsive, and user-friendly web applications.
                        </p>

                        <div className="mt-6 md:mt-8 flex justify-center lg:justify-start">
                            <a
                                href="/Shakib.Resume.docx (5).pdf"
                                download
                                className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-600 hover:text-black px-4 py-2 rounded shadow text-teal-100 text-sm sm:text-base"
                            >
                                Download CV <FaDownload />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* about section */}
            <section id="about" className="scroll-mt-20">
                <Adbout />
            </section>

            {/* skills section */}
            <section id="skills" className="scroll-mt-20">
                <Skills />
            </section>

            {/* projects section */}
            <section id="projects" className="scroll-mt-20">
                <Project />
            </section>

            {/* contact section */}
            <section id="contact" className="scroll-mt-20">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
