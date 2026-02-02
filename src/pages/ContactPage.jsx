import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

export default function ContactPage() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Contact Us</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
          Tell us about your brand and goals — we’ll show you how to scale.
        </p>
      </section>


      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Let’s Build Something Big</h2>
            <p className="mt-6 text-gray-600">
              Whether you’re looking to grow followers, generate leads, or scale paid ads — our team is ready.
            </p>


            <div className="mt-8 space-y-4 text-sm">
              <p><strong>Email:</strong> adzaarmarketing@gmail.com</p>
              <p><strong>Phone:</strong> +92 337 751443</p>
              <p><strong>Availability:</strong> Mon – Sat, 10am – 7pm</p>
            </div>
          </div>


          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow">
            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Service Interested In</label>
                <select className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                  <option>Social Media Management</option>
                  <option>Paid Advertising</option>
                  <option>Content Creation</option>
                  <option>Brand Strategy</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your goals"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Prefer a Quick Call?</h2>
        <p className="mt-4 text-gray-600">Schedule a free 30-minute strategy session.</p>
        <button className="mt-8 px-10 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
          Book a Call
        </button>
      </section>


      <Footer />
    </div >
  );
}