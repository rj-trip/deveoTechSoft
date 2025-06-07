// src/components/Topics.jsx
import React from "react";
import { Link } from "react-router-dom";
import ermImg from "../../assets/bg.jpg";

const topics = [
  {
    title: "Digital Marketing",
    content: "The strategy of promoting products or services using digital channels like websites, search engines, and social media.",
  },
  {
    title: "SEO Services",
    content: "Techniques to improve a website’s visibility on search engines, increasing organic traffic and rankings.",
  },
  {
    title: "Social Media Marketing",
    content: "Using platforms like Facebook, Instagram, and Twitter to promote brands, engage audiences, and drive traffic.",
  },
  {
    title: "PPC Advertising",
    content: "A model of internet marketing where advertisers pay a fee each time their ad is clicked, commonly used in search engines.",
  },
  {
    title: "Content Marketing",
    content: "Creating and distributing valuable, relevant content to attract, inform, and engage a target audience.",
  },
  {
    title: "Email Marketing",
    content: "Sending commercial messages to a group of people via email to promote products, services, or nurture leads.",
  },
  {
    title: "Analytics & Reporting",
    content: "The process of tracking, analyzing, and reporting marketing performance data to make informed decisions.",
  },
];

const Digital = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="relative h-64 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${ermImg})` }}
        >
          <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg">
            Ecommerce
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

export default Digital;
