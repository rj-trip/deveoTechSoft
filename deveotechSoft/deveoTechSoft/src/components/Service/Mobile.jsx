// src/components/Topics.jsx
import React from "react";
import { Link } from "react-router-dom";
import ermImg from "../../assets/bg.jpg";

const topics = [
  {
    title: "iOS Development",
    content: "Building mobile applications for Apple's iOS platform using tools like Swift, Xcode, and UIKit or SwiftUI.",
  },
  {
    title: "Android Development",
    content: "Creating mobile apps for Android devices using Java or Kotlin with Android Studio and Jetpack libraries.",
  },
];

const Mobile = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="relative h-64 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${ermImg})` }}
        >
          <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg">
           Mobile and App Development
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

export default Mobile;
