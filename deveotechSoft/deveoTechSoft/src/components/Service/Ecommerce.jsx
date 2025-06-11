import React from 'react';
import bgImg from '../../assets/bg.jpg'; // Ensure these images are relevant to E-commerce
import section1Img from '../../assets/ecommerce.avif';
import section2Img from '../../assets/ecommerce2.avif';
import section3Img from '../../assets/ecommerce3.avif';
import section4Img from '../../assets/ecommerce4.webp';
import section5Img from '../../assets/ecommerce5.jpg';
import section6Img from '../../assets/ecommerce6.jpg';

const EcommerceGuide = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center shadow-lg"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-orange-600 bg-opacity-80 px-6 py-3 rounded-lg shadow-2xl max-[375px]:mx-4 mt-16 text-center">
          Ecommerce: Everything You Need to Know
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-orange-500 cursor-pointer">HOME</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-500 font-semibold">ECOMMERCE</span>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-16 lg:px-32 py-10 space-y-16 text-gray-800">
        {/* Overview Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={section1Img} alt="Ecommerce Overview" className="rounded-lg shadow-md w-full h-full" />
          <div>
            <h2 className="text-3xl font-semibold text-orange-500 mb-4">Overview of Ecommerce</h2>
            <p className="mb-3">
              Ecommerce is the word of mouth today, everywhere you go or surf the internet you will come across the word. Ecommerce has revolutionized the way of business, customer dealing, inventory and the scope of business. Whether the business is small, big or entrepreneur at basic step of business, Ecommerce is what makes the difference and helps to grow unimaginably.
            </p>
            <p className="mb-3">
              In this article, we will give the basic information about all the questions that will be tossing in the mind of a person related to ecommerce. This blog will cover the basic information about Ecommerce, who can do it, what are other names of Ecommerce, what are the benefits, what will be the cost, who can help in building the website for ecommerce etc.
            </p>
          </div>
        </div>

        {/* What is Ecommerce? */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-orange-500 mb-4">What is Ecommerce?</h2>
            <p className="mb-3">
              Ecommerce or electronic commerce, or ecommerce platform refers to the buying and selling of goods on the internet. It helps the business to reach customers without the need for a physical presence.
            </p>
            <p className="mb-3">
              Due to the technological advancements in recent years, Ecommerce has been a trending concept to reach customers without spending much on physical appearance. The concept also suits consumer behavior, and online transactions make the process easier and help businesses to grow unimaginably.
            </p>
          </div>
          <img src={section2Img} alt="What is Ecommerce" className="rounded-lg shadow-md w-full h-full" />
        </div>

        {/* Other Names for Ecommerce */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={section3Img} alt="Ecommerce Names" className="rounded-lg h-full shadow-md w-full h-full" />
          <div>
            <h2 className="text-3xl font-semibold text-orange-500 mb-4">What are the Other Names for Ecommerce?</h2>
            <p className="mb-3">
              Ecommerce or electronic commerce is known by various other names, and some of these names are mentioned below:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Online Shopping</li>
              <li>Internet Commerce</li>
              <li>Digital Commerce</li>
              <li>E-business</li>
              <li>Web Commerce</li>
              <li>Ecommerce platform</li>
              <li>Ecommerce service</li>
            </ul>
          </div>
        </div>

        {/* Who Can Do Ecommerce? */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-orange-500 mb-4">Who Can Do Ecommerce?</h2>
            <p className="mb-3">
              Ecommerce is for all, from a single-person entrepreneur to a large enterprise; ecommerce provides equal opportunities for all to reach target customers. Ecommerce gives an advantage of limiting the physical presence of the business and helps to reach at customer doorsteps. This helps to manage the business and lower the expenses of shops or outlets required for the product.
            </p>
            <p className="mb-3">
              Here is the list of some common participants who can do ecommerce:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Established businesses, who want to increase sales and presence globally.</li>
              <li>Newly established small businesses.</li>
              <li>Startups looking to establish an online presence.</li>
              <li>Brick-and-mortar businesses wanting to expand online.</li>
              <li>Entrepreneurs who want to speed up growth and presence.</li>
              <li>Persons who want to sell products from home without having physical shops and outlets.</li>
              <li>Unique products, which can have global consumption.</li>
              <li>Freelancers selling digital products or services.</li>
              <li>Dropshippers leveraging third-party suppliers.</li>
            </ul>
          </div>
          <img src={section4Img} alt="Who can do Ecommerce" className="rounded-lg shadow-md w-full h-full" />
        </div>

        {/* Benefits of Ecommerce */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={section5Img} alt="Benefits of Ecommerce" className="rounded-lg shadow-md w-full h-full " />
          <div>
            <h2 className="text-3xl font-semibold text-orange-500 mb-4">What are the Benefits of Ecommerce?</h2>
            <p className="mb-3">
              Most businesses have adopted Ecommerce platforms, websites or stores to increase their presence in the global market. Ecommerce provides various advantages over the traditional way of business, which is making it a preferred choice for current and future businesses worldwide.
            </p>
            <p className="mb-3">
              Here are some of the key benefits of Ecommerce:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Limits physical presence:</strong> No need for a physical shop and outlet to sell products.</li>
              <li><strong>Global Reach:</strong> Sell products and services to customers worldwide.</li>
              <li><strong>Lower Costs:</strong> Reduce overhead costs compared to traditional stores.</li>
              <li><strong>24/7 Availability:</strong> Your store is open around the clock.</li>
              <li><strong>Convenience:</strong> Customers can shop anytime, anywhere.</li>
              <li><strong>Data Analytics:</strong> Gain insights into customer preferences and behavior.</li>
              <li><strong>Scalability:</strong> Easily expand your business without significant additional costs.</li>
              <li><strong>Customer satisfaction:</strong> Taking reviews and feedback helps to improve the business and satisfy customers.</li>
              <li><strong>Help to gain customer base:</strong> New customers become the backbone to grow the business by targeting them again for products.</li>
            </ul>
            <p className="mt-3">
              These were some of the advantages of the Ecommerce website, platform or presence. This is not applicable for the traditional business models.
            </p>
          </div>
        </div>

        {/* Steps to Create an Ecommerce Website */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-orange-500 mb-4">What are the steps to create a website for Ecommerce or Ecommerce website?</h2>
            <p className="mb-3">
              Creating a website for ecommerce is a step-wise process and requires the knowledge of the internet and creating web pages. Here is a simple guide to create an ecommerce website:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <h3 className="text-xl font-semibold inline">Choosing a domain name:</h3> First, it is important to choose a name for your business or your ecommerce website. The name should be brand-friendly and give an idea about the products that can be available on the website or ecommerce store.
              </li>
              <li>
                <h3 className="text-xl font-semibold inline">Select a platform for selling the products:</h3> Various platforms are available like Shopify, WooCommerce, Magento or BigCommerce etc. for the products.
              </li>
              <li>
                <h3 className="text-xl font-semibold inline">Set up the hosting:</h3> A person needs to choose a reliable hosting service provider for the website if the individual is not using a hosted platform.
              </li>
              <li>
                <h3 className="text-xl font-semibold inline">Website Designing:</h3> Design the website with various templates, themes, images to give an attractive and customized look. Individuals may need to hire a web designer for this purpose for easy and fast website construction.
              </li>
              <li>
                <h3 className="text-xl font-semibold inline">Add products on website:</h3> This step involves the uploading of images of products, its description, composition, and pricing in detail. We can also add some unique or additional information that is related to the product and makes it stand apart from others.
              </li>
              <li>
                <h3 className="text-xl font-semibold inline">Integration of payment gateways with the website:</h3> Ensuring and enabling secure payment methods with the website makes it easier for cash flow. Various payment methods like UPI, credit cards, debit cards, online banking, etc., can be integrated.
              </li>
              <li>
                <h3 className="text-xl font-semibold inline">Shipping and Logistics:</h3> Collaborating with delivery partners helps to manage logistics and delivery-related tasks.
              </li>
              <li>
                <h3 className="text-xl font-semibold inline">Launch and promote your store:</h3> After launching the website, it is important to use social media platforms, paid ads, and marketing strategies like SEO for driving traffic towards the website and boosting product sales.
              </li>
            </ol>
          </div>
          <img src={section6Img} alt="Steps to Create Ecommerce Website" className="rounded-lg shadow-md w-full h-full" />
        </div>

        {/* Cost to Setup Ecommerce Website */}
        <div>
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">What Will Be the Cost to setup Ecommerce Website?</h2>
          <p className="mb-3">
            The cost of setting up an Ecommerce store varies depending on several factors, such as the platform, features, and marketing. The cost also depends on the domain name and hosting services. The exact amount cannot be estimated as the price varies from step to step. But we can have a rough estimate for the cost of an ecommerce website:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Domain & Hosting:</strong> Rs. 1000 – Rs. 20000 per year (depends on the domain and hosting adopted)</li>
            <li><strong>Ecommerce Platform:</strong> Rs. 0 – Rs. 1000 per month (Shopify, WooCommerce, etc.)</li>
            <li><strong>Web Development & Design:</strong> Rs. 40000 – Rs. 500000 (if hiring a professional)</li>
            <li><strong>Marketing & Advertising:</strong> Rs. 5000 – Rs. 5000000 per month (depends on the level of marketing)</li>
            <li><strong>Additional Plugins & Tools:</strong> Rs. 1000 – Rs. 5000 per year (depends on what plugins and tools used)</li>
          </ul>
        </div>

        {/* Who Can Help in Creating an Ecommerce Website? */}
        <div>
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Who Can Help Me in Creating an Ecommerce Website?</h2>
          <p className="mb-3">
            Creating a website is not an easy job if you don’t have any knowledge of the internet and web designing. But the good news is you can hire various professionals or take the services of a company who can help out to create the website by charging a reasonable amount.
          </p>
          <p className="mb-3">
            Here are the different ways to create the website for ecommerce:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Freelancers:</strong> Hire web developers and designers on platforms like Upwork or Fiverr.</li>
            <li><strong>Web Development Agencies:</strong> Work with professional agencies for a comprehensive solution like Deveotech Software Solutions.</li>
            <li><strong>Ecommerce Platforms:</strong> Shopify, Wix, and BigCommerce provide user-friendly website builders.</li>
            <li><strong>Tech-Savvy Friends or Mentors:</strong> Seek help from someone experienced in web development.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div>
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Conclusion</h2>
          <p className="mb-3">
            Ecommerce is an exciting and ever-growing profitable venture that anyone can pursue. There are various benefits of ecommerce compared to traditional business and an easy setup to start the business. Building a website, adding products, integrating payment gateways, and collaborating with logistic providers without having a physical presence in expensive places makes it a very attractive model of business.
          </p>
          <p className="mb-3">
            This also helps to reach globally and boost sales fast as compared to traditional ways. A person can build the website if he has the knowledge or can hire the professionals or companies that provide the services. Digital commerce is expanding and will expand in the future, so having the digital presence of business is important to survive and boost the business.
          </p>
        </div>

        {/* Frequently Asked Questions (FAQs) */}
        <div>
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Frequently Asked Questions (FAQs)</h2>

          <h3 className="text-2xl font-semibold mt-4">What is the need for Ecommerce?</h3>
          <p className="mb-2">
            Ecommerce helps businesses connect with customers easily, build brand quickly with reliable trust, and offers global reach with lower operational costs compared to traditional retail.
          </p>

          <h3 className="text-2xl font-semibold mt-4">What is the cost of setting up an Ecommerce website in Delhi?</h3>
          <p className="mb-2">
            The cost of an Ecommerce website in Delhi depends on various factors such as the platform chosen, desired features, complexity of design, and ongoing marketing efforts. It can range from a few thousand rupees for a basic setup to several lakhs for a comprehensive, custom solution.
          </p>

          <h3 className="text-2xl font-semibold mt-4">Who is the best Ecommerce website development company in Delhi?</h3>
          <p className="mb-2">
            <a href='https://www.deveotechsoft.com/' className='text-blue-500 hover:underline'>Deveotech Software Solutions</a> is a highly regarded company for Ecommerce website development in Delhi, known for its expertise and comprehensive services.
          </p>

          <h3 className="text-2xl font-semibold mt-4">Which is the best Ecommerce website development company near me in Delhi?</h3>
          <p className="mb-2">
            For those seeking an Ecommerce website development company nearby in Delhi, <a href='https://www.deveotechsoft.com/' className='text-blue-500 hover:underline'>Deveotech Software Solutions</a> is a top recommendation.
          </p>

          <h3 className="text-2xl font-semibold mt-4">Which is the best Ecommerce website development company in Rohini Delhi?</h3>
          <p className="mb-2">
            In Rohini, Delhi, <a href='https://www.deveotechsoft.com/' className='text-blue-500 hover:underline'>Deveotech Software Solutions</a> stands out as a leading Ecommerce website development company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcommerceGuide;