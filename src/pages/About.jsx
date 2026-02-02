import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function About() {
    return (
        <div>
            <Navbar/>
            {/* About Us Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                            About Adzaar Marketing
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            We Help Brands Grow, Scale & Stand Out
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            Adzaar Marketing is a results-driven social media marketing agency
                            focused on building strong digital brands. We combine creativity,
                            strategy, and performance marketing to help businesses grow faster
                            and smarter in today’s competitive online world.
                        </p>

                        <p className="mt-4 text-gray-600">
                            From startups to established brands, we partner closely with our
                            clients to create meaningful digital experiences, measurable growth,
                            and long-term success.
                        </p>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-3 gap-6">
                            <div>
                                <h3 className="text-3xl font-bold text-indigo-600">120+</h3>
                                <p className="text-sm text-gray-500">Campaigns Launched</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-indigo-600">98%</h3>
                                <p className="text-sm text-gray-500">Client Satisfaction</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-indigo-600">5x</h3>
                                <p className="text-sm text-gray-500">Average ROI</p>
                            </div>
                        </div>

                        <button className="mt-12 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                            Work With Us
                        </button>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl blur-3xl"></div>
                        <div className="relative bg-gray-100 rounded-3xl p-6 shadow-xl">
                            <div className="h-80 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </div>
    )
}
