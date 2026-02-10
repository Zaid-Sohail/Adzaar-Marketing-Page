import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

export default function PortfolioPage() {
    let projects = [
        {
            brand: "E‑Commerce Fashion Brand",
            result: "3.4x ROAS in 60 Days",
            desc: "Organic content strategy combined with geo-targeted Instagram campaigns.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        },
        {
            brand: "Personal Brand Coach",
            result: "50K+ Followers Growth",
            desc: "Short-form video strategy across Instagram Reels & TikTok.",
            img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        },
        {
            brand: "SaaS Startup",
            result: "2x Lead Conversion",
            desc: "LinkedIn content + paid lead generation funnel with analytics tracking.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        },
        {
            brand: "Real Estate Agency",
            result: "120+ Qualified Leads / Month",
            desc: "Facebook lead ads paired with high-converting landing pages.",
            img: "https://images.unsplash.com/photo-1542744095-291d1f67b221",
        },
        {
            brand: "Online Education Platform",
            result: "4x Monthly Revenue",
            desc: "YouTube Shorts + retargeting ad strategy for course sales.",
            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        },
    ];


    return (
        <div className="font-sans text-gray-900">
            <Navbar />


            {/* Hero */}
            <section className="pt-32 pb-24  from-indigo-700 via-purple-700 to-pink-600 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold">Our Portfolio</h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
                    Real brands. Real growth. Proven results across multiple industries.
                </p>
            </section>


            {/* Portfolio Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Selected Case Highlights
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className="bg-grey-300 p-8 rounded-3xl shadow hover:shadow-xl transition"
                            >
                                <img
                                    src={project.img}
                                    alt="Brand Strategy"
                                    className="h-40 w-full object-cover rounded-2xl"
                                />

                                <h3 className="mt-6 text-xl font-semibold">
                                    {project.brand}
                                </h3>

                                <p className="mt-2 text-indigo-600 font-semibold text-sm">
                                    {project.result}
                                </p>

                                <p className="mt-4 text-sm text-gray-600">
                                    {project.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Industries */}
            <section className="py-24 bg-white" >
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Industries We’ve Worked With</h2>
                    <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
                        {["E-Commerce", "Real Estate", "Restaurants", "Personal Brands", "SaaS", "Education", "Healthcare"].map((industry, i) => (
                            <span key={i} className="px-5 py-2 rounded-full bg-gray-100">
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </section >


            {/* CTA */}
            <section className="py-24 bg-indigo-600 text-white text-center" >
                <h2 className="text-3xl md:text-4xl font-extrabold">Want Results Like These?</h2>
                <p className="mt-4 text-white/90">Let’s build your next success story.</p>
                <Link to='/brandstrategy' className="mt-8 inline-block px-10 py-4 rounded-2xl bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition duration-300 ease-in-out">
                    View Strategy
                </Link>
            </section >


            <Footer />
        </div >
    );
}