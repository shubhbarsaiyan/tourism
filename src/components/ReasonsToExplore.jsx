import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// Example Data
const data = [
  {
    title: "Rich Cultural Heritage",
    description:
      "Jharkhand is home to ancient temples, folk traditions, and festivals that reflect its deep cultural roots.",
    image: "https://tourism.jharkhand.gov.in/app-assets/image/Carft.jpg", 
  },
  {
    title: "Natural Beauty and Waterfalls",
    description:
      "From Hundru Falls to Dassam Falls, Jharkhand is blessed with stunning waterfalls and lush green forests.",
    image: "https://i.pinimg.com/736x/5f/4c/a8/5f4ca8d2484a3d1769a4313635e612b3.jpg", 
  },
  {
    title: "Wildlife Sanctuaries and National Parks",
    description:
      "Explore Betla National Park and Palamau Tiger Reserve to witness rich biodiversity.",
    image: "https://i.pinimg.com/736x/9f/73/e7/9f73e7e9b69ef1a9144c90bb60a5b1b1.jpg",
  },
];

const ReasonsToExplore = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-red-900 mb-12">
        REASONS TO EXPLORE JHARKHAND
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]} // ✅ autoplay
        navigation={true}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000, // 4 sec delay
          disableOnInteraction: false, 
        }}
        className="relative"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {/* Image with animation */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full md:w-[500px] h-[300px] object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />

              {/* Text with animation */}
              <motion.div
                className="max-w-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
                    type: "tween"
                }}
                >
                <h3 className="text-xl md:text-2xl font-semibold text-red-900 mb-4">
                    {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                <button className="mt-6 px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-700 transition">
                    Explore →
                </button>
                </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReasonsToExplore;