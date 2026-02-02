import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h3 className="text-xl font-bold text-white">Adzaar Marketing</h3>
                    <p className="mt-4 text-sm leading-relaxed">
                        We help brands grow, engage, and convert through powerful social media marketing strategies.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm flex flex-col">
                        <Link to='/socialmedia'>Social Media Management</Link>
                        <Link to='/paidads'>Paid Ads Campaigns</Link>
                        <Link to='/contentcreation'>Content Creation</Link>
                        <Link to='/brandstrategy'>Brand Strategy</Link>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4 ">Company</h4>
                    <ul className="space-y-2 text-sm flex flex-col">
                        <Link to='/aboutus'>About Us</Link>
                        <Link to='/career'>Careers</Link>
                        <Link to='/casestudies'>Case Studies</Link>
                        <Link to='/blog'>Blog</Link>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>adzaarmarketing@gmail.com</li>
                        <li>+92 337 751443</li>
                        <li>Pakistan</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 py-6 text-center text-sm">
                © {new Date().getFullYear()} Adzaar Marketing. All rights reserved.
            </div>
        </footer>
    );
}
