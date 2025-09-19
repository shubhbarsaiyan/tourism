import React, { useState } from "react";

// Data for each tab (includes form card + background + info card)
const tabContent = {
  Flights: {
    imageSrc: "https://wallpapercave.com/wp/w8nLkaM.jpg",
    description:
      "Find the best deals on flights to and from major airports. Your adventure in Jharkhand is just a flight away.",
    bgImage:
      "https://i.pinimg.com/1200x/b4/d8/5b/b4d85bbd88168106b41eb79fc3b616d5.jpg",
  },
  "Railway / Timetable": {
    imageSrc:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/26163940/vande-bharat-train-1600x900.jpg",
    description:
      "Explore Jharkhand's extensive rail network. Check train schedules and book your journey with ease.",
    bgImage:
      "https://i.pinimg.com/1200x/73/c7/18/73c7180e50de88ebc99f29329292bd37.jpg",
  },
  Hotel: {
    imageSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/36/0e/56/poolside-view.jpg?w=900&h=-1&s=1",
    description:
      "From luxury resorts to cozy guesthouses, find the perfect stay to make your trip memorable.",
    bgImage:
      "https://i.pinimg.com/1200x/36/0c/f0/360cf0cb430e70095fbe6ab483691dce.jpg",
  },
  Apartments: {
    imageSrc:
      "https://d219336yigegi3.cloudfront.net/sites/noticias-m2/files/field/image/iStock-1322575582%20(2).jpg",
    description:
      "Enjoy the comfort and privacy of a home away from home. Book fully furnished apartments for your stay.",
    bgImage:
      "https://i.pinimg.com/1200x/f3/6c/14/f36c1464964246d14541a3df19bee2d0.jpg",
  },
  "Car rental": {
    imageSrc:
      "https://www.barsnet.com/wp-content/uploads/2020/03/Nows-The-Time-For-The-Car-Rental-Industry-To-Prep-For-Recovery.jpg",
    description:
      "Discover Jharkhand at your own pace. Rent a car for convenient and flexible travel across the state.",
    bgImage:
      "https://i.pinimg.com/736x/6c/1f/e2/6c1fe2e81ec8eaeb29ec20cda6b70cb3.jpg",
  },
  Guide: {
    imageSrc: "https://tse1.mm.bing.net/th/id/OIP.7Xeol3OhlHqpnQojLSg8CAHaE8?pid=Api&P=0&h=180",
    description:
      "Get a certified tourist guide in Jharkhand. Explore destinations with expert cultural and historical insights.",
    bgImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80",
  },
};

export default function TravelNavBar() {
  const [activeTab, setActiveTab] = useState("Hotel");

  const navItems = [
    "Flights",
    "Railway / Timetable",
    "Hotel",
    "Apartments",
    "Car rental",
    "Guide",
  ];

  const renderForm = () => {
    switch (activeTab) {
      case "Flights":
        return (
          <div
          className="bg-white/85 backdrop-blur-md p-6 rounded-xl shadow-lg border">
            {/* ✈️ Flights Form */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                From
              </label>
              <input
                type="text"
                placeholder="Enter departure city"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                To
              </label>
              <input
                type="text"
                placeholder="Enter destination city"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">Departure Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Return Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>
            </div>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Search Flights
            </button>
          </div>
        );

      case "Railway / Timetable":
        return (
          <div className="bg-white/85 backdrop-blur-md p-6 rounded-xl shadow-lg border">
            {/* 🚆 Railway Form */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                From
              </label>
              <input
                type="text"
                placeholder="Enter departure station"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                To
              </label>
              <input
                type="text"
                placeholder="Enter destination station"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm">Travel Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Search Trains
            </button>
          </div>
        );

      case "Hotel":
        return (
          <div className="bg-white/85 backdrop-blur-md p-6 rounded-xl shadow-lg border">
            {/* 🏨 Hotel Form */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Location</label>
              <input
                type="text"
                placeholder="Enter location / region"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">Arrival</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Departure</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">Rooms</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600">
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Guests</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600">
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Find Accommodation
            </button>
          </div>
        );

      case "Apartments":
        return (
          <div className="bg-white/85 backdrop-blur-md p-6 rounded-xl shadow-lg border">
            {/* 🏢 Apartments Form */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-700">
                City or Region
              </label>
              <input
                type="text"
                placeholder="e.g., Ranchi, Jamshedpur"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">Check-in</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Check-out</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm">Guests</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3+ Guests</option>
              </select>
            </div>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Search Apartments
            </button>
          </div>
        );

      case "Car rental":
        return (
          <div className="bg-white/85 backdrop-blur-md p-6 rounded-xl shadow-lg border">
            {/* 🚗 Car Rental Form */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-700">
                Pick-up Location
              </label>
              <input
                type="text"
                placeholder="Enter city or airport"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">Pick-up Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Drop-off Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm">Car Type</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600">
                <option>Compact (e.g., Swift)</option>
                <option>SUV (e.g., Scorpio)</option>
                <option>Sedan (e.g., City)</option>
              </select>
            </div>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Search Cars
            </button>
          </div>
        );

      case "Guide":
        return (
          <div className="bg-white/85 backdrop-blur-md p-6 rounded-xl shadow-lg border">
            {/* 🧑‍💼 Guide Booking Form */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                City / Destination
              </label>
              <input
                type="text"
                placeholder="e.g., Ranchi, Netarhat, Deoghar"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">Start Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">End Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm">Guide Preference</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600">
                <option>Language Expert</option>
                <option>Cultural Specialist</option>
                <option>Wildlife & Adventure</option>
              </select>
            </div>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Book a Guide
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative py-12 md:py-40"
      style={{ backgroundImage: `url(${tabContent[activeTab].bgImage})` }}
    >
      {/* ✅ Overlay (faded so background shows) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent"></div>

      
      

      <div className="relative z-10">
        {/* Tabs */}
        <div className="flex justify-center gap-4 md:gap-8 pb-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`text-sm md:text-lg font-medium transition-all px-3 ${
                activeTab === item
                  ? "text-green-600 border-b-2 border-green-600 pb-2"
                  : "text-gray-800 hover:text-green-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-8 px-4">
          {renderForm()}

          {/* Info Card */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border flex flex-col">
            <img
              src={tabContent[activeTab].imageSrc}
              alt={activeTab}
              className="rounded-lg mb-4 h-56 w-full object-cover"
            />
            <h3 className="text-sm text-gray-500">Your Jharkhand Travel Helper</h3>
            <h2 className="text-xl font-bold mb-2">{activeTab} Booking</h2>
            <p className="text-gray-600">
              {tabContent[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}