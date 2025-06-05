import React from "react";
import ermImg from "../../../assets/bg.jpg"; // Banner image


const blogPosts = [
  {
    title: "Top 5 Trends in E-Commerce for 2025",
    date: "June 1, 2025",
    content:
      "E-Commerce is rapidly evolving. In 2025, expect AI-powered personalization, voice commerce, AR try-ons, and more. Learn how to stay ahead of the competition.",
  },
  {
    title: "How AI is Reshaping the Healthcare Industry",
    date: "May 18, 2025",
    content:
      "From faster diagnoses to predictive analytics, Artificial Intelligence is bringing revolutionary changes in healthcare. Here's how your hospital can benefit.",
  },
  {
    title: "Why Every School Needs a Digital Learning Platform",
    date: "April 29, 2025",
    content:
      "Digital classrooms are no longer optional. We explore the best platforms and tools that improve student engagement and management for modern institutions.",
  },
  {
    title: "The Rise of Progressive Web Apps (PWAs)",
    date: "April 20, 2025",
    content:
      "PWAs combine the best of mobile and web apps—fast loading, offline support, and enhanced user experience without app store limitations.",
  },
  {
    title: "Mobile-First Design: Why It Matters in 2025",
    date: "April 10, 2025",
    content:
      "Mobile-first design ensures seamless performance on small screens. Learn how it's reshaping user expectations and digital engagement.",
  },
  {
    title: "Benefits of Cloud Hosting for Small Businesses",
    date: "March 30, 2025",
    content:
      "Cloud hosting offers better performance, reduced costs, and easier scalability—ideal for startups and growing businesses.",
  },
  {
    title: "Choosing the Right Tech Stack for Your Business",
    date: "March 15, 2025",
    content:
      "From MERN to LAMP, explore the pros and cons of popular stacks and choose the one that fits your project goals and scalability.",
  },
  {
    title: "Digital Marketing Strategies That Actually Work",
    date: "March 1, 2025",
    content:
      "From SEO to influencer partnerships, discover actionable strategies to boost your brand visibility and customer acquisition.",
  },
  {
    title: "Cybersecurity Essentials for Modern Businesses",
    date: "February 20, 2025",
    content:
      "Protect your data and systems from growing threats with these must-know cybersecurity practices tailored for 2025.",
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
          <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg">Blogs</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-6 text-sm text-gray-600">
        <span className="text-orange-600 font-semibold">HOME</span> /{" "}
        <span className="font-semibold">BLOG</span>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 mt-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition p-6"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{post.date}</p>
              <p className="text-gray-700 text-sm">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
