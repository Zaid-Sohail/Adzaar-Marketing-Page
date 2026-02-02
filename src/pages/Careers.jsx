import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function Careers() {
  return (
    <div>
        <Navbar/>
      {/* Careers Section */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="max-w-3xl">
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold">
        Careers at Adzaar Marketing
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
        Build Your Career in Digital Marketing
      </h2>

      <p className="mt-6 text-gray-600 text-lg">
        We’re always looking for creative thinkers, strategists, and marketers
        who want to work on exciting brands and real growth challenges.
      </p>
    </div>

    {/* Culture */}
    <div className="mt-16 grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Creative Freedom",
          desc: "We value ideas, experimentation, and bold thinking."
        },
        {
          title: "Growth Focused",
          desc: "Learn fast, grow your skills, and level up your career."
        },
        {
          title: "Collaborative Team",
          desc: "Work with passionate people who support each other."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="mt-4 text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Open Positions */}
    <div className="mt-24">
      <h3 className="text-2xl font-bold mb-8">Open Positions</h3>

      <div className="space-y-6">
        {[
          "Social Media Manager",
          "Content Creator / Video Editor",
          "Paid Ads Specialist",
          "Graphic Designer",
          "Marketing Intern"
        ].map((role, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
          >
            <span className="font-semibold">{role}</span>
            <button className="px-5 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="mt-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-12 text-center">
      <h3 className="text-3xl font-bold">
        Don’t See Your Role?
      </h3>
      <p className="mt-4 text-lg opacity-90">
        We’re always open to talented people. Send us your portfolio and let’s talk.
      </p>
      <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-purple-700 font-semibold hover:bg-gray-100 transition">
        Send Your CV
      </button>
    </div>

  </div>
</section>
<Footer/>

    </div>
  )
}
