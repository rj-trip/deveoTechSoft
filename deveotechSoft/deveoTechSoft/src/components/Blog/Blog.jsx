import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Search } from 'lucide-react';
import ermImg from '../../assets/bg.jpg';

const blogPosts = [
  {
    title: 'Top Web Development Trends to Watch in 2025',
    date: '04 Jun, 2025. Wed',
    author: 'Suresh Bind',
    excerpt:
      'Discover the hottest web development trends of 2025 including serverless architectures, AI-powered coding assistants, and faster frontend frameworks.',
    description: `As we move deeper into the digital age, web development continues to evolve at an unprecedented pace. The year 2025 is expected to bring significant innovations and refinements in how websites and web applications are built, deployed, and experienced by users. One of the most noticeable trends is the shift toward serverless architectures. By offloading server management to cloud providers like AWS Lambda, Google Cloud Functions, and Azure Functions, developers can focus solely on writing business logic while gaining improved scalability and reduced operational costs.

Another major advancement is the growing integration of AI-powered coding tools. Platforms such as GitHub Copilot and ChatGPT for developers are revolutionizing how code is written. These tools suggest entire blocks of code, offer real-time debugging assistance, and help automate repetitive programming tasks, greatly increasing developer productivity. As machine learning models continue to improve, these assistants are expected to become even more intuitive and context-aware in 2025.

Frontend frameworks are also getting faster and smarter. React, Vue, and Angular remain dominant, but emerging frameworks like Svelte and Qwik are gaining traction due to their minimal bundle sizes and faster load times. Developers are now prioritizing performance and user experience more than ever. The shift toward micro frontends allows large applications to be broken into smaller, manageable pieces handled by independent teams, which leads to better maintainability and scalability.

Progressive Web Apps (PWAs) are set to become more mainstream. These apps offer offline access, push notifications, and app-like experiences right from the browser, eliminating the need for separate mobile apps. Google and Microsoft are pushing PWA adoption by making them easier to publish and access through app stores.

Another rising trend is motion UI. Users today expect dynamic and engaging interfaces, and motion design helps guide attention, improve navigation, and deliver a polished experience. Libraries like Framer Motion and GSAP are empowering developers to add smooth transitions and animations without compromising performance.

Cybersecurity remains a top priority. With increasing threats and data breaches, developers are embedding security from the ground up — using HTTPS, enforcing strict content security policies, integrating two-factor authentication, and following secure coding practices.

Web 3.0 and decentralized applications are gaining interest as blockchain technology matures. Though still early in adoption, developers are beginning to explore the potential of peer-to-peer apps, crypto payments, and tokenized ecosystems.

Lastly, accessibility and inclusivity are not optional anymore. Tools and frameworks are being built with features like screen-reader support, keyboard navigation, and color contrast utilities out of the box. In 2025, businesses understand that accessible websites not only improve user experience but also expand audience reach and meet legal requirements.

To summarize, web development in 2025 is all about speed, intelligence, and user-centric design. Whether it’s adopting AI tools, embracing new frameworks, ensuring top-notch security, or focusing on accessibility, developers who stay ahead of these trends will lead the future of the internet. Staying informed and continuously learning will be the key to success in this fast-evolving digital landscape.`,
    image: 'https://i.ibb.co/Fm9Cgpn/blog1.png',
    path: '/blog',
  },
  {
    title: 'How Digital Marketing is Transforming Online Businesses',
    date: '02 Jun, 2025. Mon',
    author: 'Suresh Bind',
    excerpt:
      'From SEO to influencer marketing, explore how digital marketing strategies are helping businesses scale in 2025.',
    image: 'https://i.ibb.co/BTmXT19/blog2.png',
    path: '/blog',
  },
  {
    title: 'UI/UX Design: Best Practices for 2025',
    date: '31 May, 2025',
    author: 'Suresh Bind',
    excerpt:
      'Stay ahead with the top UI/UX design tips that focus on user-centered design, accessibility, and smooth user journeys.',
    image: 'https://i.ibb.co/yYbCJYp/blog3.png',
    path: '/blog',
  },
];

const categories = [
  'Web Development',
  'Digital Marketing',
  'UI/UX Design',
  'Mobile App Development',
  'CMS & Ecommerce',
  'E-commerce Development',
];

export default function BlogHomePage() {
  const featuredPost = blogPosts[0]; // only first post for main view

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full">
        <div
          className="relative h-74 flex items-center justify-center bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${ermImg})` }}
        >
          <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg mt-16">
            Blogs
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full p-4 md:p-10 gap-6 min-h-screen">
        {/* Left Section: Only one main blog */}
        <div className="w-full md:w-4/5 max-h-screen overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <div className="text-orange-500 flex items-center text-sm mb-2">
                <CalendarDays className="w-4 h-4 mr-1" />
                {featuredPost.date}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 text-base mb-4">{featuredPost.excerpt}</p>

              <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-4 border border-gray-200">
                <h4 className="text-lg font-semibold mb-2 text-orange-600">
                  In-depth Overview
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed tracking-wide whitespace-pre-line">
                  {featuredPost.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        

        {/* Right Section: Recent Posts and Categories */}
        <div className="w-full md:w-1/5">
          <div className="sticky top-0 max-h-screen overflow-y-auto pr-2">
            {/* Search Box */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Recent Post</h4>
              <div className="space-y-4">
                {blogPosts.map((post, index) => (
                  <Link
                    to={post.path}
                    key={index}
                    className="flex gap-4 hover:underline"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">
                        {post.title.length > 45
                          ? post.title.slice(0, 45) + '...'
                          : post.title}
                      </h5>
                      <div className="flex items-center text-xs text-gray-500 gap-2 mt-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog Categories */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Blog Categories</h4>
              <ul className="space-y-2 list-disc list-inside">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="text-gray-800 hover:text-orange-500 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow border border-gray-200">
        <h4 className="text-xl font-semibold text-orange-600 mb-4">Leave a Comment</h4>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
            <textarea
              rows="4"
              placeholder="Write your comment..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}
