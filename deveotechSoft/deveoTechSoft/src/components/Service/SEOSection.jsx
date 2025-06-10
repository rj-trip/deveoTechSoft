import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const tabData = {
  'Web Development': {
    heading: 'Web Development Services',
    other: `
**Custom Website Development**  
We design and develop tailored websites that align with your business goals...

**E-commerce Development**  
We build robust e-commerce platforms to enhance your online sales...

**CMS Development**  
Our team develops intuitive and scalable content management systems...

**Web Application Development**  
We create powerful web applications that deliver dynamic functionality...

**API Integration Services**  
Our API integration services enable your systems to work seamlessly...
    `,
  },
  'SEO Services': {
    heading: 'SEO Services',
    other: `
**On-Page SEO**  
We optimize your website’s content and structure, ensuring it’s search-engine-friendly. This includes keyword optimization, meta tags, image alt text, and improving your site's overall usability.

**Off-Page SEO**  
We help build high-quality backlinks to improve your website's authority and trustworthiness. This includes strategies like link-building, guest blogging, and social media marketing.

**Technical SEO**  
Our team ensures your website is technically optimized for search engines. This includes improving site speed, mobile responsiveness, URL structure, and fixing any crawl errors.

**Local SEO**  
We specialize in local search optimization, helping businesses rank higher for location-based searches. This includes optimizing your Google My Business profile, local citations, and reviews.

**Competitor SEO Analysis**  
Our team conducts in-depth competitor analysis to identify opportunities for your website to outrank your rivals. We analyze competitor keywords, backlink strategies, content performance, and other SEO tactics to develop a plan that keeps you ahead in the market.

**Content Marketing**  
We create and optimize content that not only resonates with your target audience but also ranks high in search engines. From blog posts to landing pages, our content strategy is tailored to drive traffic.

**SEO Audits**  
We perform comprehensive audits to identify SEO issues on your website and provide actionable recommendations to improve performance.

**SEO Reporting & Analytics**  
We provide detailed SEO performance reports that track keyword rankings, organic traffic, and other key metrics to measure success.
    `,
  },
  'SEO Process': {
    heading: 'SEO Process',
    other: `
**Google Ads Services**  
Want immediate visibility on Google? Our Google Ads services help you connect with your audience right when they’re searching for products or services like yours. With pay-per-click (PPC) campaigns, we ensure every rupee works hard for your business.  
Our certified professionals design targeted campaigns that boost traffic and conversions. We handle everything including keyword research, ad copy creation, audience segmentation, and performance monitoring. Whether it’s Search Ads, Display Ads, or Shopping Ads, we tailor strategies to your business goals.  
Gain quick results, increase your return, and grow your business with our expertise. Contact us and let us help you convert the potential clicks to your business ads into customers!

**Facebook Ads Services**  
Tap into the power of Facebook's vast user base with our expert Facebook Ads services. Whether you want to improve brand awareness online, generate quality leads, or improve your sales—with the help of our result-oriented Facebook Ads services, it is possible.  
Our team of experts create highly attractive Facebook ads that capture attention and inspire clicks. We use advanced options to reach potential audiences based on demographics, interests, and behaviors. From customized carousel ads to video campaigns, we design engaging content that matches your potential customers.  
Our Facebook marketing experts closely monitor ad performance and optimize campaigns to ensure maximum ROI from your ad spend.

**LinkedIn Ads Services**  
When it comes to professional networking, LinkedIn stands out. Our customized and result-driven LinkedIn Ads services connect you with professionals, decision-makers, and industry leaders.  
We specialize in creating effective campaigns including Sponsored Ads, InMail Ads, and Text Ads, to exhibit your brand to the right audience.  
With precise targeting based on industry, job title, and more, we help you drive qualified leads, recruit top talent, and share thought leadership content.

**Instagram Ads Services**  
Bring energy to your brand with stunning Instagram Ads! With Instagram’s visual-first platform, it’s one of the best tools to showcase your products and connect with a younger audience.  
Our experts design Instagram ads—including photo, video, carousel, and story ads—to enhance user engagement and inspire action.  
Using advanced targeting based on interests, behavior, and location, we help increase brand visibility, website traffic, and sales. We continuously monitor and optimize your campaign for the best outcomes.

**Twitter Ads Services**  
Expand the voice of your brand on Twitter with our specialized Twitter Ads services. Ideal for engaging with trending conversations, promoting products, or building awareness, Twitter Ads offer real-time connectivity.  
We create compelling campaigns such as Promoted Tweets, Promoted Accounts, and Promoted Trends.  
Using advanced targeting—keywords, hashtags, behaviors—we ensure your message reaches the right people at the right time. Stay ahead of the curve with our data-driven Twitter ad strategies.
    `,
  },
  'Search Backlinks': {
    heading: 'Social Media Marketing: Empowering Your Digital Presence',
    other: `
Social media marketing is a vital component of modern digital marketing strategies, offering businesses the opportunity to connect directly with their audience, build brand awareness, and drive conversions. With billions of active users across platforms like Facebook, Instagram, LinkedIn, and Twitter, social media is where your customers are—making it an essential channel to grow your business.

Our Social Media Marketing Services focus on creating tailored strategies that align with your business goals and resonate with your target audience. From crafting engaging content to managing paid ad campaigns, we ensure your brand stands out in a crowded digital landscape.

**Key elements of our social media marketing strategy include:**

**Content Creation:**  
Developing high-quality, visually appealing content—such as images, videos, and infographics—designed to capture attention and drive engagement.

**Audience Targeting:**  
Leveraging advanced tools to identify and target your ideal audience based on demographics, interests, and online behavior.

**Paid Advertising:**  
Running cost-effective ad campaigns to promote products, generate leads, and increase website traffic.

**Community Engagement:**  
Building relationships with your audience through comments, direct messages, and interactive content like polls and stories.

**Performance Tracking:**  
Using analytics to measure campaign success and optimize strategies for maximum ROI.

By consistently engaging your audience and adapting to platform trends, social media marketing not only boosts brand visibility but also fosters trust and loyalty. Let us help you unlock the full potential of social media to achieve your business objectives.
    `,
  },
  'Local SEO': {
    heading: 'Content Marketing',
    other: `
Quality and catchy content always drives unbelievable results! We offer content marketing services to help businesses establish authority, build trust, and engage their audience with the help of catchy and engaging content.

We create tailored content strategies, including blogs, articles, videos, and infographics, that align with your business goals. By focusing on valuable and relevant content, we attract and retain your target audience, leading to better conversions.

From SEO-optimized web pages to captivating social media posts, we ensure your brand’s voice is consistent and impactful.
    `,
  },
  'Ecommerce SEO': {
    heading: 'Google My Business (GMB) Services: Boost Local Visibility',
    other: `
Our Google My Business (GMB) Services are designed to help your business stand out in local search results and attract more customers. By optimizing your GMB profile, we ensure accurate business information, engaging visuals, and regular updates that increase your visibility on Google Search and Maps.

Key features of our GMB services include:

- Profile setup and optimization  
- Keyword-rich business descriptions  
- Managing reviews and customer interactions  
- Regular updates with posts, offers, and events  

Let us help you maximize your local reach and grow your customer base with effective GMB strategies.
    `,
  },
  'Global SEO': {
    heading: 'Other Activities',
    other: `
**Brand Positioning: Defining Your Unique Identity**

Brand positioning is the process of defining how your brand is perceived in the market and differentiating it from competitors. It involves identifying your unique value, target audience, and key messaging to create a lasting impression that resonates with customers. Effective brand positioning helps build trust, loyalty, and recognition, ensuring your brand stands out and attracts the right audience. 

By developing a strong brand positioning strategy, we help you communicate your brand's story clearly and consistently across all touchpoints, establishing your brand as a leader in its industry.

**Online Reputation Management: Building Trust in the Digital World**

Online Reputation Management (ORM) focuses on shaping and maintaining a positive perception of your brand across digital platforms. In today’s connected world, customer reviews, social media comments, and online mentions can significantly influence how your business is perceived. 

Effective ORM ensures that your brand’s image remains strong and credible, building trust with current and potential customers. Our ORM Services include monitoring brand mentions, managing reviews, addressing negative feedback, and promoting positive content to enhance your online presence. 

Let us help you protect and grow your brand’s reputation in the digital landscape.

**Influencer Marketing Services**

Experience the power of trusted voices with our Influencer Marketing services. We connect your brand with popular influencers who align with your values and audience. Our team finds and collaborates with influencers on platforms like Instagram and YouTube to create authentic campaigns that resonate with their followers. 

By leveraging their reach and credibility, we help you increase brand awareness, drive engagement, and grow sales. Ready to harness the influence of creators? We deliver result-driven campaigns that generate real impact for your business.
    `,
  },
};

const SEOSection = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  return (
    <div className="px-4 md:px-20 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Our Comprehensive SEO Services</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Our comprehensive SEO services are designed to boost your online visibility and drive targeted traffic to your website. Explore our offerings below:
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded border transition duration-300 ${
              activeTab === tab
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-black border-orange-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white shadow-md p-6 rounded-md text-gray-800 max-w-4xl mx-auto">
        {/* Main heading in orange */}
        <h3 className="text-2xl font-semibold mb-6 text-orange-500">{tabData[activeTab].heading}</h3>
        
        {/* Render markdown with react-markdown */}
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
            strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          }}
        >
          {tabData[activeTab].other}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default SEOSection;
