import React, { useState } from "react";

const TripPlanner = () => {
  const [days, setDays] = useState(3);
  const [city, setCity] = useState("");
  const [month, setMonth] = useState("");
  const [themes, setThemes] = useState([]);

  const handleThemeChange = (theme) => {
    setThemes((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Trip Data →", { days, city, month, themes });
  };

  return (
    // ✅ Background image with gradient overlay
    <div
     id="tripplanner" 
      className="relative min-h-screen px-6 lg:px-20 py-14 pb-55 bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      
      {/* ✅ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/100 to-transparent-100px"></div>

      {/* ✅ All content stays above background/gradient */}
      <div className="relative z-10">
        {/* Whole thing in 2‑column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* === Left Column === */}
          <div className="pt-6 flex flex-col gap-6 ">
            
            {/* Destinations */}
            <a
              href="#destination"
              className="relative group overflow-hidden rounded-xl shadow-lg"
              data-aos="fade-up"
            >
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c3/cc/4c/dassam-falls.jpg?w=1000&h=-1&s=1"
                alt="Destinations"
                className="w-full h-90 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow-lg">
                Destinations
              </span>
            </a>

            {/* Adventure */}
            <a
              href="#adventure"
              className="relative group overflow-hidden rounded-xl shadow-lg"
              data-aos="fade-up"
            >
              <img
                src="https://i.ytimg.com/vi/OJmkFCMIDNg/maxresdefault.jpg"
                alt="Adventure"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow-lg">
                Adventure
              </span>
            </a>

            {/* Media Room */}
            <a
              href="#mediaRoom"
              className="relative group overflow-hidden rounded-xl shadow-lg"
              data-aos="fade-up"
            >
              <img
                src="https://www.mptourism.com/images/media_room.webp"
                alt="Media Room"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow-lg">
                Media Room
              </span>
            </a>
          </div>

          {/* === Right Column === */}
          <div className="flex flex-col gap-6">
            
            {/* Trip Planner Box */}
            <div
              className="bg-gradient-to-b from-[#737373] to-[#545454] text-white p-8 rounded-2xl shadow-2xl"
              data-aos="fade-up"
            >
              <h2 className="text-2xl font-bold flex items-center mb-6">
                🗺️ Plan Your Trip
              </h2>

              <form onSubmit={handleSearch} className="space-y-6">
                {/* Days of Travel */}
                <div>
                  <label className="text-sm font-medium">Days of travel</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={days}
                      onChange={(e) => setDays(e.target.value)}
                      className="w-full accent-red-400"
                    />
                    <span className="font-semibold">{days}</span>
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="p-3 bg-[#595959] border border-pink-200 rounded-lg focus:outline-none"
                  >
                    <option value="">Travel Starting Point</option>
                    <option>Ranchi</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                  </select>

                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="p-3 bg-[#595959] border border-pink-200 rounded-lg focus:outline-none "
                  >
                    <option value="">Select Month</option>
                    {[
                      "Jan","Feb","Mar","Apr","May","Jun",
                      "Jul","Aug","Sep","Oct","Nov","Dec"
                    ].map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Themes */}
                <div>
                  <label className="block text-sm font-medium mb-2">Select Travel Theme</label>
                  <div className="flex flex-wrap gap-3">
                    {["Adventure","Heritage","Nature","Spiritual","Wildlife"].map((theme) => (
                      <label key={theme} className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          checked={themes.includes(theme)}
                          onChange={() => handleThemeChange(theme)}
                          className="accent-red-400"
                        />
                        <span>{theme}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-red-500 hover:bg-red-600 font-bold rounded-lg shadow-lg transition transform hover:scale-[1.02]"
                >
                  🔍 SEARCH
                </button>
              </form>
            </div>

            {/* Culture */}
            <a
              href="#culture"
              className="relative group overflow-hidden rounded-xl shadow-lg"
              data-aos="fade-up"
            >
              <img
                src="http://3.bp.blogspot.com/-Dc1j_7vekt8/UwnMbJv-h-I/AAAAAAAAAFU/grevzoSoqrg/s1600/pin-culture-of-jharkhand.jpg"
                alt="Culture"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow-lg">
                Culture
              </span>
            </a>

            {/* Travel Agents */}
            <a
              href="#travelAgent"
              className="relative group overflow-hidden rounded-xl shadow-lg"
              data-aos="fade-up"
            >
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.c3unsbTZGQnTJA_vpPhvyQHaEK?pid=Api&P=0&h=180"
                alt="Travel Agents"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow-lg">
                Travel Agents
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;