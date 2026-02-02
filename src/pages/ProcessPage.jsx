import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

export default function ProcessPage() {
    let steps = [
        {
            title: "Discovery & Audit",
            desc: "We analyze your brand, competitors, audience behavior, and existing social presence to uncover growth opportunities.",
        },
        {
            title: "Strategy & Planning",
            desc: "A custom roadmap with platform-specific content plans, posting schedules, ad funnels, and KPIs.",
        },
        {
            title: "Creative Execution",
            desc: "High-quality content creation, copywriting, design, and campaign launches tailored to your brand voice.",
        },
        {
            title: "Launch & Management",
            desc: "We publish, manage, engage, and monitor performance while optimizing daily for maximum impact.",
        },
        {
            title: "Optimization & Scaling",
            desc: "Data-driven improvements, budget scaling, A/B testing, and reporting to ensure continuous growth.",
        },
    ];


    return (
        <div className="font-sans text-gray-900">
            <Navbar />


            {/* Hero */}
            <section className="pt-32 pb-24 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold">Our Process</h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
                    A proven, step-by-step system designed to deliver consistent growth, engagement, and measurable results.
                </p>
            </section>


            {/* Process Timeline */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-3xl shadow-sm w-full">
                                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Why Our Process Works */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Our Process Works</h2>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {["Data-Driven Decisions", "Platform-Specific Strategies", "Continuous Optimization"].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-3xl">
                                <h4 className="text-xl font-semibold">{item}</h4>
                                <p className="mt-4 text-sm text-gray-600">
                                    Every step is backed by insights, testing, and real performance data — not guesswork.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="py-24 bg-indigo-600 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Start the Process?</h2>
                <p className="mt-4 text-white/90">
                    Let’s build a strategy that turns attention into revenue.
                </p>
                <button className="mt-8 px-10 py-4 rounded-2xl bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition">
                    Book a Free Strategy Call
                </button>
            </section>


            <Footer />
        </div>
    );
}