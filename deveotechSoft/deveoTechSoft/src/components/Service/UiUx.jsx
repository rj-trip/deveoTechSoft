// src/components/Topics.jsx
import React from "react";
import { Link } from "react-router-dom";
import ermImg from "../../assets/bg.jpg";

const topics = [

  {
    title: "User Interface Design",
    content: "The process of designing visually appealing and interactive interfaces that guide users through an application.",
  },
  {
    title: "User Experience Design",
    content: "Focusing on the overall experience a user has while interacting with a product, ensuring satisfaction and ease of use.",
  },
  {
    title: "Wireframing",
    content: "Creating basic visual representations of a web page or app layout to plan functionality and content structure.",
  },
  {
    title: "Prototyping",
    content: "Building interactive mockups that simulate user flows and functionality before full-scale development begins.",
  },
  {
    title: "Design Systems",
    content: "A collection of reusable components, standards, and documentation that help maintain consistency in design.",
  },
  {
    title: "Usability Testing",
    content: "Evaluating a product by testing it with real users to identify usability issues and improve the user experience.",
  },
];

const UIUX = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="relative h-64 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${ermImg})` }}
        >
          <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg">
           UIUX
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

export default UIUX;
