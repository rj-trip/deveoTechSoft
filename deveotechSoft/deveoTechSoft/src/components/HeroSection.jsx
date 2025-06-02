import React from 'react';
import backgroundImage from '../assets/bg.jpg'; // Replace with your bg image

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen flex justify-end items-center text-white bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" bg-opacity-60 p-6 sm:p-8 md:p-10 rounded-md max-w-3xl w-full mr-4 sm:mr-8 text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-4">
          Best IT Solutions Provider Agency
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-black mb-6">
          A team of Information Technology experts is ready to provide solutions for every Business & Home user in the simplest way at the best budget.
        </p>
        <a
          href="#about"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
        >
          About Us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
