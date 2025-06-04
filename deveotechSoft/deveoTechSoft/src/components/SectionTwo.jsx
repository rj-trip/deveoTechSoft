
import React from 'react';
import sectionImage from '../assets/section2.jpg'; // Replace with the new uploaded image if needed
import BtnTransition from '../components/BtnTransition'
const SectionTwo = () => {
  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-12 grid md:grid-cols-2 gap-8 items-center">

         <div className="relative group overflow-hidden w-full h-[450px] rounded-lg shadow-xl">
  <img
    src={sectionImage}
    alt="Office"
    className="w-full h-full object-cover transform transition duration-700 ease-in-out"
  />

  <div className="absolute left-8 sm:left-6 md:left-10 top-[103%] transform -translate-y-1/2 rotate-[-90deg] origin-left">
  <div className="text-[50px] sm:text-[24px] md:text-[32px] lg:text-[36px] uppercase text-transparent tracking-[2px] font-semibold 
    [-webkit-text-stroke-width:1.2px] md:[-webkit-text-stroke-width:1.5px] [-webkit-text-stroke-color:white]">
    07+ EXPERIENCE
  </div>
</div>

</div>

        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to DeveoTech Software Solution</h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover innovative software development and IT services tailored for your business needs. Our team delivers scalable solutions powered by the latest technology trends.
          </p>

     <BtnTransition/>

<div className="flex space-x-4 w-fit ml-6 sm:ml-0 sm:justify-start justify-center mt-6">
  <a
    href="#"
    className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
  >
    Get Started
  </a>
  <a
    href="#"
    className="px-6 py-2 rounded bg-white border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
  >
    Learn More
  </a>
</div>


        </div>
      </div>
    </section>
  );
};

export default SectionTwo;