import React from "react";
import { HiOutlineMenu, HiOutlineUserCircle } from "react-icons/hi";
import { MdGroup, MdAccountTree, MdForum, MdSettings } from "react-icons/md";
import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";
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

 
const AgentCRMWorkflow = () => {
  return (
    <div className="bg-[#0d2633] lg:min-h-screen h-full text-white ">
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20   h-full xl:gap-16 items-center    ">
          <section className=" xl:mb-12 ">
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
                Experience the efficiency of modern property sales. Our CRM
                doesn't just store data; it actively qualifies, ranks, and
                prioritizes your day.
              </p>
            </div>

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
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>

                    <p className="text-gray-400 leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </section>

          <section className="relative h-full xl:h-4/5  flex flex-col md:flex-row gap-16 justify-center items-center    ">
            <div className="xl:absolute  lg:left-0 xl:left-0  w-64  min-h-[500px]   h-[500px] rounded-[40px]      shadow-2xl overflow-hidden">
              <div className=" h-full ">
                <img
                  src={mobile1}
                  alt="CRM Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="xl:absolute lg:right-0 xl:right-0 xl:-top-10 min-h-[500px] h-[500px]    rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={mobile2}
                alt="CRM "
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AgentCRMWorkflow;
