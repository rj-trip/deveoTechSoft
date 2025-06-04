import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SectionTwo from './components/SectionTwo';
import ServicesSection from './components/ServicesSection';
import ServicesSection1 from './components/ServicesSection1';
import ServicesSection2 from './components/ServiceSection2';
import ServiceSection3 from './components/ServiceSection3';
import SoftwareSection from './components/SoftwareSection';
import ManagementCarousel from './components/ManagementCarousel';
import TestimonialSection from './components/TestimonialSection'
import BlogSection from './components/BlogSection';
import Footer  from './components/Footer';
import AboutUs from './components/AboutUs'
// import ContactPage from './components/contact/ContactPAge';
const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <ServicesSection/>
      <ServicesSection1/>
      <ServicesSection2/>
      <ServiceSection3/>
      <SoftwareSection/>
      <ManagementCarousel/>
      <TestimonialSection/>
      <BlogSection/>
      <Footer/>
      {/* <AboutUs/> */}
      {/* <ContactPage/> */}
    </div>
  );
};

export default App;
