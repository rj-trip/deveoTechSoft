import React, { useState } from 'react';

const tabData = {
  'Web Development': `
    **Web Development Services**

    **Custom Website Development**
    "We design and develop tailored websites that align with your business goals..."

    **E-commerce Development**
    "We build robust e-commerce platforms to enhance your online sales..."

    **CMS Development**
    "Our team develops intuitive and scalable content management systems..."

    **Web Application Development**
    "We create powerful web applications that deliver dynamic functionality..."

    **API Integration Services**
    "Our API integration services enable your systems to work seamlessly..."
  `,
  'SEO Services': `
    **SEO Services**

    We offer comprehensive SEO strategies to improve your online presence...
  `,
  'SEO Process': `
    **SEO Process**

    Our SEO process includes auditing, keyword research, technical optimization...
  `,
  'Search Backlinks': `
    **Search Backlinks**

    Build authority and improve rankings through high-quality backlink acquisition...
  `,
  'Local SEO': `
    **Local SEO**

    Optimize your business to rank in local search results and drive foot traffic...
  `,
  'Ecommerce SEO': `
    **Ecommerce SEO**

    Tailored SEO strategies for ecommerce platforms to increase product visibility...
  `,
  'Global SEO': `
    **Global SEO**

    Expand your reach across international markets with multilingual SEO...
  `,
};

const SEOSection = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  return (
    <div className="px-4 md:px-20 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Our Comprehensive SEO Services</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Our comprehensive SEO services are designed to boost your online visibility and drive targeted traffic...
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded border ${
              activeTab === tab ? 'bg-orange-500 text-white' : 'bg-white text-black border-orange-500'
            } transition duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white shadow-md p-6 rounded-md text-gray-800 whitespace-pre-wrap">
        {tabData[activeTab]}
      </div>
    </div>
  );
};

export default SEOSection;
