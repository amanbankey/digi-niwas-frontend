import React from "react";

const testimonials = [
  {
    name: "Vikram Singh",
    company: "LUDHIANA LUXURY ESTATES",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7y05-0B-r5jIejyFwqDlFNzr-e5bXk8d_oUUewyLbvy5orJhAvGFD_pZsCa_ufe-GRBzaxenMlkquNGSesSFPUiO-XhkolrQkaPr_szXNTwEbsK5M4moNSFtOM4zFWmwlErTJO6OTIMxbLcTNw785N_ewytEhlLx0rqfSdqE60rIxtWo_phuYUWbSVeH3t_DRACDaYWgCg3fV5OPqGOtWcHATaMdjn0ODuu6DenEQFTvwwUpXt2eP-9XB42jze4VouoxW4ZhEMsk",
    review:
      "Niwas AI didn't just give me leads; it gave me the intelligence to close the right ones. My transaction volume doubled in six months.",
  },
  {
    name: "Simran Kaur",
    company: "ELITE PROPERTIES MOHALI",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8ET69rdEHu547i_Dwv4zoLf9pNwHBSkyGxFAdvyotSfWref7YYadQ4fmKLx0i70bn2pZnux1Mf5JfRL9DjyGl1D9oGlKiCVOyTwbfSWayNUMeZ9H83HWlSJZhbIaaaZylSWsVaYm7gGX9yUrpQO2pwN7SghpbGVUgSlPtlBDob0sYQazKSZzCYw8D2hTSzPfHvg7rR2EAEJwz8FACUBRDzY-SMxsYRu_7Aop0WiJWm77U_Iyln5yripXAVolmnR_NuSsgj7KHgUg",
    review:
      "The CRM workflow is a game-changer. I can manage 50+ high-value prospects effortlessly with the AI assistance.",
  },
];

const NetworkSection = () => {
  return (
    <section className="bg-[#f8fafb] py-24 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="block text-[#3f6653] uppercase tracking-[0.2em] text-xs font-bold">
            THE NETWORK
          </span>

          <h2
            className="max-w-2xl mx-auto text-[#001019] text-4xl md:text-5xl font-semibold"
            style={{
              fontFamily: "'Source Serif 4', serif",
            }}
          >
            Voices of Punjab's Top Agents
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#c3c7cb] p-10 md:p-14 rounded-[40px] shadow-[0_24px_48px_rgba(13,38,51,0.08)] flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-28 h-28 mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-[#beead1] p-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <blockquote className="mb-10">
                <p
                  className="italic text-[#42474b] font-medium leading-relaxed text-lg md:text-2xl"
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                  }}
                >
                  "{item.review}"
                </p>
              </blockquote>

              <div className="space-y-1">
                <p className="text-[#001019] font-bold text-xl">
                  {item.name}
                </p>

                <p className="text-[#73787c] uppercase tracking-wider text-xs">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;