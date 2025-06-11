import React from 'react';
import { MessageCircle, Mail, Phone, Target, Eye, Shield, Trophy } from 'lucide-react';
import ermImg from '../../assets/bg.jpg';

const AboutUs = () => {
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
      About
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
<div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-700 leading-relaxed animate-fade-in-up bg-gray-50 p-6 rounded-xl shadow-md">
  {/* Main Heading */}
  <section>
    <h1 className="text-3xl font-bold text-orange-500 mb-4">
      Your Trusted Partner in IT Innovation
    </h1>
    <p className="text-lg font-medium">
Tested, trusted and experienced team of IT professionals is just one click away to provide any IT solution for any and every Business, at home or office in simplest way and pocket friendly budget.    </p>
  </section>

  {/* About */}
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">About</h2>
    <p>
      At <span className="font-semibold text-orange-500">Deveotech Software Solutions</span>,are a dedicated team of IT professionals who are ready to transform your raw ideas into digital reality with accuracy and affordability. Devotech Software Solutions' prime mission is to provide cutting-edge software solutions with tailor made development to meet the specific and unique needs of the business, yet in an affordable and accurate way. Having the leverage of best and experienced professionals, good at technology, aware of industry dynamics and up to date in technology. We deliver not less than the best products and services at any cost.
    </p>
  </section>

  {/* Who We Are */}
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">Who We Are</h2>
    <p>
      <span className="font-semibold text-orange-500">Deveotech Software Solutions</span> is not just a software developing company, but a tested and experienced partner to help you make your mark in growing a dynamic digital platform. Our experienced professionals from all domains like developers, designers, business analysts etc. help to provide effective solutions for your digital needs with constant and timely guidance for business growth.
    </p>
  </section>

  {/* Our Services */}
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">Our Services</h2>
    <p className='pb-2'>Deveotech Software Solutions offers all digital services under one roof to make the digital journey of the client smooth and effective in generating the business. Here we list some of our main services and these include:</p>
    <ul className="list-disc list-inside space-y-3">
      <li>
        <strong>Custom Software Development:</strong> We create bespoke software solutions that align with your business objectives, enhancing efficiency and productivity reducing inconvenience and limitations.
      </li>
      <li>
        <strong>Mobile App Development:</strong> Developing and designing user-friendly mobile applications for both iOS and android platforms is our primary expertise. This ensures seamless experience and round the clock connectivity for business growth and customer satisfaction.
      </li>
      <li>
        <strong>Web Development:</strong> Developing dynamic, attractive, catchy and robust websites for e-commerce platforms. Our team is expert in building responsive and engaging web sites which pull digital users and drive visible results.
      </li>
      <li>
        <strong>Cloud Solutions:</strong>We help businesses leverage the power of the cloud, providing scalable and secure solutions that enhance collaboration and accessibility.
      </li>
      <li>
        <strong>UI/UX Design:</strong>Our design experts are best at creating intuitive and visually appealing interfaces that enhance user experience and engagement.
      </li>
      <li>
        <strong>Consulting Services:</strong>Having the team of expertise, who can offer strategic consulting to help identify opportunities for digital transformation and optimize technological investments to generate the revenue for business growth.
      </li>
    </ul>
  </section>

  {/* Why Choose Us */}
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">Why Choose Us?</h2>
    <ul className="list-disc list-inside space-y-3">
      <li>
        <strong>Client-Centric Approach:</strong> Our first priority is our client and the needs, our team works closely and in detailed manner throughout the developmental stage to exceed the client's expectations.
      </li>
      <li>
        <strong>Quality Assurance:</strong>High quality product delivery is our motto within a reasonable budget. Testing our products rigorously guarantees the product security, reliability and performance optimally.
      </li>
      <li>
        <strong>Agile Methodology:</strong> Our agile approach during the developmental process, allows for flexible and adaptable response of product even in changing requirements.
      </li>
      <li>
        <strong>Ongoing Support:</strong> Our commitment to your success doesn’t end at launch. We provide continuous support, maintenance, timely consulting, discuss bugs, eliminate limitations, and constant maintenance to ensure that our product continues to perform the best and exceeds the expectations.
      </li>
    </ul>
  </section>

  {/* Get Started */}
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">Get Started Today</h2>
    <p>
      At <span className="font-semibold text-orange-500">Deveotech Software Solutions</span>, we believe that every great innovation and project begins with a conversation. Whether you have a clear vision or need guidance in shaping and making your idea a reality, we are here to help. Feel free to contact us today to discuss how we can collaborate to bring your idealistic dream project to life. We welcome every dreamer to help in making their dream projects in reality at a place where innovation meets excellence!
    </p>
  </section>
</div>


        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          <Card
            icon={<Target className="w-6 h-6 text-black" />}
            title="Our Mission"
            bgColor="bg-emerald-600"
            content="Our mission is to deliver client specific, innovative, reliable, dynamic, web developing solutions in reasonable budget to empower business worldwide. We provide cutting-edge technology, tailored strategies and constant exceptional support to exceed the expectations of clients."
          />
          <Card
            icon={<Eye className="w-6 h-6 text-black" />}
            title="Our Vision"
            bgColor="bg-sky-500"
            content="Our vision is to become the global trusted web development solution company by providing cutting-edge innovative solutions at a reasonable budget. We look at the position, where businesses rely on us for achieving their technological goals and become leaders."
          />
          <Card
            icon={<Shield className="w-6 h-6 text-black" />}
            title="Our Values"
            bgColor="bg-orange-500"
            content="Our commitment to customer-centric solutions, integrity, innovation and security are core values that drive us towards exceptional results. We believe in maintaining honesty, transparency and believe in the trust process with every client."
          />
          <Card
            icon={<Trophy className="w-6 h-6 text-black" />}
            title="Our Goal"
            bgColor="bg-purple-600"
            content="Our goal is to support and help to grow your business by providing high-performance, scalable web development solutions by enhancing the user experience. This drives engagements, support and helps to build long-term partnership with clients for continuous business growth."
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
const Card = ({ icon, title, bgColor, content }) => (
  <div className={`${bgColor} text-white p-6 rounded-lg shadow-xl transform transition hover:-translate-y-1 hover:shadow-2xl`}>
    <div className="flex items-center mb-4">
      <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-sm leading-relaxed">{content}</p>
  </div>
);

export default AboutUs;
