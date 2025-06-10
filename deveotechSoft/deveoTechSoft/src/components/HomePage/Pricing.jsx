// import React, { useRef, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const planData = {
//   'Subscription Plan': {
//     cards: [
//       { title: 'Basic Maintenance', price: '₹2,999/month', features: ['Bug Fixes', 'Backup', 'Monitoring'] },
//       { title: 'Growth Maintenance', price: '₹6,999/month', features: ['Monthly Updates', 'Reports', 'Performance'] },
//       { title: 'Pro Maintenance', price: '₹9,999/month', features: ['Unlimited Updates', 'Hosting Included', 'Priority Support'] },
//       { title: 'Custom Plan A', price: '₹12,999/month', features: ['Tailored Services', 'Custom API Support'] },
//       { title: 'Custom Plan B', price: '₹14,999/month', features: ['All Features', 'Dedicated Manager'] },
//     ],
//   },
//   'Premium Plan': {
//     cards: [
//       { title: 'Startup App', price: '₹19,999', features: ['Android + iOS', 'Up to 5 Screens', '2 Week Delivery'] },
//       { title: 'Business App', price: '₹29,999', features: ['10 Screens', 'Premium UI', '3 Week Delivery'] },
//       { title: 'Enterprise App', price: '₹39,999', features: ['All Platforms', 'Unlimited Screens', 'Manager Support'] },
//       { title: 'Ultimate Plan', price: '₹49,999', features: ['Everything Included', 'SEO Ready', 'Lifetime Support'] },
//       { title: 'AI Integrated Plan', price: '₹59,999', features: ['Chatbot', 'Analytics', 'Custom AI'] },
//     ],
//   },
// };

// const MobileAppPricingSwitcher = () => {
//   const [activePlan, setActivePlan] = useState('Subscription Plan');
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const cards = planData[activePlan].cards;

//   const settings = {
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: '0px',
//     speed: 600,
//     arrows: false,
//     beforeChange: (_, next) => setCurrentSlide(next),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           centerMode: false,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full bg-gray-50 py-12 px-4 md:px-16">
//       <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
//         Choose Your Plan
//       </h2>

//       <div className="flex justify-center gap-4 mb-8 flex-wrap">
//         {Object.keys(planData).map((type) => (
//           <button
//             key={type}
//             onClick={() => {
//               setActivePlan(type);
//               setCurrentSlide(0);
//               sliderRef.current?.slickGoTo(0);
//             }}
//             className={`px-4 py-2 rounded border text-sm font-semibold transition duration-300 ${
//               activePlan === type
//                 ? 'bg-blue-500 text-white border-blue-500'
//                 : 'bg-white text-black border-blue-500'
//             }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       <Slider {...settings} ref={sliderRef}>
//         {cards.map((card, index) => {
//           // Calculate center using modulo for seamless loop
//           const modIndex = currentSlide % cards.length;
//           const isCenter = index === modIndex || index === (modIndex + 1) % cards.length;
//           const scaleClass = isCenter ? 'scale-105' : 'scale-95';
//           const heightClass = isCenter ? 'h-[400px]' : 'h-[350px]';
//           const marginClass = isCenter ? 'my-2' : 'my-6';

//           return (
//             <div key={index} className="px-2">
//               <div
//                 className={`transition-all duration-500 transform ${scaleClass} ${marginClass} bg-white shadow-xl rounded-lg p-6 flex-shrink-0 w-[90%] sm:w-[300px] md:w-[95%] ${heightClass} flex flex-col justify-between mx-auto`}
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold text-blue-600 mb-2">
//                     {card.title}
//                   </h3>
//                   <p className="text-2xl font-bold mb-4">{card.price}</p>
//                   <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
//                     {card.features.map((feature, i) => (
//                       <li key={i}>{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>

//       <div className="mt-6 flex justify-center gap-4">
//         <button
//           onClick={() => sliderRef.current?.slickPrev()}
//           className="bg-blue-300 hover:bg-blue-400 text-black px-4 py-2 rounded-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={() => sliderRef.current?.slickNext()}
//           className="bg-blue-300 hover:bg-blue-400 text-black px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MobileAppPricingSwitcher;


import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const planData = {
  'Subscription Plan': {
    cards: [
      { title: 'Basic Maintenance', price: '₹2,999/month', features: ['Bug Fixes', 'Backup', 'Monitoring'] },
      { title: 'Growth Maintenance', price: '₹6,999/month', features: ['Monthly Updates', 'Reports', 'Performance'] },
      { title: 'Pro Maintenance', price: '₹9,999/month', features: ['Unlimited Updates', 'Hosting Included', 'Priority Support'] },
      { title: 'Custom Plan A', price: '₹12,999/month', features: ['Tailored Services', 'Custom API Support'] },
      { title: 'Custom Plan B', price: '₹14,999/month', features: ['All Features', 'Dedicated Manager'] },
    ],
  },
  'Premium Plan': {
    cards: [
      { title: 'Startup App', price: '₹19,999', features: ['Android + iOS', 'Up to 5 Screens', '2 Week Delivery'] },
      { title: 'Business App', price: '₹29,999', features: ['10 Screens', 'Premium UI', '3 Week Delivery'] },
      { title: 'Enterprise App', price: '₹39,999', features: ['All Platforms', 'Unlimited Screens', 'Manager Support'] },
      { title: 'Ultimate Plan', price: '₹49,999', features: ['Everything Included', 'SEO Ready', 'Lifetime Support'] },
      { title: 'AI Integrated Plan', price: '₹59,999', features: ['Chatbot', 'Analytics', 'Custom AI'] },
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
    autoplaySpeed: 1500,
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

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };


  return (
    <div className="w-full bg-gray-50 py-12 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Choose Your Plan
      </h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {Object.keys(planData).map((type) => (
          <button
            key={type}
            onClick={() => {
              setActivePlan(type);
              setCurrentSlide(0);
              sliderRef.current?.slickGoTo(0);
            }}
            className={`px-4 py-2 rounded border text-sm font-semibold transition duration-300 ${
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
        {cards.map((card, index) => {
          const modIndex = currentSlide % cards.length;
          const isCenter = index === modIndex || index === (modIndex + 1) % cards.length;
          const scale = isCenter ? 'scale-105' : 'scale-[0.97]';
          const height = isCenter ? 'h-[400px]' : 'h-[380px]';
          const opacity = isCenter ? 'opacity-100' : 'opacity-90';

          return (
            <div key={index} className="px-2">
              <div
                className={`transition-all duration-500 transform ${scale} ${opacity} ${height} bg-white shadow-2xl border border-blue-100 rounded-2xl p-6 w-[90%] sm:w-[300px] md:w-[95%] flex flex-col justify-between mx-auto`}
              >
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-2xl font-extrabold mb-4">{card.price}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {card.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={gotoPrev}
          className="bg-blue-300 hover:bg-blue-400 text-black px-4 py-2 rounded-md shadow-sm"
        >
          Prev
        </button>
        <button
          onClick={gotoNext}
          className="bg-blue-300 hover:bg-blue-400 text-black px-4 py-2 rounded-md shadow-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MobileAppPricingSwitcher;
