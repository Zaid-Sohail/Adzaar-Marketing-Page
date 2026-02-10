import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function Casestudies() {
    const [loaded, setLoaded] = useState({});

    const caseStudies = [
        {
            brand: "E-commerce Fashion Brand",
            result: "4.8x ROAS in 60 Days",
            desc: "Scaled paid ads with high-converting creatives and retargeting funnels.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
            color: "from-indigo-500 to-purple-500"
        },
        {
            brand: "Local Restaurant Chain",
            result: "220% Engagement Growth",
            desc: "Content strategy + reels increased footfall and online visibility.",
            img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
            color: "from-pink-500 to-rose-500"
        }
        ,

        {
            brand: "Tech Startup",
            result: "3x Lead Generation",
            desc: "Brand strategy and LinkedIn ads drove qualified B2B leads.",
            img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
            color: "from-emerald-500 to-teal-500"
        }
    ];

    return (
        <div>
            <Navbar />

            {/* Case Studies Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="max-w-3xl">
                        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                            Case Studies
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Real Brands. Real Results.
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            Explore how Adzaar Marketing helped brands grow their audience,
                            increase engagement, and scale revenue through data-driven strategies
                            and creative execution.
                        </p>
                    </div>

                    {/* Case Study Cards */}
                    <div className="mt-16 grid md:grid-cols-3 gap-10">
                        {caseStudies.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition"
                            >
                                {/* Image Wrapper */}
                                <div className="relative h-40 w-full overflow-hidden rounded-2xl">

                                    {/* Skeleton */}
                                    {!loaded[index] && (
                                        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                    )}

                                    {/* Image */}
                                    <img
                                        src={item.img}
                                        alt={item.brand}
                                        loading="lazy"
                                        onLoad={() =>
                                            setLoaded(prev => ({ ...prev, [index]: true }))
                                        }
                                        className={`h-full w-full object-cover transition-all duration-700
                      ${loaded[index]
                                                ? "opacity-100 blur-0 scale-100"
                                                : "opacity-0 blur-lg scale-105"}
                    `}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-40`} />
                                </div>

                                <h3 className="mt-6 text-xl font-bold">{item.brand}</h3>
                                <p className="mt-2 text-indigo-600 font-semibold">{item.result}</p>
                                <p className="mt-4 text-gray-600">{item.desc}</p>

                                <button className="mt-6 text-sm font-semibold text-indigo-600 group-hover:underline">
                                    View Case Study →
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-12 text-center">
                        <h3 className="text-3xl font-bold">
                            Want Results Like These?
                        </h3>
                        <p className="mt-4 text-lg opacity-90">
                            Let’s create a strategy tailored to your business goals.
                        </p>
                        <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition">
                            Start Your Project
                        </button>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}
