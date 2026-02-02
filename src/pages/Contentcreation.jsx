import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function Contentcreation() {
    return (
        <div>
            <Navbar />
            {/* Content Creation Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold">
                            Creative Services
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Content Creation
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            We create scroll-stopping content designed to grab attention,
                            communicate your brand message, and drive real engagement across
                            every platform.
                        </p>

                        <ul className="mt-8 space-y-4 text-gray-700">
                            <li>🎥 Short-form video (Reels, TikTok, Shorts)</li>
                            <li>✍️ Captions & copywriting</li>
                            <li>🎨 Visual design & branding</li>
                            <li>📸 Product & lifestyle creatives</li>
                            <li>📆 Content calendar & trends</li>
                        </ul>

                        <button className="mt-10 px-8 py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
                            Create My Content
                        </button>
                    </div>

                    {/* Right Visual */}
                    {/* Left Visual */}
                    <div className="relative order-2 md:order-1">
                        <div className="absolute inset-0 bg-pink-700/20 rounded-3xl blur-3xl"></div>

                        <div className="relative bg-black rounded-3xl p-6 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
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
