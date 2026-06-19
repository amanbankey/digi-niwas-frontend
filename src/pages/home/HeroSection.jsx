import { useState, useEffect } from "react";
import { FiSearch, FiArrowRight, FiMapPin } from "react-icons/fi";
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
import { FaHouseCircleCheck } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { IoSearch, IoLocationSharp, IoLocationOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { LuFileSpreadsheet } from "react-icons/lu";
import back from "../../assets/images/back.png";
import niwas from "../../assets/images/niwas.png";
import dashboard from "../../assets/images/dashboard.png";
import property from "../../assets/images/property.png";
import { TbHomeSignal } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { FaApple } from "react-icons/fa"
import { IoLogoGooglePlaystore } from "react-icons/io5";

const bgImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80",
];

export default function HeroSection() {
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

  console.log("bg", bgImages);
  return (
    <div className="sm:min-h-screen h-full font-sans bg-[#0d1b2a] text-white">
      {/* <Navbar /> */}
      <Hero currentBg={currentBg} fade={fade} />
    </div>
  );
}

function Hero({ currentBg, fade }) {
  return (
    <section className="relative sm:min-h-screen overflow-hidden py-5 sm:py-0 px-5">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          opacity: fade ? 1 : 0,
        }}
      />
      <div className="absolute inset-0 bg-[#274255] " />
      <div className=" ">
        <div className="relative z-10 flex flex-col  sm:py-10  ">
          <div className="flex-1 flex flex-col  lg:flex-row items-center lg:items-end justify-between px-4 sm:px-6 lg:px-10 xl:px-14 pt-8 sm:pt-12 lg:pt-16 pb-6 gap-8 lg:gap-4">
            <LeftContent />
            <RightPhones />
          </div>
          <div className="flex flex-row justify-center px-4 sm:px-6 lg:px-10 xl:px-14 ">
            <StatsBar />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeftContent() {

  const [btn, setBtn] = useState('search')
  
  return (
    <div className="flex-1  max-w-full lg:max-w-[50%] xl:max-w-[45%] text-center lg:text-left ">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4 sm:mb-6">
        <MdLocationOn className="text-[#00d9a6] text-sm" />
        <span className="text-white text-xs sm:text-sm font-medium">
          Apna Sheher. Apna Platform.
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black leading-tight mb-4 sm:mb-6">
        <span className="text-[#33cc99]">Ghar</span>
        <span className="text-white"> ki Talaash bhi,</span>
        <br />
        <span className="text-[#33cc99]">Vishwas</span>
        <span className="text-white"> bhi.</span>
      </h1>

      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
        Buy, Rent, Sell ya Lease — DigiNiwas aur Niwas AI ke saath property
        dhoondhna ab hua simple.
      </p>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
        <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-white/20 transition-all text-sm sm:text-base">
          Explore Properties <FiArrowRight />
        </button>
        <button className="flex items-center gap-2 bg-[#33cc99] text-[#0d1b2a] font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-[#33cc99] transition-all text-sm sm:text-base">
          Try Niwas AI <HiSparkles />
        </button>
      </div>

      {/* <div className="w-full max-w-2xl mx-auto lg:mx-0 border border-white/30 bg-[#274255] rounded-xl p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0  ">
        <div className="relative flex-1">
          <IoLocationOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#33cc99] text-lg" />
          <input
            type="text"
            placeholder="Enter location"
            className="w-full bg-transparent pl-10 pr-3 py-3 text-white placeholder:text-white/60 outline-none"
          />
        </div>

        <div className="hidden sm:block h-8 w-px bg-white/20" />

        <div className="relative sm:min-w-[180px]">
          <FaHouseCircleCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-[#33cc99] text-lg" />
          <select className="w-full bg-transparent pl-10 pr-4 py-3 text-white outline-none appearance-none cursor-pointer">
            <option className="text-black">Property Type</option>
            <option className="text-black">Apartment</option>
            <option className="text-black">Villa</option>
            <option className="text-black">Commercial</option>
          </select>
        </div>

        <button className="bg-[#33cc99]  hover:bg-[#33cc99] transition-all px-5 py-3 
        rounded-lg flex items-center justify-center gap-2  text-[#0d1b2a] font-semibold whitespace-nowrap">
          <IoSearch className="text-lg" />
          Search
        </button>
      </div> */}
      <div className="w-full max-w-5xl mx-auto lg:mx-0 bg-[#274255] border border-white/20 rounded-2xl overflow-hidden shadow-lg">
        <div className="flex flex-col xl:flex-row items-stretch sm:items-center gap-0 sm:gap-2  ite">
          <div className="px-2 pt-5 pb-4   ite">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Find Your Perfect Property
            </h2>

            <p className="text-white/70 text-sm md:text-base mt-2">
              Search, Buy, Rent, Lease – Your Next Move Starts Here
            </p>
          </div>

          <div className="px-3 xl:pt-4 pb-4">
            <div className="flex  flex-row w-full justify-evenly  rounded-xl overflow-hidden border border-white/20  ">
              <button onClick={() => {setBtn('search')}} className={`text-white px-4 py-3  ${ btn === 'search' ? 'bg-[#33cc99]' : 'bg-[#274255]' }   font-semibold flex items-center justify-center gap-2`}>
                <IoSearch />
               Search
              </button>

              <button onClick={() => {setBtn('rent')}} className={`text-white px-4 py-3  ${ btn === 'rent' ? 'bg-[#33cc99]' : 'bg-[#274255]' }   font-semibold flex items-center justify-center gap-2`}>
                <LuFileSpreadsheet /> Rent
              </button>

              <button onClick={() => {setBtn('lease')}} className={`text-white px-4 py-3  ${ btn === 'lease' ? 'bg-[#33cc99]' : 'bg-[#274255]' }   font-semibold flex items-center justify-center gap-2`}>
                <TbHomeSignal />
                Lease
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10"></div>

        <div className="p-5">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            <div className="flex-1 relative">
              <IoLocationOutline className="absolute left-0 top-1 text-[#33cc99] text-2xl" />

              <div className="pl-10">
                <p className="text-white text-left font-medium">
                  Enter Location
                </p>

                <input
                  type="text"
                  placeholder="e.g., Ambala, Haryana"
                  className="w-full bg-transparent text-white/70 placeholder:text-white/50 outline-none mt-1"
                />
              </div>
            </div>

            <div className="hidden lg:block h-14 w-px bg-white/20"></div>

            <div className="flex-1 relative">
              <FaHouseCircleCheck className="absolute left-0 top-1 text-[#33cc99] text-2xl" />

              <div className="pl-10">
                <p className="text-white text-left font-medium">
                  Property Type
                </p>

                <select className="w-full bg-transparent text-white/70 outline-none appearance-none cursor-pointer mt-1">
                  <option className="text-black">
                    House, Flat, Commercial
                  </option>
                  <option className="text-black">House</option>
                  <option className="text-black">Flat</option>
                  <option className="text-black">Commercial</option>
                </select>
              </div>
            </div>

            <button className="bg-[#33cc99] hover:bg-[#2fc18f] transition-all px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold whitespace-nowrap">
              <IoSearch className="text-lg text-white" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightPhones() {
  return (
    <div className="flex-1 hidden md:flex flex-col items-center lg:items-end  w-full lg:max-w-[55%] mt-8 lg:mt-0 ">
      {/* <div className="flex items-end justify-center gap-2 w-full">
        <PhoneNiwasAI />
        <PhonePropertyDetails />
        <PhoneDashboard />
      </div> */}

      <div className=" relative flex items-end justify-center w-full  max-w-5xl mx-auto h-full  sm:h-[340px] md:h-[420px] lg:h-[500px]">
        <div
          className="
    absolute
    left-[5%]
    sm:left-[8%]
    md:left-[20%]
    lg:left-[12%]
    bottom-0
    z-20
    w-32
    sm:w-40
    md:w-56
    lg:w-60
    xl:w-72
    -rotate-6
     hover:scale-110
     hover:rotate-0
      transition-all
    duration-500
    ease-out
    drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] [transform:perspective(700px)_rotateY(-20deg)]
       hover:[transform:perspective(700px)_rotateY(0deg)]
  "
        >
          <img
            src={
              "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736766/niwas_jzpp87.png"
            }
            alt="Niwas AI"
            className="w-full h-auto rounded-[24px]"
          />
        </div>

        <div
          className="
    absolute
    left-[40%]
    md:left-[42%]
    -translate-x-1/2
    bottom-10    z-10
    w-36
    sm:w-44
    md:w-48
    lg:w-52
    xl:w-64
    rotate-[3deg]
     hover:scale-105
     hover:rotate-0
      transition-all
    duration-500
    ease-out
    drop-shadow-[0_35px_70px_rgba(0,0,0,0.4)] [transform:perspective(1200px)_rotateY(25deg)]
    hover:[transform:perspective(1200px)_rotateY(0deg)]
  "
        >
          <img
            src={
              "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736767/property_apkuj7.png"
            }
            alt="Property Details"
            className="w-full h-auto rounded-[28px]"
          />
        </div>

        <div
          className="
    absolute
    right-[5%]
    sm:right-[8%]
    md:right-[22%]
    lg:right-[6%]
    bottom-20
    z-0
    w-32
    sm:w-40
    md:w-40
    lg:w-44
    xl:w-56
    rotate-[10deg]
    hover:scale-105
     hover:rotate-0
      transition-all
    duration-500
    ease-out
    drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] [transform:perspective(700px)_rotateY(25deg)]
    hover:[transform:perspective(1200px)_rotateY(0deg)]
  "
        >
          <img
            src={
              "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736761/dashboard_t6ocdx.png"
            }
            alt="Dashboard"
            className="w-full h-auto rounded-[24px]"
          />
        </div>
      </div>
      <div className="flex gap-3">
          <button
          id="download-app-btn"
          className="border border-white px-3 py-2 rounded-xl"
        >
          Get it on 
        <div class="text-lg flex items-center gap-2">  <IoLogoGooglePlaystore className="text-2xl"/>Play Store</div>
        </button>
        <button
          id="download-app-btn"
          className="border border-white px-3 py-2 rounded-xl"
        >
          Download on the
        <div class="text-lg flex items-center gap-2"> <FaApple  className="text-2xl" />  App Store</div>
        </button>
      </div>
    </div>
  );
}

