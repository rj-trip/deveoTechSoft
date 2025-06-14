import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bank from '../../assets/indstryImg/bank.jpeg';
import commerce from '../../assets/indstryImg/commerce.jpeg';
import edu from '../../assets/indstryImg/edu.jpeg';
import health from '../../assets/indstryImg/health.jpeg';
import retail from '../../assets/indstryImg/retail.jpeg';

const industries = [
  {
    title: "Education Industry",
    content: "Focuses on enhancing learning experiences and administrative efficiency through digital platforms and tools.",
    img: edu,
    path: "/industry",
  },
  {
    title: "E-Commerce Industry",
    content: "Involves online buying and selling, requiring robust platforms for managing inventory, orders, payments, and customer interactions.",
    img: commerce,
    path: "/industry",
  },
  {
    title: "Banking & Finance Industry",
    content: "Emphasizes secure and efficient financial services, including transactions, data analytics, risk management, and customer support systems.",
    img: bank,
    path: "/industry",
  },
  {
    title: "Healthcare Industry",
    content: "Aims to improve patient care, record management, and diagnostics through technology-driven healthcare solutions.",
    img: health,
    path: "/industry",
  },
  {
    title: "Retail Industry",
    content: "Enhances the shopping experience, inventory control, and customer engagement through modern digital retail systems.",
    img: retail,
    path: "/industry",
  },
];

const ServiceSection3 = () => {
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="w-full px-4 py-14 bg-gradient-to-br from-white to-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
        Industry <span className="text-blue-600">We Serve</span>
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
We cater to a diverse range of industries, delivering innovative digital solutions designed to enhance efficiency, growth, and customer engagement. From manufacturing to healthcare, we tailor our services to meet industry-specific needs.      </p>

<Slider {...settings} ref={sliderRef}>
  {industries.map((item, index) => (
    <div key={index} className="px-1">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center h-[380px] w-full max-w-[300px] mx-auto hover:shadow-lg transition duration-300">
        <img
          src={item.img}
          alt={item.title}
          className="h-52 w-full object-cover"
        />
        <div className="flex flex-col justify-between p-4 flex-grow w-full text-center">
          <h3 className="text-gray-800 text-sm mb-2">{item.content}</h3> {/* <- reduced spacing */}
          <Link
            to={item.path}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {item.title}
          </Link>
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

export default ServiceSection3;
