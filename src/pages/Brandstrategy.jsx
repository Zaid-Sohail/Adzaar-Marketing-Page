import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'

export default function Brandstrategy() {
    return (
        <div>
            <Navbar />
            {/* Brand Strategy Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                    {/* Left Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gray-950  rounded-3xl blur-3xl"></div>

                        <div className="relative bg-gray-100 rounded-3xl p-6 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                                alt="Digital Marketing"
                                className="h-64 w-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="order-1 md:order-2">
                        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                            Foundation & Growth
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Brand Strategy
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            We define how your brand looks, sounds, and communicates — so every
                            piece of content, ad, and message works together to build authority,
                            trust, and long-term growth.
                        </p>

                        <ul className="mt-8 space-y-4 text-gray-700">
                            <li>🧠 Brand positioning & messaging</li>
                            <li>🎯 Target audience & buyer personas</li>
                            <li>🎨 Visual identity direction</li>
                            <li>🗣 Brand voice & tone guidelines</li>
                            <li>📈 Long-term growth roadmap</li>
                        </ul>

                        <Link to='/contact' className="mt-8 inline-block px-10 py-4 rounded-2xl text-indigo-700 font-semibold hover:bg-gray-100 transition duration-300 ease-in-out">
                            Build My Brand
                        </Link>
                    </div>

                </div>
            </section>
            <Footer />

        </div>
    )
}
