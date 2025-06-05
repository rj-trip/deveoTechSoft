import React from 'react';
// import seo1 from '../assets/onpage-seo.png';
// import seo2 from '../assets/offpage-seo.png';
// import seo3 from '../assets/technical-seo.png';
// import seo4 from '../assets/guaranteed-seo.png';

import Img from '../../assets/bg.jpg'

const ServiceCard = () => {
  const services = [
    {
      title: 'On Page SEO',
      description: 'Optimize your site for higher rankings, better user experience, and traffic.',
      buttonText: 'View More',
      image: Img,
    },
    {
      title: 'Off Page SEO',
      description: "Boost your site's authority and reach with effective off-page SEO strategies.",
      buttonText: 'View More',
      image: Img,
    },
    {
      title: 'Technical SEO',
      description: 'Enhance site performance, speed, and structure with expert technical SEO solutions.',
      buttonText: 'View More',
      image: Img,
    },
    {
      title: 'Guaranteed SEO',
      description: 'Secure top rankings with guaranteed SEO strategies for lasting online success.',
      buttonText: 'View More',
      image: Img,
    },
  ];

  return (
    <section className="container mx-auto text-center py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Professional SEO Services in India Include</h2>
      <p className="mb-10 text-gray-600">We follow certain steps to provide high-quality small business SEO services.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 ease-in-out hover:bg-orange-100 hover:shadow-xl hover:scale-[1.03]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;