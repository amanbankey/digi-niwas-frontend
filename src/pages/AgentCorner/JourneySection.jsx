import {
  HiMenu,
  HiPlus,
  HiArrowRight,
} from "react-icons/hi";

import {
  MdPersonSearch,
  MdVerifiedUser,
  MdAccountCircle,
  MdAddBusiness,
  MdSmartToy,
  MdHandshake,
  MdTrendingUp,
  MdAccountTree,
  MdChatBubble,
  MdSettings,
} from "react-icons/md";

const steps = [
  {
    icon: <MdPersonSearch size={34} />,
    title: "Register",
    description: "Sign up in minutes",
  },
  {
    icon: <MdVerifiedUser size={34} />,
    title: "Verification",
    description: "Identity & RERA check",
  },
  {
    icon: <MdAccountCircle size={34} />,
    title: "Activation",
    description: "Branded agent profile",
  },
  {
    icon: <MdAddBusiness size={34} />,
    title: "List",
    description: "Upload premium properties",
  },
  {
    icon: <MdSmartToy size={34} />,
    title: "Receive Leads",
    description: "AI-matched buyer leads",
  },
  {
    icon: <MdHandshake size={34} />,
    title: "Close Deals",
    description: "Scale your revenue",
    active: true,
  },
];

export default function JourneySection() {
  return (
    <div className="bg-[#f8fafb] lg:min-h-screen text-[#191c1d]">
   

      <main className="pt-28 pb-32 max-w-7xl mx-auto px-4 md:px-16">
        <section className="text-center mb-24">
          <p className="uppercase tracking-[4px] text-[#3f6653] font-bold text-xs mb-4">
            THE JOURNEY
          </p>

          <h2
            className="text-4xl md:text-6xl text-[#0d2633]"
            style={{
              fontFamily: "'Source Serif 4', serif",
            }}
          >
            How Niwas AI Works for Agents
          </h2>
        </section>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gray-300" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center hover:border-[#0d2633] justify-center mb-5 transition-all duration-300 ${
                    step.active
                      ? "bg-[#0d2633] text-white shadow-xl border-2 transform-all duration-500 hover:border-[#0d2633]"
                      : "bg-white border border-gray-300 text-[#0d2633]"
                  }`}
                >
                  {step.icon}
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm max-w-[150px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
{/* 
        <section className="mt-32">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white rounded-[32px] p-8 border border-gray-200 relative overflow-hidden">
              <span className="inline-block bg-[#beead1] text-[#274e3d] px-4 py-1 rounded-full text-xs font-bold mb-6">
                AI-POWERED MATCHING
              </span>

              <h3
                className="text-4xl text-[#0d2633] mb-6"
                style={{
                  fontFamily: "'Source Serif 4', serif",
                }}
              >
                Intelligent Lead Distribution
              </h3>

              <p className="text-lg text-gray-600 max-w-2xl mb-8">
                Our Niwas AI engine analyzes buyer behavior,
                preferences and financial capability to ensure
                you only receive leads that are ready to
                transact.
              </p>

              <button className="bg-[#0d2633] text-white px-8 py-3 rounded-xl flex items-center gap-2">
                Learn how it works
                <HiArrowRight />
              </button>

              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-100 rounded-full blur-3xl" />
            </div>

            <div className="md:col-span-4 bg-[#0d2633] rounded-[32px] p-8 text-white relative overflow-hidden">
              <MdTrendingUp
                size={48}
                className="text-[#b1cadb]"
              />

              <h3 className="text-xl font-semibold mt-6">
                Growth Partner
              </h3>

              <p className="text-gray-300 mt-3">
                On average, Niwas AI agents close 3.5x more
                deals than traditional listings.
              </p>

              <div className="mt-16">
                <h2 className="text-6xl font-bold text-[#b1cadb]">
                  350%
                </h2>

                <p className="uppercase tracking-[4px] text-xs mt-3 text-gray-400">
                  Conversion Increase
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>


    </div>
  );
}

function NavItem({ icon, title, active }) {
  return (
    <div
      className={`flex flex-col items-center px-4 py-2 rounded-xl ${
        active
          ? "bg-[#beead1] text-[#274e3d]"
          : "text-gray-500"
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{title}</span>
    </div>
  );
}