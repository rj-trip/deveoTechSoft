import React from 'react';
import seoBanner from '../../assets/bg.jpg';
import seoIllustration from '../../assets/bg.jpg';
import SEOSection from './SEOSection';
import ServicesCardSec from './ServiceCardSec';
import ermImg from '../../assets/bg.jpg';
import SiteAuditSection from './SiteAuditSection';

const ServicePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
<div className="relative w-full">
  <div
    className="relative h-74 flex items-center justify-center bg-cover bg-center w-full"
    style={{ backgroundImage: `url(${ermImg})` }}
  >
    <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg mt-16">
      Service
    </h1>
  </div>
</div>


      {/* Breadcrumb */}
      <div className="px-4 md:px-20 py-4 text-gray-600 text-sm">
        <span className="font-semibold">HOME</span>
        <span className="mx-2">/</span>
        <span className="text-orange-500 font-semibold">SERVICES</span>
      </div>

      {/* Services in Delhi Section */}
      <div className="px-4 md:px-20 py-10 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Services in Delhi</h2>
          <p className="text-gray-700">
            At our core, we are dedicated to delivering innovative solutions that enhance functionality, aesthetics,
            and overall efficiency. Our tailored strategies ensure optimal results, maximizing the value of your
            space while maintaining visual appeal.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Space Optimization:</strong> We specialize in designing smart, flexible layouts that maximize available space. Our solutions focus on improving flow, enhancing usability, and ensuring comfort without compromising aesthetics.</li>
            <li><strong>Enhanced Efficiency:</strong> Our strategies prioritize functionality, ensuring each element serves a purpose. By leveraging intelligent design, we streamline processes, saving both time and resources.</li>
            <li><strong>Smart Storage Solutions:</strong> From innovative shelving to multi-functional furniture, our designs are tailored to provide ample storage without overcrowding your space, ensuring organization and ease of access.</li>
          </ul>
        </div>
        <div className="lg:w-1/3">
          <img src={seoIllustration} alt="SEO Services" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Our Services Cards */}
      <div className="bg-gray-50 py-16">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive solutions designed to empower your business with innovation, functionality, and seamless user experiences.
          </p>
        </div>

        <div className="px-4 md:px-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="ERP/CRM Software"
            description="Boost efficiency with customized CRM solutions that manage clients, leads, dashboards, and data analytics."
            bgColor='bg-orange-500'
          />
          <ServiceCard
            title="Website Design"
            description="Our web design services ensure responsive and visually appealing websites that engage users across platforms."
            bgColor="bg-blue-500"
          />
          <ServiceCard
            title="Web Development"
            description="Our experts build high-performance websites tailored to meet the unique needs of your target audience."
            bgColor="bg-green-500"
          />
        </div>
      </div>

      <ServicesCardSec />
      <SEOSection />
      <SiteAuditSection/>
    </div>
  );
};

// ✅ Updated ServiceCard with background hover effect (text remains fixed)
const ServiceCard = ({ title, description, bgColor }) => (
  <div className={`p-6 rounded-xl shadow-md text-center transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:scale-[1.03] ${bgColor}`}>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-white mb-4">{description}</p>
    <button className="text-white font-semibold hover:underline">Read More</button>
  </div>
);


export default ServicePage;