function PhoneNiwasAI() {
  return (
    <div className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44  rounded-2xl sm:rounded-3xl  overflow-hidden shadow-2xl flex-shrink-0 self-end mb-4 sm:mb-6">
      <img src={niwas} className="" />
    </div>
  );
}

function PhonePropertyDetails() {
  return (
    <div className="w-28 sm:w-36 md:w-40 lg:w-44 xl:w-48  rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 z-10">
      <img src={property} className="" />
    </div>
  );
}

function PhoneDashboard() {
  return (
    <div className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44  rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 self-end mb-4 sm:mb-6">
      <img src={dashboard} className="" />
    </div>
  );
}

function StatsBar() {
  return (
    <div className="mb-0 sm:mb-8     py-4  flex  flex-col lg:flex-row w-full items-center gap-4 lg:items-stretch md:justify-between ">
      <div className="bg-white/80 w-full sm:w-[60%] lg:w-[45%]   rounded-3xl px-2 py-3 lg:py-0  gap-5 items-center grid grid-cols-2 sm:grid-cols-4  ">
        {[
          {
            icon: <MdPerson className="text-[#0d1b2a] text-xl sm:text-2xl" />,
            num: "150+",
            label: "Verified Agents",
          },
          {
            icon: <MdHome className="text-[#0d1b2a] text-xl sm:text-2xl" />,
            num: "500+",
            label: "Properties Listed",
          },
          {
            icon: <MdGroups className="text-[#0d1b2a] text-xl sm:text-2xl" />,
            num: "1000+",
            label: "Happy Customers",
          },
          {
            icon: (
              <MdLocationOn className="text-[#0d1b2a] text-xl sm:text-2xl" />
            ),
            num: "25+",
            label: "Localities Covered",
          },
        ].map(({ icon, num, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 space-x-3  ">
            <div> {icon}</div>

            <div className="flex flex-col items-center">
              <p className="text-[#0d1b2a]  font-black text-sm sm:text-lg lg:text-xl leading-tight">
                {num}
              </p>
              <p className="text-gray-500 text-center text-xs font-medium leading-tight">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2  gap-2 sm:gap-3 w-full   sm:max-w-sm lg:max-w-md  ">
        {[
          {
            icon: <MdSmartToy className="text-[#00d9a6] text-xl" />,
            title: "AI Powered",
            sub: "Search",
          },
          {
            icon: <MdGroups className="text-[#00d9a6] text-xl" />,
            title: "150+",
            sub: "Verified Agents",
          },
          {
            icon: <MdApartment className="text-[#00d9a6] text-xl" />,
            title: "500+",
            sub: "Properties Listed",
          },
          {
            icon: <MdCheckCircle className="text-[#00d9a6] text-xl" />,
            title: "100%",
            sub: "Genuine Leads",
          },
        ].map(({ icon, title, sub }) => (
          <div
            key={title + sub}
            onClick={() =>
              document.getElementById("download-app-btn")?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })
            }
            className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm border
                        border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 cursor-pointer
                        transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            {icon}
            <div className="">
              <div className="text-[#0d1b2a] font-medium  text-xs sm:text-sm">
                {title}
              </div>
              <div className="text-[#0d1b2a] font-medium text-xs">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
