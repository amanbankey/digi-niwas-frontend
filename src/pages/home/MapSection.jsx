// import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
// import { useState, useEffect } from "react";
// import { FiHeart, FiChevronRight,FiChevronLeft,  
//        FiHome,
//     FiVideo, FiArrowRight, FiMessageCircle,  FiCheck,FiTarget,FiTrendingUp, FiUsers,
//     FiBarChart2, } from "react-icons/fi";
// import { FaBrain, FaRegClock,  FaInstagram, FaFacebook, FaWhatsapp, FaBullhorn } from "react-icons/fa";
// import { BiTargetLock } from "react-icons/bi";
// import { RiRobot2Line } from "react-icons/ri";

// const locations = [
//   {
//     name: "Delhi",
//     position: [28.6139, 77.2090],
//     color: "#ef4444",
//   },
//   {
//     name: "Mumbai",
//     position: [19.0760, 72.8777],
//     color: "#3b82f6",
//   },
//   {
//     name: "Pune",
//     position: [18.5204, 73.8567],
//     color: "#22c55e",
//   },
//   {
//     name: "Bangalore",
//     position: [12.9716, 77.5946],
//     color: "#f59e0b",
//   },
// ];

// const properties = [
//   { img: 'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736760/house1_rmtft8.jpg', title: "2BHK Modern Villa", sub: "Ambala City, Haryana", price: "₹28,500" },
//   { img: 'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736760/house2_jhd68o.jpg', title: "2BHK Apartment", sub: "Near Delhi Highway", price: "₹26,000" },
//   { img: 'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736762/house3_w1avuf.jpg', title: "2BHK Builder Floor", sub: "Ambala Cantt", price: "₹27,000" },
// ];

// export default function IndiaMap() {
//   return (
//         <div className="max-w-6xl  w-full flex flex-col gap-4 sm:gap-0 sm:flex-row justify-center items-center mx-auto  px-5  "> 
//             <div className="sm:w-4/5 w-full h-96   z-0 flex bg-[#274255]  justify-center items-center mx-auto    overflow-hidden">
              
//               <MapContainer
//                 center={[22.5937, 78.9629]}
//                 zoom={4}
//                 minZoom={3}
//                 maxZoom={18}
//                 worldCopyJump={false}
//                 maxBounds={[
//                   [-90, -180],
//                   [90, 180],
//                 ]}
//                 maxBoundsViscosity={1}
//                 className="w-full h-full "
//               >
//                 <TileLayer
//                   attribution="&copy; OpenStreetMap"
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   noWrap={true}
                
//                 />

//                 {locations.map((location) => (
//                   <CircleMarker
//                     key={location.name}
//                     center={location.position}
//                     radius={2}
//                     pathOptions={{
//                       color: location.color,
//                       fillColor: location.color,
//                       fillOpacity: 1,
//                     }}
//                   >
//                     <Popup>{location.name}</Popup>
//                   </CircleMarker>
//                 ))}
//               </MapContainer>
//             </div>
  
  
//                 {/* <div className=""> */}
//                       <div className="grid grid-cols-2  gap-5 w-full sm:max-w-lg  sm:px-5 sm:gap-3">
//                         {properties.map((p) => (
//                           <div key={p.title} className="rounded-md  w-full border border-[#1f3a3f] bg-white/80 overflow-hidden">
//                             <div className="relative">
//                               <img src={p.img} alt={p.title} loading="lazy" className="w-full h-20 sm:h-24 object-cover" />
//                               <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center">
//                                 <FiHeart size={12} />
//                               </span>
//                             </div>
//                             <div className="p-2 sm:p-3">
//                               <div className="text-[11px] sm:text-sm font-semibold leading-tight">{p.title}</div>
//                               <div className="text-[9px] sm:text-[11px]   mt-0.5">{p.sub}</div>
//                               <div className="text-[10px] sm:text-xs   font-semibold mt-1.5">
//                                 {p.price} <span className="  font-normal">/ month</span>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                       {/* arrow */}
//                       {/* <button className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#2dd4a8]/50 bg-[#0a1a1f] text-[#2dd4a8] flex items-center justify-center">
//                         <FiChevronRight size={16} />
//                       </button> */}
//                     {/* </div> */}
 
//  </div>
//   );
// }



// import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
// import { useEffect } from "react";
// import { useMap } from "react-leaflet";import { useState } from "react";


