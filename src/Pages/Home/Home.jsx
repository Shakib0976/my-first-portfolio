import React from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="min-h-screen w-11/12 mx-auto bg-[#0f172a] text-gray-200 px-6 md:px-20 py-10 font-sans">


            <h1 className="text-5xl mb-10 mt-5 text-center hidden md:block font-bold text-teal-400">Developer</h1>

            <div className="md:flex justify-evenly mt-20 gap-5">
                {/* Left Card */}
                <div className="">
                    <div
                        className="bg-[#1b232d] mb-10  items-center border-2 border-teal-400 p-1 text-white w-60 md:w-70 lg_80  md:h-90 lg:h-100 h-80 shadow-lg relative overflow-hidden"
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
                    </div>
                </div>


                {/* middle card */}

                <div className=''>
                    <h1 className="text-sm font-bold lg:mt-10 text-teal-400">&lt;C/&gt;</h1>
                    <p className=" text-4xl lg;text-5xl">

                        Hey <br /> I’m <span className="text-teal-400">Shakib</span>, <br /> MERN-Stack Developer
                    </p>
                     <h1 className="text-sm font-bold text-teal-400">&lt;C/&gt;</h1>
                  
                    <p className="mt-4 text-gray-400">
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
                <div className=" hidden lg:block">
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


