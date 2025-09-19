import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";        // ✅ Required
import "slick-carousel/slick/slick-theme.css"; // ✅ Required
import "./Cards.css";

const data = [
  {
    title: "Baba baidyanath dham",
    img:"https://99pandit.com/wp-content/uploads/2023/04/Baba-Baidyanath-Temple-2-scaled.webp",
  },
  {
    title: "Betla National Park",
    img: "https://live.staticflickr.com/816/27470345798_8813686df1_b.jpg",
  },
  {
    title: "Netarhat",
    img: "https://trippyhills.in/wp-content/uploads/2024/09/2fed6331-f21b-42b3-a3ff-e0e5ca872e74-1024x768.jpg",
  },
  {
    title: "Patratu Valley, Waterfalls",
    img: "https://www.team-bhp.com/forum/attachments/travelogues/1147056d1380727389-scintillating-patratu-valley-jharkhand-dsc08557.jpg",
  },
  {
    title: "Parasnath Hill",
    img: "https://thumbs.dreamstime.com/b/parasnath-hills-giridih-jharkhand-india-may-view-shikharji-jain-temple-parasnath-hill-area-temple-parasnath-157193696.jpg",
  },
  {
    title: "Dalma Wildlife Sanctuary",
    img: "https://i.ytimg.com/vi/5GLl4wBOKQo/maxresdefault.jpg",
  },
];

const Cards = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div 
    id="topdestination"
    className="slider-container">
      <h2 className="section-title p-20">Top Destinations</h2>
      <Slider {...settings}>
        {data.map((place, index) => (
          <div className="card" key={index}>
            <img src={place.img} alt={place.title} />
            <div className="card-title">{place.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;