import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function Blogs() {
  return (
    <div>
        <Navbar/>
      <main className="pt-32 pb-24 bg-gray-50">

      {/* Blog Hero */}
      <section className="max-w-7xl mx-auto px-6">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
          Adzaar Blog
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Marketing Insights & Growth Strategies
        </h1>

        <p className="mt-6 max-w-2xl text-gray-600 text-lg">
          Actionable tips, proven strategies, and real-world insights on social
          media marketing, paid ads, branding, and content creation.
        </p>
      </section>

      {/* Featured Post */}
      <section className="mt-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 shadow">
          <div className="h-80 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500"></div>

          <div>
            <span className="text-sm text-indigo-600 font-semibold">
              Featured Post
            </span>
            <h2 className="mt-3 text-3xl font-bold">
              How Brands Scale with Paid Ads & Content Strategy
            </h2>
            <p className="mt-4 text-gray-600">
              Learn how combining strong creatives with data-driven paid ads
              helps brands achieve consistent growth and higher ROI.
            </p>
            <button className="mt-6 font-semibold text-indigo-600 hover:underline">
              Read Full Article →
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4">
          {[
            "All",
            "Social Media",
            "Paid Ads",
            "Content Creation",
            "Brand Strategy",
            "Case Studies"
          ].map((cat, i) => (
            <button
              key={i}
              className="px-5 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium hover:bg-indigo-600 hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mt-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Instagram Growth Tips for Businesses",
              category: "Social Media",
              date: "Jan 2024"
            },
            {
              title: "How to Improve ROAS in Meta Ads",
              category: "Paid Ads",
              date: "Feb 2024"
            },
            {
              title: "Content Ideas That Actually Convert",
              category: "Content",
              date: "Mar 2024"
            },
            {
              title: "Building a Strong Brand Identity Online",
              category: "Brand Strategy",
              date: "Mar 2024"
            },
            {
              title: "Why Most Ads Fail (And How to Fix Them)",
              category: "Paid Ads",
              date: "Apr 2024"
            },
            {
              title: "Reels vs Static Posts: What Works Better?",
              category: "Social Media",
              date: "Apr 2024"
            }
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <div className="h-48 bg-gradient-to-tr from-indigo-500 to-purple-500"></div>

              <div className="p-6">
                <span className="text-sm text-indigo-600 font-semibold">
                  {post.category}
                </span>
                <h3 className="mt-3 text-xl font-bold">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm text-gray-500">{post.date}</p>

                <button className="mt-6 text-sm font-semibold text-indigo-600 hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-28 max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold">
            Get Marketing Tips in Your Inbox
          </h3>
          <p className="mt-4 text-lg opacity-90">
            Weekly insights to help your brand grow faster.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-2xl text-gray-800 w-full sm:w-80 focus:outline-none"
            />
            <button className="px-8 py-4 rounded-2xl bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </main>
    <Footer/>
    </div>
  )
}
