import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "React Developer Starter Kit",
    image: "https://via.placeholder.com/300x300.png?text=React+Kit",
    originalPrice: 1999,
    discountedPrice: 1499,
    discount: "25% OFF"
  },
  {
    title: "UI/UX Design System Pack",
    image: "https://via.placeholder.com/300x300.png?text=Design+System",
    originalPrice: 999,
    discountedPrice: 749,
    discount: "25% OFF"
  },
  {
    title: "Flutter App Starter Template",
    image: "https://via.placeholder.com/300x300.png?text=Flutter+App",
    originalPrice: 1299,
    discountedPrice: 1039.2,
    discount: "20% OFF"
  },
  {
    title: "WordPress CMS Premium Theme",
    image: "https://via.placeholder.com/300x300.png?text=WP+Theme",
    originalPrice: 1499,
    discountedPrice: 1199.2,
    discount: "20% OFF"
  },
  {
    title: "Shopify Plugin Bundle Pro",
    image: "https://via.placeholder.com/300x300.png?text=Shopify+Plugin",
    originalPrice: 1799,
    discountedPrice: 1259.3,
    discount: "30% OFF"
  }
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4;
  const totalItems = products.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + totalItems) % totalItems
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % totalItems
    );
  };

  const getVisibleProducts = () => {
    let result = [];
    for (let i = 0; i < visibleItems; i++) {
      result.push(products[(currentIndex + i) % totalItems]);
    }
    return result;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <div className="px-4 py-10 w-full max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex justify-center space-x-4 px-6 transition-all duration-500 ease-in-out">
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="w-[250px] bg-white rounded-xl shadow-md overflow-hidden border"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                  {product.discount}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold truncate mb-1">
                  {product.title}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 line-through text-sm">
                    ₹{product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-gray-800 font-medium text-sm">
                    ₹{product.discountedPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
