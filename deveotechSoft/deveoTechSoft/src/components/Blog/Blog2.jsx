import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Search } from 'lucide-react';
import ermImg from '../../assets/bg.jpg'; // Assuming this is a generic background image
import blog from '../../assets/blog.jpg'
import blog2 from '../../assets/blog2.jpg'

const blogPosts = [
  {
    title: 'Different types of Ecommerce Websites: All you need to know about Ecommerce websites',
    date: '11 Jun, 2025. Wed',
    author: 'Suresh Bind',
    excerpt:
      'This article provides insights about different types of ecommerce websites, needs of ecommerce development companies and related questions.',
    description: `
      <h2 class="text-xl font-bold mb-3 text-orange-600">Overview</h2>
      <p class="mb-3 text-base">
Ecommerce in simple language is selling and buying items on the internet. The concept of ecommerce has revolutionized the way of business operations and how customers used to shop for the same. Ecommerce is for all, whether a new startup has begun its operations or an established brand. Everyone needs digital footprints in this digital world and businesses see huge success due to their promotion and ecommerce setup. For ecommerce a business needs a website and background operations which keeps the business running. There are various types of ecommerce websites which are made on the basis of need and volume of business.      </p>
      <p class="mb-4 text-base">
        There are several types of ecommerce websites, tailored to the specific business models and needs. Let’s explore the most common ones.
      </p>

      <h2 class="text-xl font-bold mb-3 text-orange-600">Types of Ecommerce Websites</h2>
      <p class="mb-2">There are various types of Ecommerce websites designed to cater the type of business model and the volume of business. Here we will mention some common types of ecommerce website:</p>
      <ul class="list-disc list-inside ml-4 mb-4 text-base">
        <li class="mb-1"><strong>B2C (Business to Consumer):</strong> This model is one of the most common and popular models, where the business sells directly to the customer. In this model of website, the customer connects to the seller directly and gets products shipped. Examples of this website include Amazon, Walmart, Nike etc.</li>
        <li class="mb-1"><strong>B2B (Business to Business):</strong> This model of website is created to sell the products to other business owners. This model sells the products on a large scale so that they can sell to consumers by making their own profit. This model works for wholesale business where company and customer has the middle man who connects them both by taking bulk from the company and selling to customers on a small scale. Examples of this website include Alibaba, Indiamart, Grainger etc.</li>
        <li class="mb-1"><strong>C2C (Consumer to Consumer):</strong> This type of website allows the consumer to sell directly to the consumer without having the middle man for the business. This platform also works well with the consumers who want to sell or buy directly from the consumer. Examples of this website include eBay, Olx, Craigslist etc.</li>
        <li class="mb-1"><strong>C2B (Consumer to Business):</strong>This is another type of Ecommerce website where the consumer sells services or products to the company. This is a less common model and is becoming popular with the new work practices and jobs. Different freelancing platforms and businesses who take products from the consumers and market them as their own works on this model. Examples of this website include Upwork, Fiverr, Chegg etc.</li>
      </ul>

      <h2 class="text-xl font-bold mb-3 text-orange-600">Why do Ecommerce Websites for Business matter the most?</h2>
      <p class="mb-3 text-base">Ecommerce is not just an online store, but it has the power to change fortune within no time, if used and marketed strategically. Ecommerce makes the presence of business in the whole world without actually any store in any part of the world. Ecommerce makes your products click away for all people around the world and makes chances of higher sales.  The other advantages of ecommerce are listed below:</p>
      <ul class="list-disc list-inside ml-4 mb-4 text-base">
        <li class="mb-1">Products are available around the globe, 24/7.</li>
        <li class="mb-1">The products are cost effective.</li>
        <li class="mb-1">Products get direct insights from customers, which helps to improve the quality.</li>
        <li class="mb-1">Businesses have greater chances to scale up by adding new products and enhancing the existing.</li>
        <li class="mb-1">Ecommerce helps to build the brand and customer journey can be made excited by tailored experiences.</li>
        <li class="mb-1">Ecommerce made the brand presence worldwide without spending too much on physical advertisements.</li>
      </ul>

      <h2 class="text-xl font-bold mb-3 text-orange-600">Why do you need Ecommerce Development Company for Your Business?</h2>
      <p class="mb-3 text-base">Ecommerce development companies are specialized in building the online stores, websites and other services required for the business to be online. They have a team of experts at disposal for the website development. Ecommerce website is a complex process and needs expert persons for the same to make the customer experience easy and smooth. Here are the list of services they offer for smooth functioning of ecommerce business.</p>
      <ul class="list-disc list-inside ml-4 mb-4 text-base">
        <li class="mb-1">Help to custom website design and development or can make as per the requirement of the business owner.</li>
        <li class="mb-1">Make the website designs attractive and easy to navigate within the pages</li>
        <li class="mb-1">Helps to keep the contents catchy so that customer remain interested for buying</li>
        <li class="mb-1">Integrate the shopping cart in the website</li>
        <li class="mb-1">Setup payment gateways</li>
        <li class="mb-1">Setup security implementation</li>
        <li class="mb-1">Mobile responsiveness</li>
        <li class="mb-1">SEO optimization</li>
      </ul>
      <p class="mt-2 mb-2">The company remains in constant touch with the business establishment for the updates, bugs, security and other services required from time to time for sales and growth. Hiring a good company with experience in digital marketing and ecommerce will benefit the business to attain the goals.</p>

      <h2 class="text-xl font-bold mb-3 text-orange-600">Which are the Best Website Platforms for Ecommerce?</h2>
      <p class="mb-2">There are various websites for the ecommerce and choosing the right one can be the game changer for the business. Here is the list of best ecommerce platforms in the market:</p>
      <ul class="list-disc list-inside ml-4 mb-4 text-base">
        <li class="mb-1"><strong>Shopify:</strong> It is user-friendly and feature-rich, ideal for beginners and growing businesses.</li>
        <li class="mb-1"><strong>WooCommerce:</strong> It is great for those who want flexibility and already use WordPress.</li>
        <li class="mb-1"><strong>Magento:</strong> It is powerful and scalable, suitable for large enterprises with complex needs.</li>
        <li class="mb-1"><strong>BigCommerce:</strong> It is cloud-based, scalable, and offers strong built-in features.</li>
        <li class="mb-1"><strong>Wix Ecommerce:</strong>It is best for small businesses and creative sellers looking for a simple, drag-and-drop solution.</li>
      </ul>
      <p class="mt-2 mb-2">All these platforms are great but choosing a right for your business can make the difference. People need to choose as per the requirement, budget and technical skills. Hiring an Ecommerce expert team can help to choose the best for your business.</p>

      <h2 class="text-xl font-bold mb-3 text-orange-600">Why do you need an Ecommerce Website Agency?</h2>
      <p class="mb-3 text-base">Hiring an ecommerce website agency can change the fortunes of the company and goes beyond developing only websites. It also helps build the sales and identify the limitations that have a negative effect on sales. These agencies offer the services like:</p>
      <ul class="list-disc list-inside ml-4 mb-4 text-base">
        <li class="mb-1">Strategy and planning</li>
        <li class="mb-1">UX/UI design</li>
        <li class="mb-1">Digital marketing and SEO</li>
        <li class="mb-1">Ongoing maintenance and updates</li>
        <li class="mb-1">Performance analytics</li>
        </ul>

      <h2 class="text-xl font-bold mb-3 text-orange-600">Conclusion</h2>
      <p class="mb-3 text-base">
Ecommerce is the only option to survive in this competitive and fast paced online market. You have to decide which ecommerce website model fits your business and hire an expert company who can do it for your business. Hiring the services for ecommerce not only makes your business run smoothly but it also increases your sales and profit margins. The other benefit is that companies have a digital footprint globally and can get the attention of customers anywhere in the world. Without the help of an ecommerce Development Company, your business may suffer and may take a lot of time to grow in the traditional way, which is dying slowly.      </p>
    `,
    image: blog2,
    path: '/blog2',
  },
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
];

