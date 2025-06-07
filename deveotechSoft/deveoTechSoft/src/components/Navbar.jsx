// Navbar.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const servicesData = {
  'Web Development': ['Angular', 'Node Js', 'Php', 'Laravel', 'Cake Php', 'Python', 'Symfony', 'React Js'],
  'Digital Marketing': ['SEO Services', 'Social Media Marketing', 'PPC Advertising', 'Content Marketing', 'Email Marketing', 'Analytics & Reporting'],
  'UI/UX Design': ['User Interface Design', 'User Experience Design', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
  'Mobile App Development': ['iOS Development', 'Android Development'],
  'CMS & Ecommerce': ['WordPress', 'Shopify Development', 'Magento Development', 'E-commerce Solutions'],
  'Ecomerce Development': ['Magento Development', 'E-Commerce Customization', 'Shopify Development', 'WooCommerce Development'],
};

const categoryRoutes = {
  'Web Development': '/whatsapp',
  'Digital Marketing': '/digital',
  'UI/UX Design': '/uiux',
  'Mobile App Development': '/mobile',
  'CMS & Ecommerce': '/cms',
  'Ecomerce Development': '/ecommerce',
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [activeSubDropdown, setActiveSubDropdown] = useState('');
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState('');
  const timeoutRef = useRef(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleMouseEnter = (dropdown) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown('');
      setActiveSubDropdown('');
    }, 300);
  };

  const handleSubMouseEnter = (category) => {
    clearTimeout(timeoutRef.current);
    setActiveSubDropdown(category);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="DeveoTech Logo" className="w-70 h-70 object-contain" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>

            <div className="relative group" onMouseEnter={() => handleMouseEnter('services')}>
              <div className="flex items-center space-x-1 nav-link cursor-pointer">
                <Link to="/service" className="flex items-center space-x-2">
                  <span className="nav-link">Services</span>
                </Link>
                <ChevronDown className="w-4 h-4" />
              </div>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 flex z-50" onMouseLeave={handleMouseLeave}>
                  <div className="w-72 bg-white rounded-lg shadow-2xl border mt-1 p-4 grid gap-1">
                    {Object.entries(servicesData).map(([category, subcategories], index) => (
                      <div key={index} className="relative">
                        <div
                          className="flex items-center justify-between px-4 py-3 hover:bg-blue-50 cursor-pointer rounded-lg transition group/item"
                          onMouseEnter={() => handleSubMouseEnter(category)}
                        >
                          <Link
                            to={categoryRoutes[category] || '#'}
                            className="text-gray-700 group-hover/item:text-blue-600 font-medium"
                            onClick={() => {
                              setActiveDropdown('');
                              setActiveSubDropdown('');
                            }}
                          >
                            {category}
                          </Link>
                          <ChevronLeft className="w-4 h-4 text-gray-400 group-hover/item:text-blue-600" />
                        </div>

                        {activeSubDropdown === category && (
                          <div className="absolute top-0 right-full mr-4 w-56 bg-white rounded-lg shadow-2xl border z-60"
                            onMouseEnter={() => handleSubMouseEnter(category)}
                          >
                            <div className="p-4">
                              <h3 className="text-sm font-semibold text-gray-900 mb-3 px-2">{category}</h3>
                              <div className="space-y-1">
                                {subcategories.map((subcategory, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={`/about-category/${subcategory.replace(/\s+/g, '-').toLowerCase()}`}
                                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition"
                                    onClick={() => {
                                      setActiveDropdown('');
                                      setActiveSubDropdown('');
                                    }}
                                  >
                                    {subcategory}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/blogCatg" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-900">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg mt-2 p-4 rounded-b-lg animate-fade-in space-y-2">
            <Link to="/" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
            <div>
              <button
                className="flex justify-between items-center w-full font-semibold text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {Object.entries(servicesData).map(([category, subcategories], index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center w-full text-blue-600 font-medium text-sm px-2 py-1 rounded hover:bg-gray-50">
                        <Link
                          to={categoryRoutes[category] || '#'}
                          className="hover:underline"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileActiveCategory('');
                            setMobileServicesOpen(false);
                          }}
                        >
                          {category}
                        </Link>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform cursor-pointer ${mobileActiveCategory === category ? 'rotate-90' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileActiveCategory(prev => (prev === category ? '' : category));
                          }}
                        />
                      </div>
                      {mobileActiveCategory === category && (
                        <div className="ml-4 mt-1 space-y-1">
                          {subcategories.map((subcategory, subIndex) => (
                            <Link
                              key={subIndex}
                              to={`/about-category/${subcategory.replace(/\s+/g, '-').toLowerCase()}`}
                              className="block text-gray-600 hover:text-blue-600 text-sm px-2 py-1 rounded hover:bg-gray-100"
                              onClick={() => {
                                setIsOpen(false);
                                setMobileActiveCategory('');
                                setMobileServicesOpen(false);
                              }}
                            >
                              {subcategory}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/blogCatg" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/contact" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
