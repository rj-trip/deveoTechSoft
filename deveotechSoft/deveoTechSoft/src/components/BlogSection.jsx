import React from "react";

const blogs = [
  {
    id: 1,
    title: "IoT and Web Design Services: A High Performing Combination",
    date: "23 Apr 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "/blog/iot-web-design-1",
  },
  {
    id: 2,
    title: "IoT and Web Design Services: A High Performing Combination",
    date: "23 Apr 2024",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    link: "/blog/iot-web-design-2",
  },
  {
    id: 3,
    title: "IoT and Web Design Services: A High Performing Combination",
    date: "23 Apr 2024",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    link: "/blog/iot-web-design-3",
  },
];

export default function BlogSection() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blogs</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet voluptatum quas accusantium eligendi consequuntur quod, tenetur minima commodi nulla, facere dolorum mollitia et quae vel repellat?
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-orange-600 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 9h10m-13 5h16M5 21h14"
                    />
                  </svg>
                  {blog.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">
                  {blog.title}
                </h3>
                <button className="mt-4 inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700">
                  View More
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