const categories = [
  'Digital Growth',
  'Web Development',
  'Digital Marketing',
  'UI/UX Design',
  'Mobile App Development',
  'CMS & Ecommerce',
  'E-commerce Development',
];

export default function BlogHomePage() {
  const featuredPost = blogPosts[0];

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

      <div className="flex flex-col md:flex-row w-full p-4 md:p-10 gap-6">
        {/* Left Section - Main Blog Content */}
        <div className="w-full md:w-4/5 pr-2">
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
              <div className="bg-gray-10 p-4 rounded-md shadow-sm mb-4 border border-gray-200">
                <div
                  className="text-gray-700 text-base leading-relaxed tracking-wide"
                  dangerouslySetInnerHTML={{ __html: featuredPost.description }}
                />
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-white w-full p-6 pt-2 md:p-12 mt-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-orange-600 mb-4">Leave a Comment</h4>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                <textarea
                  id="comment"
                  rows="4"
                  placeholder="Write your comment..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out text-base"
              >
                Submit Comment
              </button>
            </form>
          </div>

          {/* Display Comments */}
          <div className="mt-10">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Comments</h4>
            <div className="space-y-6">
              {[
                {
                  name: 'Anjali Verma',
                  message: 'This was super informative! Loved the breakdown of 2025 trends.',
                },
                {
                  name: 'Rohit Sharma',
                  message: 'Excited to see how AI will continue to shape development!',
                },
                {
                  name: 'Sneha Patel',
                  message: 'Well-written and very relevant. Looking forward to more blogs like this!',
                },
              ].map((comment, idx) => (
                <div key={idx} className="border-b pb-4 last:border-b-0">
                  <h5 className="font-semibold text-gray-700 text-base">{comment.name}</h5>
                  <p className="text-gray-600 text-sm mt-1">{comment.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Sidebar */}
        <div className="hidden md:block w-full md:w-1/5">
          <div className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto pr-2">
            {/* Search Box */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-base"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
            </div>

            {/* Recent Posts */}
            <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Recent Posts</h4>
              <div className="space-y-4">
                {blogPosts.map((post, index) => (
                  <Link
                    to={post.path}
                    key={index}
                    className="flex gap-4 items-center p-2 rounded-md hover:bg-gray-50 transition duration-200 ease-in-out group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="hidden lg:block w-16 h-16 object-cover rounded-md flex-shrink-0"
                    />
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition">
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
            <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Blog Categories</h4>
              <ul className="space-y-2 list-disc list-inside">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="text-gray-800 hover:text-orange-500 cursor-pointer text-base"
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