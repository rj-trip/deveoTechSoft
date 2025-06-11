import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Search } from 'lucide-react';
import ermImg from '../../assets/bg.jpg'; // Assuming this is a generic background image
import blog from '../../assets/blog.jpg'
import blog2 from '../../assets/blog2.jpg'
const blogPosts = [
  {
    title: 'Your Digital Growth Partner: Finding the Right Web Development, Digital Marketing & Software Company in Delhi', // Updated title
    date: '11 Jun, 2025. Wed', // Updated date to today's date
    author: 'Suresh Bind', // Keeping author as provided
    excerpt:
      'This article provides the parameters necessary for finding the right web development company in Delhi. The article also gives a detailed overview of the tasks that a good web development company should do.', // Updated excerpt
    description: `
      <h2 class="text-2xl font-bold mb-4 text-orange-600">Overview</h2>
      <p class="mb-3">
        In this world of digital technology and hyper-connected world,
        digital growth is no longer a buzzword but the foundation of modern businesses.
        Digital growth is the need of every business from small vendor to highly
        established brands because of the change in customer behavior. Digital
        marketing involves various parameters for the growth like building responsive
        website, creating powerful software solution and running a targeted marketing
        campaigns or ranking the website higher on search engines. Every component of
        the marketing plays a crucial role in brand building and help to get sales.
      </p>
      <p class="mb-3">
        To build such a brand value through online, that is where the right partner for the
        digital marketing is important. To build a good online setup, company need to
        do hire a good reputable digital marketing company to meet the demands and
        expectations for the growth. In India working with software agency in Delhi or
        a specialized SEO company in Delhi can bring local market insights, faster
        communication and better alignment of business goals.
      </p>
      <p class="mb-3">
        In this blog, we’ll look deep into how these services supports the growth and what to
        look for, when choosing a partner for digital marketing.
      </p>

      <h2 class="text-2xl font-bold mb-4 mt-6 text-orange-600">1. The Role of a Web Development Company in Building Your Brand</h2>
      <p class="mb-3">
        Website plays an important role in the first impression of the potential customers.
        Based on the look, feel and functionality of the website, customers decided in
        minutes whether to leave or stay on the website. This is where an experience
        web development company plays a crucial role in making smart and attractive
        necessities to make the customer to stay and purchase form the website.
      </p>
      <h3 class="text-xl font-semibold mb-2 mt-4">There are various facilities provided by a good web development company like:</h3>
      <ul class="list-disc list-inside ml-4 mb-4">
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Custom and attractive designs with Development:</h4> A good web development company builds a
          tailor-made website according to the need of the client and designed to align
          with the brand identity of the client. They can also ask for changes as per
          their requirement and need which can be beneficial for the business to growth
          and customer friendly.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Website with Speed and Performance:</h4> Slow
          website kills sales and makes the customers unattractive for the items. This
          can harm the brand value and can affect the sales of the company. So, having a
          good fast website is essential for the brand and sales to grow.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Website Responsive Design:</h4> The design
          of the website should be functional on all devices with smoothly. More than 60%
          of the web traffic comes from mobile and having a good website response on the
          mobile and other devices can help to get more sales and customers. So, having a
          responsive and all device compatible website is essential and helpful.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Website security:</h4> Website
          security is one of the biggest aspect of the website development. With rise in
          cyber threats and scams on websites, It is important to hire a good web
          development team who can tackle these limitations and makes the data and site
          safe for the visitors.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Website to increase Scalability:</h4> A good and
          smooth website has always the advantage to scale up the business. A solid
          backend and CMS allow for easy content updates and feature additions.
        </li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-6 text-orange-600">2. Why You Need a Digital Marketing Company</h2>
      <p class="mb-3">
        Building a beautiful website or software platform is only the beginning of ecommerce
        business. The important part of ecommerce is the right marketing strategies,
        which help to build the business grow or it will go unnoticed leading to no
        benefit of website. To fill the gap, digital marketing company becomes
        essential for this purpose.
      </p>
      <h3 class="text-xl font-semibold mb-2 mt-4">What a Digital Marketing Company Brings to the Table:</h3>
      <ul class="list-disc list-inside ml-4 mb-4">
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">SEO:</h4> First
          important skill that makes the website went noticed is the SEO (Search Engine
          Optimization). Optimizing the content in the website plays important roles and
          makes your website to appear in higher Google search results. Which makes it
          visible and helps to increase the digital foot print of customers on the
          website?
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Social Media Marketing:</h4> Social
          media marketing is powerful to build an engaged community on platforms like
          Instagram, Facebook, LinkedIn, and Twitter. These help to increase the digital
          footprint and can encourage their friend and followers to visit the site by
          doing promotions.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Pay-Per-Click (PPC):</h4> Running
          targeted ads on Google, YouTube, and social media for instant visibility.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Content Marketing:</h4> Creating
          blogs, videos, infographics, and other content that drives organic traffic and
          builds trust.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Email Marketing:</h4> Keeping
          your audience informed and nurtured through newsletters and automated email
          sequences.
        </li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-6 text-orange-600">3. The Impact of Software Development Company on Business Efficiency</h2>
      <p class="mb-3">
        In this modern era, every successful modern business is suite a powerful software
        solutions. Whether, it is a CRM inventory management systems, analytics
        dashboards, or mobile apps. A software development company helps to design
        develop and maintain these digital tools to optimize operations and boost
        productivity.
      </p>
      <h3 class="text-xl font-semibold mb-2 mt-4">Key Services Offered by Software Development Company:</h3>
      <ul class="list-disc list-inside ml-4 mb-4">
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Custom Software Development:</h4> Tailor-made
          applications to solve your unique business challenges.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Enterprise Software Solutions:</h4> ERP, HRM,
          or finance tools designed for mid to large-scale organizations.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Mobile App Development:</h4> From
          Android and iOS apps to cross-platform solutions using Flutter or React Native.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Cloud-Based Applications:</h4> Scalable
          and secure apps that can be accessed from anywhere in the world.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Maintenance and Support:</h4> Ongoing
          updates, bug fixes, and enhancements to keep your systems running smoothly.
        </li>
      </ul>
      <p class="mb-3">
        Choosing the right software development company involves more than just technical expertise.
        Ensure the company follows agile development practices, provides detailed
        documentation, and has a collaborative approach to project management.
      </p>

      <h2 class="text-2xl font-bold mb-4 mt-6 text-orange-600">4. Why Work with a Software Agency in Delhi?</h2>
      <p class="mb-3">
        India has developed into a major global centre for IT services, and software and tech
        companies are increasingly based in Delhi. Working with a Delhi software agency
        provides a special blend of expertise, affordability, and industry knowledge.
      </p>
      <h3 class="text-xl font-semibold mb-2 mt-4">Benefits of a Delhi software agency:</h3>
      <ul class="list-disc list-inside ml-4 mb-4">
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Knowledge of the local market:</h4> Improved product-market fit can result from an understanding of
          regional consumer trends and behavior.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Real-time communication:</h4> Since there aren't any
          significant time zone disparities, teamwork is improved and turnaround times
          are accelerated.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Cost-Effectiveness:</h4> Organizations with
          headquarters in Delhi provide top-notch services at affordable costs.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Talent Pool:</h4> Delhi NCR has access to a
          highly qualified workforce because it is home to some of the best tech
          institutions.
        </li>
      </ul>
      <p class="mb-3">
        When choosing a software agency in Delhi, look for those with
        strong portfolios, client testimonials, and a proven track record in your
        industry. Don’t just go for the lowest quote—focus on long-term value and
        reliability.
      </p>

      <h2 class="text-2xl font-bold mb-4 mt-6 text-orange-600">5. Climb the Ranks with a Top SEO Company in Delhi</h2>
      <p class="mb-3">
        If your potential customers can't find you online, you’re missing out on huge
        opportunities. Search Engine Optimization (SEO) is what puts your brand in
        front of users actively searching for your products or services. A reputed SEO
        company in Delhi can help you dominate search results and drive consistent,
        qualified traffic to your website.
      </p>
      <h3 class="text-xl font-semibold mb-2 mt-4">What to Expect from an SEO Company in Delhi:</h3>
      <ul class="list-disc list-inside ml-4 mb-4">
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Technical SEO:</h4> Site
          structure, page speed, mobile optimization, and security.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">On-Page SEO:</h4> Optimizing
          meta tags, content, headers, and internal linking.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Off-Page SEO:</h4> Building
          high-quality backlinks through outreach and PR.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Local SEO:</h4> Helping you
          appear in local searches through Google My Business optimization and local
          citations.
        </li>
        <li class="mb-2">
          <h4 class="text-lg font-semibold inline">Analytics & Reporting:</h4>
          Transparent, data-driven reporting on traffic, rankings, and ROI.
        </li>
      </ul>
      <p class="mb-3">
        SEO is not a one-time effort—it’s a long-term strategy. The best SEO companies will work
        with you over months (or years) to grow your authority, attract leads, and
        build trust with search engines like Google.
      </p>

      <h2 class="text-2xl font-bold mb-4 mt-6 text-orange-600">Conclusion</h2>
      <p class="mb-3">
        In the digital age, your success hinges on your online presence,
        technical infrastructure, and marketing strategies. A great web development
        company ensures your online platform is impressive and user-friendly. A solid
        software development company powers your operations with smart solutions. A dedicated
        digital marketing company ensures your message reaches the right people. And a
        skilled SEO company in Delhi ensures you're visible to those who matter most.
      </p>
    `, // The full HTML content with Tailwind CSS classes for headings and paragraphs
    image: blog2, // Assuming this image is suitable for digital growth
    path: '/blog', // Changed path for a more specific URL
  },
  // The rest of your existing blog posts remain unchanged
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
    image:blog2,
    path: '/blog',
  },
];

