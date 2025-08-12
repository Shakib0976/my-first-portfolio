import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Adbout = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true, 
        });
    }, []);
    return (
        <div>
            <div className="bg-gray-900 flex md:w-11/14 mt-10 mx-auto min-h-screen text-gray-300 relative overflow-hidden font-mono">
                <div
                    className="absolute inset-0 bg-repeat opacity-10"
                    style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/lined-paper.png)" }}
                ></div>
                <div className="container md:ml-2 mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-center relative z-10">
                    {/* Left section */}
                    <div className="md:w-1/2 flex flex-col items-start space-y-8">
                        <button className="relative px-10 py-2 text-2xl text-white font-medium rounded-tl-2xl rounded-br-2xl border border-teal-400 hover:bg-teal-400/10 transition duration-300">
                            About Me
                            <span className="absolute inset-0 rounded-tl-2xl rounded-br-2xl border border-teal-400 -z-10 blur-sm"></span>
                        </button>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"

                            className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
                            <pre className="text-sm leading-relaxed whitespace-pre-wrap">
                                <span className="text-green-400 font-bold">Hello!</span>
                                <br />
                                <br />
                                My name is ** Shakib ** and I specialize in web development that utilizes **HTML, CSS, JS, and REACT etc.**
                                <br />
                                <br />
                                I'm a MERN stack developer passionate about building clean and user-friendly web applications. 
                                <br />
                                <br />
                                I enjoy hiking, reading tech blogs, playing guitar, and exploring new
                                technologies.
                                <br />
                                <br />
                                I began my programming journey with curiosity and passion. Starting with HTML and CSS
                                <br />
                                <br /> I’m eager to grow, take on new challenges, and contribute my best to every project I work on.
                                <br />
                            </pre>
                        </div>
                    </div>

                    {/* Right section with AOS animation */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="md:w-1/2 mt-12 md:ml-2 md:mt-0 flex justify-center"
                    >
                        <div className="relative mt-10 border-4 border-gray-600 rounded-lg shadow-2xl p-2 w-full max-w-md">
                            <img
                                src="https://i.ibb.co/Mxdp3Shz/black-man-programmer-manages-code-scripts-artificial-intelligence.jpg"
                                alt="Person coding on a laptop"
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adbout;