import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function SocialMediaManagement() {
    return (
        <div>
            <Navbar />
            {/* Social Media Management Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                            Core Service
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Social Media Management
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            We manage your social media from strategy to execution — so your brand
                            stays consistent, engaging, and growth-focused across every platform.
                        </p>

                        <ul className="mt-8 space-y-4 text-gray-700">
                            <li>✅ Content planning & posting</li>
                            <li>✅ Daily account management</li>
                            <li>✅ Audience engagement & DM handling</li>
                            <li>✅ Hashtag & trend research</li>
                            <li>✅ Monthly performance reports</li>
                        </ul>

                        <button className="mt-10 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                            Get This Service
                        </button>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gray-950 rounded-3xl blur-3xl"></div>

                        <div className="relative bg-gray-100 rounded-3xl p-6 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1557838923-2985c318be48"
                                alt="Social Media Marketing"
                                className="h-72 w-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                </div>
            </section>
            <Footer />

        </div>
    )
}
