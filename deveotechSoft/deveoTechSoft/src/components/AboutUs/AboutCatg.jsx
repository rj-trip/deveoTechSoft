import React from 'react';
import { useParams } from 'react-router-dom';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import ermImg from '../../assets/bg.jpg';

const serviceCategories = [
  {
    title: 'Web Development',
    items: ['Angular', 'Node Js', 'Php', 'Laravel', 'Cake Php', 'Python', 'Symfony', 'React Js'],
  },
  {
    title: 'Digital Marketing',
    items: [],
  },
  {
    title: 'UI/UX Design',
    items: [],
  },
  {
    title: 'Mobile App Development',
    items: [],
  },
  {
    title: 'CMS & Ecommerce',
    items: ['Ecomerce Development'],
  },
  {
    title: 'About Us',
    items: [],
  },
  {
    title: 'Contact Us',
    items: [],
  },
];

const AboutCatg = () => {
  const { subcategory } = useParams();
  const formattedSubcategory = subcategory?.replace(/-/g, ' ').toLowerCase();

  const matchedCategory = serviceCategories.find(cat =>
    cat.items.some(item => item.toLowerCase() === formattedSubcategory)
  );

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
      Technologies
    </h1>
  </div>
</div>


      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">What We Offer</h2>
{/* 
        {matchedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">{matchedCategory.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {matchedCategory.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg">
            You clicked on <strong className="text-blue-600">{formattedSubcategory}</strong>.
            <br /> This is a placeholder for the selected service. More info coming soon.
          </div>
        )} */}
      </div>

      {/* Detailed Explanation Section */}
      <div className="max-w-5xl mx-auto px-4 py-4 space-y-12">
        {/* Web Development */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Web Development</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Web development involves creating, building, and maintaining websites and web applications. It includes frontend technologies like HTML, CSS, JavaScript, and frameworks like React and Angular, along with backend development using Node.js, PHP, Python, etc. Web development ensures a strong online presence and better user experience.
          </p>
        </section>

        {/* Digital Marketing */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Digital Marketing</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Digital Marketing refers to the use of digital channels such as search engines, social media, email, and websites to promote products or services. It includes strategies like SEO, PPC, content marketing, and analytics to reach a targeted audience and increase brand awareness and sales.
          </p>
        </section>

        {/* UI/UX Design */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">UI/UX Design</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            UI (User Interface) Design focuses on the look and feel of a digital product, while UX (User Experience) Design emphasizes the overall user journey and satisfaction. Good UI/UX design ensures usability, accessibility, and visual appeal, ultimately improving user retention and engagement.
          </p>
        </section>

        {/* Mobile App Development */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Mobile App Development</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Mobile App Development is the process of creating software applications that run on mobile devices. It includes native apps for Android and iOS, as well as cross-platform apps built using frameworks like Flutter and React Native. These apps help businesses connect with users on the go.
          </p>
        </section>

        {/* CMS & Ecommerce */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">CMS & Ecommerce</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            CMS (Content Management Systems) like WordPress and Joomla allow easy content creation and management without technical knowledge. E-commerce platforms like Shopify, WooCommerce, and Magento enable businesses to sell products online, manage inventory, and offer seamless user experiences.
          </p>
        </section>

        {/* Ecommerce Development */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Ecommerce Development</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            E-commerce development is the process of building online stores where users can browse products, add them to cart, and securely checkout. It includes features like product catalogs, payment gateway integration, user account management, and responsive design to ensure smooth buying experiences.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutCatg;
