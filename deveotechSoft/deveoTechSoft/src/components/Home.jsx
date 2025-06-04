import React from 'react';
import HeroSection from './HeroSection';
import SectionTwo from './SectionTwo';
import ServicesSection from './ServicesSection';
import ServicesSection1 from './ServicesSection1';
import ServicesSection2 from './ServiceSection2';
import ServiceSection3 from './ServiceSection3';
import SoftwareSection from './SoftwareSection';
import ManagementCarousel from './ManagementCarousel';
import TestimonialSection from './TestimonialSection';
import BlogSection from './BlogSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionTwo />
      <ServicesSection />
      <ServicesSection1 />
      <ServicesSection2 />
      <ServiceSection3 />
      <SoftwareSection />
      <ManagementCarousel />
      <TestimonialSection />
      <BlogSection />
    </>
  );
};

export default Home;
