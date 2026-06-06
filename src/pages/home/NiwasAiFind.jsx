import { useState, useEffect } from "react";
import { FiHeart, FiChevronRight,FiChevronLeft,  
       FiHome,
    FiVideo, FiArrowRight, FiMessageCircle,  FiCheck,FiTarget,FiTrendingUp, FiUsers,
    FiBarChart2, } from "react-icons/fi";
import { FaBrain, FaRegClock,  FaInstagram, FaFacebook, FaWhatsapp, FaBullhorn } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { RiRobot2Line } from "react-icons/ri";


const bgImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80",
];

const properties = [
  { img: 'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736760/house1_rmtft8.jpg', title: "2BHK Modern Villa", sub: "Ambala City, Haryana", price: "₹28,500" },
  { img: 'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736760/house2_jhd68o.jpg', title: "2BHK Apartment", sub: "Near Delhi Highway", price: "₹26,000" },
  { img: 'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736762/house3_w1avuf.jpg', title: "2BHK Builder Floor", sub: "Ambala Cantt", price: "₹27,000" },
];
const features = [
  { icon: FaBrain, t1: "Understands", t2: "Your Needs" },
  { icon: BiTargetLock, t1: "Smart & Accurate", t2: "Recommendations" },
  { icon: FaRegClock, t1: "Saves Time", t2: "Everytime" },
]

   const featuress = [
        { icon: FiHome, title: "Easy", title2: "Property Listing" },
        { icon: FiVideo, title: "Professional", title2: "Video Shoots" },
        { icon: FaBullhorn, title: "Digital", title2: "Promotion" },
        { icon: FiBarChart2, title: "Maximum", title2: "Visibility" },
      ]


 function PropertyListing() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);
    return (
      <section className="min-h-screen bg-[#274255] text-white px-4 sm:px-8 lg:px-14 py-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-11 h-11 rounded-lg border border-[#2dd4a8]/60 text-[#2dd4a8] flex items-center justify-center text-sm font-semibold">
                05
              </span>
              <span className="text-[#2dd4a8] tracking-[0.2em] text-xs sm:text-sm font-medium">
                LIST YOUR PROPERTY
              </span>
            </div>
  
            <h2 className="text-4xl sm:text-5xl  font-bold leading-[1.05]">
              Property Daalo.
              <br />
              <span className="text-[#2dd4a8]">Reach Badhao.</span>
            </h2>
  
            <p className="text-gray-400 mt-5 max-w-md text-sm sm:text-base leading-relaxed">
              List your property in the easiest way and we'll help you promote it
              digitally to the right audience.
            </p>
  
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-xl">
              {featuress.map((f) => (
                <div
                  key={f.title2}
                  className="rounded-xl border border-[#1f3a3f] bg-[#0d2329]/60 p-3 sm:p-4 flex flex-col items-start gap-2"
                >
                  <div className="w-9 h-9 rounded-md border border-[#2dd4a8]/40 text-[#2dd4a8] flex items-center justify-center">
                    <f.icon size={16} />
                  </div>
                  <div className="text-[11px] sm:text-xs leading-tight">
                    <div>{f.title}</div>
                    <div>{f.title2}</div>
                  </div>
                </div>
              ))}
            </div>
  
            <button className="mt-8 inline-flex items-center gap-3 bg-[#2dd4a8] hover:bg-[#26c099] text-[#062018] font-semibold rounded-full pl-6 pr-2 py-2 transition-colors">
              <span className="text-sm sm:text-base">List Your Property</span>
              <span className="w-8 h-8 rounded-full bg-[#062018] text-[#2dd4a8] flex items-center justify-center">
                <FiArrowRight size={14} />
              </span>
            </button>
          </div>
  
          {/* RIGHT */}
         
         <div  className="relative w-full aspect-square max-w-[640px] mx-auto">
         

            <div> 
               <img
                key={currentImage}
              src={bgImages[currentImage]}
              alt="House"
              className="absolute inset-0 w-full h-full object-cover  rounded-2xl transition-opacity duration-700"
            />
            </div>
  
            {/* Phone mockup (left of house) */}
            <div className="absolute left-2 sm:left-4 top-[65%] sm:top-[55%] -translate-y-1/2 w-[110px] sm:w-[140px] md:w-[160px] rounded-[1.5rem] border-[5px] border-[#0a1418] bg-[#0d1f24] shadow-2xl overflow-hidden">
              <div className="px-2 pt-2 pb-3">
                <div className="flex items-center justify-between text-[8px] text-gray-400 mb-1">
                  <FiChevronLeft size={10} />
                  <span>Add Property</span>
                  <span />
                </div>
                <div className="rounded-lg overflow-hidden mb-2 border border-[#1f3a3f]">
                  <img src={bgImages[currentImage]} alt="" className="w-full h-12 sm:h-16 object-cover" />
                </div>
                <div className="text-[9px] sm:text-[10px] text-[#2dd4a8] font-semibold">
                  Your Property
                </div>
                <div className="text-[8px] sm:text-[9px] text-gray-400">
                  is Live Now!
                </div>
                <div className="mt-2 flex justify-center">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#2dd4a8] text-[#2dd4a8] flex items-center justify-center">
                    <FiCheck size={14} />
                  </span>
                </div>
              </div>
            </div>
  
            {/* Social Media bubble - top center */}
            <div className="absolute left-1/3 -translate-x-1/2 top-3 sm:top-20 rounded-2xl border border-[#1f3a3f] bg-[#0a1a1f]/90 backdrop-blur px-3 py-2 sm:px-4 sm:py-3 w-[150px] sm:w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full border border-[#2dd4a8] text-[#2dd4a8] flex items-center justify-center">
                  <FiMessageCircle size={16} />
                </span>
                <span className="text-[0.7rem] sm:text-xs font-medium">
                  Social Media
                  <br />
                  Exposure
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 justify-start">
                <span onClick={() =>
                    window.open(
                      "https://www.instagram.com/",
                      "_blank"
                    )
                  } className="w-6 h-6 cursor-pointer sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white">
                  <FaInstagram size={16} />
                </span>
                <span onClick={() =>
                    window.open(
                      "https://www.facebook.com/",
                      "_blank"
                    )
                  } className="w-6 h-6  cursor-pointer sm:w-7 sm:h-7 rounded-full bg-[#1877f2] flex items-center justify-center text-white">
                  <FaFacebook size={16} />
                </span>
                <span onClick={() =>
                        window.open(
                          "https://web.whatsapp.com/",
                          "_blank"
                        )
                      } className="w-6 h-6 cursor-pointer sm:w-7 sm:h-7 rounded-full bg-[#25d366] flex items-center justify-center text-white">
                  <FaWhatsapp size={16} />
                </span>
              </div>
            </div>
  
            {/* Targeted Promotion - top right */}
            <div className="absolute right-2 sm:right-24 top-[20%] rounded-xl border border-[#1f3a3f] bg-[#0a1a1f]/90 backdrop-blur px-5 py-3  flex items-center gap-2">
              <span className="w-6 h-6 rounded-full border border-[#2dd4a8] text-[#2dd4a8] flex items-center justify-center">
                <FiTarget size={16} />
              </span>
              <span className="text-[10px] sm:text-xs leading-tight">
                Targeted
                <br />
                Promotion
              </span>
            </div>
  
            {/* More Views - middle right */}
            <div className="absolute right-2 sm:right-10 top-[45%] rounded-xl border border-[#1f3a3f] bg-[#0a1a1f]/90 backdrop-blur px-5 py-3  flex items-center gap-2">
              <span className="w-6 h-6 text-[#2dd4a8] flex items-center justify-center">
                <FiTrendingUp size={20} />
              </span>
              <span className="text-[10px] sm:text-xs leading-tight">
                More Views
                <br />
                More Leads
              </span>
            </div>
  
            {/* Right Audience - bottom right */}
            <div className="absolute right-2 sm:right-4 top-[68%] rounded-xl border border-[#1f3a3f] bg-[#0a1a1f]/90 backdrop-blur px-5 py-3 flex items-center gap-2">
              <span className="w-6 h-6 text-[#2dd4a8] flex items-center justify-center">
                <FiUsers size={20} />
              </span>
              <span className="text-[10px] sm:text-xs leading-tight">
                Right Audience
                <br />
                Right Reach
              </span>
            </div>
          </div>
     
        </div>
      </section>
    );
  }
