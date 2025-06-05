import React from "react";
import ermImg from "../../assets/bg.jpg"; // Banner image

const industries = [
  {
    title: "Education Industry",
    description:
      "We provide scalable and innovative IT solutions tailored for the education sector, improving digital learning platforms, student management systems, and virtual classrooms for enhanced engagement and accessibility.",
  },
  {
    title: "Retail Industry",
    description:
      "Our technology solutions optimize retail operations through inventory management systems, POS integration, customer analytics, and personalized shopping experiences, both online and in-store.",
  },
  {
    title: "Healthcare Industry",
    description:
      "Delivering secure and efficient healthcare tech solutions like EHR systems, telemedicine platforms, and AI-driven diagnostics to streamline patient care and operational workflows.",
  },
  {
    title: "Banking & Finance Industry",
    description:
      "Empowering financial institutions with fintech solutions including digital wallets, secure transactions, data analytics, and customer portals to improve user trust and convenience.",
  },
  {
    title: "E-Commerce Industry",
    description:
      "We craft e-commerce platforms that are fast, user-friendly, and mobile-responsive, with features like secure payment gateways, inventory automation, and personalized recommendations.",
  },
];


const Blog = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        {/* <img src={seoBanner} alt="SEO Banner" className="w-full h-64 object-cover" /> */}
        <div  className="relative h-64 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${ermImg})` }}>
          <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg">Industries</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-6 text-sm text-gray-600">
        <span className="text-orange-600 font-semibold">HOME</span> /{" "}
        <span className="font-semibold">BLOG</span>
      </div>

      {/* Industry Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-gray-600 mb-6">
          At our core, we deliver tailor-made industry-specific solutions that drive digital transformation. From education to finance, our expertise helps businesses thrive in a competitive digital era.
        </p>

        <div className="space-y-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Blog;
