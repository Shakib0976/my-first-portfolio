import React from 'react';

const Project4 = () => {
    return (
        <div>
            <div className="bg-gray-900 text-white min-h-screen py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Local Food Waste Reduction Platform</h1>
                    <img src="https://i.ibb.co.com/99ZyPxf0/Screenshot-2025-09-19-094044.png" alt="Project 1" className="w-full rounded-lg mb-6" />

                    <h2 className="text-xl font-semibold mb-2">Technology Stack:</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>

                    <p className="mb-6">
                        Student Life Toolkit is designed to help students organize their schedules, manage finances, prepare for exams, and plan their studies efficiently.
                    </p>

                    <div className="flex gap-4 mb-6">
                        <a href="https://local-food-4121f.web.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600">
                            Live Project
                        </a>
                        <a href="https://github.com/Shakib0976/student-tolkit-client" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                            GitHub (Client)
                        </a>
                    </div>

                    <h2 className="text-xl font-semibold mb-2">Challenges Faced:</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>Handling multiple user roles and permissions</li>
                        <li>Implementing real-time updates</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Future Plans:</h2>
                    <ul className="list-disc list-inside">
                        <li>Mobile app version</li>
                        <li>AI donation prediction</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project4;