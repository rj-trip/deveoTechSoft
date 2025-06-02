import React from 'react';
import erpImg from '../assets/erp-crm.jpg';
import webDesignImg from '../assets/website-design.jpg';
import digitalMarketingImg from '../assets/digital-marketing.jpg';
import webDevImg from '../assets/web-development.jpg';

const solutions = [
  {
    title: 'ERP/CRM Software',
    description: 'Manage clients, leads, dashboards, and business data efficiently.',
    image: erpImg,
  },
  {
    title: 'Website Design',
    description: 'We create responsive websites designed to engage and convert visitors.',
    image: webDesignImg,
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence with tailored marketing strategies.',
    image: digitalMarketingImg,
  },
  {
    title: 'Web Development',
    description: 'Build engaging and functional websites tailored for performance and scalability.',
    image: webDevImg,
  },
];

export default function ServicesSection1() {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Deveotech Software Solutions, we deliver tailored digital solutions for your business needs. Our expertise includes website development,
          digital marketing, e-commerce solutions, live tracking systems, and content writing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-2"
          >
            {/* Background Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-500 to-sky-300 opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-0" />

            {/* Content */}
            <div className="relative z-10 p-6 text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover mb-4 rounded-md shadow-sm"
              />
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2 group-hover:text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
