import React from "react";

const hotels = [
  {
    name: "Radisson Blu Ranchi",
    location: "Ranchi, Jharkhand",
    price: "₹5,500 / night",
    description: "Luxury hotel with modern amenities in central Ranchi.",
    image: "/img1.png",
  },
  {
    name: "Hotel Le Lac Sarovar Portico",
    location: "Ranchi, Jharkhand",
    price: "₹3,200 / night",
    description: "Beautiful lakeside hotel with comfortable stay options.",
    image: "/img2.png",
  },
  {
    name: "Hotel Capitol Hill",
    location: "Ranchi, Jharkhand",
    price: "₹4,000 / night",
    description: "Centrally located business and leisure hotel.",
    image: "/img3.png",
  },
];

export default function HotelsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Famous Hotels in Jharkhand</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {hotels.map((hotel, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg overflow-hidden border"
          >
            <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-sm text-gray-600">{hotel.location}</p>
              <p className="mt-2 text-gray-700">{hotel.description}</p>
              <p className="mt-2 font-bold text-green-700">{hotel.price}</p>
              <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}