import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Search } from 'lucide-react';
import ermImg from '../../assets/bg.jpg';
import blog from '../../assets/blog.jpg'
import blog2 from '../../assets/blog2.jpg'
const allBlogPosts = [
  {
    title: 'Top Web Development Trends to Watch in 2025',
    date: '04 Jun, 2025. Wed',
    author: 'Suresh Bind',
    excerpt:
      'Discover the hottest web development trends of 2025 including serverless architectures, AI-powered coding assistants, and faster frontend frameworks.',
    image: blog,
    path: '/blog',
  },
  {
    title: 'How Digital Marketing is Transforming Online Businesses',
    date: '02 Jun, 2025. Mon',
    author: 'Suresh Bind',
    excerpt:
      'From SEO to influencer marketing, explore how digital marketing strategies are helping businesses scale in 2025.',
    image: blog2,
    path: '/blog',
  },
  {
    title: 'UI/UX Design: Best Practices for 2025',
    date: '31 May, 2025',
    author: 'Suresh Bind',
    excerpt:
      'Stay ahead with the top UI/UX design tips that focus on user-centered design, accessibility, and smooth user journeys.',
    image: blog2,
    path: '/blog',
  },
  {
    title: 'The Rise of AI in Web Development',
    date: '30 May, 2025',
    author: 'Suresh Bind',
    excerpt:
      'AI is shaping the future of web development. Learn how it’s changing workflows and boosting productivity.',
    image:blog,
    path: '/blog',
  },
  {
    title: 'Mastering React in 2025: Tools & Tips',
    date: '29 May, 2025',
    author: 'Suresh Bind',
    excerpt:
      'Level up your React skills with the newest tools and best practices for modern development.',
    image: blog2,
    path: '/blog',
  },
  {
    title: 'Building Mobile Apps with Flutter',
    date: '28 May, 2025',
    author: 'Suresh Bind',
    excerpt:
      'Explore how Flutter is changing the game in mobile app development with single codebase deployment.',
    image: blog,
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
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
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
            {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-orange-500 cursor-pointer">HOME</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-500 font-semibold">ABOUT</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full p-4 md:p-10 gap-6 min-h-screen">
        {/* Left Section */}
        <div className="w-full md:w-4/5 max-h-screen overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((col) => (
              <div className="space-y-6" key={col}>
                {currentPosts
                  .filter((_, idx) => idx % 2 === (col - 1))
                  .map((post, index) => (
                    <Link
                      to={post.path}
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <div className="text-orange-500 flex items-center text-sm mb-2">
                          <CalendarDays className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">
                          {post.title.length > 60
                            ? post.title.slice(0, 60) + '...'
                            : post.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{post.excerpt}</p>
                        <p className="text-red-500 mt-3 text-sm font-semibold">
                          View More →
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-orange-400 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-orange-400 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/5">
          <div className="sticky top-0 max-h-screen overflow-y-auto pr-2">
            {/* Search */}
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
                {allBlogPosts.slice(0, 4).map((post, index) => (
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
    </div>
  );
}
