import React from 'react';

const Project2 = () => {
    return (
        <div>
            <div className="bg-gray-900 text-white min-h-screen py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Dev Knowledge</h1>
                    <img src="https://i.ibb.co.com/d4kT2tK5/Screenshot-2025-08-08-190459.png" alt="Project 2" className="w-full rounded-lg mb-6" />

                    <h2 className="text-xl font-semibold mb-2">Technology Stack:</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>React</li>
                        <li>Firebase</li>
                        <li>Tailwind CSS</li>
                    </ul>

                    <p className="mb-6">
                        DevKnowledge is a collaborative platform for students to create, share, and discuss academic articles and resources. It aims to build a community-driven knowledge hub where users can publish articles, comment on posts, search and filter content by topic, and interact securely using Firebase authentication.
                    </p>

                    <div className="flex gap-4 mb-6">
                        <a href="https://devknowledge-5ed93.web.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600">
                            Live Project
                        </a>
                        <a href="https://github.com/Shakib0976/Dev_Knowledge11" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                            GitHub (Client)
                        </a>
                    </div>

                    <h2 className="text-xl font-semibold mb-2">Challenges Faced:</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>Collaborate all dev data </li>
                        <li>Secure user authentication</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Future Plans:</h2>
                    <ul className="list-disc list-inside">
                        <li>Integrated ai collaborate system</li>
                        <li>Multi-language support</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project2;