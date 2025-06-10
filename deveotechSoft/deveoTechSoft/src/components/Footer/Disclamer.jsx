import React from 'react';
import { MessageCircle, Mail, Phone, Target, Eye, Shield, Trophy } from 'lucide-react';
import ermImg from '../../assets/bg.jpg';

const Disclamer = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Action Buttons */}
      <div className="fixed left-4 bottom-4 flex flex-col gap-2 z-50">
        <button className="bg-green-500 hover:scale-105 transition-transform text-white p-3 rounded-full shadow-xl">
          <MessageCircle size={24} />
        </button>
        <button className="bg-gray-600 hover:scale-105 transition-transform text-white p-3 rounded-full shadow-xl">
          <Mail size={24} />
        </button>
      </div>

      <div className="fixed right-4 bottom-4 z-50">
        <button className="bg-gray-800 hover:scale-105 transition-transform text-white p-3 rounded-full shadow-xl">
          <Phone size={24} />
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative w-full">
        <div
          className="relative h-74 flex items-center justify-center bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${ermImg})` }}
        >
    <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg mt-16">
    Disclamer
    </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-orange-500 cursor-pointer">HOME</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-500 font-semibold">ABOUT</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Company Description */}
        <div className="space-y-8 text-gray-700 leading-relaxed animate-fade-in-up bg-gray-10 p-6 rounded-xl shadow-md">
          <p className="text-lg font-medium">
            At <span className="text-orange-500 font-semibold">Deveotech Software Solutions</span>, we are dedicated to transforming your ideas into innovative digital realities. Our mission is to empower businesses by providing cutting-edge software solutions tailored to meet their unique needs.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">Who We Are</h2>
            <p>
              Deveotech is more than just a software development company; we are your strategic partner in navigating the complexities of the digital landscape. Our team of developers, designers, and project managers brings diverse expertise across industries to understand and solve your business challenges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">Our Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Custom Software Development:</strong> Bespoke solutions aligned to your business needs.</li>
              <li><strong>Mobile App Development:</strong> Seamless apps for iOS & Android platforms.</li>
              <li><strong>Web Development:</strong> Dynamic websites and scalable e-commerce platforms.</li>
              <li><strong>Cloud Solutions:</strong> Secure, collaborative cloud environments.</li>
              <li><strong>UI/UX Design:</strong> Beautiful and intuitive interfaces.</li>
              <li><strong>Consulting Services:</strong> Strategic guidance for your digital transformation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Client-Centric Approach:</strong> Solutions designed with your success in mind.</li>
              <li><strong>Quality Assurance:</strong> Meticulous testing and optimization.</li>
              <li><strong>Agile Methodology:</strong> Flexible and efficient delivery.</li>
              <li><strong>Ongoing Support:</strong> Continued assistance post-deployment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">Get Started Today</h2>
            <p>
              Every great project begins with a conversation. Whether you have a vision or just an idea, we're ready to collaborate and bring it to life. Let's innovate together.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclamer;
