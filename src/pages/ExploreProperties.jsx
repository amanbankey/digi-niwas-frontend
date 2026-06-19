
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useState } from "react";

import { Search } from "lucide-react";

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

export default function ExploreProperty() {
  const [selectedCity, setSelectedCity] = useState(locations[0]);
    const [search, setSearch] = useState("");
  const [listingType, setListingType] = useState("For Sale");
  const [price, setPrice] = useState("Price");
  const [bedsBaths, setBedsBaths] = useState("Beds & Baths");
  const [propertyType, setPropertyType] = useState("Property Type");
  const [filters, setFilters] = useState("Filters");
  function FixMapSize() {
    const map = useMap();
  
    useEffect(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }, [map]);
  
    return null;
  }

    const handleSearch = () => {
    const filterData = {
      search,
      listingType,
      price,
      bedsBaths,
      propertyType,
      filters,
    };

    console.log(filterData);
  };

  return (
    <div className="w-full   flex  flex-col mt-5">
      
      <div className="w-full bg-white border border-gray-300 p-2">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="relative lg:flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Address, neighborhood, city, ZIP"
            className="w-full h-10 border border-gray-300 rounded-md pl-4 pr-10 text-sm outline-none"
          />

          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        <select
          value={listingType}
          onChange={(e) => setListingType(e.target.value)}
          className="h-10 px-3 border border-[#274255] rounded-md text-sm"
        >
          <option>For Sale</option>
          <option>For Rent</option>
          <option>Sold</option>
        </select>

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="h-10 px-3 border border-gray-300 rounded-md text-sm"
        >
          <option>Price</option>
          <option>₹10L - ₹25L</option>
          <option>₹25L - ₹50L</option>
          <option>₹50L - ₹1Cr</option>
          <option>₹1Cr+</option>
        </select>

        <select
          value={bedsBaths}
          onChange={(e) => setBedsBaths(e.target.value)}
          className="h-10 px-3 border border-gray-300 rounded-md text-sm"
        >
          <option>Beds & Baths</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4+ BHK</option>
        </select>

        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="h-10 px-3 border border-gray-300 rounded-md text-sm"
        >
          <option>Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
          <option>Plot</option>
        </select>

        <select
          value={filters}
          onChange={(e) => setFilters(e.target.value)}
          className="h-10 px-3 border border-gray-300 rounded-md text-sm"
        >
          <option>Filters</option>
          <option>Parking</option>
          <option>Furnished</option>
          <option>Swimming Pool</option>
          <option>Garden</option>
        </select>

        <button
          onClick={handleSearch}
          className="h-10 px-5 bg-[#274255] text-white rounded-md text-sm font-medium"
        >
          Save Search
        </button>
      </div>
    </div>


    <div className="  min-h-[600px] flex flex-col lg:flex-row gap-4 px-8 lg:px-6 my-10 "> 
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
    </div>
  );
}