const categories = [
  'Digital Growth', // Added this category for the new post
  'Web Development',
  'Digital Marketing',
  'UI/UX Design',
  'Mobile App Development',
  'CMS & Ecommerce',
  'E-commerce Development',
];

export default function BlogHomePage() {
  const featuredPost = blogPosts[0]; // This will now correctly pick the new Digital Growth post

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
            <span className="text-orange-500 font-semibold">Blog</span>
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

                {/* Using dangerouslySetInnerHTML to render description with HTML and line breaks */}
                <div
                  className="text-gray-700 text-sm leading-relaxed tracking-wide" // Removed whitespace-pre-line as HTML handles spacing now
                  dangerouslySetInnerHTML={{ __html: featuredPost.description }}
                />
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-white w-full p-6 pt-2 md:p-12 mt-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-orange-600 mb-4">Leave a Comment</h4>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                <textarea
                  id="comment"
                  rows="4"
                  placeholder="Write your comment..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out"
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
                  <h5 className="font-semibold text-gray-700">{comment.name}</h5>
                  <p className="text-gray-600 text-sm mt-1">{comment.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

{/* Right Section - Sidebar */}
<div className="hidden md:block w-full md:w-1/5">
  <div className="sticky top-3 max-h-screen overflow-y-auto pr-2">
    {/* Search Box */}
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search Here..."
        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
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
            {/* Hide image below lg breakpoint */}
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