// const locations = [
//   {
//     name: "Delhi",
//     position: [28.6139, 77.2090],
//     color: "#ef4444",
//     properties: [
//       {
//         img: "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736760/house1_rmtft8.jpg",
//         title: "Delhi Villa",
//         sub: "South Delhi",
//         price: "₹30,000",
//       },
//       {
//         img: "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736760/house2_jhd68o.jpg",
//         title: "Delhi Flat",
//         sub: "Noida",
//         price: "₹25,000",
//       },
//     ],
//   },
//   {
//     name: "Mumbai",
//     position: [19.0760, 72.8777],
//     color: "#3b82f6",
//     properties: [
//       {
//         img: "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736762/house3_w1avuf.jpg",
//         title: "Mumbai Sea View",
//         sub: "Bandra",
//         price: "₹50,000",
//       },
//     ],
//   },
// ];

// export default function IndiaMap() {
//   const [selectedCity, setSelectedCity] = useState(locations[0]);
//   function FixMapSize() {
//     const map = useMap();
  
//     useEffect(() => {
//       setTimeout(() => {
//         map.invalidateSize();
//       }, 100);
//     }, [map]);
  
//     return null;
//   }

//   return (
//     <div className="w-full h-[600px] flex gap-4 px-6 mt-10">
      
//       {/* LEFT → MAP */}
//       <div className="w-[60%] h-full rounded-2xl overflow-hidden border shadow-lg">
//         <MapContainer
//           center={[22.5937, 78.9629]}
//           zoom={5}
//           className="w-full h-full"
//         >
//            <FixMapSize /> 
//           <TileLayer
//             attribution="&copy; OpenStreetMap"
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {locations.map((location) => (
//             <CircleMarker
//               key={location.name}
//               center={location.position}
//               radius={selectedCity.name === location.name ? 10 : 6}
//               eventHandlers={{
//                 click: () => setSelectedCity(location),
//               }}
//               pathOptions={{
//                 color: location.color,
//                 fillColor: location.color,
//                 fillOpacity: 1,
//               }}
//             >
//               <Popup>{location.name}</Popup>
//             </CircleMarker>
//           ))}
//         </MapContainer>
//       </div>

//       {/* RIGHT → PROPERTY LIST */}
//       <div className="w-[40%] h-full overflow-y-auto pr-6">
//       <div className="grid grid-cols-2 gap-7">
//           {selectedCity.properties.map((p, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
//             >
//               <img
//                 src={p.img}
//                 alt={p.title}
//                 className="w-full h-40 object-cover"
//               />

//               <div className="p-3">
//                 <div className="text-sm font-semibold">{p.title}</div>
//                 <div className="text-xs text-gray-500">{p.sub}</div>
//                 <div className="text-sm font-bold mt-1">
//                   {p.price}
//                   <span className="text-xs font-normal"> / month</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }




import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";import { useState } from "react";


const locations = [
  {
    name: "Delhi",
    position: [28.6139, 77.2090],
    color: "#ef4444",
    properties: [
      {
        img: "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736760/house1_rmtft8.jpg",
        title: "Delhi Villa",
        sub: "South Delhi",
        price: "₹30,000",
      },
      {
        img: "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736760/house2_jhd68o.jpg",
        title: "Delhi Flat",
        sub: "Noida",
        price: "₹25,000",
      },
      
    ],
  },
  {
    name: "Mumbai",
    position: [19.0760, 72.8777],
    color: "#3b82f6",
    properties: [
      {
        img: "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736762/house3_w1avuf.jpg",
        title: "Mumbai Sea View",
        sub: "Bandra",
        price: "₹50,000",
      },
    ],
  },
  
];

export default function IndiaMap() {
  const [selectedCity, setSelectedCity] = useState(locations[0]);
  function FixMapSize() {
    const map = useMap();
  
    useEffect(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }, [map]);
  
    return null;
  }

  return (
    <div className="w-full min-h-[600px] flex flex-col lg:flex-row gap-4 px-8 lg:px-6 mt-10">
      
      {/* MAP */}
      <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border shadow-lg z-0">
        <MapContainer
          center={[22.5937, 78.9629]}
          zoom={5}
          className="w-full h-full"
        >
          <FixMapSize />
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
  
          {locations.map((location) => (
            <CircleMarker
              key={location.name}
              center={location.position}
              radius={selectedCity.name === location.name ? 10 : 6}
              eventHandlers={{
                click: () => setSelectedCity(location),
              }}
              pathOptions={{
                color: location.color,
                fillColor: location.color,
                fillOpacity: 1,
              }}
            >
              <Popup>{location.name}</Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
  
      {/* PROPERTY LIST */}
      <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
      <div className="grid grid-cols-2 gap-7">
          {selectedCity.properties.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-cover"
              />
  
              <div className="p-3">
                <div className="text-sm font-semibold">{p.title}</div>
                <div className="text-xs text-gray-500">{p.sub}</div>
                <div className="text-sm font-bold mt-1">
                  {p.price}
                  <span className="text-xs font-normal"> / month</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  );
}