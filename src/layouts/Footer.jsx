import React from 'react'
import { BsStars, BsTwitterX, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const footerLinks = {
    Links: ["The Collection", "Agent Portal", "Intelligence", "Privacy", "Terms","Contact" ],
    Company: ["About us", "Careers", "Blog", "Press", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Compliance"],
    // Resources: ["Help Center", "Documentation", "Community", "Webinars", "Partners"],
  };

const Footer = () => {
  return (
    <footer className="bg-[#274255] text-gray-400 px-8 sm:px-8 md:px-12 lg:px-16 pt-12 pb-6">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col sm:flex-row justify-between gap-20 mb-10 ">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 w-full sm:w-60  ">
            <div className=' w-full '> 

             <NavLink to="/" className="flex-shrink-0 flex items-center text-black duration-200">
            
              <div className="flex items-center gap-1 justify-center  "> 
                 <img
                   src={' https://res.cloudinary.com/dhuabv2it/image/upload/v1780739847/DIGINIWAS_FINAL_page-2-removebg-preview_o3fesd.png'}
                   className="object-contain w-17  h-16  "
                          />
                 </div>
               </NavLink>
           
             <div className='mt-2'>
                <p className="text-gray-400 text-sm sm:text-sm leading-relaxed mb-4">
             Elevated Living, Redefined. India's first digital-first luxury property ecosystem.
            </p></div>
            </div>
            <div className="flex items-center gap-3">
              {[BsTwitterX, BsLinkedin, BsFacebook, BsInstagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8   rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon  className="text-gray-300 text-xs sm:text-base" />
                </button>
              ))}
            </div>
          </div>

         <div className='flex sm:flex-row flex-col justify-around   sm:max-w-3xl   w-full gap-10 '> 
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className='  w-full'>
              <h4 className="text-white font-semibold text-sm sm:text-lg md:text-xl mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
 
        <div className="border-t border-gray-700 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>  <p className="text-gray-400 text-sm text-center sm:text-left">
            2026 Digi niwas. All rights reserved
          </p> </div>
        
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Security"].map((item) => (
              <a key={item} href="#" className="text-gray-400  hover:text-white text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


 