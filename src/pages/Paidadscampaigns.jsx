import React, { useState } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function Paidadscampaigns() {
    const [loaded, setLoaded] = useState(false)

    return (
        <div>
            <Navbar />
            {/* Paid Ads Campaigns Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                    {/* Left Visual */}
                    <div className="relative order-2 md:order-1">
                        <div className="absolute inset-0 bg-pink-500/20 rounded-3xl blur-3xl"></div>

                        <div className="relative bg-gray-300 rounded-3xl p-6 shadow-xl overflow-hidden h-72">
                            {/* Skeleton Placeholder */}
                            {!loaded && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse z-10 rounded-2xl" />
                            )}

                            {/* Image */}
                            <img
                                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
                                alt="Social Media Marketing"
                                loading="lazy"
                                onLoad={() => setLoaded(true)}
                                className={`relative z-20 h-full w-full object-cover rounded-2xl transition-all duration-700
                                    ${loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105"}
                                `}
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="order-1 md:order-2">
                        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold">
                            Performance Marketing
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Paid Ads Campaigns
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            We design, launch, and scale high-converting paid ad campaigns that
                            turn traffic into leads, sales, and measurable ROI — not wasted spend.
                        </p>

                        <ul className="mt-8 space-y-4 text-gray-700">
                            <li>🎯 Facebook & Instagram Ads</li>
                            <li>🎯 TikTok Ads & Creative Testing</li>
                            <li>🎯 Google & YouTube Campaigns</li>
                            <li>🎯 Funnel setup & retargeting</li>
                            <li>🎯 ROAS tracking & scaling</li>
                        </ul>

                        <button className="mt-10 px-8 py-4 rounded-2xl bg-pink-600 text-white font-semibold hover:bg-pink-700 transition">
                            Launch Paid Campaign
                        </button>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}
