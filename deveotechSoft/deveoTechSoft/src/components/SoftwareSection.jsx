import React from 'react';

const services = [
  {
    title: "SOFTWARE DEVELOPMENT",
    description:
      "End-to-end software solutions including consulting, cloud migration, and seamless app integration for diverse industries.",
    color: "bg-green-700",
  },
  {
    title: "24/7 SUPPORT",
    description:
      "Reliable and responsive technical support to address your concerns anytime, ensuring business continuity.",
    color: "bg-sky-600",
  },
  {
    title: "CRM DEVELOPMENT",
    description:
      "Streamlined customer management solutions to enhance client relationships and boost engagement.",
    color: "bg-orange-600",
  },
  {
    title: "DEDICATED EMPLOYEES",
    description:
      "Our skilled professionals are committed to delivering solutions aligned with your business goals.",
    color: "bg-purple-700",
  },
];

export default function SoftwareSection() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Software & Website <span className="text-blue-600">Development Company</span>
        </h1>
        <p className="text-gray-600 mb-10 text-base sm:text-lg max-w-3xl mx-auto">
          Empowering businesses with tailored digital solutions – from software development to robust CRM systems and dedicated support services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl text-white shadow-lg hover:scale-105 transform transition duration-300 ${service.color}`}
            >
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
