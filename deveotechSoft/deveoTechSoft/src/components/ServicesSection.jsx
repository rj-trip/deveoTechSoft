import React from 'react';

const services = [
  {
    title: 'PROVEN RESULTS',
    description: 'Delivering measurable growth and success.',
    bgColor: 'bg-green-600',
    icon: '💼',
  },
  {
    title: 'EXPERT TEAM',
    description: 'Certified professionals driving impactful strategies.',
    bgColor: 'bg-blue-500',
    icon: '🚀',
  },
  {
    title: 'AFFORDABLE PRICE',
    description: 'Quality meets affordability, value assured.',
    bgColor: 'bg-orange-500',
    icon: '💰',
  },
  {
    title: 'ON-TIME DELIVERY',
    description: 'Reliable and punctual service, every time.',
    bgColor: 'bg-indigo-600',
    icon: '⏰',
  },
];


export default function ServicesSection() {
  return (
    <div className="bg-gray-80 py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer transition-all duration-300"
          >
            {/* Hover Fill Background */}
            <div className="absolute inset-0 bg-sky-500 transform scale-y-0 origin-top transition-transform duration-500 ease-out group-hover:scale-y-100 z-0 rounded-2xl" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 py-8 transition-all duration-300 group-hover:text-white">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
