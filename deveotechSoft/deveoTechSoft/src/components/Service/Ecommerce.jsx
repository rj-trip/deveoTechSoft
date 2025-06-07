// src/components/Topics.jsx
import React from "react";
import { Link } from "react-router-dom";
import ermImg from "../../assets/bg.jpg";

const topics = [
  {
    title: "Magento Development",
    content: "Creating robust and scalable e-commerce websites using Magento, ideal for large and complex online stores.",
  },
  {
    title: "E-Commerce Customization",
    content: "Tailoring e-commerce platforms to meet specific business needs, including custom features and user experiences.",
  },
  {
    title: "Shopify Development",
    content: "Building and customizing online stores with Shopify to provide seamless shopping experiences and easy management.",
  },
  {
    title: "WooCommerce Development",
    content: "Extending WordPress functionality by developing e-commerce solutions using the WooCommerce plugin.",
  },
];

const Ecommerce = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="relative h-64 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${ermImg})` }}
        >
          <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg">
            Web Topics
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-6 text-sm text-gray-600">
        <span className="text-orange-600 font-semibold">HOME</span> /{" "}
        <span className="font-semibold">TOPICS</span>
      </div>

      {/* Topic Cards */}
      <div className="max-w-6xl mx-auto px-4 mt-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">Explore Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Link to='/blog' key={index}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{topic.title}</h3>
                <p className="text-gray-700 text-sm">{topic.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
