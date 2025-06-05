import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Arrow components for desktop
const NextArrow = ({ onClick }) => (
  <button
    className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="hidden md:flex absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

// Feature items
const features = [
  {
    title: 'Global Standard',
    description: 'We follow international best practices to deliver top-notch solutions with measurable outcomes.',
  },
  {
    title: 'Cost Effective',
    description: 'Our affordable solutions are designed to meet your budget without compromising quality.',
  },
  {
    title: 'Free Consultation',
    description: 'Get expert insights and strategic advice from our specialists at no cost.',
  },
  {
    title: '24/7 Support',
    description: 'Our support team is always available to assist you with any issue at any time.',
  },
  {
    title: 'Custom Solutions',
    description: 'We create tailored solutions to meet the unique needs of your business.',
  },
];

const ServiceSection2 = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

 const settings = {
  dots: !isMobile,          // ❌ Hide dots on mobile
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: !isMobile,        // ❌ Hide arrows on mobile
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};


  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-16 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/background4.svg')] bg-no-repeat bg-center bg-cover opacity-20 pointer-events-none z-0" />

      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 z-10 relative">
        Deveotech Features
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        <Slider ref={sliderRef} {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="px-5">
              <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-6 h-full text-center border border-blue-300 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Mobile bottom arrows */}
        {isMobile && (
          <div className="flex justify-center items-center gap-6 mt-8 md:hidden">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection2;
