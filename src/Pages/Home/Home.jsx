import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import PixelTransition from "../../Components/PixelTransiction";

import Adbout from "../About/Adbout";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import HeroSection from "../HereoSection/Hero";

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
          : current.substring(0, text.length + 1),
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
    <div className="text-gray-200 font-sans inter-font">
      {/* hero section */}
      <section
        id="home"
        className="min-h-screen pt-35  max-w-11/12 md:max-w-11/14 px-4 flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-30 gap-10   scroll-mt-20 sm:px-4 mx-auto py-10"
      >
        {/* card */}
        <div className="text-center lg:text-left max-w-xl xl:min-w-xl  mx-auto lg:mx-0">
          {/* Badge */}
          <span className="inline-block text-teal-500 py-1 px-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 text-sm font-medium backdrop-blur-sm">
            ✨ Welcome to My Portfolio
          </span>

          {/* Main Heading Area */}
          <div className="mt-4">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-gray-800 text-lg md:text-2xl lg:text-3xl font-bold">
                Hi
              </span>
              <span className="wave inline-block text-2xl md:text-3xl animate-wave">
                👋
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl text-black dark:text-white  lg:text-6xl font-bold mt-2">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
                Md. Shakib
              </span>
            </h1>

            <div className="h-12 mt-2 inter-font text-xl md:text-2xl text-gray-700 font-semibold">
              {text}|
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 inter-font text-sm sm:text-base text-gray-600 leading-relaxed">
            I build fast, responsive, and user-friendly web applications using
            modern technologies like React, Node.js, and MongoDB. Passionate
            about creating clean UI and scalable backend systems.
          </p>

          {/* Tech Stack Tags */}
          <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
            {[
              "React",
              "Next.js",
              "javaScript",
              "TypScript",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gray-100/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-700 font-medium hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-5 flex flex-wrap gap-5 justify-center lg:justify-start text-sm text-gray-600">
            <span className="flex items-center gap-1.5">✅ 10+ Projects</span>
            <span className="flex items-center gap-1.5">⚡ MERN Stack</span>
            <span className="flex items-center gap-1.5">
              📱 Responsive Design
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href="/Shakib.Resume.docx (5).pdf"
              download
              className="group flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 px-5 py-2.5 rounded-lg shadow-md text-white text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Download CV
              <FaDownload className="text-sm transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Image with floating cards */}
        <div className="relative flex  justify-center   items-center w-52 h-52 sm:w-72 sm:h-72 lg:w-116 lg:h-116">
          {/* Shadow background (glow) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 blur-2xl opacity-40"></div>

          <PixelTransition
            firstContent={
              <img
                src="https://i.ibb.co.com/GQhkTh80/sk8-24-at-09-22-28-1cea5aae.jpg"
                alt="Profile"
                className="rounded-full w-full h-full cursor-pointer z-80 object-cover"
              />
            }
            secondContent={
              <img
                src="https://i.ibb.co.com/GQhkTh80/sk8-24-at-09-22-28-1cea5aae.jpg"
                alt="Profile"
                className="rounded-full w-full  h-full cursor-pointer z-80 object-cover"
              />
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-2xl rotate-12 backdrop-blur-sm border border-yellow-200/30"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400/20 rounded-3xl -rotate-12 backdrop-blur-sm border border-blue-200/30"></div>
          {/* Floating skill cards */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -left-16 z-40 sm:-left-24 lg:-left-32 top-1/3 bg-white text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow-md"
          >
            Frontend Developer
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -right-20 md:-right-16 z-40 lg:-right-24 top-1/5 bg-white text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow-md"
          >
            MERN Stack Developer
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -right-5 sm:-right-8 z-40 lg:-right-10 bottom-1/5 bg-white text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow-md"
          >
            Problem Solver
          </motion.div>
          <div className="absolute -inset-8 border-2 border-teal-200/30 z-0 dark:border-teal-900/30 rounded-full animate-spin-slow"></div>
          <div className="absolute -ins-12 border border-blue-200/20 z-0 dark:border-blue-900/20 rounded-full animate-spin-slow-reverse"></div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
            <span className="text-sm">Scroll down</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <HeroSection></HeroSection> */}

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

      <section id="education" className="scroll-mt-20">
        <Education />
      </section>

      {/* contact section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
