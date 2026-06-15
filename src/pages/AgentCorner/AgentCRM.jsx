import React from "react";
import {
  HiOutlineMenu,
  HiOutlineUserCircle,
} from "react-icons/hi";
import {
  MdGroup,
  MdAccountTree,
  MdForum,
  MdSettings,
} from "react-icons/md";

const workflowSteps = [
  {
    id: 1,
    title: "Buyer Intent Scoring",
    description:
      "Predictive algorithms rank leads from Cold to Hot based on browse behavior.",
    active: false,
  },
  {
    id: 2,
    title: "Automated WhatsApp Warmup",
    description:
      "Instant, personalized messages sent the moment a lead shows high interest.",
    active: true,
  },
  {
    id: 3,
    title: "Smart Scheduling",
    description:
      "Property tours scheduled and synced with your calendar automatically.",
    active: false,
  },
];

// console.log('agent')
const AgentCRMWorkflow = () => {
  return (
    <div className="bg-[#0d2633] min-h-screen text-white overflow-x-hidden">


      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        

        <div className="grid lg:grid-cols-2 gap-16 items-center   ">
            <section className=" mb-12  ">
            <div className="flex flex-col">  
                 <p className="text-[#fcc470] text-sm font-bold tracking-[3px] uppercase mb-4">
            Intelligence At Work
          </p>

          <h2
            className="text-4xl md:text-5xl   font-medium leading-tight mb-6"
            style={{
              fontFamily: "'Source Serif 4', serif",
            }}
          >
            AI-Powered Agent CRM Workflow
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-6 ">
            Experience the efficiency of modern property sales.
            Our CRM doesn't just store data; it actively
            qualifies, ranks, and prioritizes your day.
          </p></div>
        
          <section className="space-y-12 py-4   ">
            {workflowSteps.map((step) => (
              <div
                key={step.id}
                className={`flex gap-6 items-start relative ${
                  step.active
                    ? "before:absolute before:left-[-16px] before:top-0 before:h-full before:w-[2px] before:bg-[#fcc470]"
                    : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    step.active
                      ? "bg-[#fcc470] text-[#0d2633]"
                      : "bg-[#57f26c] text-[#0d2633]"
                  }`}
                >
                  {step.id}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </section>

        </section>
        
        

          <section className="relative flex flex-col md:flex-row gap-8 justify-center items-center    ">
            <div className="relative w-64 h-[500px] bg-black rounded-[40px] border-[6px]  border-[#333] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[#1a1c1e] flex flex-col items-center justify-center p-6 text-center">
                <p className="text-xs text-gray-500 mb-8">
                  Lead Overview
                </p>

                <div className="w-full space-y-4">
                  <p className="text-sm">
                    Buyer Intent Score
                  </p>

                  <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#57f26c] w-[92%]" />
                  </div>

                  <p className="text-2xl font-bold">
                    92%
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-72 h-[500px]   md:-mt-12 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmg6AYDihNIEnjU9pWFBjS1RAa4-_HgO2rP-QjVt1nc35cnNN3se857EXGxT5U_1hvhyWd-Mq6xxN6eJUPGfSTC95BBLYNB48BUOv051c47V50nQ_epJ9ek-uN8mphXlPMmVVC5GwV54WOCoUydCp6pw22j2xiTQQh_f3dCEMXu45AAki3oAmimAeieeEuCXwvXl7xZE9w44gqgdHGc5pGb9FDd0ORWGGrdIxi6zlz_qd7xXm0JQ4EfD-nGF9d1TuJixRrzvEgK6s"
                alt="CRM Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        </div>
      </main>

    
    </div>
  );
};

export default AgentCRMWorkflow;