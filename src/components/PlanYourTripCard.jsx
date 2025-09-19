import React, { useState } from 'react';

const PlanYourTripCard = () => {
  const [days, setDays] = useState(3);
  const [city, setCity] = useState('');
  const [month, setMonth] = useState('');
  const [themes, setThemes] = useState([]);

  const themeOptions = ['Adventure', 'Heritage', 'Nature', 'Spiritual', 'Wildlife'];

  const handleThemeChange = (theme) => {
    setThemes((prevThemes) =>
      prevThemes.includes(theme)
        ? prevThemes.filter((t) => t !== theme)
        : [...prevThemes, theme]
    );
  };

  const handleSubmit = () => {
    const data = {
      days,
      city,
      month,
      themes,
    };
    console.log('Trip Plan Submitted:', data);
    // You can replace this with navigation or API call
  };

  return (
    <div className="max-w-lg mx-auto p-6 rounded-lg bg-gradient-to-b from-rose-900 to-pink-700 text-white shadow-lg">
      <div className="flex items-center mb-4 gap-2">
        <img src="/icons/map-icon.svg" alt="Map Icon" className="w-6 h-6" />
        <h2 className="text-2xl font-semibold">Plan Your Trip</h2>
      </div>

      {/* Days of travel */}
      <label className="block mb-2">Days of travel</label>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="range"
          min="1"
          max="30"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full accent-white"
        />
        <span className="min-w-[2rem] text-right">{days}</span>
      </div>

      {/* Selects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 bg-transparent border border-white text-black rounded focus:outline-none"
        >
          <option value="">Travel Starting Point (City)</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Kolkata">Kolkata</option>
        </select>

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full p-2 bg-transparent border border-white text-black rounded focus:outline-none"
        >
          <option value="">Select Travel Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          {/* Add rest of months */}
        </select>
      </div>

      {/* Travel Themes */}
      <label className="block mb-2">Select Travel Theme</label>
      <div className="flex flex-wrap gap-4 mb-6">
        {themeOptions.map((theme) => (
          <label key={theme} className="flex items-center gap-1 text-sm">
            <input
              type="checkbox"
              checked={themes.includes(theme)}
              onChange={() => handleThemeChange(theme)}
              className="accent-white"
            />
            {theme}
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-red-400 hover:bg-red-500 text-white font-bold rounded transition duration-300"
      >
        SEARCH
      </button>
    </div>
  );
};

export default PlanYourTripCard;
