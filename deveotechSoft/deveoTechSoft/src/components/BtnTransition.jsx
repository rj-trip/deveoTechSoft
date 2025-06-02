import React from "react";

const highlights = [
  { number: "2021", text: "Year of establishment" },
  { number: "20+", text: "Expertise across 20+" },
  { number: "10+", text: "Employees in Deveotech" },
  { number: "20+", text: "Featured Projects Complete" },
];

const BtnTransition = () => {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Highlight Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-full shadow-md cursor-pointer transition-all duration-300"
          >
            {/* Hover Fill Background */}
            <div className="absolute inset-0 bg-sky-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />

            {/* Card Content */}
            <div className="relative z-10 flex items-center px-4 py-2">
              <div className="w-10 h-10 bg-[#2E7BA2] rounded-full mr-4 flex-shrink-0"></div>
              <div className="text-sm text-gray-800 group-hover:text-white transition-colors duration-300">
                <strong className="block text-base">{item.number}</strong>
                <span>{item.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      {/* <div className="flex gap-4 pt-4">
        <button className="relative px-6 py-2 rounded text-white font-semibold bg-gradient-to-r from-indigo-500 to-indigo-700 overflow-hidden transition-all duration-300 group">
          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
          <span className="relative z-10 group-hover:text-indigo-700 transition-colors duration-300">
            Get A Quote
          </span>
        </button>

        <button className="relative px-6 py-2 rounded text-white font-semibold bg-[#2E7BA2] overflow-hidden transition-all duration-300 group flex items-center">
          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
          <span className="relative z-10 group-hover:text-[#2E7BA2] transition-colors duration-300">
            Read More
          </span>
          <span className="relative z-10 ml-2 group-hover:text-[#2E7BA2] transition-colors duration-300">➤</span>
        </button>
      </div> */}
    </div>
  );
};

export default BtnTransition;
