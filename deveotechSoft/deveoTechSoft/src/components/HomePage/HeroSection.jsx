import React from 'react';
import backgroundImage from '../../assets/bggimg.jpg'; // Replace with your bg image

const HeroSection = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-end bg-no-repeat bg-center bg-cover"
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

// import React from "react";
// import bgImg from '../assets/bgimg.png'
// const HeroSection = () => {
//   return (
//     <div
//       className="relative w-full min-h-screen flex items-center justify-end bg-no-repeat bg-center bg-contain"
//       style={{ backgroundImage: `url(${bgImg})` }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl w-full px-6 py-20 md:px-12">
//         <div className="text-white text-right md:text-center lg:text-right bg-black bg-opacity-50 p-6 rounded-md">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//             Best IT Solutions <br /> Provider Agency
//           </h1>
//           <p className="text-lg md:text-xl mb-6">
//             A team of Information Technology experts is ready to provide
//             solutions for every Business & Home user in the simplest way at
//             the best budget.
//           </p>
//           <a
//             href="#"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition duration-300"
//           >
//             About Us
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
