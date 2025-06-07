// src/components/Topics.jsx
import React from "react";
import { Link } from "react-router-dom";
import ermImg from "../../assets/bg.jpg";

const topics = [
  {
    title: "Angular",
    content: "A powerful framework for building dynamic web apps using TypeScript and component-based architecture.",
  },
  {
    title: "Node Js",
    content: "A backend JavaScript runtime built on Chrome's V8 engine, ideal for building scalable network applications.",
  },
  {
    title: "Php",
    content: "A popular general-purpose scripting language suited for web development and server-side scripting.",
  },
  {
    title: "Laravel",
    content: "A PHP framework offering elegant syntax, built-in tools, and MVC architecture for web development.",
  },
  {
    title: "Cake Php",
    content: "A rapid development PHP framework that provides structure and reusable components for building web applications.",
  },
  {
    title: "Python",
    content: "A versatile, high-level programming language widely used for web, data science, AI, and more.",
  },
  {
    title: "Symfony",
    content: "A robust PHP framework for large-scale web projects, offering reusable components and strong community support.",
  },
  {
    title: "React Js",
    content: "A front-end JavaScript library for building user interfaces using components and a virtual DOM.",
  },
  {
    title: "Web Development",
    content: "The process of creating websites and web apps using various tools, frameworks, and languages like HTML, CSS, JS.",
  },
];

const WhatsApp = () => {
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

export default WhatsApp;
