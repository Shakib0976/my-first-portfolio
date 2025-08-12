import React from 'react';
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from "react";


const Home = () => {

    const words = ["a MERN Stack Developer", "a Frontend Specialist"];
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

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
    }, [text, isDeleting, wordIndex]);


    return (
        <div className="min-h-screen w-11/12 mx-auto bg-[#0f172a] text-gray-200 px-6 md:px-20 py-10 font-sans">


            <h1 className="text-4xl mb-10 mt-5 md:hidden text-center block font-semibold text-teal-400">Developer</h1>

            <div className="md:flex justify-evenly mt-20 gap-5">
                {/* Left Card */}
                <div>
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -20, 0] }} // Up, down, back
                        transition={{
                            duration: 1.5, // Time for one cycle
                            repeat: Infinity, // Loop forever
                            repeatType: "loop", // Restart from beginning
                            ease: "easeInOut",
                        }}
                        className="bg-[#1b232d] mb-10 items-center border-2 border-teal-400 p-1 text-white w-60 md:w-70 lg:w-80 md:h-90 lg:h-100 h-80 shadow-lg relative overflow-hidden"
                        style={{
                            borderTopLeftRadius: "200px 200px",
                            borderBottomRightRadius: "50px 50px",
                            borderTopRightRadius: "0",
                            borderBottomLeftRadius: "0",
                        }}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/Lzr4yjxw/Whats-App-Image-2025-07-30-at-18-11-16-2e48b6d2.jpg"
                            alt=""
                        />
                    </motion.div>
                </div>


                {/* middle card */}

                <div className=''>
                    <h1 className="text-sm font-bold lg:mt-10 mb-2 text-teal-400">&lt;C/&gt;</h1>
                    <p className=" text-2xl md:text-4xl  lg:text-5xl -mr-10">

                       <span className='mb-2'> Hey </span><br /> I’m <span className="text-teal-400">Shakib</span>, <br />
                        <h1 className='mt-2 h-10' >
                            {text}
                           
                        </h1>
                    </p>



                    <h1 className="text-sm font-bold mt-4 text-teal-400">&lt;C/&gt;</h1>

                    <p className="mt-4 text-sm md:text-lg text-gray-400">
                        I help businesses grow by crafting amazing web applications. If you’re <br /> looking for a developer who loves to get stuff done, let’s talk.
                    </p>
                    {/* Download CV Button */}
                    <div className="mt-6">
                        <a
                            href="/cv.pdf"
                            download
                            className="flex items-center justify-center w-50 gap-2 bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
                        >
                            Download CV <FaDownload />
                        </a>
                    </div>

                </div>

                {/* state card  */}
                <div className=" hidden lg:block ">
                    <div className="bg-gray-950 mt-20  text-white rounded-4xl py-6 px-2  shadow-2xl">
                        <div className="flex items-center space-x-4 pb-4 border-b border-gray-700">

                            <span className="text-4xl font-bold text-cyan-400">4</span>

                            <p className="text-sm text-gray-200">Programming <br /> Language</p>
                        </div>


                        <div className="flex items-center space-x-4 py-4 border-b border-gray-700">
                            <span className="text-4xl font-bold text-cyan-400">6</span>
                            <p className="text-sm text-gray-200">Development <br /> Tools</p>
                        </div>


                        <div className="flex items-center space-x-4 pt-4">
                            <span className="text-4xl font-bold text-cyan-400">1</span>
                            <p className="text-sm text-gray-200">Years of <br /> Experience</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;


