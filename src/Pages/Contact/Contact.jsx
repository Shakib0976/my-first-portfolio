import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
                    <p className="text-gray-400 mb-10">
                        Have a project in mind or just want to say hello? Feel free to reach out — I’ll respond as soon as possible.
                    </p>

                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-4 text-left">
                        {/* Email */}
                        <div>
                            <h3 className="text-lg font-semibold">Email:</h3>
                            <a
                                href="mailto:web.shakib09@gmail.com"
                                className="text-teal-400 hover:underline"
                            >
                                web.shakib09@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div>
                            <h3 className="text-lg font-semibold">Phone:</h3>
                            <a
                                href="tel:+08801727487419"
                                className="text-teal-400 hover:underline"
                            >
                                +08801727487419
                            </a>
                        </div>

                        {/* WhatsApp (Optional) */}
                        <div>
                            <h3 className="text-lg font-semibold">WhatsApp:</h3>
                            <a
                                href="https://wa.me/01727487419"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-400 hover:underline"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;