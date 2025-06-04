import React from 'react';
import { MessageCircle, Mail, Phone, Target, Eye, Shield, Trophy } from 'lucide-react';
import ermImg from '../assets/bg.jpg'
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Action Buttons */}
      <div className="fixed left-4 bottom-4 flex flex-col gap-2 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors">
          <MessageCircle size={24} />
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors">
          <Mail size={24} />
        </button>
      </div>

      <div className="fixed right-4 bottom-4 z-50">
        <button className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition-colors">
          <Phone size={24} />
        </button>
      </div>

      {/* Hero Section */}
<div
  className="relative h-64 flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${ermImg})` }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10">
    <div className="bg-orange-500 text-white px-6 py-3 rounded">
      <h1 className="text-2xl font-bold">About</h1>
    </div>
  </div>
  {/* Background pattern overlay */}
  <div className="absolute inset-0 opacity-10">
    <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-500 to-transparent"></div>
  </div>
</div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-600">HOME</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-500 font-semibold">SERVICES</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Company Description */}
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed mb-8">
            At Deveotech Software Solutions, we are dedicated to transforming your ideas into innovative digital realities. Our mission is to empower businesses by 
            providing cutting-edge software solutions tailored to meet their unique needs. With a team of experienced professionals, we leverage the latest technologies 
            and industry best practices to deliver high-quality products and services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Deveotech is more than just a software development company; we are your strategic partner in navigating the complexities of the digital landscape. Our 
            diverse team of developers, designers, and project managers brings a wealth of expertise across various industries, ensuring that we understand your 
            challenges and can provide effective solutions.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            We offer a comprehensive range of services designed to support your business at every stage of its digital journey:
          </p>

          <div className="mb-3">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">Custom Software Development:</span> We create bespoke software solutions that align with your business objectives, enhancing efficiency and productivity.
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">Mobile App Development:</span> Our team designs and develops user-friendly mobile applications for both iOS and Android platforms, ensuring a seamless 
              experience for your users.
            </p>
          </div>

         <div className="mb-4">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">Web Development:</span> From dynamic websites to robust e-commerce platforms, we build responsive and engaging web solutions that drive results.
            </p>
          </div>

         <div className="mb-4">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">Cloud Solutions:</span> We help businesses leverage the power of the cloud, providing scalable and secure solutions that enhance collaboration and accessibility.
            </p>
          </div>

        <div className="mb-4">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">UI/UX Design:</span> Our design experts focus on creating intuitive and visually appealing interfaces that enhance user experience and engagement.
            </p>
          </div>

        <div className="mb-5">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">Consulting Services:</span> We offer strategic consulting to help you identify opportunities for digital transformation and optimize your technology investments.
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          
          <div className="space-y-4 mb-4">
            <div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">Client-Centric Approach:</span> We prioritize your needs and work closely with you throughout the development process to ensure that the final product exceeds 
                your expectations.
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">Quality Assurance:</span> Our rigorous testing processes guarantee that our solutions are reliable, secure, and perform optimally.
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">Agile Methodology:</span> We adopt an agile approach to development, allowing for flexibility and adaptability in response to changing requirements.
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">Ongoing Support:</span> Our commitment to your success doesn't end at launch. We provide ongoing support and maintenance to ensure your software continues 
                to perform at its best.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            At Deveotech Software Solutions, we believe that every great project begins with a conversation. Whether you have a clear vision or need guidance in shaping 
            your ideas, we are here to help. Contact us today to discuss how we can collaborate to bring your project to life. Welcome to a partnership where innovation 
            meets excellence!
          </p>
        </div>

        {/* Mission, Vision, Value, Goal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Our Mission */}
          <div className="bg-emerald-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <p className="text-sm leading-relaxed">
                 Our mission is to deliver innovative and reliable web development solutions that empower businesses worldwide. We strive to exceed client expectations by providing cutting-edge technology, tailored strategies, and exceptional support.            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-sky-500 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Our vision is to become a trusted global leader in web development by creating impactful digital solutions. We aim to foster an environment where businesses can rely on us to achieve their technological goals.
            </p>
          </div>

          {/* Our Value */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Our Value</h3>
            </div>
            <p className="text-sm leading-relaxed">
              We are committed to integrity, innovation, and customer-centric solutions. Our core values drive us to deliver exceptional results while maintaining transparency and trust with every client.
            </p>
          </div>

          {/* Our Goal */}
          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Our Goal</h3>
            </div>
            <p className="text-sm leading-relaxed">
                Our goal is to provide scalable, high-performance web development solutions that enhance user experience, drive engagement, and support business growth. We are dedicated to building long-term partnerships with our clients.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;