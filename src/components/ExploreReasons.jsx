import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// NO MORE IMAGE IMPORTS HERE

const reasonsData = [
  {
    image: "/images/tribal-culture.png", // Using direct src path from public folder
    title: "Rich Tribal Culture and Heritage",
    description: "Jharkhand is home to 32 distinct tribal groups, each with its unique traditions, art, and festivals. Explore ancient Sohrai paintings, vibrant dances, and craftsmanship that tells the story of its people."
  },
  {
    image: "/images/jharkhand-waterfalls.png", // Using direct src path
    title: "A Land of Breathtaking Waterfalls",
    description: "Often called the 'Land of Forests', Jharkhand is also blessed with countless majestic waterfalls. Discover hidden gems like Hundru, Dassam, and Jonha Falls, where nature's power and beauty are on full display."
  },
  {
    image: "/images/national-parks.png", // Using direct src path
    title: "Lush National Parks and Wildlife",
    description: "Explore dense Sal forests and sprawling grasslands at Betla National Park and Dalma Wildlife Sanctuary. These protected areas are vital habitats for elephants, tigers, bison, and a diverse range of bird species."
  },
  {
    image: "/images/pilgrim-sites.png", // Using direct src path
    title: "Sacred Pilgrim Sites for Spiritual Seekers",
    description: "The state is a significant spiritual hub, featuring revered sites like Baidyanath Dham in Deoghar, one of the twelve Jyotirlingas, and the sacred Parasnath Hill, the highest peak and a major Jain pilgrimage center."
  }
];

// Custom Arrow Components for the Slider (No changes here)
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10`} onClick={onClick}>
      <div className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg">
        <FaChevronRight size={20} />
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10`} onClick={onClick}>
      <div className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg">
        <FaChevronLeft size={20} />
      </div>
    </div>
  );
};

export default function ExploreReasons() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-2 tracking-widest">
          REASONS TO EXPLORE JHARKHAND
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

        <div className="relative">
          <Slider {...settings}>
            {reasonsData.map((reason, index) => (
              <div key={index}>
                <div className="grid md:grid-cols-2 items-center gap-12">
                  {/* Image Column */}
                  <div className="flex justify-center">
                    <img src={reason.image} alt={reason.title} className="max-w-full h-auto rounded-lg" />
                  </div>
                  {/* Text Content Column */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}