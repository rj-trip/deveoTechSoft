import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Plan1 from '../../assets/Pricing/plan1.jpg'
import Plan2 from '../../assets/Pricing/plan2.webp'
import Plan3 from '../../assets/Pricing/plan3.webp'
import Plan4 from '../../assets/Pricing/plan4.webp'
import Plan5 from '../../assets/Pricing/plan5.webp'
const planData = {
  'Subscription Plan': {
    cards: [
      {
        title: 'Basic Maintenance',
        price: '₹2,999/month',
        features: ['Bug Fixes', 'Backup', 'Monitoring'],
        image: Plan1,
      },
      {
        title: 'Growth Maintenance',
        price: '₹6,999/month',
        features: ['Monthly Updates', 'Reports', 'Performance'],
        image: Plan2,
      },
      {
        title: 'Pro Maintenance',
        price: '₹9,999/month',
        features: ['Unlimited Updates', 'Hosting Included', 'Priority Support'],
        image: Plan3,
      },
      {
        title: 'Custom Plan A',
        price: '₹12,999/month',
        features: ['Tailored Services', 'Custom API Support'],
        image: Plan4,
      },
      {
        title: 'Custom Plan B',
        price: '₹14,999/month',
        features: ['All Features', 'Dedicated Manager'],
        image: Plan5,
      },
    ],
  },
  'Premium Plan': {
    cards: [
      {
        title: 'Startup App',
        price: '₹19,999',
        features: ['Android + iOS', 'Up to 5 Screens', '2 Week Delivery'],
        image: Plan1,
      },
      {
        title: 'Business App',
        price: '₹29,999',
        features: ['10 Screens', 'Premium UI', '3 Week Delivery'],
        image: Plan2,
      },
      {
        title: 'Enterprise App',
        price: '₹39,999',
        features: ['All Platforms', 'Unlimited Screens', 'Manager Support'],
        image: Plan3,
      },
      {
        title: 'Ultimate Plan',
        price: '₹49,999',
        features: ['Everything Included', 'SEO Ready', 'Lifetime Support'],
        image:Plan4,
      },
      {
        title: 'AI Integrated Plan',
        price: '₹59,999',
        features: ['Chatbot', 'Analytics', 'Custom AI'],
        image: Plan5,
      },
    ],
  },
};


const MobileAppPricingSwitcher = () => {
  const [activePlan, setActivePlan] = useState('Subscription Plan');
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const cards = planData[activePlan].cards;

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    speed: 600,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const gotoNext = () => sliderRef.current?.slickNext();
  const gotoPrev = () => sliderRef.current?.slickPrev();

  return (
    <div className="m-4 sm:m-6 md:m-10 lg:m-20 bg-gray-100 rounded-2xl shadow-inner">
      <div className="w-full py-12 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-10">
          Choose Your Plan
        </h2>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {Object.keys(planData).map(type => (
            <button
              key={type}
              onClick={() => {
                setActivePlan(type);
                setCurrentSlide(0);
                sliderRef.current?.slickGoTo(0);
              }}
              className={`px-4 py-2 rounded-md border text-sm font-semibold transition duration-300 ${
                activePlan === type
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-black border-blue-500'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <Slider {...settings} ref={sliderRef}>
          {cards.map((card, idx) => {
            const isCenter = idx === currentSlide % cards.length;
            const borderClass = isCenter ? 'border-blue-200 shadow-xl' : 'border-blue-200';

            return (
              <div key={idx} className="px-2">
                <div
                  className={`bg-white ${borderClass} border rounded-2xl overflow-hidden flex flex-col w-full max-w-sm mx-auto transition-all duration-300`}
                  style={{ minHeight: '420px' }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-blue-600 mb-1">{card.title}</h3>
                    <p className="text-2xl font-extrabold mb-3">{card.price}</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                      {card.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="mt-6 flex justify-center gap-4">
          <button onClick={gotoPrev} className="bg-blue-300 hover:bg-blue-400 text-black px-4 py-2 rounded-md shadow-sm">
            Prev
          </button>
          <button onClick={gotoNext} className="bg-blue-300 hover:bg-blue-400 text-black px-4 py-2 rounded-md shadow-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPricingSwitcher;
