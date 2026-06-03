import { useState, useEffect } from "react";
import {
  FiSearch,
  FiArrowRight,
  FiMapPin,
} from "react-icons/fi";
import {
  MdVerified,
  MdLocationOn,
  MdHome,
  MdSearch,
  MdFavorite,
  MdPerson,
  MdSmartToy,
  MdGroups,
  MdApartment,
  MdCheckCircle,
} from "react-icons/md";
import {
  RiShieldCheckLine,
  RiMedalLine,
  RiBrainLine,
  RiBuilding2Line,
} from "react-icons/ri";
import { HiSparkles } from "react-icons/hi2";

const bgImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80",
];

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % bgImages.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#0d1b2a] text-white">
      {/* <Navbar /> */}
      <Hero currentBg={currentBg} fade={fade} />
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#0d1b2a] rounded flex items-center justify-center">
          <span className="text-[#00d9a6] text-xs font-bold">D</span>
        </div>
        <span className="text-[#0d1b2a] font-black text-base sm:text-lg tracking-wide uppercase">
          DIGINIWAS
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#0d1b2a]">
        <a href="#" className="border-b-2 border-[#00d9a6] pb-0.5 text-[#0d1b2a]">HOME</a>
        <a href="#" className="hover:text-[#00d9a6] transition-colors">EXPLORE PROPERTIES</a>
        <a href="#" className="hover:text-[#00d9a6] transition-colors">NIWAS AI</a>
        <a href="#" className="hover:text-[#00d9a6] transition-colors">AGENT CORNER</a>
        <a href="#" className="hover:text-[#00d9a6] transition-colors">ABOUT US</a>
      </div>

      <div className="hidden lg:flex items-center gap-3">
        <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 bg-gray-50">
          <FiSearch className="text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search locations, society, etc..."
            className="text-xs text-gray-500 bg-transparent outline-none w-36 xl:w-48"
          />
        </div>
        <button className="bg-[#0d1b2a] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#1a2f47] transition-colors">
          Get Started
        </button>
      </div>

      <button
        className="lg:hidden text-[#0d1b2a] text-xl p-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col gap-3 text-sm font-medium text-[#0d1b2a] lg:hidden z-50">
          {["HOME", "EXPLORE PROPERTIES", "NIWAS AI", "AGENT CORNER", "ABOUT US"].map((item) => (
            <a key={item} href="#" className="hover:text-[#00d9a6] transition-colors py-1 border-b border-gray-100">
              {item}
            </a>
          ))}
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2 bg-gray-50 mt-2">
            <FiSearch className="text-gray-400 text-sm" />
            <input type="text" placeholder="Search..." className="text-xs text-gray-500 bg-transparent outline-none flex-1" />
          </div>
          <button className="bg-[#0d1b2a] text-white text-xs font-semibold px-4 py-2 rounded-full w-full mt-1">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero({ currentBg, fade }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          opacity: fade ? 1 : 0,
        }}
      />
      <div className="absolute inset-0 bg-[#0d1b2a]/70" />

      <div className="relative z-10 flex flex-col min-h-screen pt-16 sm:pt-20">
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14 pt-8 sm:pt-12 lg:pt-16 pb-6 gap-8 lg:gap-4">
          <LeftContent />
          <RightPhones />
        </div>

       
      </div>
    </section>
  );
}

function LeftContent() {
  return (
    <div className="flex-1 max-w-full lg:max-w-[50%] xl:max-w-[45%] text-center lg:text-left">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4 sm:mb-6">
        <MdLocationOn className="text-[#00d9a6] text-sm" />
        <span className="text-white text-xs sm:text-sm font-medium">Apna Sheher. Apna Platform.</span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-4 sm:mb-6">
        <span className="text-[#00d9a6]">Ghar</span>
        <span className="text-white"> ki Talaash bhi,</span>
        <br />
        <span className="text-[#00d9a6]">Vishwas</span>
        <span className="text-white"> bhi.</span>
      </h1>

      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
        Buy, Rent, Sell ya Lease — DigiNiwas aur Niwas AI ke saath property dhoondhna ab hua simple.
      </p>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
        <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-white/20 transition-all text-sm sm:text-base">
          Explore Properties <FiArrowRight />
        </button>
        <button className="flex items-center gap-2 bg-[#00d9a6] text-[#0d1b2a] font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-[#00c49a] transition-all text-sm sm:text-base">
          Try Niwas AI <HiSparkles />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto lg:mx-0">
        {[
          { icon: <RiShieldCheckLine />, label: "Verified Agents" },
          { icon: <RiMedalLine />, label: "Genuine Listings" },
          { icon: <MdLocationOn />, label: "Local Experts" },
          { icon: <RiBrainLine />, label: "AI Assisted Search" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <div className="text-[#00d9a6] text-xl sm:text-2xl">{icon}</div>
            <span className="text-white/80 text-xs font-medium text-center leading-tight">{label}</span>
          </div>
        ))}
      </div>
         <StatsBar />  
    </div>
  );
}

