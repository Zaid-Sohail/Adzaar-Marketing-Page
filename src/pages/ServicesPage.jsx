import React, { useState } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

export default function ServicesPage() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Our Services</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
          Complete social media solutions designed to attract attention, build trust, and convert followers into customers.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {["Social Media Management", "Paid Ads & Funnels", "Content Creation", "Brand Strategy", "Analytics & Reporting"].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="mt-4 text-sm text-gray-600">
                Tailored strategies focused on consistent growth, engagement, and measurable ROI.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Platforms We Specialize In</h2>
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>Instagram & Facebook Growth</li>
              <li>TikTok Organic & Paid Ads</li>
              <li>LinkedIn B2B Marketing</li>
              <li>YouTube Shorts & Campaigns</li>
            </ul>
          </div>

          {/* ✅ Lazy Loaded Image */}
          <div className="relative h-72 w-full overflow-hidden rounded-3xl">
            {!imgLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Social Media Platforms"
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`h-full w-full object-cover transition-all duration-700
                ${imgLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105"}
              `}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Research", "Strategy", "Execution", "Scaling"].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h4 className="mt-4 font-semibold">{step}</h4>
                <p className="mt-2 text-sm text-gray-600">
                  A clear system built for sustainable growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Let’s Scale Your Brand</h2>
        <p className="mt-4 text-white/90">Get a free strategy session with our experts.</p>
        <button className="mt-8 px-10 py-4 rounded-2xl bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
}
