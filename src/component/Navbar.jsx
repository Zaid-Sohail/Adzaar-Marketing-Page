import React from 'react'
import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Adzaar <span className="text-indigo-600">Marketing</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link to="/services" className="hover:text-indigo-600">Services</Link>
            <Link to="/process" className="hover:text-indigo-600">Process</Link>
            <Link to="/portfolio" className="hover:text-indigo-600">Portfolio</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          </ul>

          <button className="hidden md:inline-block px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
            Get Started
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <button
            className="self-end text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <Link to="/services" onClick={() => setOpen(false)} className="text-lg font-medium">
            Services
          </Link>
          <Link to="/process" onClick={() => setOpen(false)} className="text-lg font-medium">
            Process
          </Link>
          <Link to="/portfolio" onClick={() => setOpen(false)} className="text-lg font-medium">
            Portfolio
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="text-lg font-medium">
            Contact
          </Link>

          <button className="mt-4 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
