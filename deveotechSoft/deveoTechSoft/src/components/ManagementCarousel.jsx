// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import erpImg from '../assets/erp-crm.jpg';
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const teamMembers = [
//   {
//     name: 'Navin Pandey',
//     position: 'CEO & Founder',
//     image: erpImg
//   },
//   {
//     name: 'Sanjay Singh Bisht',
//     position: 'Director (Sales & Marketing)',
//     image: erpImg
//   },
//   {
//     name: 'Praveen Pandey',
//     position: 'Web Developer',
//     image: erpImg
//   },
//     {
//     name: "Aarav Mehta",
//     position: "UI/UX Designer",
//     image: erpImg,
//   },
//   {
//     name: "Ritika Sharma",
//     position: "Content Strategist",
//     image: erpImg,
//   },
// ];
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userImage from '../assets/erp-crm.jpg';
import bgImg from '../assets/bg-img.png'
// import bgImage from "../assets/management-bg.jpg"; // Replace with your background image
// import userImage from "../assets/user-placeholder.jpg"; // Replace with team member photos

const teamMembers = [
  {
    name: "Navin Pandey",
    role: "CEO & Founder",
    img: userImage,
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
    <div
      className="w-full px-4 py-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="text-center text-black mb-5">
        <h2 className="text-4xl font-extrabold">Management Team</h2>
        <p className="mt-2 max-w-xl mx-auto">
          Acknowledged by popular tech platforms based on the quality of customer feedback,
          industry expertise, and services offered.
        </p>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {teamMembers.map((member, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-[300px] mx-auto flex flex-col items-center h-[400px]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col justify-between p-4 flex-grow w-full text-center">
                <div className="mt-2">
                  <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

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
  );
};

export default ManagementCarousel;
