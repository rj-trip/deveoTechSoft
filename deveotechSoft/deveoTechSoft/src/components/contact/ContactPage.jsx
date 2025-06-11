import React, { useState } from 'react';
import ermImg from '../../assets/bg.jpg';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
<div className="relative w-full">
  <div
    className="relative h-74 flex items-center justify-center bg-cover bg-center w-full"
    style={{ backgroundImage: `url(${ermImg})` }}
  >
    <h1 className="text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded shadow-lg mt-16">
      Contact
    </h1>
  </div>
</div>



      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-orange-500 cursor-pointer">HOME</span>
            <span className="text-gray-400">/</span>
            <span className="text-orange-500 font-semibold">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
   <div className="flex flex-col md:flex-row gap-8 px-6 py-8 max-w-6xl mx-auto">
  {/* Left Section - Contact Info */}
  <div className="bg-gray-100 p-6 rounded-lg shadow-md basis-full md:basis-[40%]">
    <h2 className="font-semibold text-lg mb-4">Company Address</h2>
    <p>B4/351 Sector 8 Rohini, Delhi, India 110085</p>
    <p className="mt-2">Plot No. 654, Zero Road, Near Pond, Ghitorni, Delhi - 110030</p>
    <p className="mt-2">Noida Coming Soon..</p>

    <h2 className="font-semibold text-lg mt-6">E-mail</h2>
    <p>support@deveotechsoft.com</p>
    <p>info@deveotechsoft.com</p>

    <h2 className="font-semibold text-lg mt-6">Phone Numbers</h2>
    <p>+91 8840814369</p>
    <p>+91 7011640018</p>
    <p>01143003926</p>
  </div>

  {/* Right Section - Contact Form */}
  <div className="basis-full md:basis-[60%]">
        <div className="flex-1">
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-[1.01] duration-300">
            <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter Your Name*"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="email"
                placeholder="Enter Your Email*"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="tel"
                placeholder="Enter Your Phone Number*"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              <textarea
                placeholder="Your Message..."
                className="w-full border border-gray-300 p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
  </div>
</div>

    </div>
  );
}

