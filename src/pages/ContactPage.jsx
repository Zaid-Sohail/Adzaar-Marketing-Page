import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    service: "Social Media Management",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log("User Created:", userCredential.user);

      setSuccess("Account created successfully!");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        service: "Social Media Management",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

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
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s Build Something Big
            </h2>
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
            <form className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                ></textarea>
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              {success && (
                <p className="text-green-500 text-sm">{success}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
