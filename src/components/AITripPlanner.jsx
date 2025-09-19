import React, { useState } from "react";

const AITripPlanner = () => {
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
    const tripData = { days, city, month, themes };
    console.log("Plan Trip ✈️", tripData);
    // Later → call your AI trip planner backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-green-600 text-2xl">🗺️</span>
          <h2 className="text-2xl font-bold text-gray-800">Plan Your Trip</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSearch} className="space-y-6">
          {/* Days of Travel */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Days of Travel
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="range"
                min="1"
                max="20"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full accent-green-600"
              />
              <span className="text-lg font-semibold text-gray-800">{days}</span>
            </div>
          </div>

          {/* City & Month */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
            >
              <option value="">Travel Starting Point (City)</option>
              <option>Ranchi</option>
              <option>Kolkata</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>

            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
            >
              <option value="">Select Travel Month</option>
              {[
                "January","February","March","April","May","June",
                "July","August","September","October","November","December",
              ].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* Themes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Travel Theme
            </label>
            <div className="flex flex-wrap gap-4 text-sm">
              {["Adventure", "Heritage", "Nature", "Spiritual", "Wildlife"].map(
                (theme) => (
                  <label
                    key={theme}
                    className="flex items-center space-x-2 cursor-pointer text-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={themes.includes(theme)}
                      onChange={() => handleThemeChange(theme)}
                      className="accent-green-600 w-4 h-4"
                    />
                    <span>{theme}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          >
            🔍 Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default AITripPlanner;