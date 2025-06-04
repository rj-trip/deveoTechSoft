import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userImage from '../assets/th.jpeg';
import ceoImg from '../assets/indstryImg/NavinSir.jpg'

// Team Members Data
const teamMembers = [
  {
    name: "Navin Pandey",
    role: "CEO & Founder",
    img: ceoImg,
  },
  {
    name: "Sanjay Singh Bisht",
    role: "Director (Sales & Marketing)",
    img: userImage,
  },
  {
    name: "Praveen Pandey",
    role: "Web Developer",
    img: userImage,
  },
];

const svgBackground = `url('/background3.svg')`;

const ManagementCarousel = () => {
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full px-4 py-10 overflow-hidden">
      {/* Background with dimming effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: svgBackground,
          opacity: 0.2, // Lower visibility
          // filter: "brightness(0.8)", // Darker
          zIndex: 0,
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center text-black mb-6">
          <h2 className="text-4xl font-extrabold">Management Team</h2>
          <p className="mt-2 max-w-xl mx-auto text-gray-700">
            Acknowledged by popular tech platforms based on the quality of customer feedback,
            industry expertise, and services offered.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings} ref={sliderRef}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-[300px] mx-auto flex flex-col items-center h-[300px] transform hover:scale-105 transition duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-50 object-cover"
                />
                <div className="flex flex-col justify-between p-4 flex-grow w-full text-center">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Arrow Buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagementCarousel;
