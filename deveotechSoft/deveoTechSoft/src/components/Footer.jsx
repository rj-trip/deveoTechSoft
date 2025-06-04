import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  const usefulLinks = [
    "About Us", "FAQ", "Testimonials", "Clients", "Blogs", "Contact Us", "Sitemap"
  ];

  const paidMarketing = [
    "Google Ads", "Youtube Advertising", "Linkedin Ads"
  ];

  const digitalMarketing = [
    "Facebook ads Instagram Ads", "X Ads", "Guaranteed SEO Traffic Plans",
    "Paid Marketing", "Social Media Marketing", "Content Marketing",
    "Reputation Management", "GMB", "Influencer Marketing"
  ];

  const additionalServices = [
    "Guaranteed SEO Traffic Plans", "Global SEO", "International PPC",
    "Cross-Border E-commerce Marketing", "Social Media for International Brands", "Success Stories"
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-30 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {/* Useful Links */}
          <div className="space-y-3">
            <h3 className="text-white text-lg font-semibold">
              Useful <span className="text-orange-500">Links</span>
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300">
                    <span className="text-orange-500 mr-2">»</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Paid Marketing */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">
              Paid <span className="text-orange-500">Marketing</span>
            </h3>
            <ul className="space-y-2">
              {paidMarketing.map((service, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300">
                    <span className="text-orange-500 mr-2">»</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">
              Digital <span className="text-orange-500">Marketing</span>
            </h3>
            <ul className="space-y-2">
              {digitalMarketing.map((service, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300">
                    <span className="text-orange-500 mr-2">»</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div className="space-y-4 hidden xl:block">
            <h3 className="text-white text-lg font-semibold">
              Additional <span className="text-orange-500">Services</span>
            </h3>
            <ul className="space-y-2">
              {additionalServices.map((service, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300">
                    <span className="text-orange-500 mr-2">»</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:col-span-2 xl:col-span-1">
            <h3 className="text-white text-lg font-semibold">
              Have Any <span className="text-orange-500">Question?</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Address: B4/351 2nd Floor Sec-08, Rohini, Delhi-110085
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-500 flex-shrink-0" size={18} />
                <p className="text-gray-400 text-sm">
                  Phone No: +91 7011640018, 01143003926
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500 flex-shrink-0" size={18} />
                <p className="text-gray-400 text-sm">
                  Email Id: info@deveotech.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Deveotech. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons - Right Side on small screens */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2 pointer-events-none md:items-end">
        {/* WhatsApp */}
        <a
          href="https://wa.me/917011640018"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.4 0 0 5.4 0 12a11.89 11.89 0 0 0 1.68 6.12L0 24l5.9-1.56A11.92 11.92 0 0 0 12 24c6.6 0 12-5.4 12-12a11.78 11.78 0 0 0-3.48-8.52zM12 21.6a9.59 9.59 0 0 1-4.8-1.28l-.36-.2-3.48.92.92-3.36-.24-.36A9.59 9.59 0 1 1 21.6 12c0 5.28-4.32 9.6-9.6 9.6zm5.28-7.08c-.28-.12-1.64-.8-1.88-.88s-.44-.12-.64.16-.72.88-.88 1.04-.32.2-.6.08a7.8 7.8 0 0 1-2.32-1.44 8.25 8.25 0 0 1-1.56-2.04c-.16-.28 0-.44.12-.6s.28-.32.4-.48.2-.28.28-.44a.53.53 0 0 0 0-.52c-.08-.16-.6-1.44-.84-2-.24-.6-.48-.48-.64-.48H7.2c-.16 0-.4.04-.6.28s-.8.8-.8 1.96.8 2.28.92 2.44c.12.16 1.6 2.44 3.88 3.4.54.24.96.36 1.28.48.54.16 1.04.12 1.44.08.44-.04 1.36-.56 1.56-1.12s.2-1.04.16-1.12c-.08-.12-.24-.16-.52-.28z" />
          </svg>
        </a>

        {/* Message Icon with Tooltip and Form */}
        <div className="relative group pointer-events-auto">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </button>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Enter query
          </div>
        </div>

        {/* Call Button */}
        <a
          href="tel:+917011640018"
          className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
        >
          <Phone size={24} />
        </a>
      </div>

      {/* Enquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-grey bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Enquiry Form</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border px-3 py-2 rounded" required />
              <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" required />
              <textarea placeholder="Your query" className="w-full border px-3 py-2 rounded h-24" required />
              <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
