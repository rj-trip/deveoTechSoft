import React,{ useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import bgImg from '../../assets/bg.jpg';
import section1Img from '../../assets/Mobile/mob1.avif';
import section2Img from '../../assets/Mobile/mob2.webp';
import section3Img from '../../assets/Mobile/mob3.webp';
import section4Img from '../../assets/Mobile/mob4.webp';
import section5Img from '../../assets/Mobile/mob5.webp';
import section6Img from '../../assets/Mobile/mob6.jpg';

const AboutUsMobileAppDelhi = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the need of Mobile Application Software?',
      answer: 'Mobile application software helps to connect with the customers easily and build the brand quickly with reliable trust.',
    },
    {
      question: 'What is the cost of Mobile Application Software in Delhi?',
      answer: 'The cost of Mobile Application Software in Delhi depends on the type of mobile application you want to make and the features you want to add in the software.',
    },
    {
      question: 'What is the best Mobile Application Software Company in Delhi?',
      answer: `<a href='https://www.deveotechsoft.com/' class='text-blue-500'> Devotec software solutions </a> is the best mobile application software company in Delhi.`,
    },
    {
      question: 'Which is the best Mobile Application Software Company near me in Delhi?',
      answer: `<a href='https://www.deveotechsoft.com/' class='text-blue-500'> Devotec software solutions </a> is the best mobile application software company near me in Delhi.`,
    },
    {
      question: 'Which is the best Mobile Application Software Company in Rohini Delhi?',
      answer: `<a href='https://www.deveotechsoft.com/' class='text-blue-500'> Devotec software solutions </a> is the best mobile application software company in Rohini Delhi.`,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center shadow-lg"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-orange-600 bg-opacity-80 px-6 py-3 rounded-lg shadow-2xl max-[375px]:mx-4 mt-16">
          Mobile Application Development Company in Delhi
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-orange-500 cursor-pointer">HOME</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-500 font-semibold">Service</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-500 font-semibold">Mobile Development</span>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 py-10 space-y-16 text-gray-800">
<div className="grid md:grid-cols-2 gap-10 items-stretch">
  <div className="order-1 md:order-none w-full h-full">
            <img src={section1Img} alt="Overview" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="order-2 md:order-none">
            <h2 className="text-3xl font-semibold text-orange-500">Overview</h2>
            <p>In today’s fast-paced digital era, mobile application development has become the cornerstone of modern business success. As customer preferences rapidly shift toward mobile-first experiences, having a robust, user-friendly mobile app is no longer optional—it’s essential. From small startups to well-established enterprises, businesses of all sizes are leveraging mobile apps to enhance customer engagement, streamline operations, and drive growth.</p>
            <p>Developing a high-performance mobile app requires more than just coding—it involves strategic planning, UI/UX design, seamless integration, and post-launch support. Every element plays a vital role in building brand value and delivering real business outcomes. That’s why choosing the right mobile app development partner is critical. Collaborating with a reputable mobile application development company ensures that your vision is turned into a scalable and effective digital product.</p>
            <p>In India, especially in a tech hub like Delhi, working with an experienced mobile app development agency offers advantages such as local market knowledge, clear communication, and alignment with your business goals.</p>
            <p>In this blog, we’ll explore how mobile application development services contribute to business growth and what key factors you should consider when selecting the right development partner for your app journey.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="order-2 md:order-none">
            <h2 className="text-3xl font-semibold text-orange-500">The Role of a Mobile App Development Company in Building Your Brand</h2>
            <p>In today’s mobile-driven world, your mobile application often serves as the first point of interaction between your brand and potential customers. The design, functionality, and performance of your app determine whether users stay engaged or abandon it within seconds. This is where an experienced mobile app development company becomes essential—they craft intelligent, user-centric apps that captivate and convert.</p>
            <h3 className="text-2xl font-semibold mt-4">Custom App Design & Development</h3>
            <p>A reliable mobile app company creates tailor-made applications that reflect your brand identity and meet your business goals. With flexibility for iterative updates and personalized features, these apps are built to enhance user experience and foster customer loyalty.</p>
            <h3 className="text-2xl font-semibold mt-4">High-Speed Performance</h3>
            <p>Just like slow websites, sluggish apps lead to poor user experiences and lost conversions. A good mobile app development team ensures your app is optimized for speed and smooth performance, which directly supports brand reputation and customer retention.</p>
            <h3 className="text-2xl font-semibold mt-4">Cross-Platform Compatibility</h3>
            <p>With a large portion of users accessing services on various devices, your app must function seamlessly on both Android and iOS platforms. A good development team builds responsive, cross-platform apps that ensure maximum reach and consistent user experience across all devices.</p>
            <h3 className="text-2xl font-semibold mt-4">App Security</h3>
            <p>In a time of growing digital threats, securing your app and user data is non-negotiable. A qualified development company integrates robust security protocols—from encrypted databases to secure logins—to protect both the application and its users.</p>
            <h3 className="text-2xl font-semibold mt-4">Scalability for Future Growth</h3>
            <p>A well-built mobile application should be ready to grow with your business. Scalable architecture and flexible back-end infrastructure ensure that you can easily add new features or accommodate a growing user base without rebuilding from scratch.</p>
          </div>
          <div  className="order-1 md:order-none">
            <img src={section2Img} alt="Building Brand" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div  className="order-1 md:order-none">
            <img src={section3Img} alt="Partner" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="order-2 md:order-none">
            <h2 className="text-3xl font-semibold text-orange-500">Why You Need a Mobile Application Development Partner</h2>
            <p>Creating a stunning mobile app is just the beginning. Without the right strategies to promote, update, and engage users, even the best apps can fail to gain traction. That’s why partnering with a skilled mobile app development company goes beyond coding—they become your strategic ally in launching and growing your digital presence.</p>
            <h3 className="text-2xl font-semibold mt-4">App Store Optimization (ASO)</h3>
            <p>Similar to SEO for websites, ASO helps your app rank higher in app stores like Google Play and the Apple App Store. With optimized descriptions, keywords, and visuals, your app becomes more discoverable to your target audience.</p>
            <h3 className="text-2xl font-semibold mt-4">Social Media Integration</h3>
            <p>An experienced app team helps integrate powerful social sharing and login features, enabling users to engage through platforms like Facebook, Instagram, and LinkedIn—expanding your reach and making onboarding easier.</p>
            <h3 className="text-2xl font-semibold mt-4">User Acquisition Campaigns (PPC & More)</h3>
            <p>Whether it’s through Google Ads, Facebook campaigns, or YouTube pre-rolls, a mobile app development partner can help strategize and implement Pay-Per-Click (PPC) campaigns for faster visibility and downloads.</p>
            <h3 className="text-2xl font-semibold mt-4">Content & Engagement Strategies</h3>
            <p>From in-app messaging and push notifications to curated content feeds, the development company ensures your app remains engaging, keeping users active and loyal to your platform.</p>
            <h3 className="text-2xl font-semibold mt-4">Automated Email & Retargeting Tools</h3>
            <p>Re-engage users who may have dropped off by setting up email notifications or personalized retargeting ads that remind them to return—driving retention and sales.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="order-2 md:order-none">
            <h2 className="text-3xl font-semibold text-orange-500">How Mobile Application Development Enhances Business Efficiency</h2>
            <p>In the current digital-first world, the backbone of any successful business lies in its ability to leverage powerful mobile solutions. From customer engagement to internal operations, mobile applications serve as critical tools to streamline processes, improve communication, and boost productivity. A mobile application development company plays a central role in crafting these custom solutions tailored to meet specific business needs.</p>
          </div>
          <div  className="order-1 md:order-none">
            <img src={section4Img} alt="Efficiency" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="order-1 md:order-none">
            <img src={section5Img} alt="Core Services" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="order-2 md:order-none">
            <h2 className="text-3xl font-semibold text-orange-500">Core Services Provided by a Mobile App Development Company</h2>
            <h3 className="text-2xl font-semibold mt-4">Custom App Development</h3>
            <p>Bespoke mobile apps built around your business processes, enabling automation and solving specific operational challenges.</p>
            <h3 className="text-2xl font-semibold mt-4">Enterprise Mobility Solutions</h3>
            <p>End-to-end apps for CRM, HRM, inventory, and finance that cater to mid and large-scale organizations, ensuring smoother workflows and data management.</p>
            <h3 className="text-2xl font-semibold mt-4">Cross-Platform App Development</h3>
            <p>Expertise in technologies like Flutter and React Native allows businesses to launch on both iOS and Android efficiently, with consistent performance.</p>
            <h3 className="text-2xl font-semibold mt-4">Cloud-Based Mobile Apps</h3>
            <p>Secure, scalable mobile applications that can be accessed anytime, anywhere—ideal for today’s remote and hybrid work environments.</p>
            <h3 className="text-2xl font-semibold mt-4">App Maintenance & Support</h3>
            <p>Regular updates, performance optimization, and troubleshooting services ensure your app stays functional and up to date.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="order-2 md:order-none">
            <h2 className="text-3xl font-semibold text-orange-500">Why Choose a Mobile App Development Company in Delhi?</h2>
            <p>Delhi has emerged as a major technology hub in India, housing many of the nation’s top-performing IT and mobile development agencies. Collaborating with a Delhi-based mobile app development company brings distinct advantages in terms of cost, communication, and talent.</p>
            <h3 className="text-2xl font-semibold mt-4">Local Market Expertise</h3>
            <p>Teams in Delhi often have deep insights into regional consumer behavior, allowing them to design apps that resonate well with local users and improve market fit.</p>
            <h3 className="text-2xl font-semibold mt-4">Efficient Communication</h3>
            <p>Proximity and minimal time zone differences ensure real-time collaboration, faster development cycles, and fewer delays.</p>
            <h3 className="text-2xl font-semibold mt-4">Cost-Effective Solutions</h3>
            <p>Delhi-based firms deliver high-quality mobile applications at competitive pricing, making them ideal for startups and established businesses alike.</p>
            <h3 className="text-2xl font-semibold mt-4">Skilled Talent Pool</h3>
            <p>With access to premier engineering colleges and a thriving tech community, Delhi offers a rich pool of talented developers, designers, and QA professionals.</p>
          </div>
          <div  className="order-1 md:order-none">
            <img src={section6Img} alt="Delhi Company" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-orange-500">Conclusion</h2>
          <p>In today’s hyper-connected digital economy, mobile applications are no longer optional—they are essential. A skilled mobile app development company ensures your digital product not only looks great but functions seamlessly, driving user engagement and operational efficiency. Whether you're launching a new business or scaling an existing one, having the right development partner—especially from a thriving tech hub like Delhi—can be a game-changer. From crafting engaging user interfaces to integrating backend systems and ensuring ongoing support, the right app development company aligns technology with your vision to deliver results that matter.</p>
        </div>

  <div>
      <h2 className="text-3xl font-semibold text-orange-500">Frequently Asked Questions (FAQs)</h2>
      <div className="mt-4 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-2xl font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <p
                className="mt-2 text-gray-700"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></p>
            )}
          </div>
        ))}
      </div>
      </div></div>
    </div>
  );
};

export default AboutUsMobileAppDelhi;
