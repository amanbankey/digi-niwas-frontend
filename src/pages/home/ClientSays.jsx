import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const testimonials = [
  {
    quote:
      '"DIGINIWAS transformed how we look at luxury properties. The AI matching was surprisingly accurate, saving us months of manual searching."',
    name: "Vikram Singhania",
    role: "CEO, ZENITH CORP",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    quote:
      '"The transparency they bring to the Indian real estate market is revolutionary. Every document was verified, every claim was digital."',
    name: "Ananya Sharma",
    role: "ARCHITECTURAL DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      '"A truly seamless experience for investors. The virtual tours and digital verification gave me the confidence I needed."',
    name: "Rahul Mehta",
    role: "GLOBAL INVESTOR",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];

export default function ClientSays() {
  const navigate = useNavigate()
  return (
    <section className="w-full bg-[#f7f8fa]  px-4 sm:px-0 py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-[#16836E] text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Trusted By Leaders
          </p>

          <h2 className="text-[#02080e] font-serif font-semibold leading-tight text-[32px] sm:text-xl md:text-2xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white  gap-5 rounded-[28px] hover:scale-105 duration-300 transition-all sm:rounded-[32px] p-6 sm:p-7 lg:p-9 shadow-xl"
            >
              {/* <div className="absolute top-0 left-8 w-14 h-14 bg-[#16836E] rounded-full -translate-y-1/2"></div> */}

              <p className="text-[#4F6473] italic leading-[1.8] text-[16px] sm:text-[17px] lg:text-[18px] min-h-[170px] lg:min-h-[190px]">
                {item.quote}
              </p>

              <div className="flex  items-center gap-4 mt-6">
                <div className=" flex items-center justify-between w-full"> 
                  <div className="flex items-center gap-2"> 
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-[#243B53] font-semibold text-sm  sm:text-base">
                    {item.name}
                  </h4>

                  <p className="text-[#6e7780] font-semibold text-[0.7rem] sm:text-xs tracking-[0.11em] uppercase">
                    {item.role}
                  </p>
                </div> </div>
                <div   onClick={() =>
    window.location.href = "https://youtu.be/X2NVOSNBbxU"
  } className="border cursor-pointer border-slate-300 p-2 rounded-full"> <IoPlayOutline className="text-xl text-[#16836E] hover:text-red-500 " /> </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}