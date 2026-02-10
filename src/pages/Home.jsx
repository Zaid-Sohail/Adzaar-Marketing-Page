
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Grow Your Brand on <br /> Social Media
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Adzaar Marketing helps businesses dominate social platforms with data‑driven strategies, creative content, and high‑converting campaigns.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-7 py-3 rounded-2xl bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition">
                Start Growing
              </button>
              <button className="px-7 py-3 rounded-2xl border border-white/40 hover:bg-white/10 transition">
                View Work
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gray-950 rounded-3xl blur-3xl"></div>

            <div className="relative bg-gray-100 rounded-3xl p-6 shadow-2xl overflow-hidden h-64">
              {/* Skeleton Placeholder */}
              {!loaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-10 rounded-2xl" />
              )}

              {/* Hero Image */}
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing"
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`relative z-20 h-full w-full object-cover rounded-2xl transition-all duration-700
                  ${loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105"}
                `}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">What We Do Best</h2>
            <p className="mt-4 text-gray-600">
              Everything you need to build a strong, engaging, and profitable social media presence.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Social Media Management", "Paid Advertising", "Content & Branding"].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{service}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  We create tailored strategies designed to attract, engage, and convert your ideal audience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Scale Your Social Presence?
          </h2>

          <p className="mt-4 text-white/90">
            Let Adzaar Marketing turn your followers into loyal customers.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block px-10 py-4 rounded-2xl bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
