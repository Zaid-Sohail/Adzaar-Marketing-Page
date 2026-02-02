import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to={'/'} className="text-2xl font-extrabold tracking-tight text-gray-900">
                    Adzaar <span className="text-indigo-600">Marketing</span>
                </Link>
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <Link to='/services' className="hover:text-indigo-600 cursor-pointer">Services</Link>
                    <Link to='/process' className="hover:text-indigo-600 cursor-pointer">Process</Link>
                    <Link to='/portfolio' className="hover:text-indigo-600 cursor-pointer">Portfolio</Link>
                    <Link to='/contact' className="hover:text-indigo-600 cursor-pointer">Contact</Link>
                </ul>
                <button className="hidden md:inline-block px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
                    Get Started
                </button>
            </div>
        </nav>
    );
}
