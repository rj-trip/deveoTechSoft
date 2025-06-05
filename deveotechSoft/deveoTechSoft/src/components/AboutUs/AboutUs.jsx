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
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>HOME</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-500 font-semibold">SERVICES</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
        {/* Company Description */}
        <div className="space-y-6 text-gray-600 leading-relaxed animate-fade-in-up">
          <p>
            At Deveotech Software Solutions, we are dedicated to transforming your ideas into innovative digital realities. Our mission is to empower businesses by
            providing cutting-edge software solutions tailored to meet their unique needs. With a team of experienced professionals, we leverage the latest technologies
            and industry best practices to deliver high-quality products and services.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h2>
            <p>
              Deveotech is more than just a software development company; we are your strategic partner in navigating the complexities of the digital landscape. Our
              diverse team of developers, designers, and project managers brings a wealth of expertise across various industries, ensuring that we understand your
              challenges and can provide effective solutions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Services</h2>
            <p>
              We offer a comprehensive range of services designed to support your business at every stage of its digital journey:
            </p>
            <ul className="space-y-3 mt-4">
              <li><strong className="text-gray-800">Custom Software Development:</strong> We create bespoke software solutions that align with your business objectives, enhancing efficiency and productivity.</li>
              <li><strong className="text-gray-800">Mobile App Development:</strong> Our team designs and develops user-friendly mobile applications for both iOS and Android platforms, ensuring a seamless experience for your users.</li>
              <li><strong className="text-gray-800">Web Development:</strong> From dynamic websites to robust e-commerce platforms, we build responsive and engaging web solutions that drive results.</li>
              <li><strong className="text-gray-800">Cloud Solutions:</strong> We help businesses leverage the power of the cloud, providing scalable and secure solutions that enhance collaboration and accessibility.</li>
              <li><strong className="text-gray-800">UI/UX Design:</strong> Our design experts focus on creating intuitive and visually appealing interfaces that enhance user experience and engagement.</li>
              <li><strong className="text-gray-800">Consulting Services:</strong> We offer strategic consulting to help you identify opportunities for digital transformation and optimize your technology investments.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
            <ul className="space-y-3 mt-4">
              <li><strong className="text-gray-800">Client-Centric Approach:</strong> We prioritize your needs and work closely with you throughout the development process to ensure that the final product exceeds your expectations.</li>
              <li><strong className="text-gray-800">Quality Assurance:</strong> Our rigorous testing processes guarantee that our solutions are reliable, secure, and perform optimally.</li>
              <li><strong className="text-gray-800">Agile Methodology:</strong> We adopt an agile approach to development, allowing for flexibility and adaptability in response to changing requirements.</li>
              <li><strong className="text-gray-800">Ongoing Support:</strong> Our commitment to your success doesn't end at launch. We provide ongoing support and maintenance to ensure your software continues to perform at its best.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Get Started Today</h2>
            <p>
              At Deveotech Software Solutions, we believe that every great project begins with a conversation. Whether you have a clear vision or need guidance in shaping
              your ideas, we are here to help. Contact us today to discuss how we can collaborate to bring your project to life. Welcome to a partnership where innovation
              meets excellence!
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          <Card
            icon={<Target className="w-6 h-6 text-black" />}
            title="Our Mission"
            bgColor="bg-emerald-600"
            content="Our mission is to deliver innovative and reliable web development solutions that empower businesses worldwide. We strive to exceed client expectations by providing cutting-edge technology, tailored strategies, and exceptional support."
          />
          <Card
            icon={<Eye className="w-6 h-6 text-black" />}
            title="Our Vision"
            bgColor="bg-sky-500"
            content="Our vision is to become a trusted global leader in web development by creating impactful digital solutions. We aim to foster an environment where businesses can rely on us to achieve their technological goals."
          />
          <Card
            icon={<Shield className="w-6 h-6 text-black" />}
            title="Our Value"
            bgColor="bg-orange-500"
            content="We are committed to integrity, innovation, and customer-centric solutions. Our core values drive us to deliver exceptional results while maintaining transparency and trust with every client."
          />
          <Card
            icon={<Trophy className="w-6 h-6 text-black" />}
            title="Our Goal"
            bgColor="bg-purple-600"
            content="Our goal is to provide scalable, high-performance web development solutions that enhance user experience, drive engagement, and support business growth. We are dedicated to building long-term partnerships with our clients."
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
