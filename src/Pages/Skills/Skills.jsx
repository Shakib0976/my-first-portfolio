import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';

const skillsData = [
    {
        name: "HTML",
        bgColor: "bg-orange-500",
        textColor: "text-white",
        shadowColor: "shadow-orange-500/30",
        svg: (
            <svg
                className="w-14 h-14"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>HTML5</title>
                <path
                    fill="currentColor"
                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622H5.412l.66 7.5h8.974l-.337 3.783-2.752.76-2.752-.76-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                />
            </svg>
        ),
    },
    {
        name: "CSS",
        bgColor: "bg-blue-500",
        textColor: "text-white",
        shadowColor: "shadow-blue-500/30",
        svg: (
            <svg
                className="w-14 h-14"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>CSS3</title>
                <path
                    fill="currentColor"
                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.653h6.182l-.366 3.924-2.91.804-2.956-.81-.188-2.11H6.248l.33 4.17L12 19.35l5.38-1.44.744-8.363H8.73l-.22-2.548h10.86l.21-2.58z"
                />
            </svg>
        ),
    },
    {
        name: "JavaScript",
        bgColor: "bg-yellow-400",
        textColor: "text-black",
        shadowColor: "shadow-yellow-400/30",
        svg:<IoLogoJavascript size={50} />,
    },
    {
        name: "React",
        bgColor: "bg-sky-500",
        textColor: "text-white",
        shadowColor: "shadow-sky-500/30",
        svg:<FaReact size={50} />,
    },
    {
        name: "MongoDB",
        bgColor: "bg-green-600",
        textColor: "text-white",
        shadowColor: "shadow-green-600/30",
        svg:<SiMongodb size={50} />,
    },
    {
        name: "Node.js",
        bgColor: "bg-green-500",
        textColor: "text-white",
        shadowColor: "shadow-green-500/30",
        svg: <FaNodeJs size={50} />,
    },
    {
        name: "Express.js",
        bgColor: "bg-gray-800",
        textColor: "text-white",
        shadowColor: "shadow-gray-800/30",
        svg:<SiExpress size={50} />,
    },
];




const Skills = () => {


    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280, // Large screens
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 1024, // Tablets
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768, // Small tablets
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480, // Mobile
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div>
            <section
                id="skills"
                className="relative bg-gray-900 min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden"
            >
                {/* Background code snippet */}
                <div className="absolute inset-0 z-0">
                    <pre className="text-gray-700/10 text-[10px] sm:text-xs break-all select-none font-mono">
                        {`.skills-section {display: flex; align-items: center; } const newSkill = () => {console.log("Always Learning!"); } function getTechStack(stack) { return stack.join(', '); } .card:hover {transform: scale(1.05); box-shadow: 0 0 15px cyan; } @media (max-width: 768px) {flex - direction: column; } body {font - family: 'Inter', sans-serif; }`}
                    </pre>
                </div>

                {/* Main content */}
                <div className="relative z-10 flex flex-col items-center w-full max-w-4xl font-sans text-center">
                    <svg
                        className="w-16 h-16 text-cyan-400 mb-4 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                    </svg>

                    <div className="h-16 w-px border-l-2 border-dotted border-cyan-400 mb-4 mx-auto"></div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Skills</h2>
                    <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                        I am striving to never stop learning and improving
                    </p>

                    <div className="w-full  mb-16">
                        <Slider {...settings}>
                            {skillsData.map(({ name, bgColor, textColor, shadowColor, svg }) => (
                                <div
                                    key={name}
                                    className="px-3 md:px-4 lg:px-5" // Gap changes with screen size
                                >
                                    <div
                                        className={`flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer ${bgColor} ${textColor} shadow-lg ${shadowColor} transition-transform duration-300 hover:scale-105 select-none`}
                                    >
                                        {svg}
                                        <p className="mt-3 font-semibold">{name}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Repeat same skills in a simple horizontal scroll container for smaller screens (optional) */}
                </div>
            </section>
        </div>
    );
};

export default Skills;