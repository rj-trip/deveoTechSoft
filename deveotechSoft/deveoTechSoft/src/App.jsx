import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/HomePage/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactPage from './components/contact/ContactPage'; // Uncomment if exists
import Service from './components/Service/ServicePage'
import IndustryPage from './components/HomePage/IndustryPage';
import Blog from './components/Blog/Blog';
import WhatsApp from './components/Blog/Whatsapp';
import BlogCatg from './components/Blog/BlogCatg';
import AboutCatg from './components/AboutUs/AboutCatg';
import Mobile from './components/Service/Mobile';

import CMS from './components/Service/CMS';
import Ecommerce from './components/Service/Ecommerce';
import UiUx from './components/Service/UiUx';
import Digital from './components/Service/Digital';

import PrivacyPolicy from '../src/components/Footer/PrivacyPolicy'
import Disclamer from '../src/components/Footer/Disclamer'
import Cookies from '../src/components/Footer/Cookies'
import Return from '../src/components/Footer/Return'
import Blog2 from '../src/components/Blog/Blog2'
const App = () => {
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
        <Route path="/industry" element={<IndustryPage />} />
        <Route path="/blogCatg" element={<BlogCatg />} />        
        <Route path='/cms' element={<CMS/>}/>
        <Route path='/mobile' element={<Mobile/>}/>
        <Route path='/ecommerce' element={<Ecommerce/>}/>
        <Route path='/uiux' element={<UiUx/>}/>
        <Route path='/digital' element={<Digital/>}/>


        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/disclaimer' element={<Disclamer/>}/>
        <Route path='/refund-policy' element={<Return/>}/>
        <Route path='/cookies-policy' element={<Cookies/>}/>

        <Route path='/ecommerce' element={<Ecommerce/>}/>
        <Route path='/uiux' element={<UiUx/>}/>
        <Route path='/digital' element={<Digital/>}/>
        <Route path='/blog2' element={<Blog2/>}/>
        {/* ✅ Dynamic Route */}
        <Route path="/whatsapp" element={<WhatsApp />} />

       <Route path="/about-category/:subcategory" element={<AboutCatg />} />
        {/* <Route path="/industry/:industryType" element={<IndustryPage />} /> */}

      </Routes>
      
      <Footer/>
    </>
  );
};

export default App;


