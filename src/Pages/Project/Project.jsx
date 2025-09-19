import React, { useEffect } from 'react';
import { Link } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";
import ElectricBorder from '../../Components/ElectricBorder';

const Project = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div>
            <section className=" min-h-screen text-white w-11/14 mx-auto py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
                    <div className="grid gap-8  sm:grid-cols-2 lg:grid-cols-3">

                        {/* Project 1 */}
                        <ElectricBorder
                            color="#7df9ff"
                            speed={1}
                            chaos={0.5}
                            thickness={2}
                            style={{ borderRadius: 16 }}
                        >
                            <div

                                data-aos="fade-right"
                                data-aos-delay="200"

                                className="bg-slate-950/6 rounded-lg overflow-hidden shadow-xl hover:shadow-xl transition-shadow duration-300">
                                <img src="https://i.ibb.co.com/HpqVh964/Screenshot-2025-08-08-192622.png" alt="Project 1" className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <h3 className="text-2xl text-gray-800 font-bold mb-3">Eco Food</h3>
                                    <p className="text-sm text-gray-500 line-clamp-3">
                                        Eco Food is a dynamic web application designed to facilitate food donation management and reduce food waste by connecting donors, charities, and admins through a role-based platform.
                                    </p>
                                    <Link to="/project1" className="inline-block mt-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </ElectricBorder>


                        {/* Project 4 */}
                        <ElectricBorder
                            color="#7df9ff"
                            speed={1}
                            chaos={0.5}
                            thickness={2}
                            style={{ borderRadius: 16 }}
                        >
                            <div

                                data-aos="fade-right"
                                data-aos-delay="200"

                                className="bg-slate-950/6 rounded-lg overflow-hidden shadow-xl hover:shadow-xl transition-shadow duration-300">
                                <img src="https://i.ibb.co.com/99ZyPxf0/Screenshot-2025-09-19-094044.png" alt="Project 1" className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <h3 className="text-2xl text-gray-800 font-bold mb-3">Student-Toolkit</h3>
                                    <p className="text-sm text-gray-500 line-clamp-3">
                                        Student Life Toolkit is designed to help students organize their schedules, manage finances, prepare for exams, and plan their studies efficiently.
                                    </p>
                                    <Link to="/project4" className="inline-block mt-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </ElectricBorder>

                        {/* Project 2 */}
                        <ElectricBorder
                            color="#7df9ff"
                            speed={1}
                            chaos={0.5}
                            thickness={2}
                            style={{ borderRadius: 16 }}
                        >
                            <div

                                data-aos="fade-up"
                                data-aos-delay="200"


                                className="bg-slate-950/6 rounded-lg overflow-hidden shadow-xl hover:shadow-xl transition-shadow duration-300">
                                <img src="https://i.ibb.co.com/d4kT2tK5/Screenshot-2025-08-08-190459.png" alt="Project 2" className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <h3 className="text-2xl text-gray-800 font-bold mb-3">Dev Knowledge</h3>
                                    <p className="text-sm text-gray-500 line-clamp-3">
                                        DevKnowledge is a collaborative platform for students to create, share, and discuss academic articles and resources.
                                    </p>
                                    <Link to="/project2" className="inline-block mt-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </ElectricBorder>


                        {/* Project 3 */}
                        <ElectricBorder
                            color="#7df9ff"
                            speed={1}
                            chaos={0.5}
                            thickness={2}
                            style={{ borderRadius: 16 }}
                        >
                            <div

                                data-aos="fade-left"
                                data-aos-delay="200"


                                className="bg-slate-950/5  shadow-xl rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img src="https://i.ibb.co.com/twwyxgJN/Screenshot-2025-08-08-185015.png" alt="Project 3" className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <h3 className="text-2xl text-gray-800 font-bold mb-3">Freelancer MarketPlace</h3>
                                    <p className="text-sm text-gray-500 line-clamp-3">
                                        I’m looking for a skilled web developer (or team) to build a fully functional freelancer job post website.
                                    </p>
                                    <Link to="/project3" className="inline-block mt-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </ElectricBorder>




                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;