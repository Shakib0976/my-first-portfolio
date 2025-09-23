import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaReact, FaNodeJs, FaTools, FaUserTie
} from "react-icons/fa";
import {
    SiRedux, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
    SiStyledcomponents, SiExpress, SiMongodb, SiJsonwebtokens, SiFirebase,
    SiGithub, SiVercel, SiFigma
} from "react-icons/si";

const skillsData = {
    All: [
        { name: "HTML", icon: <SiHtml5 className="text-3xl text-purple-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-3xl text-purple-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-3xl text-purple-500" /> },
        { name: "ReactJs", icon: <FaReact className="text-3xl text-purple-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl text-purple-500" /> },
        { name: "Styled Component", icon: <SiStyledcomponents className="text-3xl text-purple-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-3xl text-purple-500" /> },
        { name: "ExpressJs", icon: <SiExpress className="text-3xl text-purple-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-3xl text-purple-500" /> },
        { name: "Mongoose", icon: <SiMongodb className="text-3xl text-purple-500" /> },
        { name: "REST APIs", icon: <SiRedux className="text-3xl text-purple-500" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-3xl text-purple-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-3xl text-purple-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-3xl text-purple-500" /> },
        { name: "GitHub Actions", icon: <SiGithub className="text-3xl text-purple-500" /> },
        { name: "AI Integration", icon: <FaTools className="text-3xl text-purple-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-3xl text-purple-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-3xl text-purple-500" /> },
        { name: "Figma", icon: <SiFigma className="text-3xl text-purple-500" /> },
        { name: "Project Management", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Team Leadership", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Communication", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Problem Solving", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Decision Making", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Adaptability", icon: <FaUserTie className="text-3xl text-purple-500" /> },
    ],
    Frontend: [
        { name: "HTML", icon: <SiHtml5 className="text-3xl text-purple-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-3xl text-purple-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-3xl text-purple-500" /> },
        { name: "ReactJs", icon: <FaReact className="text-3xl text-purple-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl text-purple-500" /> },
        { name: "Styled Component", icon: <SiStyledcomponents className="text-3xl text-purple-500" /> },
    ],
    Backend: [
        { name: "Node.js", icon: <FaNodeJs className="text-3xl text-purple-500" /> },
        { name: "ExpressJs", icon: <SiExpress className="text-3xl text-purple-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-3xl text-purple-500" /> },
        { name: "Mongoose", icon: <SiMongodb className="text-3xl text-purple-500" /> },
        { name: "REST APIs", icon: <SiRedux className="text-3xl text-purple-500" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-3xl text-purple-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-3xl text-purple-500" /> },
    ],
    Tools: [
        { name: "GitHub", icon: <SiGithub className="text-3xl text-purple-500" /> },
        { name: "GitHub Actions", icon: <SiGithub className="text-3xl text-purple-500" /> },
        { name: "AI Integration", icon: <FaTools className="text-3xl text-purple-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-3xl text-purple-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-3xl text-purple-500" /> },
        { name: "Figma", icon: <SiFigma className="text-3xl text-purple-500" /> },
    ],
    SoftSkills: [
        { name: "Project Management", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Team Leadership", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Communication", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Problem Solving", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Decision Making", icon: <FaUserTie className="text-3xl text-purple-500" /> },
        { name: "Adaptability", icon: <FaUserTie className="text-3xl text-purple-500" /> },
    ],
};

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAll, setShowAll] = useState(false); // new state
    const categories = ["All", "Frontend", "Backend", "Tools", "SoftSkills"];

    // show only first 8 (2 rows x 4 cols) if showAll = false
    const itemsToShow = showAll
        ? skillsData[selectedCategory]
        : skillsData[selectedCategory].slice(0, 12);

    return (
        <section className="py-12">
            <h1 className="text-3xl poppins-font sm:text-4xl mb-5 font-bold  text-black text-center py-4">My  <span className="text-teal-600">Skills</span></h1>
            <div className="container w-11/12 overflow-x-hidden md:max-w-11/14  p-4 mx-auto text-center">
                {/* Navigation */}
                <div className="hidden lg:flex lg:justify-center mb-8 space-x-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCategory(cat);
                                setShowAll(false); // reset when category changes
                            }}
                            className={`px-4 py-2 rounded-lg font-medium transition ${selectedCategory === cat
                                ? "bg-white shadow text-purple-600"
                                : "bg-purple-100 text-gray-600 hover:bg-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory + (showAll ? "-all" : "-short")}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                    >
                        {itemsToShow.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white  rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition hover:border-2 hover:border-teal-600"
                            >
                                {skill.icon}
                                <p className="mt-3 text-gray-800 font-medium">{skill.name}</p>
                                <p className="h-2 w-full bg-teal-600 my-2 rounded-full"></p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Show More / Hide button */}
                {skillsData[selectedCategory].length > 8 && (
                    <p
                        onClick={() => setShowAll(!showAll)}
                        className="mt-8 w-full text-black border-b-gray-500 font-bold text-gray-600 border-b-2 rounded-lg transition"
                    >
                        {showAll ? "<Hide>" : "<Show More>"}
                    </p>
                )}

            </div>





        </section>
    );
};

export default Skills;