export default function NiwasAIFinds() {
    return (
      <section className="bg-[#274255] text-white px-4 sm:px-8 lg:px-14 py-10 ">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05]">
              Niwas AI Finds
              <br />
              <span className="text-[#2dd4a8]">What You Need.</span>
            </h2>
            <p className="text-gray-400 mt-5 max-w-md text-sm sm:text-base leading-relaxed">
              Smart AI that understands your needs and shows the best property
              options in seconds.
            </p>
            <div className="flex flex-wrap gap-5 sm:gap-8 mt-8">
              {features.map((f) => (
                <div key={f.t2} className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full border border-[#2dd4a8]/50 text-[#2dd4a8] flex items-center justify-center">
                    <f.icon size={18} />
                  </span>
                  <div className="text-xs sm:text-sm leading-tight">
                    <div>{f.t1}</div>
                    <div>{f.t2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT - chat card */}
          <div className="relative">
            <div className="relative rounded-2xl border border-[#1f3a3f] bg-[#0d2329]/60 backdrop-blur p-4 sm:p-5">
              {/* avatar top right */}
              <div className="absolute -top-5 right-6 sm:right-10 flex items-center gap-2 rounded-full bg-[#0d2329] border border-[#1f3a3f] pl-3 pr-1 py-1">
                <span className="text-[10px] sm:text-xs text-gray-300">under ₹30k near schools</span>
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center text-[10px] font-bold">
                  U
                </span>
              </div>
              {/* AI bubble */}
              <div className="flex items-start gap-3 mb-4 mt-2">
                <span className="w-10 h-10 rounded-full border border-[#2dd4a8]/60 text-[#2dd4a8] flex items-center justify-center shrink-0">
                  <RiRobot2Line size={20} />
                </span>
                <div className="rounded-xl border border-[#1f3a3f] bg-[#0a1a1f]/80 px-4 py-2 text-xs sm:text-sm text-gray-200 max-w-xs">
                  Sure! Here are some best 2BHK properties in Ambala near schools under ₹30k
                </div>
              </div>
              {/* property cards */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {properties.map((p) => (
                    <div key={p.title} className="rounded-xl border border-[#1f3a3f] bg-[#0a1a1f]/80 overflow-hidden">
                      <div className="relative">
                        <img src={p.img} alt={p.title} loading="lazy" className="w-full h-20 sm:h-28 object-cover" />
                        <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center">
                          <FiHeart size={12} />
                        </span>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-[11px] sm:text-sm font-semibold leading-tight">{p.title}</div>
                        <div className="text-[9px] sm:text-[11px] text-gray-400 mt-0.5">{p.sub}</div>
                        <div className="text-[10px] sm:text-xs text-[#2dd4a8] font-semibold mt-1.5">
                          {p.price} <span className="text-gray-500 font-normal">/ month</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* arrow */}
                <button className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#2dd4a8]/50 bg-[#0a1a1f] text-[#2dd4a8] flex items-center justify-center">
                  <FiChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <PropertyListing />

      </section>
    );
  }