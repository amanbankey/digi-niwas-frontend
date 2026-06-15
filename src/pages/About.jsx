import React from "react";
import { Search, BarChart3, Rocket } from "lucide-react";
const team = [
  {
    name: "Arjun Singh",
    role: "Co-Founder & CEO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcFM28IGjIpvm0W_2uIj8lh9ViBr4BhTmJE4lEf7x71lJIzkavw4g70ybm4JJ8T1EoDXObdi3z5YcvcnDyYi1uBLsWwEgrwEISOtdAJG0Y3mmvXwrsP56VnBBtDh93pvP69qMp0lZLINlGuzPTee6C5sK2Pt1Jd4XDWhDYqqRNp8t9ti14uLTuVZuC-Krl-yRXPtu1SGEP7AXjAliza75hNxmgoLKyo2cCjpqd9Pou9ETr7ZaZw5SWsFUqreJtqB-WFNLMp_89",
    desc: "Former Silicon Valley AI Lead with a passion for Indian urban development.",
  },
  {
    name: "Sandeep Kaur",
    role: "Head of Strategy",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    desc: "20 years of expertise in luxury residential assets across North India.",
  },
  {
    name: "Vikram Dhillon",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    desc: "Machine learning expert specializing in spatial data and property analytics.",
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1628394d] to-[#162839cc] z-10"></div>

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBPZawAd1oy-smKp5UtCyQ1weMdzx-1bJh9nHxOUuSI1oxE0QjahuEBO0u_QC8L0QCAj7yRcM39Ypw2lgFnAwlWCfgCnmFIinPhXN6cDSfrladXNhbVU63iHidNHXJm8bY0gl3mDF1sU2imz0kzQfM0adN9JM7Ij1cWo6wqnoqWQDGIZR863K0JtXzSZ_4Hj_Z8mJa4BuCGQNXSomM9fVIUPZbQpAbZNChb1dcNVkq5ZH8bVMEhHnp9T8QL33ppcxzx3E71Hl9"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold text-white mb-8 leading-tight">
          Building the Future of{" "}
          <span className="text-[#ffe088]">AI-Powered</span> Real Estate in
          Punjab
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-16">
          We're bridging the gap between visionary investors, global NRIs, and
          the heart of Punjab through intelligent discovery and verified data.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-[#162839]">10,000+</h3>
            <p className="uppercase text-sm font-semibold text-gray-600">
              Verified Listings
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-[#162839]">500+</h3>
            <p className="uppercase text-sm font-semibold text-gray-600">
              Expert Agents
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-[#162839]">₹5,000 Cr+</h3>
            <p className="uppercase text-sm font-semibold text-gray-600">
              Portfolio Value
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-[#162839]">24/7</h3>
            <p className="uppercase text-sm font-semibold text-gray-600">
              AI Concierge
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GenesisSection() {
  return (
    <section className="py-10 sm:py-28 px-5 md:px-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <span className="text-[#006d44] font-medium uppercase tracking-[4px]">
            The Genesis
          </span>

          <h2 className="text-4xl font-bold text-[#162839]">
            Beyond the Fragmented Market.
          </h2>

          <div className="space-y-4 text-gray-600 leading-8">
            <p>
              For decades, the real estate landscape in Punjab was defined by
              word-of-mouth, lack of transparency, and immense challenges for
              the global Punjabi diaspora (NRIs).
            </p>

            <p>
              We saw a market rich in value but poor in accessibility. Niwas AI
              was born from the necessity to digitize trust. By integrating
              advanced machine learning with local ground intelligence, we
              created a single point of truth.
            </p>

            <p className="italic font-bold text-[#162839] border-l-4 border-[#006d44] pl-4">
              "Our mission is simple: To ensure that every brick laid in Punjab
              is a brick built on data and trust."
            </p>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqcVRcPA-_iwZhWRpYHw58BQhYSbwNc-hudsih9x-l2tp2HQkGvMRbN8TXslB32SiOxsKlvQAnagHcYG-nb_bMWa-x5-E6VazIaNLQd9pskDSqPXTJM-0uMjHQDOedm23zIfvDYH9lOvtcisi8_W3oUX0EdHWTFzDJk-rVoCCLSLHjaKcFcKilz1PPoVIHmgjIhyjd282XKrRne6TFDxjLp865oUCg0zRH8ZsN-J-vnY7E1_0DId4RkiqXMSgqNP5dWdQ4OFMr"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}

GenesisSection;

function StatisticsSection() {
  return (
    <section className="py-10 sm:py-28 px-5 md:px-16 bg-[#162839] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">
            Unlocking the Punjab Prosperity Cycle.
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div>
                <h3 className="font-bold text-[#ffe088] mb-2">
                  Digital Transformation
                </h3>
                <p className="text-slate-300">
                  Punjab's real estate digitization is projected to grow by 240%
                  by 2030.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="font-bold text-[#ffe088] mb-2">NRI Demand</h3>
                <p className="text-slate-300">
                  A $50 Billion untapped investment potential from the global
                  diaspora.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#2c3e50] p-8 rounded-3xl">
          <div className="flex items-end justify-between h-[300px] gap-4">
            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-[#006d44] rounded-t-lg h-[20%]" />
              <span className="mt-4 text-xs">2020</span>
            </div>

            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-[#006d44] rounded-t-lg h-[40%]" />
              <span className="mt-4 text-xs">2022</span>
            </div>

            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-[#006d44] rounded-t-lg h-[65%]" />
              <span className="mt-4 text-xs">2024</span>
            </div>

            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-[#cca730] rounded-t-lg h-[90%]" />
              <span className="mt-4 text-xs text-[#ffe088]">2026F</span>
            </div>
          </div>
        </div> */}

        <div className="bg-[#2c3e50] p-8 rounded-3xl">
          <div className="flex items-end justify-between h-[300px] gap-4">
            <div className="flex flex-col justify-end items-center flex-1 h-full">
              <div
                className="w-full bg-[#006d44] rounded-t-lg"
                style={{ height: "20%" }}
              />
              <span className="mt-4 text-xs">2020</span>
            </div>

            <div className="flex flex-col justify-end items-center flex-1 h-full">
              <div
                className="w-full bg-[#006d44] rounded-t-lg"
                style={{ height: "40%" }}
              />
              <span className="mt-4 text-xs">2022</span>
            </div>

            <div className="flex flex-col justify-end items-center flex-1 h-full">
              <div
                className="w-full bg-[#006d44] rounded-t-lg"
                style={{ height: "65%" }}
              />
              <span className="mt-4 text-xs">2024</span>
            </div>

            <div className="flex flex-col justify-end items-center flex-1 h-full">
              <div
                className="w-full bg-[#cca730] rounded-t-lg"
                style={{ height: "90%" }}
              />
              <span className="mt-4 text-xs text-[#ffe088]">2026F</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="py-10 sm:py-28 px-5 md:px-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="  text-3xl  c">Our Journey</span>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#006d44] -translate-x-1/2" />

        <div className="block md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-[#006d44]" />

        <div className="relative flex md:justify-start items-center mb-24">
          <div className="md:w-1/2 md:pr-12 pl-16 md:pl-0">
            <div className="bg-white p-8 rounded-2xl text-end shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-medium text-[#162839] mb-2">
                Problem Discovery
              </h3>

              <p className="text-gray-600">
                Analyzing 20 years of property disputes and transparency gaps in
                Punjab.
              </p>
            </div>
          </div>

          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#006d44] border-4 border-white flex items-center justify-center shadow-lg">
            <Search size={22} className="text-white" />
          </div>
        </div>

        <div className="relative flex justify-end items-center mb-24">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#006d44] border-4 border-white flex items-center justify-center shadow-lg">
            <BarChart3 size={22} className="text-white" />
          </div>

          <div className="md:w-1/2 md:pl-12 pl-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-medium text-[#162839] mb-2">
                AI Vision
              </h3>

              <p className="text-gray-600">
                Developing the first property valuation engine tailored for
                Indian land dynamics.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex md:justify-start items-center">
          <div className="md:w-1/2 md:pr-12 pl-16 md:pl-0">
            <div className="bg-white p-8 rounded-2xl text-end shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-medium text-[#162839] mb-2">
                Punjab Launch
              </h3>

              <p className="text-gray-600">
                Going live with the first 5,000 verified listings across
                Ludhiana, Jalandhar and Amritsar.
              </p>
            </div>
          </div>

          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#cca730] border-4 border-white flex items-center justify-center shadow-lg">
            <Rocket size={22} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="py-12 sm:py-28 px-5 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-[#162839] text-white p-12 rounded-[40px]">
          <span className="text-[#ffe088] font-bold">Our Mission</span>

          <h3 className="text-2xl sm:text-3xl text-center sm:text-left font-semibold mt-4 mb-4">
            Modernize property discovery through intelligent automation.
          </h3>

          <p className="text-center sm:text-left">
            We are committed to removing the friction from real estate
            transactions by providing instantly accessible, verified, and
            AI-vetted data.
          </p>
        </div>

        <div className="bg-gray-100 p-12 rounded-[40px] border">
          <span className="text-[#006d44] font-bold">Our Vision</span>

          <h3 className="text-3xl font-semibold mt-4 mb-4 text-[#162839]">
            India’s most trusted AI-driven property ecosystem.
          </h3>

          <p>
            To define the next century of Indian real estate by becoming the
            gold standard for asset valuation and ownership transparency.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-12 sm:py-28 px-5 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="uppercase tracking-widest text-[#006d44] font-bold">
          More Than a Platform
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-8 rounded-3xl border">
          <h4 className="text-2xl font-semibold text-[#162839] mb-4">
            AI Real Estate Assistant
          </h4>
          <p>
            Personalized property recommendations based on financial goals and
            lifestyle preferences.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-3xl border">
          <h4 className="text-2xl font-semibold text-[#162839] mb-4">
            Verified Listings
          </h4>
          <p>
            Every property undergoes a 42-point background check before
            appearing on Niwas AI.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-3xl border">
          <h4 className="text-2xl font-semibold text-[#162839] mb-4">
            NRI Priority Support
          </h4>
          <p>
            Seamless digital documentation and virtual walkthroughs for our
            global Punjabi family.
          </p>
        </div>
      </div>
    </section>
  );
}

function VisionariesSection() {
  return (
    <section className="py-28 px-5 md:px-16 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-medium text-[#162839]">The Visionaries</h2>

        <span className="  text-xl sm:text-2xl  ">
          Expert in technology and real state crafting the future
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name}>
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </div>

            <h3 className="text-2xl font-semibold text-[#162839]">
              {member.name}
            </h3>

            <p className="text-[#006d44] font-semibold mb-4">{member.role}</p>

            <p className="text-gray-600 leading-relaxed">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-[#162839] text-center py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-12">
          The Future of Real Estate is
          <br />
          <span className="text-[#ffe088]">
            Intelligent, Trusted and Connected.
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-[#006d44] text-white px-10 py-4 rounded-full">
            Start Your Search
          </button>

          <button className="border-2 border-white text-white px-10 py-4 rounded-full">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <main className="bg-[#f8f9fa] text-[#191c1d]">
      <HeroSection />
      <GenesisSection />
      <JourneySection />
      <MissionVisionSection />
      <FeaturesSection />
      <StatisticsSection />

      <VisionariesSection />
      <CTASection />
    </main>
  );
};

export default About;