function RightPhones() {
  return (
    <div className="flex-1 flex flex-col items-center lg:items-end gap-4 w-full lg:max-w-[55%] border-2 border-white ">
      <div className="flex items-end justify-center gap-2 sm:gap-3 lg:gap-4 w-full">
        <PhoneNiwasAI />
        <PhonePropertyDetails />
        <PhoneDashboard />
      </div>

      <div className="grid grid-cols-2  gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm lg:max-w-md border-2 border-white ">
        {[
          { icon: <MdSmartToy className="text-[#00d9a6] text-xl" />, title: "AI Powered", sub: "Search" },
          { icon: <MdGroups className="text-[#00d9a6] text-xl" />, title: "150+", sub: "Verified Agents" },
          { icon: <MdApartment className="text-[#00d9a6] text-xl" />, title: "500+", sub: "Properties Listed" },
          { icon: <MdCheckCircle className="text-[#00d9a6] text-xl" />, title: "100%", sub: "Genuine Leads" },
        ].map(({ icon, title, sub }) => (
          <div key={title + sub} className="flex items-center gap-2 sm:gap-3 bg-white backdrop-blur-sm border 
          border-white/20 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
            {icon}
            <div className="">
              <div className="text-[#0d1b2a] font-medium  text-xs sm:text-sm">{title}</div>
              <div className="text-[#0d1b2a] font-medium text-xs">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneNiwasAI() {
  return (
    <div className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44 bg-[#0d1b2a] rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden shadow-2xl flex-shrink-0 self-end mb-4 sm:mb-6">
      <div className="bg-[#1a2f47] px-2 py-1.5 sm:px-3 sm:py-2 flex items-center justify-between border-b border-white/10">
        <span className="text-white text-xs font-semibold">Niwas AI</span>
        <HiSparkles className="text-[#00d9a6] text-xs sm:text-sm" />
      </div>
      <div className="p-2 sm:p-3 space-y-2">
        <div className="bg-white/10 rounded-lg rounded-tl-none p-1.5 sm:p-2">
          <p className="text-white/80 text-[8px] sm:text-xs">Aap kya dhoondh rahe hain?</p>
        </div>
        <div className="bg-[#00d9a6] rounded-lg rounded-tr-none p-1.5 sm:p-2 ml-3 sm:ml-4">
          <p className="text-[#0d1b2a] text-[8px] sm:text-xs font-medium">2BHK in Ambala under ₹30k near schools</p>
          <p className="text-[#0d1b2a]/60 text-[7px] sm:text-[10px] text-right mt-0.5">10:20 AM</p>
        </div>
        <div className="bg-white/10 rounded-lg rounded-tl-none p-1.5 sm:p-2">
          <p className="text-white/80 text-[8px] sm:text-xs">Great! Maine aapke liye 12 verified properties dhoondhi hain.</p>
          <p className="text-white/40 text-[7px] sm:text-[10px] mt-0.5">10:21 AM</p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/10">
          <div className="bg-[#1a2f47] h-12 sm:h-16 flex items-center justify-center">
            <MdApartment className="text-[#00d9a6] text-2xl sm:text-3xl" />
          </div>
          <div className="bg-[#1a2f47] p-1.5 sm:p-2">
            <div className="flex items-center gap-1 mb-1">
              <span className="bg-[#00d9a6] text-[#0d1b2a] text-[7px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full">Verified</span>
            </div>
            <p className="text-white text-[8px] sm:text-xs font-semibold">₹28,000/month</p>
            <p className="text-white/60 text-[7px] sm:text-[10px]">2 BHK Apartment</p>
            <p className="text-white/50 text-[7px] sm:text-[10px] flex items-center gap-0.5">
              <MdLocationOn className="text-[#00d9a6] text-xs" />Sector 9, Ambala City
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-1 text-white/50 text-[7px] sm:text-[9px]">
              <span>2 Beds</span>
              <span>2 Baths</span>
              <span>1100 Sq.ft</span>
            </div>
            <button className="w-full mt-1.5 bg-[#0d1b2a] border border-[#00d9a6] text-[#00d9a6] text-[7px] sm:text-[10px] font-semibold py-1 rounded-lg">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1a2f47] px-2 py-1.5 flex items-center justify-around border-t border-white/10">
        {[MdHome, MdSearch, MdSmartToy, MdFavorite, MdPerson].map((Icon, i) => (
          <Icon key={i} className={`text-sm sm:text-base ${i === 2 ? "text-[#00d9a6]" : "text-white/40"}`} />
        ))}
      </div>
    </div>
  );
}

function PhonePropertyDetails() {
  return (
    <div className="w-28 sm:w-36 md:w-40 lg:w-44 xl:w-48 bg-[#0d1b2a] rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden shadow-2xl flex-shrink-0 z-10">
      <div className="bg-[#1a2f47] px-2 py-1.5 sm:px-3 sm:py-2 flex items-center justify-between border-b border-white/10">
        <span className="text-white text-xs font-semibold">Property Details</span>
        <MdFavorite className="text-white/40 text-sm" />
      </div>
      <div className="bg-[#1a2f47] h-20 sm:h-28 flex items-center justify-center relative">
        <RiBuilding2Line className="text-[#00d9a6] text-4xl sm:text-5xl opacity-60" />
        <span className="absolute top-2 right-2 bg-[#00d9a6] text-[#0d1b2a] text-[7px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded">3+1</span>
      </div>
      <div className="p-2 sm:p-3">
        <h3 className="text-white font-bold text-xs sm:text-sm">Modern 3BHK Villa</h3>
        <p className="text-white/50 text-[8px] sm:text-xs flex items-center gap-0.5 mt-0.5">
          <MdLocationOn className="text-[#00d9a6] text-xs" />Ambala City, Haryana
        </p>
        <p className="text-[#00d9a6] font-bold text-sm sm:text-base mt-1">₹65,00,000 <span className="text-white/40 text-[8px] sm:text-[10px] font-normal">EMI</span></p>
        <div className="flex items-center gap-1 mt-1.5">
          <MdVerified className="text-[#00d9a6] text-xs sm:text-sm" />
          <span className="text-white/70 text-[8px] sm:text-xs">Verified Agent</span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[#00d9a6] text-[8px] sm:text-xs font-bold">4.8</span>
          <span className="text-white/40 text-[7px] sm:text-[10px]">(20 reviews)</span>
        </div>
        <div className="grid grid-cols-4 gap-1 my-2 sm:my-3">
          {["3 Beds", "2 Bath", "3 Balc", "1900 Sqft"].map((s) => (
            <div key={s} className="bg-white/10 rounded p-1 text-center">
              <p className="text-white text-[6px] sm:text-[8px] leading-tight">{s}</p>
            </div>
          ))}
        </div>
        <button className="w-full bg-[#0d1b2a] border border-[#00d9a6] text-[#00d9a6] text-[8px] sm:text-xs font-semibold py-1.5 rounded-xl">
          Contact Agent
        </button>
      </div>
    </div>
  );
}

function PhoneDashboard() {
  return (
    <div className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44 bg-[#0d1b2a] rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden shadow-2xl flex-shrink-0 self-end mb-4 sm:mb-6">
      <div className="bg-[#1a2f47] px-2 py-1.5 sm:px-3 sm:py-2 border-b border-white/10">
        <span className="text-white text-xs font-semibold">Dashboard</span>
      </div>
      <div className="p-2 sm:p-3 space-y-1.5 sm:space-y-2">
        {[
          { label: "Today's Leads", val: "24" },
          { label: "New Enquiries", val: "8" },
          { label: "Response Rate", val: "92%" },
        ].map(({ label, val }) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-white/60 text-[8px] sm:text-[10px]">{label}</span>
            <span className="text-white font-bold text-[8px] sm:text-xs">{val}</span>
          </div>
        ))}
        <div className="border-t border-white/10 pt-1.5 sm:pt-2">
          <p className="text-white/50 text-[7px] sm:text-[9px] mb-1.5">Recent Leads</p>
          {[
            { name: "Rohit Sharma", detail: "2 BHK in Ambala" },
            { name: "Neha Verma", detail: "3 BHK for Rent" },
            { name: "Amit Kumar", detail: "Shop for Lease" },
          ].map(({ name, detail }) => (
            <div key={name} className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00d9a6]/30 flex items-center justify-center flex-shrink-0">
                <MdPerson className="text-[#00d9a6] text-xs" />
              </div>
              <div>
                <p className="text-white text-[7px] sm:text-[10px] font-medium leading-tight">{name}</p>
                <p className="text-white/40 text-[6px] sm:text-[8px] leading-tight">{detail}</p>
              </div>
            </div>
          ))}
          <button className="w-full text-[#00d9a6] text-[7px] sm:text-[9px] font-medium mt-1 hover:underline">
            View All Leads
          </button>
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="mx-4 mb-6 sm:mb-8 mt-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {[
          { icon: <MdPerson className="text-[#0d1b2a] text-xl sm:text-2xl" />, num: "150+", label: "Verified Agents" },
          { icon: <MdHome className="text-[#0d1b2a] text-xl sm:text-2xl" />, num: "500+", label: "Properties Listed" },
          { icon: <MdGroups className="text-[#0d1b2a] text-xl sm:text-2xl" />, num: "1000+", label: "Happy Customers" },
          { icon: <MdLocationOn className="text-[#0d1b2a] text-xl sm:text-2xl" />, num: "25+", label: "Localities Covered" },
        ].map(({ icon, num, label }) => (
          <div key={label} className="flex flex-col items-center   ">
            <div>  {icon}</div>
           
            <div className="flex flex-col items-center">
              <p className="text-[#0d1b2a] font-black text-base sm:text-xl leading-tight">{num}</p>
              <p className="text-gray-500 text-xs leading-tight">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}