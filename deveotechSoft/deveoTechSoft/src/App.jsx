import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/HomePage/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactPage from './components/contact/ContactPage'; // Uncomment if exists
import Service from './components/Service/ServicePage'
import IndustryPage from './components/HomePage/IndustryPage';
import Blog from './components/AboutUs/Blog/Blog';
import AboutCatg from './components/AboutUs/AboutCatg';const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* Optional route alias */}
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quote" element={<Home />} />
        <Route path="/industry" element={<IndustryPage />} />

        {/* ✅ Dynamic Route */}
       <Route path="/about-category/:subcategory" element={<AboutCatg />} />
        {/* <Route path="/industry/:industryType" element={<IndustryPage />} /> */}

      </Routes>
      
      <Footer/>
    </>
  );
};

export default App;


